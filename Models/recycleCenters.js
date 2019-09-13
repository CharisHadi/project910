

module.exports = function (sequelize, DataTypes) {
    var Recyclecenter = sequelize.define("Recyclecenter", {
      name:
      {
        type: DataTypes.STRING,
        allowNull: false
      },
      material: {
        type: DataTypes.STRING,
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
    return Recyclecenter;
  };