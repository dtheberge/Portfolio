import React from "react";
import Card from "react-bootstrap/Card";
import { IoIosArrowForward } from "react-icons/io";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "Left" }}>
            Hello, I am <span className="purple">Derryk Theberge </span>
            located in <span className="purple"> Oklahoma.</span>
            <br /><br />Currently, a software engineer at Northrop Grumman. Additionally a graduate student pursuing a Masters in Computer Science from the <span className="purple">Georgia Institute of Technology.</span>
            <br />
            <br />
            Apart from coding, some other activities that I love to do
          </p>
          <ul>
            <li className="about-activity">
              <IoIosArrowForward /> Ice Skating
            </li>
            <li className="about-activity">
              <IoIosArrowForward /> Tutoring
            </li>
            <li className="about-activity">
              <IoIosArrowForward /> Traveling
            </li>
            <li className="about-activity">
              <IoIosArrowForward /> Playing Games
            </li>
            <li className="about-activity">
              <IoIosArrowForward /> Software Projects
            </li>
            <li className="about-activity">
              <IoIosArrowForward /> Learning Languages
            </li>
          </ul>

          <p style={{ color: "#2D82B7", textAlign: "left" }}>
            “Research is to see what everybody else has seen, and to think what nobody else has thought.” {" "}
          </p>
          <footer className="blockquote-footer">Albert Szent-Györgyi</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
