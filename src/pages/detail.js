import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Helmet } from "react-helmet";
import styled from 'styled-components';

import { fetch_detail } from '../actions';

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
  ${container}
  font-family: 'Montserrat', sans-serif;
  padding-top: 116px;
  >div{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 15px;
  }
`;

const ContainerNav = styled.div`
  width: 33.3%;
  a{
    transition: .2s;
    text-decoration: none;
    color: #222;
    font-size: 12px;
  }
  a:hover{
    color: #ffa687;
  }
  :first-child{
    a i{
      margin-right: 10px;
    }
  }
  :last-child{
    text-align: right;
    a i{
      margin-left: 10px;
    }
  }
  @media (max-width: 768px){
    a{
      display: none;
    }
  }
`

const Main = styled.main`
  ${main}
`
const Aside = styled.aside`
  ${aside}
`
const Header = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 0.675em;
  font-weight: normal;
  color: #636363;
  letter-spacing: 1px;
  >a{
    text-decoration: none;
    display: inline-block;
    color: #222;
    :hover{
      color: #ffa687;
    }
  }
  h1{
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
    h1{
      font-size: 1.375em;
    }
  }
  @media (max-width: 480px){
    h1{
      font-size: 20px;
    }
  }
`
const TitleInfo = styled.div`
  text-transform: uppercase;
  i{
    font-size: 3.5px;
    margin: 0 10px;
  }
  >a{
    text-decoration: none;
    transition: .2s;
    color: #222;
    :hover{
      color: #ffa687;
    }
  }
  @media (max-width: 480px){
    font-size: 8px;
  }
`

const Content = styled.article`
  text-align: center;
  margin-bottom: 60px;
  p{
    font-family: "Lato", sans-serif;
    text-align: left;
    color: #636363;
    font-size: 0.9375em;
    line-height: 1.625em;
  }
`
const ContentThumbnail = styled.figure`
  width: width;
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
const ContentListicle = styled.div`
  margin: 50px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  figure{
    img{
      width: 80%;
    }
    figcaption a{
      color: #222;
      font-size: 0.8em;
      text-decoration: none;
      margin-top: 10px;
      display: inline-block;
      font-weight: bold;
      :hover{
        color: #ffa687;
      }
    }
  }
`

const ContentSubheading = styled.span`
  h1,h2,h3,h4,h5,h6{
    font-size: 1.1em;
    margin-bottom: 30px;
  }
`

const ContentFooter = styled.footer`
  padding: 11px 0;
  border-top: 1px dashed #eee;
  border-bottom: 3px solid #ffe6dd;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  margin-top: 35px;
  div{
    width: 50%;
    box-sizing: border-box;
    font-size: 0.750em;
    color: #636363;
  }
  div:first-child{
    text-align: left;
    span:first-child{
      display: inline-block;
      margin-right: 5px;
    }
    span:last-child{
      font-weight: bold;
      color: #222;
    }
  }
  div:last-child{
    text-align: right;
    i{
      color: #222;
      margin: 0 10px;
    }
  }
`
class Detail extends Component{

  componentWillMount(){
    this.props.fetch_detail(this.props.match.params.id);
    console.log('CWM ',this.props);
  }

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0)
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.id !== nextProps.match.params.id) {
      this.props.fetch_detail(this.props.match.params.id );
    }
  }

  render(){
    return(
      <Fragment>
          <Helmet>
              <title>Title</title>
              <meta name="title" content="Title"/>
            </Helmet>
        <Container>
          <div>
            <ContainerNav>
              <NavLink to=""><i className="fas fa-angle-left"></i>Previous Post</NavLink>
            </ContainerNav>
            {
              !this.props.detailIsLoading && this.props.detail ?
                <Header>
                  <TitleInfo>
                    <time>Just Now</time> <i className="fas fa-circle"></i>
                    <NavLink to={`/`}>By UserId {this.props.detail.userId}</NavLink>
                    <i className="fas fa-circle"></i>
                    Travel
                  </TitleInfo>
                  <NavLink to=""><h1>{ this.props.detail.title }</h1></NavLink>
                </Header>
              :
                <Header>
                  <NavLink to=""><h1>Loading...</h1></NavLink>
                </Header>
            }
            <ContainerNav>
              <NavLink to="">Next Post<i className="fas fa-angle-right"></i></NavLink>
            </ContainerNav>
          </div>
        </Container>
        <PageContainer>
          <Main>
            {
              /*
              PRINT CONTENT
              =============
              */
              !this.props.detailIsLoading && this.props.detail ?
                <Fragment>
                  <Content>
                    <ContentThumbnail>
                      <img src="https://www.syncron.com/wp-content/uploads/2017/03/img-placeholder-300x189.png"/>
                    </ContentThumbnail>
                    <span dangerouslySetInnerHTML={{__html: this.props.detail.body}}></span>

                    <span dangerouslySetInnerHTML={{__html: this.props.detail.body}}></span>
                    <ContentFooter>
                      <div>
                        <span>
                          Tag:
                        </span>
                        <span>
                          Gaming, Xbox, PS4
                        </span>
                      </div>
                      <div>
                        <span>
                          Share:
                        </span>
                        <i className="fab fa-facebook"></i>
                        <i className="fab fa-twitter"></i>
                        <i className="fab fa-youtube"></i>
                        <i className="fab fa-instagram"></i>
                      </div>
                    </ContentFooter>
                  </Content>
                </Fragment>
              :
                'Loading...'
            }
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
    detail: state.detail,
    detailIsLoading: state.detailIsLoading,
  }
}

const mapDispatchToProps = dispatch => ({
    fetch_detail: (id) => dispatch(fetch_detail(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Detail);
