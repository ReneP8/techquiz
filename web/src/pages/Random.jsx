import { useEffect, useState } from "react";
import Question from "../components/Question";
import { Button } from "react-bootstrap";


const TRIVIA_URL =
  "https://opentdb.com/api.php?amount=1&category=18&type=multiple";

async function getRandomQuestion() {
  try {
    const response = await fetch(TRIVIA_URL);
    return response.json();
  } catch (error) {
    console.log(error);
  }
}

function Random() {
  const [randomQuestion, setRandomQuestion] = useState(null);

  // async function pullNewQuestion() {
  //   const question = await getRandomQuestion();
  //   setRandomQuestion(question);
  // }

  useEffect(() => {
    getRandomQuestion().then((data) => {
      const question = data.results[0];
      console.log(question);
      setRandomQuestion(question);
    });
  }, []);

  return (
    <div className="home-div">
      <div className="text-center mb-3 text-white">
        <h1>Random Quiz</h1>
      </div>

      {randomQuestion && (
        <Question
          title={randomQuestion.category}
          question={randomQuestion.question}
          correctAnswer={randomQuestion.correct_answer}
          incorrectAnswers={randomQuestion.incorrect_answers}
        ></Question>
      )}

      {/* <Button className="mt-2" onClick={useEffect}>Next</Button> */}
    </div>
  );
}

export default Random;
