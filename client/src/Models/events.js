module.exports = function (sequelize, DataTypes) {
  var Event = sequelize.define("Event", {
    event:
    {
      type: DataTypes.STRING,
      allowNull: false
    },
  
    location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lattitude: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    longitude: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: true,
    }
  });
  return Event;
};