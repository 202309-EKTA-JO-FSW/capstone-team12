const express = require('express');
const passport = require('passport');
const router = express.Router();

// Google OAuth callback route
router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

router.get('/google/callback', 
  passport.authenticate('google', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home or send response
    res.redirect('/');
  });

  module.exports = router;