import React, { Component, Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { connect } from 'react-redux';

import { fetch_virals } from '../actions';
import container from '../styled-global-components/container';
import button from '../styled-global-components/button';

const Container = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  font-family: "Montserrat", sans-serif;
  ${container}
`
const Banner = styled.figure`
  background-color: #222;
  margin: 0;
  margin-bottom: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  img{
    width: 100%;
  }
`
const Widget = styled.div`
  margin-bottom: 50px;
  h6{
    font-weight: bold;
    margin-bottom: 35px;
    padding-top: 20px;
    border-top: 1px dashed #eee;
    letter-spacing: 0;
    font-size: 0.875em;
  }
  >div{
    a i{
      color: #222;
      margin-right: 30px;
    }
  }
  >form{
    display: flex;
    flex-direction: row;
    input{
      width: 100%;
      border: none;
      line-height: 2.5em;
      padding: 0 13px;
      background: #efefef;
      font-size: 0.750em;
      border-radius: 2px;
      outline: none;
    }
  }
  >ul{
    list-style-type: none;
    padding: 0;
  }
`

const CategoryLink = styled(NavLink)`
  text-decoration: none;
  margin-bottom: 10px;
  display: block;
  color: #222;
  font-size: 0.625em;
  line-height: 1.625em;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: 0.2s;
  :hover{
    color: #ffa687;
  }
`

const TagLink = styled(NavLink)`
  padding: 8.5px 16px;
  text-align: center;
  display: inline-block;
  background: #efefef;
  color: #8d8d8d;
  line-height: 0.625em;
  font-size: 0.625em;
  margin: 0 20px 15px 0;
  border-radius: 2px;
  text-decoration: none;
  :hover{
    background: #ffa687;
    color: white;
  }
`

const TagList = styled.ul`
  display: flex;
  flex-wrap: wrap
  flex-direction: row;
`

const ViralPost = styled.article`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 40px;
  font-family: "Montserrat", sans-serif;
  h5{
    margin-top: 10px;
    font-size: 1em;
    line-height: 1.375em;
    font-weight: normal;
  }
  time{
    font-size: 0.625em;
    color: #636363;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
`
const ViralThumbnail = styled.figure`
  width: 140px;
  margin: 0;
  margin-right: 20px;
  flex-shrink: 0;
  img{
    width: 100%;
  }
`

const ViralLink = styled(NavLink)`
  text-decoration: none;
  transition: .2s;
  color: #222;
  :hover{
    color: #ffa687;
  }
`

const Button = styled.button`
  ${button}
  background-color: #222;
  color: white;
  margin-left: 10px;
  padding: 7px 15px;
  text-transform: none;
`

class Sidebar extends Component{
  componentWillMount(){
      this.props.fetch_virals();
  }

  render(){
    return(
      <Fragment>
        <Banner>
          <img src="https://i.vimeocdn.com/portrait/15640694_300x300"/>
        </Banner>
        <Widget>
          <h6>Follow Us!</h6>
          <div>
            <a href="/"><i className="fab fa-facebook"></i></a>
            <a href="/"><i className="fab fa-instagram"></i></a>
            <a href="/"><i className="fab fa-youtube"></i></a>
          </div>
        </Widget>
        <Widget>
          <h6>Subscribe to Newsletter</h6>
          <form>
            <input type="text" placeholder="Your Email"/>
            <Button type="submit">Send</Button>
          </form>
        </Widget>
        <Widget>
          <h6>Categories</h6>
          <ul>
            <li><CategoryLink to="/">Animal</CategoryLink></li>
            <li><CategoryLink to="/">Environment</CategoryLink></li>
            <li><CategoryLink to="/">Lifestyle</CategoryLink></li>
            <li><CategoryLink to="/">Travel</CategoryLink></li>
          </ul>
        </Widget>
        <Widget>
          <h6>Viral Posts</h6>
          <section>
            {
              this.props.virals && this.props.virals.length > 1?
                this.props.virals.slice(0,3).map( viral =>{
                  return(
                    <ViralPost key={viral.id}>
                      <ViralThumbnail>
                        <img src="https://360taxsolutions.com/wp-content/uploads/2017/11/placeholder-sample-logo.png"/>
                      </ViralThumbnail>
                      <div>
                        <time>4 Days Ago</time>
                        <h5><ViralLink to={`/detail/${viral.id}`}>{viral.name}</ViralLink></h5>
                      </div>
                    </ViralPost>
                  )
                })
              :
                ''
            }
          </section>
        </Widget>
        <Widget>
          <h6>Tags</h6>
          <TagList>
            <li><TagLink to="">Coffee</TagLink></li>
            <li><TagLink to="">Tech</TagLink></li>
            <li><TagLink to="">Game</TagLink></li>
            <li><TagLink to="">Ronaldo</TagLink></li>
            <li><TagLink to="">Christiano</TagLink></li>
            <li><TagLink to="">Smackdown</TagLink></li>
            <li><TagLink to="">Raw</TagLink></li>
          </TagList>
        </Widget>
      </Fragment>
    )
  }
}

function mapStateToProps(state) {
  return {
    virals: state.virals
  }
}

const mapDispatchToProps = dispatch => ({
    fetch_virals: () => dispatch(fetch_virals()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
