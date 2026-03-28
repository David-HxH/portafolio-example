module.exports = (sequelize, DataTypes) => {
  return sequelize.define('Experience', {
    role: { type: DataTypes.STRING, allowNull: false },
    company: { type: DataTypes.STRING, allowNull: false },
    period: { type: DataTypes.STRING },
    achievements: { type: DataTypes.ARRAY(DataTypes.TEXT), defaultValue: [] }
  });
};