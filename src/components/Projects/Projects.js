import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Cart-system"
              description="The cart system I am building will allow users to add products, update quantities, and remove items from their shopping cart seamlessly. It will provide a user-friendly interface, ensuring a smooth and intuitive shopping experience. Through the implementation of features such as persistent storage."
              ghLink="https://github.com/Ranjeet-patel/cart-system"
              demoLink="https://ranjeet-patel.github.io/cart-system/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Recipe-Mania"
              description="a website using Node.js that allows users to create and view new recipes. With Node.js, I am able to build a robust backend system that handles recipe creation, storage, and retrieval. Users can easily create their own recipes and browse through a collection of delicious culinary creations"
              ghLink="https://github.com/Ranjeet-patel/Recipe-Mania"
    
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="shop managment system"
              description="I am creating a shop management system using Node.js, enabling efficient management of inventory, sales, and customer data. This system streamlines the process of tracking stock levels, generating invoices, and managing customer information. With Node.js, I can build a reliable and scalable solution for effective shop management."
              ghLink="https://github.com/Ranjeet-patel/new-shop"            
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Translation app"
              description="This app utilizes the LibreTranslate API to provide real-time translation functionality. Users can select the source and target languages, enter text to be translated, and instantly view the translated output. The app offers a simple and intuitive interface for seamless language translation.."
              ghLink="https://github.com/Ranjeet-patel/language-translator"
              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
