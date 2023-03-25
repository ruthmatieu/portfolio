import projectOne from './images/lace-up-proj.svg';
import projectTwo from './images/haiti-proj.svg';
import projectThree from './images/projectThree.png';

export const data = [
    {
        id: 1,
        name: 'School of Bubberson',
        image: projectThree,
        cta1: '/',
        github: 'https://github.com/ruthmatieu/my-learning',
        link: 'https://schoolofbubberson.netlify.app/',
        description: "An online school built with React, Node, Cypress, TypeScript, MySQL, and TailwindCSS, provides a modern and efficient e-learning experience with a visually appealing and responsive user interface.",
    },
    {
        id: 3,
        name: 'Laced Up',
        image: projectOne,
        cta1: '/project-laced-up',
        github: 'https://github.com/ruthmatieu/laced-up',
        link: 'https://laced-up.netlify.app/',
        description: 'A footwear e-commerce built with React provides a visually appealing and responsive web application that enables users to easily browse and purchase a wide variety of sneakers.'
    },
    {
        id: 2,
        name: 'All News Haiti',
        image: projectTwo,
        cta1: '/project-chow-dining',
        github: 'https://github.com/ruthmatieu/haiti-news-app',
        link: 'https://allnewshaiti.netlify.app/',
        description: `An app that provides real-time updates on news and events in Haiti using the React and the Guardian API.`
    }
]
