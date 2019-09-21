

module.exports = function (sequelize, DataTypes) {

  var UserEvent = sequelize.define("UserEvent", {
    userId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    eventId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },  
    attending: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    creator: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    }
  });
    return UserEvent
}