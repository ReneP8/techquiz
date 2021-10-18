import { Card, Button } from "react-bootstrap";
import { useState } from "react";

import sound_correct from "../assets/sounds/correct_answer.mp3";
import sound_wrong from "../assets/sounds/wrong_answer.mp3";

const correctAudio = new Audio(sound_correct);
correctAudio.volume = 0.8;
const wrongAudio = new Audio(sound_wrong);
wrongAudio.volume = 0.6;

function Question(props) {
  const answers = [];

  const [bgColor, setBgColor] = useState("light");


  function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
  }

  function checkResult(correct) {
    if (correct) {
      setBgColor("success");
      correctAudio.play();
    }
    else {
      wrongAudio.play();
    }
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

  prepareAnswers()

  return (
    <Card bg={bgColor}>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.question}</Card.Text>
        {answers.length > 0 && answers.map((element, index) => {
          return (
            <Button key={index} variant="secondary" size="large" className="m-2" onClick={() => checkResult(element.correct)}>
              {element.text}
            </Button>
          );
        })}
      </Card.Body>
    </Card>
  );
}

export default Question;
