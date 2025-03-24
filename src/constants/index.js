export const navLinks = [
    {
        id: 1,
        name: 'Home',
        href: '#home',
    },
    {
        id: 2,
        name: 'About',
        href: '#about',
    },
    {
        id: 3,
        name: 'Work',
        href: '#work',
    },
    {
        id: 4,
        name: 'Contact',
        href: '#contact',
    },
];

export const clientReviews = [
    {
        id: 1,
        name: 'Deutsche Post Team',
        position: 'Enterprise Client',
        img: 'assets/review1.png',
        review: 'Adnan demonstrated excellent skills in architecting e-commerce solutions and implementing automated schedulers that significantly reduced manual operations. His work on optimizing database queries enhanced system performance notably.',
    },
    {
        id: 2,
        name: 'Chegg Team',
        position: 'Educational Technology',
        img: 'assets/review2.png',
        review: 'As a Subject Matter Expert in Computer Science, Adnan excelled at explaining complex concepts and providing technical solutions. His strong communication skills and deep understanding of algorithms and data structures made him an valuable resource.',
    }
];

export const myProjects = [
    {
        title: 'Price Recommendation System',
        desc: 'An ML-powered price optimization system designed for large-scale data processing. The system leverages Python and Spark to provide intelligent price recommendations based on market data and user behavior.',
        subdesc: 'Built with Python, Apache Spark, and MySQL, featuring real-time data processing and high prediction accuracy using collaborative filtering.',
        href: '#',
        texture: '/textures/project/project1.mp4',
        logo: '/assets/project-logo1.png',
        logoStyle: {
            backgroundColor: '#2A1816',
            border: '0.2px solid #36201D',
            boxShadow: '0px 0px 60px 0px #AA3C304D',
        },
        spotlight: '/assets/spotlight1.png',
        tags: [
            {
                id: 1,
                name: 'Python',
                path: '/assets/python.svg',
            },
            {
                id: 2,
                name: 'Spark',
                path: 'assets/spark.png',
            },
            {
                id: 3,
                name: 'MySQL',
                path: '/assets/mysql.png',
            },
            {
                id: 4,
                name: 'AWS',
                path: '/assets/aws.png',
            },
        ],
    },
    {
        title: 'Holiday Trip Booking Platform',
        desc: 'A comprehensive full-stack travel platform that provides seamless booking and travel management solutions. The system integrates multiple third-party APIs to offer a complete travel booking experience.',
        subdesc: 'Developed using ReactJS and Spring Boot with Jenkins integration, focusing on high-volume operations and enhanced user experience.',
        href: '#',
        texture: '/textures/project/project2.mp4',
        logo: '/assets/project-logo2.png',
        logoStyle: {
            backgroundColor: '#13202F',
            border: '0.2px solid #17293E',
            boxShadow: '0px 0px 60px 0px #2F6DB54D',
        },
        spotlight: '/assets/spotlight2.png',
        tags: [
            {
                id: 1,
                name: 'React.js',
                path: '/assets/react.svg',
            },
            {
                id: 2,
                name: 'Spring Boot',
                path: 'assets/spring.png',
            },
            {
                id: 3,
                name: 'Jenkins',
                path: '/assets/jenkins.png',
            },
            {
                id: 4,
                name: 'Java',
                path: '/assets/java.png',
            },
        ],
    },
    {
        title: 'Property Management System',
        desc: 'A responsive platform with optimized database design for property management. Features secure file handling for multiple concurrent users and a responsive interface for seamless property viewing.',
        subdesc: 'Built using PHP/CakePHP and MySQL, with Docker containerization for consistent deployment across environments.',
        href: '#',
        texture: '/textures/project/project3.mp4',
        logo: '/assets/project-logo3.png',
        logoStyle: {
            backgroundColor: '#60f5a1',
            background: 'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
            border: '0.2px solid rgba(208, 213, 221, 1)',
            boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
        },
        spotlight: '/assets/spotlight3.png',
        tags: [
            {
                id: 1,
                name: 'PHP',
                path: '/assets/php.png',
            },
            {
                id: 2,
                name: 'MySQL',
                path: 'assets/mysql.png',
            },
            {
                id: 3,
                name: 'Docker',
                path: '/assets/docker.png',
            },
            {
                id: 4,
                name: 'CakePHP',
                path: '/assets/cakephp.png',
            },
        ],
    }
];

export const workExperiences = [
    {
        id: 1,
        name: 'Infosys',
        pos: 'Senior Systems Engineer',
        duration: '2021 - 2023',
        title: "Led development of e-commerce solutions, implemented automated schedulers, and optimized database queries for enhanced system performance. Worked with Oracle ATG, Core Java, Spring Boot, and ReactJS.",
        icon: '/assets/infosys.png',
        animation: 'victory',
    },
    {
        id: 2,
        name: 'Esdy Information Systems',
        pos: 'Java Developer',
        duration: '2019 - 2021',
        title: "Built enterprise applications with Spring Data JPA/Hibernate. Reduced API response times by 45% through Redis caching. Led 5-developer Agile team with 98% sprint completion rate.",
        icon: '/assets/esdy.png',
        animation: 'clapping',
    },
    {
        id: 3,
        name: 'Chegg, Inc',
        pos: 'Subject Matter Expert',
        duration: '2020 - 2021',
        title: "Specialized in algorithms, data structures, and system design. Provided technical solutions and personalized learning support with excellent ratings.",
        icon: '/assets/chegg.png',
        animation: 'clapping',
    },
    {
        id: 4,
        name: 'ECIL',
        pos: 'Information Technology Intern',
        duration: '2018 - 2018',
        title: "Developed VLSI designs with high simulation accuracy and implemented RTL coding for FFT circuitry optimization. Collaborated with cross-functional teams for project delivery.",
        icon: '/assets/ecil.png',
        animation: 'salute',
    },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
        deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
        deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
        cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
        reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
        ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
        targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
    };
};