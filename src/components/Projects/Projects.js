import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

// import empty from "../../Assets/Projects/project_empty.png";
import eMesh from "../../Assets/Projects/eMesh.png";
import Voronoi from "../../Assets/Projects/Voronoi.png";
import Pokemon from "../../Assets/Projects/pokemon.png";
import BlueSafe from "../../Assets/Projects/blue-safe.png";
import GoTask from "../../Assets/Projects/gotask.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few of my larger projects
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={eMesh}
              isGh={true}
              second={true}
              isPhone=""
              title="eMesh.io"
              label_1="Github"
              label_2=" DevPost"
              description="Hardware device that enables the users to have a long-range communications device without the need for wifi. It uses the rfm69 module to send data between raspberry pis. We also have an app that allows the user to use their phone to communicate with the pis and the network via Bluetooth"
              link_1="https://github.com/wmcclinton/eMesh.io"
              link_2="https://devpost.com/software/emesh-io"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Voronoi}
              isBlog={false}
              isGh={true}
              label_1="Github"
              title="Voronoi & Delaunay"
              description="Created an interactive Voronoi Diagram and Delaunay Triangulation that you can add points and restart the diagram. Additionally, toggle relationships between the two diagrams such as the convex hull and circumscribed triangles. Programmed in Java based programming langauge Processing."
              link_1="https://github.com/dtheberge/voronoi-and-delaunay"
            // link_2=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Pokemon}
              isGh={true}
              isBlog={false}
              title="Terminal Pokemon"
              label_1="Github"
              description="Reformed the original Pokemon game to work in the Windows or Linux Terminal. This project I aimed to use most all Object Oriented Programming strategies such as Polymorphism, Encapsulation, Inheritance, etc. Programming in language C++."
              link_1="https://github.com/dtheberge/PokemonProject"
            // link_2=""              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={GoTask}
              isBlog={false}
              title="GoTask"
              description="Collaborated with the Company OnTask to use their eSignature and Automated Workflows into an easy to use and appealing Google Chrome extension. This was so that their functionality can be used without leaving the comfort of you Google Docs or Sheet to start your workflow with that document. This was programmed by a team and I using Axios, Javascript, and HTML, in an Agile setting"
            // link_1=""
            // link_2=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={BlueSafe}
              isBlog={true}
              isGh={true}
              second={true}
              title="BlueSafe"
              label_1="Github"
              label_2=" Devpost"
              description="Created a safety app to help increase safety of walks, specifically those alone. Features include contacting authorities, emergency contacts, and pinging your location to them when desired. Programmed using React Native, Android Studio, ExpressJS and Typescript."
              link_1="https://github.com/sethgaglione/hackabull-2021-frontend"
              link_2="https://devpost.com/software/blue-safe"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={empty}
              isBlog={false}
              title="CO2-Aversion"
              description=""
              // link_1=""
              // link_2=""
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
