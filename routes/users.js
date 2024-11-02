const express = require('express');
const usersController = require('../controllers/users');

const router = express.Router();

// Route to get all users
router.get('/get-users', usersController.getAddUser);

// Route to add a new user
router.post('/add-users', usersController.postAddUser);

router.post('/delete-user/:id', usersController.postDeleteUser);


module.exports = router;
