import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { motion } from "framer-motion";

function Landing() {
    return (
    <section className="landing-container bg-red-200 mx-w-lg">

      <div className="mx-w-lg lg:flex justify-between py-20 px-10 text-blue-100">
      
        {/* <!--   left side --> */}
        <div className="content lg:w-1/2">
          <section c>
            <img src="./images/hero-image.svg" alt="" height="800px" width="600px" class="image1"/>
          </section>
        </div>

        {/* <!--   right side --> */}  
        <motion.div 
          initial={{opacity: 0}}
          animate={{opacity:1}}
          className="mx-auto content lg:w-1/2 mb-10 lg:mb-0">
          <h2 className="lg:text-4xl lg:text-6xl text-4xl text-gray-900 mt-6 lg:mr-6 lg:mt-0 lg:ml-6 lg:mb-0">
            <span className="popout">
              <span className="text-5xl lg:text-6xl sm:bg-red-500 md:bg-yellow-500 lg:bg-blue-500 xl:bg-pink-500">c</span>
              <span className="text-5xl lg:text-6xl">o</span>
              <span className="text-5xl lg:text-6xl">d</span>
              <span className="text-5xl lg:text-6xl">e</span>
              <span className="text-5xl lg:text-6xl mr-4">.</span>
              <span className="text-5xl lg:text-6xl">d</span>
              <span className="text-5xl lg:text-6xl">e</span>
              <span className="text-5xl lg:text-6xl">s</span>
              <span className="text-5xl lg:text-6xl">i</span>
              <span className="text-5xl lg:text-6xl">g</span>
              <span className="text-5xl lg:text-6xl">n</span>
              <span className="text-5xl lg:text-6xl">.</span>
            </span>
           <br/><span className="text-3xl lg:text-4xl">bringing ideas </span><span className="lg:text-4xl mr-2">to</span>
           <span className="popout">
              <span className="text-5xl lg:text-6xl">l</span>
              <span className="text-5xl lg:text-6xl">i</span>
              <span className="text-5xl lg:text-6xl">f</span>
              <span className="text-5xl lg:text-6xl">e</span>
              <span className="text-5xl lg:text-6xl">.</span>
           </span> 
          <br/><span className="text-3xl lg:text-4xl">everything that makes the web go ‘round.</span></h2>
          <button className="button">
            <a href="#" className="inline-block py-2 px-6 bg-red-100 text-red-600 hover:bg-red-600 hover:no-underline hover:text-red-100 rounded mr-2">Download my resume</a>
          </button>
        </motion.div>
        <div>
          
        </div>
      </div>
    </section>
    )
}

export default Landing;