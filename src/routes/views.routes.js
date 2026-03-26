const express = require('express');
const router = express.Router();

const portfolioData = {
    pageTitle: "Digital Architect | Web Developer Portfolio",

    siteConfig: {
        brandName: "Digital Architect",
        cvUrl: "#", // URL de tu CV - reemplaza con el link real
        navLinks: [
            { label: "Projects", url: "#projects" },
            { label: "Stack", url: "#stack" },
            { label: "Experience", url: "#experience" },
            { label: "About", url: "#about" },
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
            { icon: "fab fa-github", url: "#", name: "GitHub" },
            { icon: "fab fa-linkedin-in", url: "#", name: "LinkedIn" },
            { icon: "fab fa-youtube", url: "#", name: "YouTube" }
        ]
    },

    // Array de Proyectos (el orden define la posición, el HBS alternará el layout)
    projectsData: [
        {
            title: "Nexus Analytics Platform",
            imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDxDMsnEcgSxs3zQjW7d0CEFKc1uAcy0k54QwpclHUehecyoPUx6Se6UB_pLNXV0IExFbl4QH_HsHNVDMOp5fms5aDOwTMmyGHq-QP07YXzjRPVtGtTj2nr1cjK2aYG0yNoTeZB7PnRvTLMHsqczG9vXfdUWtZxvjmcFS-NDUwknyJVWAE-Lr5KwuY-S_UjpPliujQ9aq9KmkFM9SZ568vF4N2El5xtHWM9-HoQVnnvm2XGfUkh5U_hnginU8LCW798har3X-XJ4w",
            problem: "Sistemas legados lentos incapaces de procesar millones de eventos en tiempo real.",
            solution: "Una arquitectura basada en eventos con Next.js y GraphQL que redujo la latencia en un 60%.",
            tags: ["Next.js", "GraphQL", "PostgreSQL"],
            liveDemoUrl: "#",
            repoUrl: "#"
        },
        {
            title: "Veloce FinTech UI",
            imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuB8A2vAs_eu-NmI5ombX94lrxwe-1nQi4teXpOTbsnN_ujWjy4LkuTIoxwBlSsvpRwzdanO2ttuJOsUyjsKrL6uThqgDacew3qA2BW8uZ8mfKaXLB2RryD9LBtdE967HIhQoXg0lEp7s0_G3O_B3qomXXbpIvzQZ0rMEt9Xx_1aE66mwDIyB4UUrgZazaiP9IuwasKqbX_MPmq9hmwpAESFD8zjvXBITgvr0EElUfbmGbH2utNzfk6FUWIV8CNKPmcg78LXCX-cTA",
            problem: "Interfaces financieras complejas que resultaban en una alta tasa de abandono de usuarios.",
            solution: "Rediseño total centrado en accesibilidad y flujos simplificados, logrando un aumento del 40% en retención.",
            tags: ["React Native", "Tailwind CSS", "Node.js"],
            liveDemoUrl: "#",
            repoUrl: "#"
        },
        {
            title: "Core Infrastructure Engine",
            imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCvvn9hAtC7xEK1Pqv3aoX7uRrNjfur1FX4-5TpFLoASFXm4lSEMZ8c76ENT4AfgdEKNZo3ohiRQ4J5VEJqEKlnoXVYCiV_bifv2D3tzcm99XClmRf3W3Yqm9Zjy9OcR54t-F5okh0g_Q1PG-r-MjibwJDEZEaFA-3e3_Ap-vVJYC19IYzFXuE-_7WGrm1LxpMFKhhELPLFtYeVHMBlYizesh7jPBtWt1k_TwuMpbCLqrKFaPS6_Wu0rXtWi0IV4QVQli5H3d1UqA",
            problem: "Procesos de despliegue manuales propensos a errores humanos.",
            solution: "Implementación de pipelines CI/CD automatizados y orquestación con Docker, eliminando fallos de producción en un 95%.",
            tags: ["Docker", "AWS", "Terraform"],
            liveDemoUrl: "#",
            repoUrl: "#"
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
            { name: "React / Next.js", icon: "layers" },
            { name: "Tailwind CSS", icon: "palette" },
            { name: "TypeScript", icon: "javascript" }
        ],
        backend: [
            { name: "PostgreSQL / GraphQL", icon: "database" },
            { name: "Node.js / Go", icon: "terminal" }
        ],
        devops: "Docker, Git, CI/CD, AWS",
        design: "Figma, Framer, Motion"
    },

    // Datos de Sobre Mí
    aboutData: {
        title: "Arquitectura con Alma",
        description: "Mi pasión no es solo escribir código, sino diseñar experiencias que trasciendan la pantalla. Creo en la tecnología como un habilitador de negocios y en la simplicidad como la máxima sofisticación.<br><br>Más allá de las líneas de código, me enfoco en la comunicación asertiva, la empatía con el usuario final y la resolución creativa de problemas complejos. Si buscas un socio técnico que entienda tus objetivos comerciales tanto como el stack tecnológico, hablemos.",
        stats: {
            yearsExp: "6+",
            projectsCount: "40+"
        },
        imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDwddjWZTYj0wW-DI3FZpp0nTIv1B6ufNWBW4Zhanbm86Oj_mrSHw9L34c5vCycqHDekZ9nOEvynihfLXjfj8YzxXpB08tKGnQUkaqP4o1fRG5FeVnP1rSqH1gycJcrQkS7lMu8q5L8enJpHSE45t31kkc4r-MjvZqBBmyPaRY8-kbgwoL07gmiftGXNnuQXA8wxbHFt3T1S2auCwK7eP9ucTiSWGcJ-nCVUIc1GV-L4jsvsj4GPCbNBIOTqnpqcwPWLBri2hO4qQ"
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