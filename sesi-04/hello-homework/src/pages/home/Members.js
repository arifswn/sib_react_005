import { Card, Col, Row } from "react-bootstrap"

function Members() {
  return (
    <Row className="mt-3">
      <Col md="{12}">
        <Card className="border-0 rounded shadow-sm">
          <Card.Body className="p-4">
            <Row>
              <Col>
                <h3>Members</h3>
              </Col>
              <Col>
                <div className="text-right">See All</div>
              </Col>
            </Row>
            <hr />
            <Row>
              <Col className="col-auto">
                <div className="bg-small"></div>
              </Col>
              <Col xs={8} className="pl-3 text-left">
                <div className="lead">
                  <h3>Organizers</h3>
                  <Row className="small">
                    <Col className="col-2">Adhy Wiranata</Col>
                    <Col className="col-6">4 others.</Col>
                  </Row>
                </div>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  )
}

export default Members
