import { Row, Col, Card } from "react-bootstrap"

function AboutMeetUp() {
  return (
    <Row className="mt-3">
      <Col md="{12}">
        <Card className="border-0 rounded shadow-sm">
          <Card.Body className="p-4">
            <h3>About MeetUp</h3>
            <hr />
            <p>
              Come and meet other developers interested in the JavaScript and
              it's library in the Greater Jakarta area.
              <br />
              Twitter: @JakartaJS and we use the hashtag #jakartajs
            </p>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  )
}

export default AboutMeetUp
