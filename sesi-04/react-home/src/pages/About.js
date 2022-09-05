// import component Bootstrap React
import { Card, Container, Row, Col, Button } from "react-bootstrap"
import Image from "react-bootstrap/Image"
import NavBread from "./templates/Breadcrumb"

function About() {
  return (
    <Container className="mt-3">
      <NavBread title="About" />
      <Row>
        <Col md="{12}">
          <Card className="border-0 rounded shadow-sm">
            <Card.Body className="p-4">
              <h1>About</h1>
              <hr />
              <Row className="centered">
                <Image
                  src={"assets/avatar.png"}
                  className="photo"
                  roundedCircle
                />
                <h3>Arif Setiawan</h3>
                <p>
                  Mobile Apps Development Enthusiast
                  <br />
                  Bandar Lampung, Indonesia
                </p>
                <Row className="centered" xs={"auto"}>
                  <Col>
                    <Button
                      href="https://github.com/arifswn"
                      target="_blank"
                      variant="secondary"
                      size="lg"
                    >
                      Github
                    </Button>
                  </Col>
                  <Col>
                    <Button
                      href="https://www.linkedin.com/in/arifswn"
                      target="_blank"
                      variant="default"
                      size="lg"
                      className="btn-outline-primary"
                    >
                      LinkedIn
                    </Button>
                  </Col>
                </Row>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default About
