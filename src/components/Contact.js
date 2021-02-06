import React from 'react';
import styled from 'styled-components';
import breakpoint from '../breakpoints';

const Contact = () => {
    return (
        <Wrapper>
            <h6>Let's work together</h6>

            <p>See something you like?</p>
            <p>Shoot me an <StyledLink href='mailto:matieu.ruth@gmail.com' target='_blank'>email</StyledLink> if you'd like to collaborate, request services or just have a chat!</p>
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
    @media only screen and ${breakpoint.device.laptop} {
        background-color: yellow;
    }

    @media only screen and ${breakpoint.device.desktop} {
        background-color: red;
    }
`;

const StyledLink = styled.a`
    color: #EEB462;
    text-decoration: none;
    font-weight: 500;
`;