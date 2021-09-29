import { Card, Button, Row, Col } from "react-bootstrap";

function Question(props) {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.question}</Card.Text>
        <Row className="mt-3">
          <Col className="d-grid gap-2">
            <Button variant="secondary" bsSize="large" block>
              {props.correctAnswer}
            </Button>
          </Col>
          <Col className="d-grid gap-2">
            <Button variant="secondary" bsSize="large" block>
              {props.incorrectAnswers[0]}
            </Button>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col className="d-grid gap-2">
            <Button variant="secondary" bsSize="large" block>
              {props.incorrectAnswers[1]}
            </Button>
          </Col>
          <Col className="d-grid gap-2">
            <Button variant="secondary" bsSize="large" block>
              {props.incorrectAnswers[2]}
            </Button>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}

export default Question;
