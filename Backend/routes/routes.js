const express = require('express');
const passport = require('passport');
const router = express.Router();

const { auth, validateUser } = require('../middlewares.js')

const userController = require('../controllers/users.js');
const apiController = require('../controllers/api.js');

// Register Route
router.post('/SignUp', validateUser, userController.postSignUp);

// Login Route
router.post('/Login', passport.authenticate('local'), userController.login);

// Logout Route
router.get('/Logout', userController.logOut);

// Protected Route 
router.get('/protected', auth, userController.protected);

// edit user info
router.put('/edit/:id', auth, userController.edit);

// check password
router.post('/check-password', userController.checkPassword);

// API'S ->

//youtube api
router.get('/youtube-trailer', auth, apiController.youtubeAPI);

//movies api
router.get('/getMovies', auth, apiController.getMovies);

//Books api
router.get('/getBooks', auth, apiController.getBooks);

//Characters api
router.get('/getChars', auth, apiController.getCharacters);

module.exports = router;
