import { Card, Button } from "react-bootstrap";

function Question(props) {
  const answers = [];

  function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
  }

  function prepareAnswers() {
    answers.push({
      text: props.correctAnswer,
      correct: true,
    });

    props.incorrectAnswers.forEach((incorrectAnswer) => {
      answers.push({
        text: incorrectAnswer,
        correct: false,
      });
    });

    shuffle(answers);
  }

  prepareAnswers();

  return (
    <Card>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.question}</Card.Text>
        {answers.map((element) => {
          return (
            <Button variant="secondary" bsSize="large" block className="m-2">
              {element.text}
            </Button>
          );
        })}
      </Card.Body>
    </Card>
  );
}

export default Question;
