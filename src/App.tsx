import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { AiFillTwitterCircle, AiOutlineInstagram } from 'react-icons/ai';
import "./App.css";
import Menu from './components/Menu';
import Intro from './components/Intro';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import BlogPosts from './components/BlogPosts';

function App() {
  return (
    <div style={{ backgroundColor: '#000D18' }} className="py-40">
      <div className="mx-auto w-full px-6" style={{ maxWidth: '1100px' }}>
        <div className="md:fixed">
          <ul className='flex space-x-8 mb-20'>
                <li><a href="https://www.linkedin.com/in/ruthmatieu/" target="_blank" rel="noreferrer"><FaLinkedin className="text-teal-200 hover:text-blue-300" size={22}/></a></li>
                <li><a href="https://github.com/ruthmatieu" target="_blank" rel="noreferrer"><FaGithub className="text-teal-200 hover:text-blue-300" size={22}/></a></li>
                <li><a href="https://twitter.com/ruthmatieu" target="_blank" rel="noreferrer"><AiFillTwitterCircle className="text-teal-200 hover:text-blue-300" size={22}/></a></li>
                <li><a href="https://www.instagram.com/alanna.code/" target="_blank" rel="noreferrer"><AiOutlineInstagram className="text-teal-200 hover:text-blue-300" size={22}/></a></li>
            </ul>
          <Intro />
          <div className='hidden md:block'>
            <Menu />
          </div>
         
        </div>
        <div className="md:ml-[500px]">
          <About />
          <Experience />
          <Projects />
          <BlogPosts />
        </div>
      </div>
    </div>
  );
}

export default App;

