const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const User = require('../models/userModel'); // Assuming you have a User model

// Google OAuth configuration
passport.use(new GoogleStrategy({
    clientID: "285966908416-bgfcti7ss2mr0io2ea7bdpkj8aas39tc.apps.googleusercontent.com",
    clientSecret: "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",
  callbackURL: "http://localhost:3001/auth/google/callback"
},
function(accessToken, refreshToken, profile, cb) {
  // Check if user already exists in your database
  User.findOne({ googleId: profile.id }, function(err, user) {
    if (err) {
      return cb(err);
    }
    if (user) {
      return cb(null, user); // User already exists, return user
    } else {
      // User does not exist, create new user in database
      const newUser = new User({
        googleId: profile.id,
        name: profile.displayName,
        // Add any additional fields from the profile if needed
      });
      newUser.save(function(err) {
        if (err) {
          return cb(err);
        }
        return cb(null, newUser);
      });
    }
  });
}
));

// Serialization and deserialization (required for session support)
passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});

module.exports = passport;
