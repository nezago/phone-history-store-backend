
export default (sequelize, DataTypes) => {
  const call = sequelize.define('call', {
    storeOwner: DataTypes.INTEGER,
    deviceSource: DataTypes.INTEGER,
    callerName: DataTypes.STRING,
    callDuration: DataTypes.INTEGER,
    callType: DataTypes.STRING,
    callingTime: DataTypes.DATE,
    callerPhNumber: DataTypes.STRING,
    callReceiverPhNumber: DataTypes.STRING,
  }, {
    paranoid: true,
    timeStamp: true,
  });
  call.associate = (models) => {
    call.belongsTo(models.user, {
      foreignKey: 'storeOwner',
      onUpdate: 'CASCADE',
    });
    call.belongsTo(models.device, {
      foreignKey: 'deviceSource',
      onUpdate: 'CASCADE',
    });
  };
  return call;
};
