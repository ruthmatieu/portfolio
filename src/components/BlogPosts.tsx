import { posts } from "../Data/data";

const BlogPosts = () => {
    return (
        <div id="posts" style={{ color: "#98FBFC" }}>
            {posts.map(post => (
                <div key={post.id} className="group">
                    <a
                        href={post.link}
                        target="_blank"
                        rel="noreferrer"
                        className="group-hover:bg-blue-300 block rounded-lg group-transition-colors group-duration-300 group-hover:bg-opacity-5"
                    >
                        <div className="p-8" style={{ color: "#888D91" }}>
                            <div className="flex items-center">
                                <p className="group-hover:underline" style={{ color: "#98FBFC" }}>{post.title}</p>
                                <svg 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    viewBox="0 0 24 24" 
                                    width="15" 
                                    height="15"
                                    className="mb-1 ml-1"
                                >
                                        <path 
                                            d="M10 6V8H5V19H16V14H18V20C18 20.5523 17.5523 21 17 21H4C3.44772 21 3 20.5523 3 20V7C3 6.44772 3.44772 6 4 6H10ZM21 3V12L17.206 8.207L11.2071 14.2071L9.79289 12.7929L15.792 6.793L12 3H21Z" 
                                            fill="#FFF">
                                        </path>
                                </svg>
                            </div>
                            <p className="mt-2 group-hover:text-gray-300">{post.description.slice(0,140)}...</p>
                        </div>
                    </a>
                </div>
            ))}
        </div>
    )
}

export default BlogPosts;