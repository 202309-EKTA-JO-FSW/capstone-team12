// const asyncHandler = require('express-async-handler')
// const bcrypt = require('bcryptjs')
// const jwt = require('jsonwebtoken')
// const User = require('../models/userModel')

// const registerUser = asyncHandler(async (req, res) => {
//   const { name, email, password } = req.body

//   if (!name || !email || !password) {
//     res.status(400)
//     throw new Error('Please include all fields')
//   }

//   const userExists = await User.findOne({ email })

//   if (userExists) {
//     res.status(400)
//     throw new Error('User already exists')
//   }

//   const salt = await bcrypt.genSalt(10)
//   const hashedPassword = await bcrypt.hash(password, salt)

//   const user = await User.create({
//     name,
//     email,
//     password: hashedPassword,
//   })

//   if (user) {
//     res.status(201).json({
//       _id: user._id,
//       name: user.name,
//       email: user.email,
//       token: generateToken(user._id),
//     })
//   } else {
//     res.status(400)
//     throw new error('Invalid user data')
//   }
// })

// const loginUser = asyncHandler(async (req, res) => {
//   const { email, password } = req.body

//   const user = await User.findOne({ email })

//   if (user && (await bcrypt.compare(password, user.password))) {
//     res.status(200).json({
//       _id: user._id,
//       name: user.name,
//       email: user.email,
//       token: generateToken(user._id),
//     })
//   } else {
//     res.status(401)
//     throw new Error('Invalid credentials')
//   }
// })

// const getMe = asyncHandler(async (req, res) => {
//   const user = {
//     id: req.user._id,
//     email: req.user.email,
//     name: req.user.name,
//   }
//   res.status(200).json(user)
// })

// const generateToken = (id) => {
//   return jwt.sign({ id }, process.env.JWT_SECRET, {
//     expiresIn: '30d',
//   })
// }

// module.exports = {
//   registerUser,
//   loginUser,
//   getMe,
// }

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

const signup = async (req, res, next) => {
  const { name, email, password } = req.body;

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

const getMe = async (req, res, next) => {
  try {
    const user = {
      id: req.user._id,
      email: req.user.email,
      name: req.user.name,
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
  getMe,
  signout,
};
