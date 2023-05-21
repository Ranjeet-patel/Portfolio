import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/IMG_20220921_133504-removebg(1)-min.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";

import './home.css'
import { FaFacebookF,FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">

I'm Ranjeet Patel, a passionate student specializing in MERN (MongoDB, Express.js, React.js, Node.js) stack web development. As a fresher in the field, I am enthusiastic about building dynamic and engaging web applications.<br/>
<br/>
My primary focus is on front-end development, and I have a strong command of HTML, CSS, JavaScript, and React.js. I enjoy creating intuitive user interfaces and ensuring seamless user experiences. Additionally, I am proficient in back-end technologies such as Node.js and have experience working with databases like MongoDB and SQL.<br/>
<br/>
During my studies, I have completed various projects that have helped me refine my skills in web development. Each project has allowed me to apply my knowledge of HTML, CSS, JavaScript, and React.js to create responsive and interactive websites.<br/>
<br/>
I am eager to continue expanding my knowledge and gaining hands-on experience in web development. If you have any exciting opportunities, collaboration proposals, or feedback, please feel free to reach out to me using the contact information provided.<br/>
<br/>
Thank you for taking the time to visit my portfolio website. I hope you enjoy exploring my work!<br/>
<br/>
Best regards,<br/>
Ranjeet Patel<br/>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid myImg" alt="avatar" />
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
                  href="https://github.com/Ranjeet-patel"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.facebook.com/ranjee.patel.58/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaFacebookF />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/ranjeet-patel-658b30200/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/ran.jeet_05/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
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
