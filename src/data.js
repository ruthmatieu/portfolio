//images
import projectOne from './images/lace-up-proj.svg';
import projectTwo from './images/chow-proj.svg';
import projectThree from './images/potluck-proj.svg';
import screenshotOne from './images/snapOne.png';
import mainLace from './images/lacedup-main.png';
import mainPot from './images/potluck-main.png';
import potluckOne from './images/potluck-one.png';
import lacedTwo from './images/lacedup-two.png';
import chowMain from './images/chow-proj.svg';
import chowOne from './images/chow-screenshot-one.png';


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
        id: 2,
        name: 'Potluck Planner',
        image: projectThree,
        cta1: '/project-potluck-planner',
        github: 'https://github.com/PotluckPlanner-BW/front-end',
        link: 'https://front-end-liart-phi.vercel.app/',
        description: 'A single page app to keep track of your guests and their responsibility to bring certain dishes to your event. Create, update or delete your lists to stay up to date with plan changes.'
    },
    {
        id: 3,
        name: 'Chow Dining',
        image: projectTwo,
        cta1: '/project-chow-dining',
        github: 'https://github.com/ruthmatieu/ruthmatieu.github.io',
        link: 'https://www.chowdining.com/',
        description: `A static website for a local restaurant. Presents a modern look at the company's services, description and methods of contact.`
    },
]


//images


export const projectData = {

   laceUp: 
    {
        title: 'Laced Up',
        tech: 'React, Redux, HTML5, Styled Components, Netlify',
        live: 'https://laced-up.netlify.app/',
        git: 'https://github.com/ruthmatieu/laced-up',
        mainImage: mainLace,
        snapOne: screenshotOne,
        snapTwo: lacedTwo
    },
    potluck: 
    {
        title: 'Potluck Planner',
        tech: 'React, Redux, HTML5, Styled Components',
        live: 'https://front-end-liart-phi.vercel.app/',
        git: 'https://github.com/PotluckPlanner-BW/front-end',
        mainImage: mainPot,
        snapOne: potluckOne,
    },
    chow: 
    {
        title: 'Chow Dining',
        tech: 'HTML5, CSS, CSS grid, Bootstrap',
        live: 'https://www.chowdining.com/',
        git: 'https://github.com/ruthmatieu/ruthmatieu.github.io',
        mainImage: chowMain,
        snapOne: chowOne,
    }
}