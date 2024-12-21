import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import nodemailer from 'nodemailer';
import userModel from "../models/userModel.js";

// Google OAuth callback handler
const googleAuth = async (req, res) => {
  try {
    const { id, displayName, emails } = req.user;

    let user = await userModel.findOne({ googleId: id });

    if (!user) {
      user = await userModel.create({
        name: displayName,
        email: emails[0].value,
        googleId: id,
      });
    }

    const token = createToken(user._id);
    res.json({ success: true, token });
  } catch (error) {
    console.error(error);
    res.json({ success: false, message: error.message });
  }
};

// Facebook OAuth callback handler
const facebookAuth = async (req, res) => {
  try {
    const { id, displayName } = req.user;

    let user = await userModel.findOne({ facebookId: id });

    if (!user) {
      user = await userModel.create({
        name: displayName,
        facebookId: id,
      });
    }

    const token = createToken(user._id);
    res.json({ success: true, token });
  } catch (error) {
    console.error(error);
    res.json({ success: false, message: error.message });
  }
};

const forgotPassword = async (req, res) => {
  const { email } = req.body;

  try {
    console.log("Received email:", email);

    const user = await userModel.findOne({ email });
    if (!user) {
      console.log("User not found for email:", email);
      return res.status(404).send({ status: "User not found" });
    }

    console.log("User found:", user);

    // Generate a token for resetting the password
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1d" });
    console.log("Generated token:", token);

    // Configure the email transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // Your email
        pass: process.env.EMAIL_PASS, // Your email app password
      },
    });

    console.log("Transporter created");

    // Email details
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Password Reset Request",
      text: `You requested a password reset. Click the link below to reset your password:\n\n
             http://localhost:3000/reset-password/${token}\n\n
             If you did not request this, please ignore this email.`,
    };

    // Send the email
    await transporter.sendMail(mailOptions);
    console.log("Email sent");

    return res.status(200).send({ status: "Success", message: "Password reset email sent" });
  } catch (error) {
    console.error("Error in forgotPassword:", error);
    res.status(500).send({ status: "Error", message: "An error occurred while processing your request" });
  }
};

export { loginUser, registerUser, adminLogin, googleAuth, facebookAuth,forgotPassword };
