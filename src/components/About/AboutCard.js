import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">RANJEET PATEL </span>
            from <span className="purple"> Rewa, India.</span>
            <br />I am currently doing  B.TECH in information technology from SIRT
            BHOPAL.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Cricket
            </li>
            <li className="about-activity">
              <ImPointRight /> Learning new technologies
            </li>
            <li className="about-activity">
              <ImPointRight /> Spend time with friends and family
            </li>
            <li className="about-activity">
              <ImPointRight />Drawing portrait 
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Always start with small then you get a big result because of your consistency"{" "}<br/>
            "हमेशा छोटे से शुरुआत करें, फिर आपको स्थायित्व के कारण बड़ा परिणाम मिलेगा।"
          </p>
          <footer className="blockquote-footer">Ranjeet</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
