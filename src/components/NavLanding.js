import React, { useState, useEffect, useCallback } from "react";
import styled from 'styled-components';
import { keyframes } from 'styled-components'
import breakpoint from '../breakpoints';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { AiFillTwitterCircle, AiOutlineInstagram } from 'react-icons/ai';

import headshot from "../images/headshot.png";
import dots from "../images/dots.png";
import quotes from "../images/quotes.png"
import logo from "../images/logo.png"

const Nav = () =>{
  const [, setIsMobile] = useState(window.innerWidth);

  const handleWindowResize = useCallback(e => {
    setIsMobile(window.innerWidth)
  }, [])

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, [handleWindowResize])  


  return (
    <Container>
      <div className="wrapper">
        <nav>
          <div className="social-links">
            <ul>
              <li><a href="https://www.linkedin.com/in/ruthmatieu/" target="_blank" rel="noreferrer"><FaLinkedin className="mx-4" size={22}/></a></li>
              <li><a href="https://github.com/ruthmatieu" target="_blank" rel="noreferrer"><FaGithub className="mx-4" size={22}/></a></li>
              <li><a href="https://twitter.com/ruthmatieu" target="_blank" rel="noreferrer"><AiFillTwitterCircle className="mx-4" size={22}/></a></li>
              <li><a href="https://www.instagram.com/alanna.code/" target="_blank" rel="noreferrer"><AiOutlineInstagram className="mx-4" size={22}/></a></li>
            </ul>
           </div>
           <div className="logo"><img src={logo} alt="logo" style={{width: '50px'}}/></div>
           
        </nav>
        <div className="images">
           <img src={headshot} alt="headshot" className="headshot"/>
           <img src={dots} alt="" className="dots absolute top-0 z-50"/>
           <div className="pink-block"></div>
           <div className="orange-block"></div>
           <div className="lg:mr-10 desktop-intro">
              <img src={quotes} alt="" className="quotes"/>
              <p className="text-4xl pb-2 font-light mb-4">Hi <span className="wave">👋🏾</span> I'm <span className="font-bold">Alanna</span>.</p>
              <p className="font-light">Focused on crafting elegant solutions through code, innovation, 
and experience.</p>
           
           </div>
           
           <div className="menu-block">
             <ul className="flex justify-around font-semibold">
              <a href="#latest-projects"><li>latest projects</li></a>
              <a href="#contact-me"><li>contact me</li></a>
              <a href="https://blog.ruthmatieu.com/"><li>visit blog</li></a>
             </ul>
           </div>
         </div>
      </div>
    </Container>
  );
}

export default Nav;
  
const wave = keyframes`
  0% { transform: rotate( 0.0deg) }
  10% { transform: rotate(14.0deg) }
  20% { transform: rotate(-8.0deg) }
  30% { transform: rotate(14.0deg) }
  40% { transform: rotate(-4.0deg) }
  50% { transform: rotate(10.0deg) }
  60% { transform: rotate( 0.0deg) }
  100% { transform: rotate( 0.0deg) }
`

const fadeInSlideUp = keyframes`
  0% { 
    opacity: 0;
    padding-top: 50px; 
  }
  100% { 
    opacity: 1;
    padding-bottom: 0px; 
  }
`

const Container = styled.div`

  .wave {
    animation-name: ${wave};
    animation-duration: 2.5s;
    animation-iteration-count: infinite;  
    transform-origin: 70% 70%; 
    display: inline-block;
  }

  .fade-in {
    animation-name: ${fadeInSlideUp};
    animation-duration: 1s;
  }
  
  .wrapper {
    width: 100%;
    overflow: hidden;
    margin: 0 auto;
    padding: 0;
    height: 450px;
  }

  .wrapper nav {
    display: flex;
    justify-content: space-between;
    padding-top: 2rem;
    position: relative;
    z-index: 4;
  }

  .social-links {
    position: relative;
    z-index: 12;
    display: flex;
    justify-between
    margin-left: 2rem;
  }

  .social-links ul li {
    margin: 1.3rem 0;
    color: #ACB5AE;
  }

  .social-links ul li:hover {
    color: #EBD9D1;
  }

  .menu-block ul li:hover {
    color: #EBD9D1;
  }

  .logo {
    display: none;
  }

  .images {
    position: relative;
    z-index: 0;
  }

  .headshot {
    width: 230px;
    z-index: 5;
    position: absolute;
    top: -3rem;
    left: 30%;
  }

  .dots {
    width: 120px;
    top: 35px;
    left: 0%;
  }

  .pink-block {
    z-index: 2;
    position: absolute;
    top: -16rem;
    left: 30%;
    border-radius: 25% 10%;
    width: 200px;
    height: 21rem;
    background: #EBD9D1;
  }

  .orange-block {
    z-index: 1;
    position: absolute;
    left: 0;
    top: -0.8rem;
    width: 100%;
    height: 14.85rem;
    background: #B1BCBE;
  }


  .menu-block {
    background: #FFFFFF;
    padding-top: 20px;
    z-index: 6;
    position: absolute;
    right: 0;
    top: 10.3rem;
    width: 76%;
    height: 60px;
  }

  .menu-block ul {
    font-size: 11px;
  }

  .desktop-intro {
    display: none;
  }

  .mobile-intro {
    z-index: 7;
    position: absolute;
    left: 27.5%;
    top: 2rem;
  }

  .quotes {
    width: 55px;
  }

  .first-line, .second-line {
    text-align: left;
    margin-left: 2.5rem;
    font-size: 14px;
  }

  @media only screen and ${breakpoint.device.mobile} {

    .headshot {
      width: 250px;
      top: -6rem;
    }

    .orange-block {
      top: 0.1rem;
    }
  
    .pink-block {
      left: 28%;
      width: 250px;
    }

    .dots {
      width: 120px;
      top: 60px;
      left: 3%;
    }

    .menu-block {
      height: 90px;
      padding: 35px 5px 0 5px;
      z-index: 50;
      top: 8.5rem;
      width: 65%;
    }
  
    .first-line, .second-line {
      font-size: 1rem;
    }

  
    @media only screen and ${breakpoint.device.tablet} {
  
      .wrapper {
        height: 549.4px;
      }
  
      .social-links ul {
        display: flex;
      }
    
      .social-links ul li {
        margin: 0;
      }

      .logo {
        left: -2rem;
        display: block;
        position: relative;
        z-index: 3;
        margin-right: 3rem;
      }

      .headshot {
        width: 300px;
        z-index: 40;
        position: absolute;
        top: 6rem;
        left: 35%;
      }

      .dots {
        width: 150px;
        top: 180px;
        left: 10%;
      }
    
      .pink-block {
        z-index: 11;
        position: absolute;
        top: -7rem;
        left: 37%;
        width: 270px;
        height: 24rem;
      }
    
      .orange-block {
        z-index: 10;
        position: absolute;
        left: 0;
        top: 7.2rem;
        width: 100%;
        height: 22rem;
      }
    
      .menu-block {
        height: 100px;
        padding-top: 37px;
        z-index: 50;
        top: 23rem;
        width: 65%;
      }

      .menu-block ul {
        font-size: 15px;
      }
      
      .mobile-intro {
        display: none;
      }

      .mobile-intro {
        z-index: 60;
        position: absolute;
        left: 68%;
        top: 10rem;
      }
    
    }
  }
  
  @media only screen and ${breakpoint.device.desktop} {

    .wrapper {
      max-width: 1280px;
      margin: 0 auto;
      height: 700px;
    }

    .social-links {
      display: grid;
      place-items: center;
      display: flex;
    }

    .logo {
      margin-right: -2rem;
      position: relative;
      left: -8%;
    }

    .menu-list {
      display: grid;
      place-items: center;
    }

    .menu-list ul {
      display: flex
    }

    .images {
      position: relative;
    }

    .headshot {
      position: absolute;
      top: 5rem;
      left: 30%;
      width: 450px;
    }

    .dots {
      width: 200px;
      top: 200px;
      left: 9%;
    }

    .pink-block {
      position: absolute;
      top: -8rem;
      left: 25rem;
      width: 30%;
      height: 30rem;
    }

    .orange-block {
      position: absolute;
      left: 0;
      top: 5rem;
      width: 100%;
      height: 35rem;
    }

    .menu-block {
      height: 120px;
      position: absolute;
      right: 0;
      width: 70%;
      top: 31.5rem;
    }

    .menu-block ul {
      font-size: 15px;
    }

    .desktop-intro {
      display: block;
      z-index: 60;
      position: absolute;
      left: 70%;
      top: 15rem;
    }

    .first-line, .second-line {
      text-align: left;
      margin-left: 5rem;
      font-size: 1.8rem;
    }
    
    
  }

  @media only screen and ${breakpoint.device.largeScreens} {

    .logo {
      left: 4%;
      margin-right: 7rem;
    }

    .headshot {
      position: absolute;
      top: 5rem;
      left: 30%;
    }

    .dots {
      width: 200px;
      top: 200px;
      left: 10%;
    }

    .pink-block {
      left: 35%;
      width: 27%;
      height: 30rem;
    }

    .menu-block {
      height: 120px;
      padding-top: 20px;
      position: absolute;
      right: 0;
      width: 70%;
      top: 31.5rem;
      padding-top: 50px;
    }

    .desktop-intro {
      left: 65%;
      top: 14rem;
    }

  }

  
`