"use strict";

module.exports = function (sequelize, DataTypes) {
  var users = sequelize.define('users', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true, //false, 
      primaryKey: true
    },

    first_name: {
      type: DataTypes.STRING(255),
      allowNull: true, //false, 
    },
    last_name: {
      type: DataTypes.STRING(255),
      allowNull: true, //false, 
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: true, //false, 
      unique: "users_email_unique"
    }

  });


return users;
};