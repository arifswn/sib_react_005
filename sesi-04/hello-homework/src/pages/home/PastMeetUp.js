import { Card, Row, Col } from "react-bootstrap"

function PastMeetUp() {
  return (
    <Row className="mt-3">
      <Col className="col-sm-4">
        <Card className="border-0 rounded shadow-sm">
          <Card.Body className="p-4">
            <h3>27 November 2017</h3>
            <hr />
            <p>#39 JakartaJS April Meetup with kumparan</p>
            <hr className="mt-3" />
            <b>139</b> went
            <br />
            <button className="btn btn-secondary mt-2">View</button>
          </Card.Body>
        </Card>
      </Col>
      <Col className="col-sm-4">
        <Card className="border-0 rounded shadow-sm">
          <Card.Body className="p-4">
            <h3>27 Oktober 2017</h3>
            <hr />
            <p>#39 JakartaJS April Meetup with kumparan</p>
            <hr className="mt-3" />
            <b>113</b> went
            <br />
            <button className="btn btn-secondary mt-2">View</button>
          </Card.Body>
        </Card>
      </Col>
      <Col className="col-sm-4">
        <Card className="border-0 rounded shadow-sm">
          <Card.Body className="p-4">
            <h3>27 September 2017</h3>
            <hr />
            <p>#39 JakartaJS April Meetup with kumparan</p>
            <hr className="mt-3" />
            <b>110</b> went
            <br />
            <button className="btn btn-secondary mt-2">View</button>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  )
}

export default PastMeetUp
