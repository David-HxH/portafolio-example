const express = require('express');
const router = express.Router();

const portfolioData = {
    pageTitle: "Digital Architect | Web Developer Portfolio",

    siteConfig: {
        brandName: "David Mondaca", // Tu nombre o marca personal
        cvUrl: "/files/CV-David_Mondaca.pdf", // URL de tu CV - reemplaza con el link real
        navLinks: [
            { label: "About", url: "#about" },
            { label: "Projects", url: "#projects" },
            { label: "Stack", url: "#stack" },
            // { label: "Experience", url: "#experience" },
            { label: "Contact", url: "#contact" }
        ]
    },

    // Datos del Hero Section
    heroData: {
        title: 'Transformo ideas complejas en <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">arquitecturas escalables.</span>',
        subtitle: 'Especialista en <span class="text-primary font-semibold">Fullstack</span>. Enfocado en rendimiento, accesibilidad y código limpio que impulsa objetivos de negocio.',
        ctaPrimaryText: "Ver Proyectos Destacados",
        ctaSecondaryText: "Descargar CV (PDF)",
        socials: [
            { icon: "fab fa-github", url: "https://github.com/David-HxH", name: "GitHub" },
            { icon: "fab fa-linkedin-in", url: "https://www.linkedin.com/in/davidmondacasaavedra/", name: "LinkedIn" },
            { icon: "fab fa-instagram", url: "https://www.instagram.com/david_ems.88/", name: "Instagram" }
        ]
    },

    // Datos de Sobre Mí
    aboutData: {
        title: "Arquitectura con Alma",
        description: "Mi pasión no es solo escribir código, sino diseñar experiencias que trasciendan la pantalla. Creo en la tecnología como un habilitador de negocios y en la simplicidad como la máxima sofisticación.<br><br>Más allá de las líneas de código, me enfoco en la comunicación asertiva, la empatía con el usuario final y la resolución creativa de problemas complejos. Si buscas un socio técnico que entienda tus objetivos comerciales tanto como el stack tecnológico, hablemos.",
        stats: {
            yearsExp: "2+",
            projectsCount: "20+"
        },
        imageUrl: "/images/profile.webp",
    },

    // Array de Proyectos (el orden define la posición, el HBS alternará el layout)
    projectsData: [
        {
            title: "Mind Flow",
            description: "Aplicación web full stack de productividad enfocada en la gestión visual de ideas y tareas mediante un tablero Kanban con drag & drop, autenticación segura y experiencia moderna.",
            imageUrl: "/images/portada-mindflow.png",
            problem: "Organizar ideas, tareas y pequeños proyectos personales suele volverse desordenado cuando no existe una forma clara de capturarlos, priorizarlos y visualizar su avance.",
            solution: "Mind Flow ofrece un entorno visual e intuitivo donde cada usuario puede registrar ideas, moverlas entre etapas del flujo de trabajo y mantener un control claro sobre su progreso diario.",
            tags: ["JavaScript", "Node.js", "Express", "PostgreSQL", "Tailwind CSS", "JWT"],
            liveDemoUrl: "https://capturador-de-ideas.vercel.app/",
            repoUrl: "https://github.com/David-HxH/capturador-de-ideas"
        },
        {
            title: "Gourmet GO",
            description: "Buscador de recetas que consume una API externa y permite filtrar resultados dinámicamente, ideal para encontrar inspiración culinaria de forma rápida y personalizada.",
            imageUrl: "/images/portada-gourmetgo.png", // o png
            problem: "Dificultad para encontrar recetas de forma rápida y personalizada.",
            solution: "Facilita la búsqueda y visualización de recetas internacionales y locales entregando una experiencia de usuario intuitiva.",
            tags: ["React", "API REST", "CSS"],
            liveDemoUrl: "https://david-hxh.github.io/GourmetGO/",
            repoUrl: "https://github.com/David-HxH/GourmetGO"
        }
    ],

    // Array de Experiencia Laboral
    experienceData: [
        {
            role: "Senior Fullstack Developer",
            period: "2021 — Present",
            company: "TechNova Solutions",
            achievements: [
                "Lideré un equipo de 4 desarrolladores para migrar una arquitectura monolítica a microservicios, aumentando la escalabilidad en un 200%.",
                "Optimicé el bundle size del frontend en un 45%, mejorando los Core Web Vitals y el posicionamiento SEO."
            ]
        },
        {
            role: "Web Developer",
            period: "2018 — 2021",
            company: "Global Digital Studio",
            achievements: [
                "Desarrollé más de 15 aplicaciones web personalizadas para clientes internacionales en sectores E-commerce y Salud.",
                "Reduje los tiempos de carga en un 30% mediante la implementación de estrategias avanzadas de caching y Lazy Loading."
            ]
        }
    ],

    // Datos del Stack Tecnológico (listos para mapear si hacemos el partial de Stack)
    stackData: {
        frontend: [
            { name: "HTML / CSS / JavaScript", icon: "layers" },
            { name: "Tailwind CSS", icon: "palette" }
        ],
        backend: [
            { name: "Node.js / Express", icon: "terminal" },
            { name: "PostgreSQL / Sequelize", icon: "database" },
            { name: "JWT Authentication", icon: "lock" },
            { name: "REST API", icon: "api" }
        ],
        devops: "Git, CI/CD, Vercel",
        design: "Figma, Motion, GIMP"
    },

    // Datos de Contacto y Footer
    contactData: {
        title: 'Let\'s build something <span class="text-primary italic">together.</span>',
        subtitle: "¿Tienes un proyecto en mente? Estoy disponible para colaboraciones y consultoría técnica.",
        email: "hello@digitalarchitect.dev"
    }
};

router.get('/', (req, res) => {
    res.render('index', { title: 'Home', ...portfolioData });
});

router.post('/contact', (req, res) => {
    const { name, email, subject, message } = req.body;

    // Aquí puedes agregar lógica para enviar el email o guardar en base de datos
    // Por ahora solo mostraremos un mensaje de éxito
    console.log('Nuevo mensaje de contacto:', { name, email, subject, message });

    // Redirigir de vuelta con un mensaje de éxito
    res.render('index', {
        title: 'Home',
        ...portfolioData,
        successMessage: '¡Gracias por tu mensaje! Me pondré en contacto contigo pronto.'
    });
});

module.exports = { viewsRouter: router };