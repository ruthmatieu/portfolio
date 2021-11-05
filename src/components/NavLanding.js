import React, { useState, useEffect, useCallback } from "react";
import styled from 'styled-components';
import breakpoint from '../breakpoints';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { AiFillTwitterCircle, AiOutlineInstagram } from 'react-icons/ai';
import { GiHamburgerMenu} from 'react-icons/gi';
import pinkBlock from "../images/bg-rec-1.png";
import orangeBlock from "../images/bg-rec-2.png";
import headshot from "../images/headshot.svg";
import quotes from "../images/quotes.png"
import logo from "../images/logo.png"

const Nav = () =>{
  const [isMobile, setIsMobile] = useState(window.innerWidth);

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
              <li><a href="https://www.linkedin.com/in/ruthmatieu/" target="_blank" rel="noreferrer"><FaLinkedin className="mx-4" style={{color: '#EDB462'}} size={22}/></a></li>
              <li><a href="https://github.com/ruthmatieu" target="_blank" rel="noreferrer"><FaGithub className="mx-4" style={{color: '#EDB462'}} size={22}/></a></li>
              <li><a href="https://twitter.com/ruthmatieu" target="_blank" rel="noreferrer"><AiFillTwitterCircle className="mx-4" style={{color: '#EDB462'}} size={22}/></a></li>
              <li><a href="https://www.instagram.com/alanna.code/" target="_blank" rel="noreferrer"><AiOutlineInstagram className="mx-4" style={{color: '#EDB462'}} size={22}/></a></li>
            </ul>
           </div>
           <div className="logo"><img src={logo} alt="logo" style={{width: '50px'}}/></div>
           
        </nav>
        <div className="images">
           <img src={headshot} alt="headshot" className="headshot"/>
           <img src={pinkBlock} alt="" className="pink-block"/>
           <img src={orangeBlock} alt="" className="orange-block"/>
           <img src={quotes} alt="" className="quotes"/>
           <div className="intro-block">
             <p className="first-line pb-2 font-light">Hi 👋🏾 I'm <span className="font-bold">Alanna</span>.</p>
             <p className="second-line  font-light">Software Developer, Student, and life-long learner of code.</p>
           </div>
         </div>
      </div>
    </Container>
  );
}

export default Nav;
  

const Container = styled.div`
  
  .wrapper {
    width: 100%;
    overflow: hidden;
    margin: 0 auto;
    padding: 0;
    height: 450px;
    background: #FAFAFA;
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
    display: grid;
    place-items: center;
    margin-left: 8rem;
  }

  .social-links ul li {
    margin: 1.3rem 0;
  }

  .logo {
    position: relative;
    z-index: 3;
    margin-right: 15rem;
  }

  .images {
    position: relative;
    z-index: 0;
  }

  .headshot {
    width: 230px;
    z-index: 5;
    position: absolute;
    top: -5rem;
    left: 30%;
  }

  .pink-block {
    z-index: 2;
    position: absolute;
    top: -16rem;
    left: 30%;
    width: 200px;
    height: 18rem;
  }

  .orange-block {
    z-index: 1;
    position: absolute;
    left: 0;
    top: -0.8rem;
    width: 100%;
    height: 14.85rem;
  }

  .intro-block {
    background: #F3F5F9;
    padding-top: 20px;
    z-index: 6;
    position: absolute;
    right: 0;
    top: 7rem;
    width: 76%;
    height: 115px;
  }

  .quotes {
    z-index: 7;
    position: absolute;
    left: 27.5%;
    top: 8rem;
    width: 6%;
  }

  .first-line, .second-line {
    text-align: left;
    margin-left: 2.5rem;
    font-size: 14px;
  }

  @media only screen and ${breakpoint.device.mobile} {

    .wrapper {
      //background: red;
    }
  
    .headshot {
      width: 250px;
      top: -6.5rem;
    }

    .orange-block {
      top: 0.1rem;
    }
  
    .pink-block {
      left: 28%;
      width: 250px;
    }

    .intro-block {
      padding-left: 1.5rem;
    }
  
    .first-line, .second-line {
      font-size: 1rem;
    }
  
    @media only screen and ${breakpoint.device.tablet} {
      //background: green;
  
      .wrapper {
        height: 549.4px;
        //background: green;
      }
  
      .social-links ul {
        display: flex;
      }
    
      .social-links ul li {
        margin: 0;
      }

      .logo {
        left: -2rem;
      }
    
      .headshot {
        width: 300px;
        z-index: 40;
        position: absolute;
        top: 1rem;
        left: 40%;
      }
    
      .pink-block {
        z-index: 11;
        position: absolute;
        top: -7rem;
        left: 40%;
        width: 270px;
        height: 18rem;
      }
    
      .orange-block {
        z-index: 10;
        position: absolute;
        left: 0;
        top: 7.2rem;
        width: 100%;
        height: 22rem;
      }
    
      .intro-block {
        padding-top: 20px;
        padding-left: 3rem;
        z-index: 50;
        top: 16.7rem;
        width: 75%;
        height: 200px;
      }
    
      .quotes {
        z-index: 60;
        position: absolute;
        left: 28%;
        top: 18rem;
      }
    
      .first-line, .second-line {
        text-align: left;
        margin-left: 2.5rem;
        font-size: 1.5rem;
        padding-top: 10px;
        padding-left: 15px;
      }
      
    }
  }
  
  @media only screen and ${breakpoint.device.desktop} {
    //background: blue;

    .wrapper {
      max-width: 1680px;
      margin: 0 auto;
      height: 700px;
      //background: blue;
    }

    .wrapper nav {
      padding-top: 2rem;
    }

    .social-links {
      display: grid;
      place-items: center;
      display: flex;
    }

    .logo {
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
      top: 6rem;
      left: 40%;
      width: 350px;
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

    .intro-block {
      background: #F3F5F9;
      padding-top: 20px;
      position: absolute;
      right: 0;
      top: 25rem;
      width: 70%;
      height: 240px;
      padding-top: 50px;
    }

    .quotes {
      left: 34%;
      top: 28rem;
    }

    .first-line, .second-line {
      text-align: left;
      margin-left: 5rem;
      font-size: 1.8rem;
    }
    
    
  }

  @media only screen and ${breakpoint.device.largeScreens} {
    .wrapper {
      //background: cyan;
    }

    .logo {
      left: 4%;
    }

    .headshot {
      left: 45%;
    }

    .pink-block {
      left: 35%;
      width: 35%;
      height: 30rem;
    }

    .intro-block {
      width: 58%;
      padding-top: 30px;
      padding-left: 2rem;
    }

    .quotes {
      left: 44.5%;
      top: 27rem;
      width: 55px;
    }

  }

  
`