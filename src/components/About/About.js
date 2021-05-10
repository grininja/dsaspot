import React, { useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import Alert from "react-bootstrap/Alert";
import Badge from "react-bootstrap/Badge";
import Spinner from "react-bootstrap/Spinner";
import './About.css';
import Fade from "react-reveal/Fade";
// import CSS from "../TopicCard/topicCard.css";
import ParticlesBg from "particles-bg";

import { Header } from "semantic-ui-react";


const name="Welcome to DSA spot";
const description="DSA spot will helps you build your confidence in solving any coding related question and helps you in logic building.One and only resource of selected questions"

export default function Head(){
	return(
		<div>
		<header id="home">
        <ParticlesBg type="circle" bg={true} />


          

        <div className="row banner">
          <div className="banner-text">
            <Fade bottom>
              <h1 className="responsive-headline">{name}</h1>
            </Fade>
            <Fade bottom duration={1200}>
              <h3>{description}.</h3>
            </Fade>
            <hr />
            <Fade bottom duration={2000}>
              <ul className="social">
                <a href="/home" className="button btn project-btn" style={{backgroundColor:"red"}}>
                  <i className="fa fa-book" ></i>Let's get started
                </a>
              </ul>
            </Fade>
          </div>
        </div>

        <p className="scrolldown">
          <a className="smoothscroll" href="#about">
            <i className="icon-down-circle"></i>
          </a>
        </p>
      </header>
	</div>
	);
}
