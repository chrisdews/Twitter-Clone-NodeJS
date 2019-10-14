
'use strict';
module.exports = (sequelize, DataTypes) => {
  const Tweet = sequelize.define('Tweet', {
    title: DataTypes.STRING,
    allowNull: false,
  }, {});
  Tweet.associate = (models) => {
    // associations can be defined here
    Tweet.belongsTo(models.User, {
      foreignKey: 'userId',
      onDelete: 'CASCADE'
    })

  };
  return Tweet;
};