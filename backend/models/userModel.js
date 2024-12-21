import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: false }, // Optional, for users without local registration
    email: { type: String, required: false, unique: true }, // Optional, as OAuth might not provide email
    password: { type: String }, // Only required for locally registered users
    cartData: { type: Object, default: {} }, // Keep cart data from the main project
    googleId: { type: String }, // For Google OAuth
    facebookId: { type: String }, // For Facebook OAuth
  },
  { minimize: false }
);

// Handle scenarios where some users log in without OAuth
const userModel = mongoose.models.user || mongoose.model("user", userSchema);

export default userModel;
