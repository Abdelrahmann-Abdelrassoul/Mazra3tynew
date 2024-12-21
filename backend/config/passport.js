import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import { Strategy as FacebookStrategy } from 'passport-facebook';
import userModel from '../models/userModel.js';

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  const user = await userModel.findById(id);
  done(null, user);
});

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: '/api/auth/google/redirect',
    },
    async (accessToken, refreshToken, profile, done) => {
      const existingUser = await userModel.findOne({ googleId: profile.id });
      if (existingUser) {
        return done(null, existingUser);
      }
      const newUser = await userModel.create({
        name: profile.displayName,
        email: profile.emails[0].value,
        googleId: profile.id,
      });
      return done(null, newUser);
    }
  )
);

passport.use(
  new FacebookStrategy(
    {
      clientID: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
      callbackURL: '/api/auth/facebook/redirect',
      profileFields: ['id', 'displayName', 'emails'],
    },
    async (accessToken, refreshToken, profile, done) => {
      const existingUser = await userModel.findOne({ facebookId: profile.id });
      if (existingUser) {
        return done(null, existingUser);
      }
      const newUser = await userModel.create({
        name: profile.displayName,
        email: profile.emails[0]?.value,
        facebookId: profile.id,
      });
      return done(null, newUser);
    }
  )
);

export default passport;
