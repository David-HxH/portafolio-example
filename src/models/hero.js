module.exports = (sequelize, DataTypes) => {
  return sequelize.define('Hero', {
    title: { type: DataTypes.TEXT, allowNull: false },
    subtitle: { type: DataTypes.TEXT },
    ctaPrimaryText: { type: DataTypes.STRING },
    ctaSecondaryText: { type: DataTypes.STRING }
  });
};