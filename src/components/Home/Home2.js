import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  // AiOutlineTwitter,
  // AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              A LITTLE ABOUT  <span className="purple"> MY STORY </span>
            </h1>
            <p className="home-about-body">
              Since I was in primary school, I have loved mathematics. As I entered HS, I also discovered Programming and its math-like structure and logic.  🤷‍♂️
              <br /><br />
              Not willing to negoitiate these two passions I got two bachelors at the University of South Florida. I am now continuing into a Masters of computer science.
              <br /><br />
              I am fluent in languages such as
              <i>
                <b className="purple"> C, C++, Java, Python, and Matlab. </b>
              </i>
              <br />
              <br />
              The subjects that interest me most are
              <i>
                <b className="purple"> Quantum Algorithms, Neural Networks </b> and areas related to{" "}
                <b className="purple">
                  Abstract Algebra.
                </b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/dtheberge"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/derryktheberge/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
