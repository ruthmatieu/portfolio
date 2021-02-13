import React from 'react';
import styled from 'styled-components';
import breakpoint from '../breakpoints';

import igCollage from '../images/insta-grid.svg';



const Contact = () => {
    return (
        <Wrapper>
            <div className='action-left'>
                <h6>Let's work together</h6>

                <p>See something you like?</p>
                <p>Shoot me an <StyledLink href='mailto:matieu.ruth@gmail.com' target='_blank'>email</StyledLink> if you'd like to collaborate, request services or just have a chat!</p>

                <a href='mailto:matieu.ruth@gmail.com' target='_blank' rel="noopener noreferrer"><button>contact me</button></a>

            </div>
            <div className='action-right'>
                <h6>Psst! Find me on the gram</h6>
                <p>I sometimes do fun stuff <span role="img" aria-label="sheep">🙃</span></p>
                <img src={igCollage} alt='Instagram collage'/>
            </div>
        </Wrapper>
    )
}

export default Contact;

const Wrapper = styled.section`

    padding: 50px 20px 100px 20px;

    h6 {
        font-size: 23px;
        text-transform: uppercase;
        padding-bottom: 40px;
        color: #138085;
        font-weight: 700;
    }

    

    p {
        line-height: 25px;
        padding: 0 0 10px 0;
    }

    button {
        text-align: center;
        text-transform: uppercase;
        margin-top: 30px;
        padding: 10px 15px;
        background-color: #138085;
        border: 1px solid white;
        border-radius: 25px;
        color: white;
    }

    button:hover {
        cursor: pointer;
    }
    .action-right {
        text-align: right;
        padding-top: 50px;
    }

    .action-right h6 {
        font-size: 17px;
    }
    img {
        width: 100%;
    }

    @media only screen and ${breakpoint.device.tablet} {
        padding: 50px 40px 100px 40px;
        
    }

    @media only screen and ${breakpoint.device.desktop} {
        padding: 100px 50px 150px 50px;
        display: flex;

        .action-left {
            width: 50%
        }

        .action-right {
            // padding-top: 150px;
            width: 50%
        }
    }
`;

const StyledLink = styled.a`
    color: #EEB462;
    text-decoration: none;
    font-weight: 500;
`;