import React from 'react';
import styled from 'styled-components';
import breakpoint from '../breakpoints';

const Footer = () => {
    return (
        <Wrapper>
            <div>
                <div className="socials">
                    <a href="https://www.linkedin.com/in/ruthmatieu/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
                    <a href="https://www.instagram.com/alanna.code/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
                    <a href="https://www.facebook.com/profile.php?id=100008826826867" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
                    <a href="https://github.com/ruthmatieu" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
                    <a href="https://twitter.com/ruthmatieu" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
                </div>

                <p>Designed and Built by Ruth Matieu</p>
                <p>Copyright 2021</p>
            </div>
        </Wrapper>
    )
}

export default Footer;

const Wrapper = styled.div`
    background-color: #544667;
    padding: 30px 0;

    p {
        color: white;
        text-align: center;  
        padding-top: 20px;
    }

    .socials  {
      text-align: center;
      margin-bottom: 15px;
    }

    .socials a {
        
        color: #DC8666;
        padding: 0 10px;
    }

    .socials a:hover {

    }


    @media only screen and ${breakpoint.device.laptop} {
        background-color: yellow;
    }

    @media only screen and ${breakpoint.device.desktop} {
        background-color: red;
    }
`;


//544667