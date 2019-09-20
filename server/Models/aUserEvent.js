

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

    
   UserEvent.associate = function(models) {
    UserEvent.belongsTo(models.Event, {
        foreignKey: 'userId'
    });
    UserEvent.belongsTo(models.User, {
        foreignkey: 'eventId'
    });
   };

    return UserEvent
}