
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

// Google OAuth configuration
passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: "http://localhost:3001/auth/google/callback"
},
  async function (accessToken, refreshToken, profile, cb) {
    try {
      let user = await User.findOne({ googleId: profile.id });

      if (!user) {
        // If user is not found, create a new user
        user = await User.create({ googleId: profile.id });
      }

      return cb(null, user);
    } catch (err) {
      return cb(err, null);
    }
  }
));

const generateToken = (userId) => {
  return jwt.sign({ id: userId }, process.env.JWT_SECRET, { expiresIn: '1h' });
};

const signup = async (req, res, next) => {
  const { name, email, password, isAdmin, profileImage, location, nationality, dateofBirth } = req.body;

  if (!name || !email || !password) {
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
      profileImg: req.user.profileImage,
      Email: req.user.email,
      Name: req.user.name,
      Location: req.user.location,
      Nationality: req.user.nationality,
      DateOfBirth: req.user.dateofBirth
    };
    res.status(200).json(user);
  } catch (error) {
    res.status(500);
    return next(new Error('Server error'));
  }
};

const signout = async (req, res, next) => {
  try {
    // Clear the JWT token cookie by setting its expiration to a past date
    res.cookie('token', '', { expires: new Date(0), httpOnly: true });

    // clear any other user-related data from the request object
    req.user = null;

    res.status(200).json({ message: 'User signed out successfully' });
  } catch (error) {
    res.status(500);
    return next(new Error('Server error'));
  }
};


const editProfile = async (req, res, next) => {
  try {
    const { name, email, password, location, nationality, dateOfBirth } = req.body;
    const userId = req.user._id;

    const updates = {};
    if (name) updates.name = name;
    if (email) updates.email = email;
    if (password) {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
      updates.password = hashedPassword;
    }
    if (location) updates.location = location;
    if (nationality) updates.nationality = nationality;
    if (dateOfBirth) updates.dateOfBirth = dateOfBirth;

    const updatedUser = await User.findByIdAndUpdate(userId, updates, { new: true });

    if (!updatedUser) {
      res.status(404);
      return next(new Error('User not found'));
    }

    // Return updated user profile
    const userProfile = {
      profileImg: updatedUser.profileImage,
      Email: updatedUser.email,
      Name: updatedUser.name,
      Location: updatedUser.location,
      Nationality: updatedUser.nationality,
      DateOfBirth: updatedUser.dateofBirth
    };

    res.status(200).json(userProfile);
  } catch (error) {
    res.status(500);
    return next(new Error('Server error'));
  }
};


const deleteAccount = async (req, res, next) => {
  try {
    const userId = req.user._id;
    // Delete the user account from the database
    await User.findByIdAndDelete(userId);

    res.status(200).json({ message: "Account deleted successfully" });
  } catch (error) {
    res.status(500);
    return next(new Error('Server error'));
  }
};

module.exports = { signup, login, profile, signout, editProfile, deleteAccount };
