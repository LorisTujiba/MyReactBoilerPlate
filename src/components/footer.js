import React, { Component, Fragment } from 'react';
import styled from 'styled-components';

import container from '../styled-global-components/container';

const FooterContainer = styled.footer`
  padding: 30px 0;
`
const Container = styled.div`
  ${container}
  display: flex;
  justify-content: space-between;
  align-items: center;
  > div > img{
    width: 100px;
  }
  >div{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 33.3%;
  }
  @media (max-width: 780px) {
     flex-direction: column;
     >div{
       width: 100%;
       margin-top: 20px;
     }
  }
`
const SocialMediaContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`
const SocialMediaList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: row;
  >li{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-right: 25px;
    >a{
      color: #222;
      font-size: 0.8em;
      transition: .2s;
      :hover{
        color: #fe4a00;
      }
    }
  }
`
const CopyrightContainer = styled.div`
  font-size: 0.7em;
  text-transform: capitalize;
  font-weight: 600;
  color: #666;
  font-family: "Montserrat", sans-serif;
  >span{
    color: black;
  }
`

class Footer extends Component{
  render(){
    return(
      <FooterContainer>
        <Container>
          <SocialMediaContainer>
            <SocialMediaList>
              <li key={1}>
                <a href="/">
                  <i className="fab fa-facebook-f"></i>
                </a>
              </li>
              <li key={2}>
                <a href="/">
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li key={3}>
                <a href="/">
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
            </SocialMediaList>
          </SocialMediaContainer>
          <div>
            <img src="https://dcnetworks.ie/wp/wp-content/uploads/2017/11/placeholder-logo-2.png"/>
          </div>
          <CopyrightContainer>
            copyrights &copy; 2018 Loris Tujiba. &nbsp;
            <span>privacy policy & terms of service.</span>
          </CopyrightContainer>
        </Container>
      </FooterContainer>
    )
  }
}

export default Footer;
