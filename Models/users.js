

module.exports = function (sequelize, DataTypes) {
  var Event = sequelize.define("Event", {
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