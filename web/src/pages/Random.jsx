import { useEffect, useState } from "react";
import Question from "../components/Question";
import { Col, Row } from "react-bootstrap";

import sound_correct from "../assets/sounds/correct_answer.mp3";
import sound_wrong from "../assets/sounds/wrong_answer.mp3";

const correctAudio = new Audio(sound_correct);
correctAudio.volume = 0.8;
const wrongAudio = new Audio(sound_wrong);
wrongAudio.volume = 0.6;


const TRIVIA_URL =
  "https://opentdb.com/api.php?amount=1&category=18&type=multiple";

function Random() {
  const [randomQuestion, setRandomQuestion] = useState(null);
  const [points, setPoints] = useState(0);

  function checkResult(correct) {
    if (correct) {
      correctAudio.play();
      setPoints(points + 10);
    }
    else {
      wrongAudio.play();
    }

    setTimeout(function(){
      getRandomQeustion();
  }, 2000);
  }


  async function fetchRandomQuestion() {
    try {
      const response = await fetch(TRIVIA_URL);
      return response.json();
    } catch (error) {
      console.log(error);
    }
  }

  async function getRandomQeustion() {
    try {
      const response = await fetchRandomQuestion();
      console.log(response.results[0]);
      setRandomQuestion(response.results[0])
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getRandomQeustion();
  }, []);

  return (
    <div className="container">
      <div className="header">
        <div className="mb-3 text-white">
          <Row>
            <Col>
              <h1>Random Quiz</h1>
            </Col>
            <Col className="pt-2 text-end">
              <h3>Your Points: {points}</h3>
            </Col>
          </Row>
        </div>
      </div>

      <div className="randomQuestion">
        {randomQuestion && (
          <Question
            title={randomQuestion.category}
            question={randomQuestion.question}
            correctAnswer={randomQuestion.correct_answer}
            incorrectAnswers={randomQuestion.incorrect_answers}
            onAnswerClicked={checkResult}
          ></Question>
        )}
      </div>
    </div>
  );
}

export default Random;
