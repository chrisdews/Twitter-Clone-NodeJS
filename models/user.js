'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: DataTypes.STRING,
    allowNull: false
  }, {});
  User.associate = (models) => {
    // associations can be defined here
    User.hasMany(models.Tweet, {
      foreignKey: 'userId'
    })
  };
  return User;
};