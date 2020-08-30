import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Link, Route } from 'react-router-dom';
import { motion } from "framer-motion";


function projectDetails(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <p>{props.details}</p>
      <button>{props.site}</button>
      <button>{props.code}</button>
    </div>
  )
}

function Projects(props) {
  return (
    <motion.div 
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      transition={{delay: 1.5}}
      className="bgcard m-2" style={{ backgroundImage: `url(${props.bgphoto})`}}>
    </motion.div>
  )
}

function Work() {
    return (
    <div>
      {/* <h2>Works</h2> */}
      <Projects name="The Chow" bgphoto="./images/drawing3.svg" src=""/>
      <Projects name="Jouveaux" bgphoto="./images/drawing.svg" src=""/>
      <Projects name="Mayday" bgphoto="./images/drawing4.svg" src=""/>
    </div>
    )
}

export default Work;