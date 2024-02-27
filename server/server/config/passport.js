// for using google in sign in and signup

const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const User = require('../models/userModel');

passport.use(new GoogleStrategy({
    clientID: "your-client-id",
    clientSecret: "your-client-secret",
    callbackURL: "http://localhost:3001/auth/google/callback"
}, async (accessToken, refreshToken, profile, done) => {
    try {
        // Find the user by Google ID
        let user = await User.findOne({ googleId: profile.id });

        // If user does not exist, create a new one
        if (!user) {
            user = new User({
                googleId: profile.id,
                name: profile.displayName,
                // Add any additional fields from the profile if needed
            });
            await user.save();
        }

        return done(null, user);
    } catch (error) {
        return done(error);
    }
}));

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
        done(err, user);
    });
});

module.exports = passport;
