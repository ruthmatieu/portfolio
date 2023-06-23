import sugardBare from "../images/sugardbare.png"
import schoolOfBubberson from "../images/school-of-bubberson.png";
import LacedUp from "../images/lace-up.png";

export const experience = [
    {
        id: 0,
        role: "Frontend Engineer",
        company: "WebstaurantStore",
        companyWebsite: "https://www.webstaurantstore.com/",
        duration: "2021 - Present",
        description: "Deliver large scalable, data-intensive React projects used by millions through collaboration with cross-functional teams, including designers, developers, and stakeholders, to ensure seamless project execution from ideation to deployment.",
        techStack: ["React", "TypeScript", "JavaScript", "Storybook", "C#", "SCSS", "Tailwind", "LESS", "HTML"]
    },
    {
        id: 1,
        role: "Frontend Engineer",
        company: "Travelopia",
        companyWebsite: "https://www.travelopia.com/",
        duration: "2019 - 2021",
        description: "Developed visually captivating travel destination and COVID-19 informational pages for a prominent travel company, catering to a yearly guest count of over 500K. Leveraged expertise in styling and development to create engaging user interfaces that effectively communicated essential travel information.",
        additionalLinks: ["https://www.moorings.com/", "https://www.leopardcatamarans.com/", "https://www.sunsail.com/"],
        additionalLinksTitle: ["The Moorings", "Leopard Catamarans", "Sunsail"],
        techStack: ["React", "JavaScript", "HTML", "CSS", "Drupal"]
    },
    {
        id: 2,
        role: "Licensed Insurance Agent",
        company: "New York Life Insurance Co.",
        companyWebsite: "https://www.newyorklife.com/",
        duration: "2028 - 2019",
        description: "Developed robust software engineer with a passion for developing intuitive and user-friendly interfaces that deliver exceptional user experiences that exceed both the expectations of clients and end-users.",
    }
]

export const projects = [
    {
        id: 0,
        title: "Sugar'd Bare",
        description: "Design and developed for a small business. Utilizes TypeScript, React, and Tailwind CSS for a professional and visually stunning online presence.",
        image: sugardBare,
        link: "https://sugardbare.com/"
    },
    {
        id: 1,
        title: "The School of Bubberson",
        description: "React-based online school: modern, efficient e-learning with visually appealing UI, built with Node, Cypress, TypeScript, MySQL, and TailwindCSS.",
        image: schoolOfBubberson,
        link: "https://schoolofbubberson.netlify.app/"
    },
    {
        id: 2,
        title: "Laced Up",
        description: "A visually appealing React-based footwear e-commerce offers responsive web browsing and seamless purchasing of a diverse range of sneakers.",
        image: LacedUp,
        link: "https://laced-up.netlify.app/"
    }
]

export const posts = [
    {
        id: 0,
        title: "Complexity Analysis + Big O Notation",
        description: "Prior to understanding data structures and algorithms, it's important to understand how code is analyzed for efficiency in software engineering",
        link: "https://blog.ruthmatieu.com/complexity-analysis-big-o-notation"
    },
    {
        id: 1,
        title: "Asynchronous JavaScript",
        description: "By default JavaScript is synchronous. The JavaScript engine maintains a stack data structure called the call stack to keep track of function execution.",
        link: "https://blog.ruthmatieu.com/asynchronous-javascript"
    },
    {
        id: 2,
        title: "Testing w/ React Testing Library + Jest",
        description: "Testing ensures a product or application performs the way it is intended. Testing is important for discovering defects/bugs before the delivery to the client.",
        link: "https://blog.ruthmatieu.com/testing-w-react-testing-library-jest",
    },
    {
        id: 3,
        title: "Diving into Singly Linked Lists",
        description: "Linked lists are a linear data structure consisting of nodes that are not stored contiguously (right next to each other) in memory.",
        link: "https://blog.ruthmatieu.com/diving-into-singly-linked-lists",
    },
    {
        id: 4,
        title: "Class Components Vs. Functional Components in React.js",
        description: "Prior to React version 16.8 functional components always existed. However, if your component was utilizing state, you had to use class components.",
        link: "https://blog.ruthmatieu.com/class-components-vs-functional-components-in-reactjs",
    }
]