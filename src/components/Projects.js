import React from "react";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "ML Project",
      description: "Drowsiness Detection",
      imgUrl: projImg1,
    },
    {
      title: "IoT based 3D Printer",
      description: "Successfully Callibrated Arduino Mega based 3D Printer to deliver High Quality Prints",
      imgUrl: projImg2,
    },
    {
      title: "CRUD FastAPI App with SQLAlchemy and PostgreSQL",
      description: "Developed a robust Backend CRUD Application",
      imgUrl: projImg3,
    }/*,
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    }

    {
      title: "",
      description: "Successfully Callibrated Arduino Mega based 3D Printer to deliver High Quality Prints",
      imgUrl: projImg2,
    },
    {
      title: "CRUD FastAPI App with SQLAlchemy and PostgreSQL",
      description: "Developed a robust Backend CRUD Application",
      imgUrl: projImg3,
    },*/
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p></p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">PROJECTS</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">STUFFS</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">STUFFS</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p>I graduated with a B.Tech degree in 2023, and I successfully aced the job interviews with two prestigious MNCs. They were so impressed that they promptly sent me offer letters, but here's the plot twist - it's been a year and a half, 
                        and I'm still waiting for that "Welcome aboard" call. In the meantime, I briefly considered unleashing a bot to comment on every LinkedIn post these companies make, you know, to nudge them gently. But then I thought,
                         "Hey, that's probably against LinkedIn norms, and I don't want to start my professional journey with a rebellious bot saga." So, here I am, patiently waiting and contemplating the complexities of the corporate universe  where even bots must mind their manners! 🤖✉️ #JobSearchAdventures #PatientlyImpatient
                      </p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Picture this you're cruising through the wild world of my personal portfolio page, and lo and behold, the entire background is rocking a group photo party. Forget the left corner drama; we're talking a grand Bollywood-style banner welcoming you in! And who's hogging the limelight in the epic tale of pixels and pouts? Yours truly, center stage, sporting Red Converse like I'm about to break into a dance sequence,
                         with a red rose in hand because, you know, subtlety is overrated. It's not just a background; it's a visual spectacle with me, the Converse commander, orchestrating the pixelated pandemonium! 🌹👟</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt=""></img>
    </section>
  )
}
