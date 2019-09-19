

module.exports = function (sequelize, DataTypes) {
  var User = sequelize.define("User", {
    name:
    {
      type: DataTypes.STRING,
      allowNull: false
    },
    highscore: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    location: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    lattitude: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    longitude: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
  });
  return User;
};