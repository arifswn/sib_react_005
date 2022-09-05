// import component Bootstrap React
import { Card, Container, Row, Col } from "react-bootstrap"
import NavBread from "./templates/Breadcrumb"

function Home() {
  return (
    <Container className="mt-3">
      <NavBread title="Home" />
      <Row>
        <Col md="{12}">
          <Card className="border-0 rounded shadow-sm">
            <Card.Body className="p-4">
              <h1>Home</h1>
              <hr />
              <p className="lead">Selamat Datang...</p>
              <span>Belajar Tentang React !!</span>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default Home
