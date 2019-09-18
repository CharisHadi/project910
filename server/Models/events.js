module.exports = function (sequelize, DataTypes) {
  var Event = sequelize.define("Event", {
    event:
    {
      type: DataTypes.STRING,
      allowNull: false,
    },
    time:
    {
      type: DataTypes.DATE,
      allowNull: true
    },
    location: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    latitude: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    longitude: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    }
  });


  return Event;
};