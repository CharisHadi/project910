

module.exports = function (sequelize, DataTypes) {
  var User = sequelize.define("User", {
    name:
    {
      type: DataTypes.STRING,
      allowNull: false
    },
    nickname:
    {
      type: DataTypes.STRING,
      allowNull: true
    },
    highscore: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    location: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    latitude: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    longitude: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    fbid: {
        type: DataTypes.STRING,
        allowNull: false,
    },
  });
  return User;
};