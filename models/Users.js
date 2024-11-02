const Sequelize = require('sequelize');
const sequelize = require('../utils/database');
const User = sequelize.define('user',

  {
    id:{

      type:Sequelize.INTEGER,
      autoIncrement:true,
      allowNull:false,
      primaryKey:true
    },
    
   phone:{
      type:Sequelize.STRING,
      unique:true
    },
    username:{
      type:Sequelize.STRING,
      allowNull:false
    },
    email:{
      type:Sequelize.STRING,
      unique:true
  }

  });
module.exports = User;