import React, { Component, Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import Owl from "react-owl-carousel2";
import { Helmet } from "react-helmet";
import styled from 'styled-components';

import { fetch_trendings } from '../actions';
import Sidebar from '../components/sidebar';
import pageContainer from '../styled-global-components/page-container';
import container from '../styled-global-components/container';
import button from '../styled-global-components/button';
import main from '../styled-global-components/main';
import aside from '../styled-global-components/aside';

const PageContainer = styled.section`
  ${pageContainer}
  font-family: 'Montserrat', sans-serif;
`
const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 96px
  .owl-dots{
    margin-top: 35px!important;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .owl-theme .owl-dots .owl-dot span{
    height: 6px;
    width: 6px;
    background-color: #222;
  }
  .owl-theme .owl-dots .owl-dot.active span, .owl-theme .owl-dots .owl-dot:hover span{
    height: 8px;
    width: 8px;
    background-color: white;
    border: 2px solid rgb(255, 166, 135);
  }
`
const Headline = styled.figure`
  background-color: #222;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin: 0;
  height: 400px;
  @media (max-width: 768px){
    height: 280px;
  }
  @media (max-width: 479px){
    height: 340px;
  }
`
const HeadlineDetail = styled.figcaption`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  font-family: "Montserrat", sans-serif;
  >div{
    background-color: rgba(255,255,255,0.8);
    width: 80%;
    box-sizing: border-box;
    padding: 70px 10px;
    text-align: center;
    span{
      letter-spacing: 1px;
      font-size: 0.8125em;
      font-weight: normal;
      text-transform: uppercase;
      color: #636363;
      line-height: 0.8125em;
      display: flex;
      justify-content: center;
      align-items: center;
      i{
          font-size: 4px;
          margin: 0 6px;
      }
    }
    a{
      text-decoration: none;
      display: inline-block;
      h3{
        letter-spacing: -1px;
        font-weight: normal;
        font-size: 1.275em;
        color: #222;
        transition: .2s;
      }
      :hover{
        h3{
          color: #ffa687;
        }
      }
    }
  }
  @media (max-width: 480px){
      >div{
        span{
          font-size: 0.6em;
        }
        a{
          h3{
            font-size: 1em;
          }
        }
      }
  }
`
const Main = styled.main`
  ${main}
`
const Aside = styled.aside`
  ${aside}
`
const HeroContent = styled.article`
  text-align: center;
  margin-bottom: 80px;
  p{
    font-family: "Lato", sans-serif;
    text-align: left;
    color: #636363;
    font-size: 0.9375em;
    line-height: 1.625em;
  }
`
const HeroThumbnail = styled.figure`
  width: 100%;
  height: 470px;
  background-color: #222;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  margin-bottom: 45px;
  img{
    width: 100%;
  }
`
const HeroHeader = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 0.675em;
  font-weight: normal;
  color: #636363;
  letter-spacing: 1px;
  div{
    text-transform: uppercase;
    i{
      font-size: 3.5px;
      margin: 0 10px;
    }
    a{
      text-decoration: none;
      transition: .2s;
      :hover{
        color: #ffa687;
      }
    }
  }
  a{
    text-decoration: none;
    display: inline-block;
    color: #222;
    :hover{
      color: #ffa687;
    }
  }
  h2{
    transition: .2s;
    font-weight: normal;
    font-size: 2.25em;
    position: relative;
    margin-bottom: 40px;
    margin-top: 20px;
    letter-spacing: -1px;
    text-align: center;
    :after{
      content: '';
      position: absolute;
      width: 36px;
      height: 3px;
      background: #ffa687;
      left: calc(50% - 18px);
      top: 100%;
      margin-top: 25px;
    }
  }
  @media (max-width: 768px){
    h2{
      font-size: 1.375em;
    }
  }
  @media (max-width: 480px){
    div{
      font-size: 10px;
    }
    h2{
      font-size: 20px;
    }
  }
`
const HeroFooter = styled.footer`
  padding: 11px 0;
  border-top: 1px dashed #eee;
  border-bottom: 3px solid #ffe6dd;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  margin-top: 35px;
  div{
    width: 33.3%;
    box-sizing: border-box;
    span{
      font-size: 0.675em;
      color: #222;
      font-weight: normal;
      i{
        color: #e0e0e0;
        margin-right: 5px;
      }
    }
    span:last-child{
      i{
        margin-left: 10px;
      }
    }
  }
  div:first-child{
    text-align: left;
  }
  div:nth-child(2){
    text-transform: uppercase;
    letter-spacing: 1px;
    font-size: 0.675em;
    a{
      text-decoration: none;
      transition: .2s;
      :hover{
        color: #ffa687;
      }
    }
  }
  div:last-child{
    text-align: right;
  }
`
const ListContent = styled.section`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: start;
  padding-left: 0;
`
const Content = styled.article`
  width: 50%;
  flex-shrink: 0;
  box-sizing: border-box;
  margin-bottom: 80px;
  :nth-child(odd){
    padding-right: 15px;
  }
  :nth-child(even){
    padding-left: 15px;
  }
  p{
    font-family: "Lato", sans-serif;
    text-align: left;
    color: #636363;
    font-size: 0.9375em;
    line-height: 1.625em;
  }
  @media (max-width: 480px) {
     width: 100%;
     :nth-child(odd){
       padding-right: 0;
     }
     :nth-child(even){
       padding-left: 0;
     }
  }
`
const ContentThumbnail = styled.figure`
  width: 100%;
  margin: 0;
  margin-bottom: 45px;
  background-color: #444;
  height: 240px;
  display: flex;
  justify-content: center;
  align-items: center;
  img{
    width: 100%;
  }
  @media (max-width: 768px){
    height: 225px;
  }
  @media (max-width: 480px){
    height: 230px;
  }
`
const ContentHeader = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-weight: normal;
  color: #636363;
  letter-spacing: 1px;
  div{
    font-size: 0.675em;
    text-transform: uppercase;
    i{
      font-size: 3.5px;
      margin: 0 10px;
    }
    a{
      text-decoration: none;
      transition: .2s;
      :hover{
        color:#ffa687;
      }
    }
  }
  a{
    text-decoration: none;
    display: inline-block;
    color: #222;
    :hover{
      color:#ffa687;
    }
  }
  h2{
    transition: 0.2s;
    font-weight: normal;
    font-size: 1.375em;
    position: relative;
    margin-bottom: 40px;
    margin-top: 20px;
    letter-spacing: -1px;
    text-align: center;
    :after{
      content: '';
      position: absolute;
      width: 36px;
      height: 3px;
      background: #ffa687;
      left: calc(50% - 18px);
      top: 100%;
      margin-top: 30px;
    }
  }
  @media (max-width: 768px){
    h2{
      font-size: 1.175em;
    }
  }
  @media (max-width: 480px){
    div{
      font-size: 10px;
    }
    h2{
      font-size: 20px;
    }
  }
`
const MoreContent = styled.div`
  text-align: right;
  width: 100%;
`
const PrimaryButton = styled.button`
  ${button}
`

class Home extends Component{
  componentWillMount(){
    this.props.fetch_trendings();
    console.log('CWM ',this.props);
  }

  render(){
    const options = {
      dots: true,
      rewind: true,
      autoplay: false,
      responsive: {
        0 : {
          items: 1,
          margin: 0,
        },
        480 : {
          margin: 30,
          items : 2,
        },
        1200 : {
          margin: 30,
          items : 3,
        }
      }
    };
    return(
      <Fragment>
        <Helmet>
          <title>My React Boilerplate</title>
          <meta name="title" content="This is just a boilerplate"/>
        </Helmet>
        <Container>
        {
          this.props.trendings && this.props.trendings.length > 1?
            <Owl options={options}>
              {
                this.props.trendings.slice(0,9).map(trending =>{
                  return(
                    <Headline key={trending.id}>
                      <img src="https://www.syncron.com/wp-content/uploads/2017/03/img-placeholder.png?x31871"/>
                      <HeadlineDetail>
                        <div>
                          <span>
                            <time>Just Now</time> <i className="fas fa-circle"></i>
                              By User ID No {trending.userId}
                            </span>
                            <NavLink to={`/detail/${trending.id}`}><h3>{trending.title}</h3></NavLink>
                          </div>
                        </HeadlineDetail>
                      </Headline>
                  )
                })
              }
            </Owl>
          :''
        }
        </Container>
        <PageContainer>
          <Main>
            <HeroContent>
              <HeroThumbnail>
                <img src="https://www.syncron.com/wp-content/uploads/2017/03/img-placeholder.png?x31871"/>
              </HeroThumbnail>
              <HeroHeader>
                <div>
                  <time>Just Now</time>
                  <i className="fas fa-circle"></i>
                  <NavLink to={`/`}>By Testing</NavLink>
                  <i className="fas fa-circle"></i> Travel
                </div>
                <NavLink to={`/`}><h2>Title</h2></NavLink>
              </HeroHeader>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <HeroFooter>
                <div>
                  <span>
                    <i className="fas fa-comment"></i>
                    10
                  </span>
                  <span>
                    <i className="fas fa-heart"></i>
                    235
                  </span>
                </div>
                <div><NavLink to="">Read More</NavLink></div>
                <div>
                  <span>
                    <i className="fas fa-share-square"></i>
                    93 Shares
                  </span>
                </div>
              </HeroFooter>
            </HeroContent>
            <ListContent>
              {
                this.props.trendings && !this.props.trendingsIsLoading && this.props.trendings.length > 1 ?
                this.props.trendings.slice(0,4).map(grid => {
                  return(
                    <Content key={grid.id}>
                      <ContentThumbnail>
                        <img src="https://www.syncron.com/wp-content/uploads/2017/03/img-placeholder.png?x31871"/>
                      </ContentThumbnail>
                      <ContentHeader>
                        <div>
                          <time>Just Now</time><i className="fas fa-circle"></i>
                          <NavLink to={`/`}>By UserId{grid.userId}</NavLink>
                        </div>
                        <NavLink to={`/detail/${grid.id}`}><h2>{grid.title}</h2></NavLink>
                      </ContentHeader>
                      <p>
                        lorem ipsum dolor sit amet
                      </p>
                    </Content>
                  )
                })
                :'Loading...'
              }
              <MoreContent>
                <PrimaryButton onClick={this.fetchNextGrids}>Older Posts</PrimaryButton>
              </MoreContent>
            </ListContent>
          </Main>
          <Aside>
            <Sidebar/>
          </Aside>
        </PageContainer>
      </Fragment>
    )
  }
}

function mapStateToProps(state) {
  return {
    trendings: state.trendings,
    trendingsIsLoading: state.trendingsIsLoading,
  }
}

const mapDispatchToProps = dispatch => ({
    fetch_trendings: () => dispatch(fetch_trendings()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
