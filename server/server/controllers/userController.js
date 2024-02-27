

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
// const FacebookStrategy = require('passport-facebook').Strategy;

// Google OAuth configuration
passport.use(new GoogleStrategy({
  clientID: "285966908416-bgfcti7ss2mr0io2ea7bdpkj8aas39tc.apps.googleusercontent.com",
  clientSecret: "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",
  callbackURL: "http://localhost:3001/auth/google/callback"
},
function(accessToken, refreshToken, profile, cb) {
  User.findOrCreate({ googleId: profile.id }, function (err, user) {
    return cb(err, user);
  });
}
));

const signup = async (req, res, next) => {
  const { name, email, password ,isAdmin , profileImage, location, nationality, dateofBirth} = req.body;

  if (!name || !email || !password ) { 
    res.status(400);
    return next(new Error('Please include all fields'));
  }

  try {
    const userExists = await User.findOne({ email });

    if (userExists) {
      res.status(400);
      return next(new Error('User already exists'));
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      isAdmin,
      profileImage,
      location,
      nationality,
      dateofBirth,
    });

    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    });
  } catch (error) {
    res.status(400);
    return next(new Error('Invalid user data'));
  }
};

const login = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (user && (await bcrypt.compare(password, user.password))) {
      res.status(200).json({
        _id: user._id,
        name: user.name,
        email: user.email,
        token: generateToken(user._id),
      });
    } else {
      res.status(401);
      return next(new Error('Invalid credentials'));
    }
  } catch (error) {
    res.status(500);
    return next(new Error('Server error'));
  }
};

const profile = async (req, res, next) => {
  try {
    const user = {
      profileImg:req.user.profileImage,
      Email: req.user.email,
      Name: req.user.name,
      Location:req.user.location,
      Nationality:req.user.nationality,
      DateOfBirth:req.user.dateofBirth
    };
    res.status(200).json(user);
  } catch (error) {
    res.status(500);
    return next(new Error('Server error'));
  }
};

const signout = async (req, res, next) => {
  try {
    // Clear any tokens stored on the client side (if using tokens)
    res.clearCookie('token');

    res.status(200).json({ message: 'User signed out successfully' });
  } catch (error) {
    res.status(500);
    return next(new Error('Server error'));
  }
};




const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  });
};

module.exports = {
  signup,
  login,
  profile,
  signout,
};
