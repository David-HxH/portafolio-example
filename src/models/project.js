module.exports = (sequelize, DataTypes) => {
  return sequelize.define('Project', {
    title: { type: DataTypes.STRING, allowNull: false },
    imageUrl: { type: DataTypes.STRING },
    problem: { type: DataTypes.TEXT },
    solution: { type: DataTypes.TEXT },
    tags: { type: DataTypes.ARRAY(DataTypes.STRING), defaultValue: [] },
    liveDemoUrl: { type: DataTypes.STRING },
    repoUrl: { type: DataTypes.STRING }
  });
};