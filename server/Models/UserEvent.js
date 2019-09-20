

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
    UserEvent.belongsToMany(models.Event, {
      through: 'UserEvents',
        foreignKey: 'userId'
    });
    UserEvent.belongsToMany(models.User, {
      through: 'UserEvents',
        foreignkey: 'eventId'
    });
   };

    return UserEvent
}