import { Card, Button } from "react-bootstrap";

function Question(props) {
  const answers = [];

  function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
  }

  function htmlDecode(input) {
    var doc = new DOMParser().parseFromString(input, "text/html");
    return doc.documentElement.textContent;
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
        <Card.Text>{htmlDecode(props.question)}</Card.Text>
        {answers.length > 0 && answers.map((element, index) => {
          return (
            <Button key={index} variant="secondary" size="large" className="m-2" onClick={() => props.onAnswerClicked(element.correct)}>
              {element.text}
            </Button>
          );
        })}
      </Card.Body>
    </Card>
  );
}

export default Question;
