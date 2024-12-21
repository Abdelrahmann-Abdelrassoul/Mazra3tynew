import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import axios from 'axios';
import { toast } from 'react-toastify';
import { assets } from '../assets/assets';

const Login = () => {
  const [currentState, setCurrentState] = useState('Login');
  const { token, setToken, navigate, backendUrl } = useContext(ShopContext);

  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      if (currentState === 'Sign Up') {
        const response = await axios.post(backendUrl + '/api/user/register', { name, email, password });
        if (response.data.success) {
          setToken(response.data.token);
          localStorage.setItem('token', response.data.token);
        }
        else {
          toast.error(response.data.message);
        }
      }
      else if (currentState === 'Login') {
        const response = await axios.post(backendUrl + '/api/user/login', { email, password });
        if (response.data.success) {
          setToken(response.data.token);
          localStorage.setItem('token', response.data.token);
        }
        else {
          toast.error(response.data.message);
        }
      }
      else if (currentState === 'Forgot Password') {
        const response = await axios.post(backendUrl + '/api/user/forgot-password', { email });
        if (response.data.success) {
          toast.success('Password reset email sent!');
        }
        else {
          toast.error(response.data.message);
        }
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const handleGoogleSignUp = () => {
    toast.info('Google Sign Up is not implemented yet.');
  };

  const handleFacebookSignUp = () => {
    toast.info('Facebook Sign Up is not implemented yet.');
  };

  useEffect(() => {
    if (token) {
      navigate('/');
    }
  }, [token]);

  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800 pb-16'>
      <div className='inline-flex items-center gap-2 mb-2 mt-10 '>
        <p className='prata-regular text-3xl'>{currentState}</p>
        <hr className='border-none h-[1.5px] w-8 bg-gray-800' />
      </div>
      {currentState === 'Login' ? '' : currentState === 'Sign Up' && (
        <input onChange={(e) => setName(e.target.value)} value={name} type="text" className='w-full px-3 py-2 border border-gray-800' placeholder='Name' required />
      )}
      <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" className='w-full px-3 py-2 border border-gray-800' placeholder='Email' required />
      {currentState !== 'Forgot Password' && (
        <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" className='w-full px-3 py-2 border border-gray-800' placeholder='Password' required />
      )}
      <div className='w-full flex justify-between text-sm mt-[-8px]'>
        {currentState === 'Login' && (
          <p onClick={() => setCurrentState('Forgot Password')} className=' cursor-pointer'>Forgot your password?</p>
        )}
        {currentState === 'Sign Up' ? (
          <p onClick={() => setCurrentState('Login')} className=' cursor-pointer'>Login Here</p>
        ) : currentState !== 'Forgot Password' && (
          <p onClick={() => setCurrentState('Sign Up')} className=' cursor-pointer'>Create account</p>
        )}
        {currentState === 'Forgot Password' && (
          <p onClick={() => setCurrentState('Login')} className=' cursor-pointer'>Back to Login</p>
        )}
      </div>
      <button className='bg-green-800 text-white font-light px-8 py-2 mt-4'>
        {currentState === 'Login' ? 'Login' : currentState === 'Sign Up' ? 'Sign Up' : 'Send reset password email'}
      </button>
      {currentState !== 'Forgot Password' && (
        <>
          <button
            type="button"
            onClick={handleGoogleSignUp}
            className="flex items-center text-black font-light px-8 py-2 mt-4 gap-2 border-2 border-black rounded-md shadow-lg"
          >
            <img className="h-5 w-5" src={assets.google_icon} alt="Google Icon" />
             {currentState === 'Login' ? 'Login' : 'Sign Up'} with Google
          </button>
          <button type="button" onClick={handleFacebookSignUp} className="flex items-center text-black font-light px-8 py-2 mt-2 gap-2 border-2 border-black rounded-md shadow-lg">
            <img src={assets.facebook_icon} alt="Facebook Icon" className="h-5 w-5" />
             {currentState === 'Login' ? 'Login' : 'Sign Up'} with Facebook
          </button>
        </>
      )}
      
    </form>
  );
};

export default Login;
