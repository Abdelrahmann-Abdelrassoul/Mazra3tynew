import express from 'express';
import passport from 'passport';
import { googleAuth, facebookAuth } from '../controllers/userController.js';

const authRouter = express.Router();

// Google OAuth routes
authRouter.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));
authRouter.get('/google/redirect', passport.authenticate('google', { session: false }), googleAuth);

// Facebook OAuth routes
authRouter.get('/facebook', passport.authenticate('facebook', { scope: ['email'] }));
authRouter.get('/facebook/redirect', passport.authenticate('facebook', { session: false }), facebookAuth);

export default authRouter;
