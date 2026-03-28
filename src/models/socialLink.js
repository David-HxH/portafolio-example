module.exports = (sequelize, DataTypes) => {
  return sequelize.define('SocialLink', {
    name: { type: DataTypes.STRING, allowNull: false },
    icon: { type: DataTypes.STRING, allowNull: false },
    url: { type: DataTypes.STRING, allowNull: false }
  });
};