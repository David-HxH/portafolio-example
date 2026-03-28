module.exports = (sequelize, DataTypes) => {
  return sequelize.define('About', {
    title: { type: DataTypes.STRING },
    description: { type: DataTypes.TEXT },
    yearsExp: { type: DataTypes.STRING },
    projectsCount: { type: DataTypes.STRING },
    imageUrl: { type: DataTypes.STRING }
  });
};