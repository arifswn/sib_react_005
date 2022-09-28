import React from "react"
import { Container, Row, Col, Card } from "react-bootstrap"
import ButtonLink from "../Button/Button"
import { useHistory } from "react-router-dom"

const NotFound = ({ location }) => {
  const history = useHistory()

  //back to home
  function handleClick(e) {
    let path = "/"
    history.push(path)
  }

  return (
    <>
      <Container className="mt-3">
        <Row>
          <Col md="{12}">
            <Card className="border-0 rounded shadow-sm">
              <Card.Body className="p-4">
                <h3>Not Found</h3>
                <hr />
                <div className="d-flex justify-content-center flex-column align-items-center">
                  <p className="lead">
                    Sorry but <b>{location.pathname}</b> didn't match any pages
                  </p>
                  <ButtonLink
                    className={"btn btn-warning"}
                    type="button"
                    onClick={handleClick}
                    children={"Back to Home"}
                    icon={<i className="fas fa-home"></i>}
                  />
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default NotFound
