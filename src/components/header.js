import React, { Component, Fragment } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import styled from 'styled-components';
import { Helmet } from "react-helmet";

import container from '../styled-global-components/container';

const Container = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  box-sizing: border-box;
  ${container}
  @media (max-width: 993px) {
     margin: 0;
     width: 100%;
  }
`
const HeaderContainer = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #222;
  color: white;
  height: 56px;
  position: fixed;
  width: 100%;
  z-index: 2;
  top: 0;
`
const Nav = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0;
  margin: 0;
  list-style-type:none;
  height: 100%;
  @media (max-width: 993px) {
    flex-direction: column;
    background: #444;
    height: auto;
    width: 100%;
    position: absolute;
    top: 56px;
    left: 0;
    display: none;
  }
`
const NavToggler = styled.button`
  display: none;
  @media (max-width: 993px) {
     display: inline-block;
     outline: none;
     border: none;
     color: white;
     background: #222;
     font-size: 1.2em;
  }
`
const NavBrand = styled.div`
  margin-right: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  img{
    width: 100px;
  }
  @media (max-width: 993px) {
    display: none;
  }
`
const NavItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 33px;
  height: 100%;
  @media (max-width: 993px){
    line-height: 20px;
    border-bottom: 1px solid white;
    width: 100%;
    margin: 0;
  }
`
const NavDropdownItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 33px;
  height: 100%;
  @media (min-width: 994px){
    :hover{
      div:last-child{/*NavDropdownContainer*/
        display: flex;
      }
    }
  }
  @media (max-width: 993px){
    flex-direction: column;
    width: 100%;
    line-height: 20px;
    border-bottom: 1px solid white;
    margin: 0;
  }
`

const NavDropdownContainer = styled.div`
  position: absolute;
  left: 0;
  top: 100%;
  width: 100%;
  background-color: #efefef;
  padding: 20px 0px;
  box-sizing: border-box;
  display: none;
  justify-content: center;
  align-items: center;
  >ul{
    padding: 0;
    list-style-type: none;
    width: 100%;
    ${container}
    li{
      display: inline-block;
      margin: 0 20px;
      margin-bottom: 30px;
      a{
        display: inline-block;
        text-align: center;
        text-decoration: none;
        color: #222;
        padding: 15px 0;
        font-family: "Montserrat", sans-serif;
        font-size: 0.8em;
        width: 100%;
        :hover{
            color: #fe4a00;
        }
      }
    }
  }
  @media (max-width: 993px){
    position: relative;
    width: 100%;
    padding: 0;
    >ul li a{
      font-size: 0.8em;
      padding: 10px 0;
      text-transform: capitalize;
    }
  }
`
const _NavLink = styled(NavLink)`
  font-size: 0.7em;
  letter-spacing: 1px;
  text-decoration: none;
  color: #fff;
  text-transform: uppercase;
  font-family: 'Montserrat', sans-serif;
  transition: .2s;
  &:hover {
    color: #fe4a00;
  }
  @media (max-width: 993px){
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
  }
`
const NavDropdownParent = styled.div`
  font-size: 0.7em;
  letter-spacing: 1px;
  text-decoration: none;
  color: #fff;
  text-transform: uppercase;
  font-family: 'Montserrat', sans-serif;
  transition: .2s;
  &:hover {
    color: #fe4a00;
    cursor: pointer;
  }
  > i{
    margin-left: 5px;
  }
  @media (max-width: 993px){
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
  }
`
const SideNav = styled.div`
  display: flex;
  flex-direction: row;
`
const SocialMediaContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  :after{
    content: '';
    position: absolute;
    right: 0;
    top: 7px;
    height: 30px;
    width: 1px;
    background: #393939;
  }
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
      color: white;
      font-size: 0.7em;
      transition: .2s;
      :hover{
        color: #fe4a00;
      }
    }
  }
`
const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  >button{
    margin-left: 33px;
    color: white;
    background: none;
    border: none;
  }
`
const SearchForm = styled.div`
  border-bottom: none;
  position: fixed;
  top: 0;
  left: 0;
  right: auto;
  height: 100%;
  width: 100%;
  background: rgba(0,0,0,.5);
  text-align: center;
  opacity: 1;
  z-index: 201;
  -webkit-transition: all .4s ease;
  transition: all .4s ease;
  display: flex;
  justify-content: center;
  align-items: center;
  display: none;
  button{
    position: absolute;
    top: 20px;
    right: 20px;
    position: absolute;
    color: #ffa687;
    z-index: 99;
    top: 25px;
    font-size: 30px;
    font-weight: bold
    font-family: "Montserrat", sans-serif;
    background: transparent;
    outline: none;
    border: none;
    cursor: pointer;
  }
  form{
    position: relative;
    flex-direction: column;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80%;
    h5{
      text-transform: uppercase;
      color: #fff;
      font-weight: normal;
      font-family: 'Montserrat', sans-serif;
      line-height: 1.25em;
      font-weight: normal;
      letter-spacing: -1px;
      margin-bottom: 20px;
      font-size: 22px;
    }
    input{
      outline: none;
      border: none;
      border-bottom: 1px solid #c5c5c5;
      background: transparent;
      padding-left: 0;
      padding-right: 30px;
      color: #fff;
      width: 100%;
      line-height: 40px;
      padding: 0 13px;
      font-size: 12px;
    }
    i{
      color: #fff;
      position: absolute;
      right: 0;
      top: calc(100% - 36px);
      font-size: 24px;
      background: none;
      display: inline-block;
    }
  }
  @media (max-width: 680px){
      form{
        h5{
          font-size: 14px;
        }
        i{
          font-size: 12px;
        }
      }
  }
`

class Header extends Component{
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: false,
      isToggleDropOn: false,
      isToggleSearch: false,
    };

    // binding
    this.toggle = this.toggle.bind(this);
    this.toggleDropdown = this.toggleDropdown.bind(this);
    this.toggleSearch = this.toggleSearch.bind(this);
  }

  toggle(){
    var width = window.innerWidth
    || document.documentElement.clientWidth
    || document.body.clientWidth;

    if(width < 993){
      if(this.state.isToggleOn == false){
        document.querySelector('#nav').style.display = "flex";
      }else{
        document.querySelector('#nav').style.display = "none";
      }
      this.setState({
        isToggleOn: !this.state.isToggleOn
      })
    }
  }

  toggleDropdown(e){
    var width = window.innerWidth
    || document.documentElement.clientWidth
    || document.body.clientWidth;

    if(width < 993){
      if(this.state.isToggleDropOn == false){
        e.target.nextSibling.style.display = "flex";
      }else{
        e.target.nextSibling.style.display = "none";
      }
      this.setState({
        isToggleDropOn: !this.state.isToggleDropOn
      })
    }
  }

  toggleSearch(){
    if(this.state.isToggleSearch == false){
      document.querySelector("#search-form").style.display="flex";
    }else{
      document.querySelector("#search-form").style.display="none";
    }
    this.setState({
      isToggleSearch: !this.state.isToggleSearch
    })
  }

  componentDidUpdate(prevProps) {
    console.log("HEADER ", this.props, prevProps)
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0)
    }
  }

  render(){
    return(
      <HeaderContainer>
        <Helmet>
          <link rel="shortcut icon" type="image/x-icon" href=""/>
        </Helmet>
        <Container>
          <NavToggler onClick={this.toggle}>
            <i className="fas fa-bars"></i>
          </NavToggler>
          <Nav id="nav">
            <NavBrand>
              <_NavLink to={`/`}>
                <img src="https://dcnetworks.ie/wp/wp-content/uploads/2017/11/placeholder-logo-2.png"/>
              </_NavLink>
            </NavBrand>
            <NavDropdownItem key={1}>
              <_NavLink to={`/`}>Home</_NavLink>
            </NavDropdownItem>
            <NavDropdownItem key={2}>
              <_NavLink to={`/`}>Profile</_NavLink>
            </NavDropdownItem>
            <NavDropdownItem key={3}>
              <_NavLink to={`/`}>About</_NavLink>
            </NavDropdownItem>
            <NavDropdownItem key={4}>
              <NavDropdownParent onClick={(e)=>this.toggleDropdown(e)}>
                Dropdown
                <i className="fas fa-caret-down"></i>
              </NavDropdownParent>
              <NavDropdownContainer>
                <ul>
                  <li key={1}>
                    <_NavLink to={'/'}>Eric</_NavLink>
                  </li>
                  <li key={2}>
                    <_NavLink to={'/'}>Clapton</_NavLink>
                  </li>
                  <li key={3}>
                    <_NavLink to={'/'}>Stratocaster</_NavLink>
                  </li>
                  <li key={4}>
                    <_NavLink to={'/'}>Telecaster</_NavLink>
                  </li>
                </ul>
              </NavDropdownContainer>
            </NavDropdownItem>
          </Nav>
          <SideNav>
            <SocialMediaContainer>
              <SocialMediaList>
                <li key={1}>
                  <a href="">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li key={2}>
                  <a href="">
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li key={3}>
                  <a href="">
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
              </SocialMediaList>
            </SocialMediaContainer>
            <SearchContainer>
              <button onClick={this.toggleSearch}>
                <i className="fas fa-search"></i>
              </button>
              <SearchForm id="search-form">
                <button onClick={this.toggleSearch}>X</button>
                <form>
                  <h5>Start Typing and Press enter to search</h5>
                  <input type="text"></input>
                  <i className="fas fa-search"></i>
                </form>
              </SearchForm>
            </SearchContainer>
          </SideNav>
        </Container>
      </HeaderContainer>
    )
  }
}

export default withRouter(Header);
