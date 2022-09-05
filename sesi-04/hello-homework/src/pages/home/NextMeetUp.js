import { Row, Col, Card } from "react-bootstrap"

function NextMeetUp() {
  return (
    <Row className="mt-3">
      <Col md="{12}">
        <Card className="border-0 rounded shadow-sm">
          <Card.Body className="p-4">
            <div>
              <h3>Next MeetUp</h3>
              <hr />
              <div className="bg-light p-3">
                <p className="lead">Awesome meetup and event</p>
                <div className="fw-lighter my-3">25 January 2019</div>
                <p style={{ wordSpacing: "2px" }}>
                  Hello, JavaScript & Node.js Ninjas!
                  <br />
                  Get ready for our montly meetup JakartaJS! This will be our
                  fifth meetup of 2018!
                  <br />
                  The meetup format will contain some short stories and
                  technical talks.
                  <br />
                  If you have a short announcement you'd like to share with the
                  audience, you may do so during open mic announcement.
                  <br />
                  <br />
                  Remember to bring a photo ID to get through building security.
                </p>
                <hr className="dot-line" />
                <p>
                  See you there!
                  <br />
                  Best, Hengki, Giovanni, Sofian, Riza, Agung The JakartaJS
                  Organizers.
                </p>
              </div>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  )
}

export default NextMeetUp
