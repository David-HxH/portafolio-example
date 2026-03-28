module.exports = (sequelize, DataTypes) => {
  return sequelize.define('Portfolio', {
    pageTitle: { type: DataTypes.STRING, allowNull: false },
    brandName: { type: DataTypes.STRING, allowNull: false },
    cvUrl: { type: DataTypes.STRING },
    contactTitle: { type: DataTypes.STRING },
    contactSubtitle: { type: DataTypes.TEXT },
    contactEmail: { type: DataTypes.STRING }
  });
};