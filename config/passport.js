const GoogleStrategy = require("passport-google-oauth20").Strategy;
const mongoose = require("mongoose");
const User = require("../resources/user/user.model.js");

module.exports = function (passport) {
  passport.use(
    new GoogleStrategy(
      {
        clientID:
          "777992805153-ckshhg7so7ce6rc9k9f6jsejf169h68a.apps.googleusercontent.com",
        clientSecret: "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",
        callbackURL: "/auth/google/callback",
      },
      async (accessToken, refreshToken, profile, done) => {
        const newUser = {
          googleId: profile.id,
          displayName: profile.displayName,
          firstName: profile.name.givenName,
          lastName: profile.name.familyName,
          image: profile.photos[0].value,
        };

        try {
          let user = await User.findOne({ googleId: profile.id });
          if (user) {
            done(null, user, user);
          } else {
            user = await User.create(newUser);
            done(null, user, user);
          }
        } catch (err) {
          console.error(err);
        }
      }
    )
  );

  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => done(err, user));
  });
};
