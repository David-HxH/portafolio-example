module.exports = (sequelize, DataTypes) => {
  return sequelize.define('Stack', {
    frontend: { type: DataTypes.JSONB, defaultValue: [] },
    backend: { type: DataTypes.JSONB, defaultValue: [] },
    devops: { type: DataTypes.STRING },
    design: { type: DataTypes.STRING }
  });
};