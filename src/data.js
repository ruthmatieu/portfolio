//images
import projectOne from './images/lace-up-proj.svg';
import projectTwo from './images/chow-proj.svg';
import projectThree from './images/potluck-proj.svg';
import screenshotOne from './images/snapOne.png';
import mainLace from './images/chow-proj.png';

export const data = [
    {
        id: 1,
        name: 'Laced Up',
        image: projectOne,
        cta1: '/project-laced-up',
        github: 'https://github.com/ruthmatieu/laced-up',
        link: 'https://www.google.com/',
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
        description: `A static website for a local restaurant. Presents a nice look at the company's services, description and methods of contact.`
    },
]


//images


export const projectData = {

   laceUp: 
    {
        title: 'Lace Up',
        tech: 'React, Redux, CSS, HTML5, Styled Components',
        live: '',
        git: '',
        mainImage: mainLace,
        snapOne: screenshotOne,
    },
    potluck: 
    {

    },
    thirdproj: 
    {

    }
}