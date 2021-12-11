import projectOne from './images/lace-up-proj.svg';
import projectTwo from './images/haiti-proj.svg';
import projectThree from './images/potluck-proj.svg';

export const data = [
    {
        id: 1,
        name: 'Laced Up',
        image: projectOne,
        cta1: '/project-laced-up',
        github: 'https://github.com/ruthmatieu/laced-up',
        link: 'https://laced-up.netlify.app/',
        description: 'An e-commerce site that allows you to shop your favorite sneakers. Browse the collection and add your top picks to your cart.'
    },
    {
        id: 3,
        name: 'All News Haiti',
        image: projectTwo,
        cta1: '/project-chow-dining',
        github: 'https://github.com/ruthmatieu/haiti-news-app',
        link: 'https://allnewshaiti.netlify.app/',
        description: `There are limited news sources that report solely on Haiti. As a Haitian, it's important to have a quick go-to access to stay updated on Haiti world events.`
    },
    {
        id: 2,
        name: 'Potluck Planner',
        image: projectThree,
        cta1: '/project-potluck-planner',
        github: 'https://github.com/PotluckPlanner-BW/front-end',
        link: 'https://planner-potluck.netlify.app/',
        description: 'A single page app to keep track of your guests and their responsibility to bring certain dishes to your event. Create, update or delete your lists to stay up to date with plan changes.'
    }
]
