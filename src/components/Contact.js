import React from "react";
import breakpoint from '../breakpoints';
import styled from 'styled-components';

const Contact = () => {
    return (
        <Wrapper>
            <div className="wrapper">
              <h4>Get in touch</h4>
              <div className="info-container">
                <div className="card-1">
                  <p className="title title-1">For general inquiries</p>
                  <p className="details">Send an <a href='mailto:matieu.ruth@gmail.com' target='_blank' rel="noreferrer"><span className="email">email</span></a></p>
                </div>
                <div className="card-2">
                  <p className="title title-2">Find me on the gram</p>
                  <a href="https://www.instagram.com/alanna.code/" target="_blank" rel="noreferrer"><p className="details">Follow my <span style={{color: '#EEB462'}}>insta</span></p></a>
                </div>
                <div className="card-3">
                  <p className="title title-3">Find me on Twitter</p>
                  <a href="https://twitter.com/ruthmatieu/" target="_blank" rel="noreferrer"><p className="details">Send a <span style={{color: '#DC8666'}}>Tweet</span></p></a></div>
              </div>
            </div>
        </Wrapper>
    )
}

export default Contact;

const Wrapper = styled.section`
  .wrapper {
    width: 100%;
    max-width: 1680px;
    overflow: hidden;
    margin: 0 auto;
    padding: 0;
    height: 40rem;
    background: #FAFAFA;
  }

  h4 {
    color: #544667;
    text-align: center;
    text-transform: uppercase;
    font-size: 2rem;
    font-weight: 600;
    text-align: center;
    padding: 8rem 0 2rem 0;
  }

  .info-container {
    display: grid;
    place-items: center;
    text-align: center;
  }

  .email {
    color: #C9726C;
  }

  .card-1, .card-2, .card-3 {
    padding-bottom: 4rem;
  }

  .title {
    font-size: 1.3rem;
  }

  .title-1 {
    border-bottom: 5px solid #EEB462;
  }

  .title-2 {
    border-bottom: 5px solid #544667;
  }

  .title-3 {
    border-bottom: 5px solid #D07D78;
  }

  .details {
    padding-top: 0.5rem;
  }

  @media only screen and ${breakpoint.device.mobile} {
    .wrapper {
      //background: red;
    }
  }
  @media only screen and ${breakpoint.device.tablet} {
    .wrapper {
      //background: yellow;
      height: 35rem;
      padding: 4rem 0;
    }
    .info-container {
      display: flex;
      justify-content: space-around;
    }
  }
  @media only screen and ${breakpoint.device.desktop} {
    .wrapper {
      //background: blue;
    }
  }

  `