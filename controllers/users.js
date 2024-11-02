const User = require('../models/Users');


// In controllers/user.js
exports.getAddUser = (req, res, next) => {
    User.findAll()
        .then(users => {
            res.status(200).json(users); // Return the array directly
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: 'An error occurred' });
        });
};



exports.postAddUser = (req, res, next) => {
  const username = req.body.username;
  const email = req.body.email;
  const phone = req.body.phone;

  if (!phone) {
      return res.status(400).json({ error: 'Phone number is mandatory' });
  }
  if (!email) {
      return res.status(400).json({ error: 'Email is mandatory' });
  }

  User.create({
      username: username,
      email: email,
      phone: phone
  })
  .then(() => {
      return User.findAll(); // Fetching all users after creating a new one
  })
  .then(users => {
      res.status(201).json(users); // Return the updated user list
  })
  .catch(err => {
      console.log(err);
      res.status(500).json({ error: 'An error occurred' });
  });
};
exports.postDeleteUser = (req, res, next) => {
  const userId = req.params.id; 

  User.findByPk(userId) 
      .then(user => {
          if (!user) {
              return res.status(404).json({ error: 'User not found' });
          }
          return user.destroy(); 
      })
      .then(() => {
          console.log("Destroyed user");
          res.status(200).json({ message: 'User deleted successfully' }); 
      })
      .catch(err => {
          console.log(err);
          res.status(500).json({ error: 'An error occurred while deleting the user.' });
      });
};
