const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('postgres://admin:admin123@localhost:5432/portafolio');

// 1. Tabla Principal y Configuración
const Portfolio = sequelize.define('Portfolio', {
    pageTitle: { type: DataTypes.STRING, allowNull: false },
    brandName: { type: DataTypes.STRING, allowNull: false },
    cvUrl: { type: DataTypes.STRING },
    contactTitle: { type: DataTypes.STRING },
    contactSubtitle: { type: DataTypes.TEXT },
    contactEmail: { type: DataTypes.STRING }
});

// 2. Hero Section
const Hero = sequelize.define('Hero', {
    title: { type: DataTypes.TEXT, allowNull: false },
    subtitle: { type: DataTypes.TEXT },
    ctaPrimaryText: { type: DataTypes.STRING },
    ctaSecondaryText: { type: DataTypes.STRING }
});

// 3. Redes Sociales (1 a Muchos con el Portfolio)
const SocialLink = sequelize.define('SocialLink', {
    name: { type: DataTypes.STRING, allowNull: false },
    icon: { type: DataTypes.STRING, allowNull: false },
    url: { type: DataTypes.STRING, allowNull: false }
});

// 4. Proyectos (1 a Muchos con el Portfolio)
const Project = sequelize.define('Project', {
    title: { type: DataTypes.STRING, allowNull: false },
    imageUrl: { type: DataTypes.STRING },
    problem: { type: DataTypes.TEXT },
    solution: { type: DataTypes.TEXT },
    tags: { type: DataTypes.ARRAY(DataTypes.STRING), defaultValue: [] },
    liveDemoUrl: { type: DataTypes.STRING },
    repoUrl: { type: DataTypes.STRING }
});

// 5. Experiencia (1 a Muchos con el Portfolio)
const Experience = sequelize.define('Experience', {
    role: { type: DataTypes.STRING, allowNull: false },
    company: { type: DataTypes.STRING, allowNull: false },
    period: { type: DataTypes.STRING },
    achievements: { type: DataTypes.ARRAY(DataTypes.TEXT), defaultValue: [] }
});

// 6. Stack Tecnológico (1 a 1 con el Portfolio)
const Stack = sequelize.define('Stack', {
    frontend: { type: DataTypes.JSONB, defaultValue: [] },
    backend: { type: DataTypes.JSONB, defaultValue: [] },
    devops: { type: DataTypes.STRING },
    design: { type: DataTypes.STRING }
});

// 7. Sobre Mí (1 a 1 con el Portfolio)
const About = sequelize.define('About', {
    title: { type: DataTypes.STRING },
    description: { type: DataTypes.TEXT },
    yearsExp: { type: DataTypes.STRING },
    projectsCount: { type: DataTypes.STRING },
    imageUrl: { type: DataTypes.STRING }
});

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
    Portfolio,
    Hero,
    SocialLink,
    Project,
    Experience,
    Stack,
    About,
    sequelize
}