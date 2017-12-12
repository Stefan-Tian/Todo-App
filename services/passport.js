const passport = require("passport");
const mongoose = require("mongoose");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const FacebookStrategy = require("passport-facebook").Strategy;
const {
  googleClientID,
  googleClientSecret,
  facebookClientID,
  facebookClientSecret
} = require("../config/keys");

const User = mongoose.model("User");

passport.serializeUser((user, done) => {
  done(null, user.id);
});
passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: googleClientID,
      clientSecret: googleClientSecret,
      callbackURL: "/auth/google/callback"
    },
    async (accessToken, refreshToken, profile, done) => {
      const existingUser = await User.findOne({ userID: profile.id });
      if (existingUser) {
        return done(null, existingUser);
      }

      const user = await new User({ userID: profile.id }).save();
      done(null, user);
    }
  )
);
passport.use(
  new FacebookStrategy(
    {
      clientID: facebookClientID,
      clientSecret: facebookClientSecret,
      callbackURL: "/auth/facebook/callback"
    },
    async (accessToken, refreshToken, profile, done) => {
      const existingUser = await User.findOne({ userID: profile.id });
      if (existingUser) {
        return done(null, existingUser);
      }

      const user = await new User({ userID: profile.id }).save();
      done(null, user);
    }
  )
);
