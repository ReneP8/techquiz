import { Card, Button } from "react-bootstrap";

function Question(props) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          {props.question}
        </Card.Text>
        <Button variant="primary">{props.correctAnswer}</Button>
        <Button variant="primary">{props.incorrectAnswers[0]}</Button>
        <Button variant="primary">{props.incorrectAnswers[1]}</Button>
        <Button variant="primary">{props.incorrectAnswers[2]}</Button>
      </Card.Body>
    </Card>);
}

export default Question;
