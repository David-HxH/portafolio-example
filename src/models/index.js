const { sequelize } = require('../../config/db');
const { DataTypes } = require('sequelize');

// Importar modelos
const Portfolio = require('./portfolio')(sequelize, DataTypes);
const Hero = require('./hero')(sequelize, DataTypes);
const SocialLink = require('./socialLink')(sequelize, DataTypes);
const Project = require('./project')(sequelize, DataTypes);
const Experience = require('./experience')(sequelize, DataTypes);
const Stack = require('./stack')(sequelize, DataTypes);
const About = require('./about')(sequelize, DataTypes);

// Relaciones
Portfolio.hasOne(Hero, { foreignKey: 'portfolioId', as: 'heroData' });
Hero.belongsTo(Portfolio, { foreignKey: 'portfolioId' });

Portfolio.hasOne(Stack, { foreignKey: 'portfolioId', as: 'stackData' });
Stack.belongsTo(Portfolio, { foreignKey: 'portfolioId' });

Portfolio.hasOne(About, { foreignKey: 'portfolioId', as: 'aboutData' });
About.belongsTo(Portfolio, { foreignKey: 'portfolioId' });

Portfolio.hasMany(SocialLink, { foreignKey: 'portfolioId', as: 'socials' });
SocialLink.belongsTo(Portfolio, { foreignKey: 'portfolioId' });

Portfolio.hasMany(Project, { foreignKey: 'portfolioId', as: 'projectsData' });
Project.belongsTo(Portfolio, { foreignKey: 'portfolioId' });

Portfolio.hasMany(Experience, { foreignKey: 'portfolioId', as: 'experienceData' });
Experience.belongsTo(Portfolio, { foreignKey: 'portfolioId' });

module.exports = {
  sequelize,
  Portfolio,
  Hero,
  SocialLink,
  Project,
  Experience,
  Stack,
  About
};