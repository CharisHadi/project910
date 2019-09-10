

module.exports = function (sequelize, DataTypes) {
  var Event = sequelize.define("Event", {
    event:
    {
      type: DataTypes.STRING,
      allowNull: false
    },
    date: {
      type: DataTypes.DATETIME,
      allowNull: false
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lattitude: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    longitude: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: true,
    }
  });
  return Event;
};