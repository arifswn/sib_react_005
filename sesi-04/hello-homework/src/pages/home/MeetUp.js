import { Card, Row, Col } from "react-bootstrap"

function MeetUp() {
  return (
    <Row>
      <Col md="{12}">
        <Card className="border-0 rounded shadow-sm">
          <Card.Body className="p-4">
            <Row>
              <Col className="col-auto">
                <div className="bg-large"></div>
              </Col>
              <Col className="m-0 mx-auto">
                <h3>Hacktiv8 MeetUp</h3>
                <div className="lead text-meet">
                  <Row>
                    <Col className="col-2">Location</Col>
                    <Col className="col-7">Jakarta, Indonesia</Col>
                  </Row>
                  <Row>
                    <Col className="col-2">Members</Col>
                    <Col className="col-7">1,078</Col>
                  </Row>
                  <Row>
                    <Col className="col-2">Organizers</Col>
                    <Col className="col-7">Adhy Wiranata</Col>
                  </Row>
                  <button className="btn btn-warning mt-3 col-sm-4">
                    Join Us
                  </button>
                </div>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  )
}

export default MeetUp
