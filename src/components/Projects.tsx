import { projects } from "../Data/data";

const Projects = () => {
    return (
        <div id="projects" className="py-16">
            {projects.map(item => (
                <div className="group" key={item.id}>
                    <a 
                        href={item.link} 
                        target="_blank" 
                        rel="noreferrer" 
                        className="flex p-8 group-hover:bg-blue-300 block rounded-lg group-transition-colors group-duration-300 group-hover:bg-opacity-5" 
                        style={{color: "#888D91"}} 
                    >
                        <img src={item.image} alt="" className="rounded w-32 h-16"/>
                        <div className="ml-4">
                            <div className="flex items-center">
                                <p className="group-hover:underline" style={{color: "#98FBFC"}}>{item.title}</p>
                                <svg 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    viewBox="0 0 24 24" 
                                    width="15" 
                                    height="15"
                                    className="ml-1"
                                >
                                        <path 
                                            d="M10 6V8H5V19H16V14H18V20C18 20.5523 17.5523 21 17 21H4C3.44772 21 3 20.5523 3 20V7C3 6.44772 3.44772 6 4 6H10ZM21 3V12L17.206 8.207L11.2071 14.2071L9.79289 12.7929L15.792 6.793L12 3H21Z" 
                                            fill="#FFF">
                                        </path>
                                </svg>
                            </div>
                            <p className="group-hover:text-gray-300">{item.description}</p>
                        </div>
                    </a>
                </div>
            ))}
        </div>
    )
}

export default Projects;