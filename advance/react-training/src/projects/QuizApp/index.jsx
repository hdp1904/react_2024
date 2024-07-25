import React, { useEffect, useRef, useState } from "react";

const style = {
  container: {
    padding: "20px",
    border: "1px solid #E0E0E0",
    borderRadius: "15px",
    width: "max-content",
    marginBottom: "40px",
  },
  question: {
    fontWeight: "bold",
    marginBottom: "10px",
  },
  options: {
    marginBottom: "5px",
  },
  button: {
    marginTop: "10px",
    padding: "10px 15px",
    border: "none",
    backgroundColor: "#007BFF",
    color: "#FFF",
    fontSize: "14px",
    borderRadius: "5px",
    cursor: "pointer",
  },
  feedback: {
    marginTop: "10px",
    fontSize: "14px",
  },
};

// do not modify the questions or answers below
const questions = [
  {
    question: "What is the capital of France?",
    options: ["London", "Paris", "Berlin", "Madrid"],
    correct: "Paris",
  },
  {
    question: "What is the capital of Germany?",
    options: ["Berlin", "Munich", "Frankfurt", "Hamburg"],
    correct: "Berlin",
  },
];

export default function QuizApp() {
  const [currQue, setCurrQue] = useState(0);
  const [answer, setAnswer] = useState("");
  const [feedback, setFeedback] = useState("");
  const [score, setScore] = useState(0);

  const { question, options, correct } = questions[currQue];
  const handleSubmit = () => {
    if (answer === correct) {
      setFeedback("Correct!");
      setScore((prev) => prev + 1);
    } else {
      setFeedback("Incorrect!");
    }

    if (currQue < questions.length - 1) {
      setCurrQue((prev) => prev + 1);
    } else {
      setFeedback(
        `Quiz Complete! You scored ${score} out of ${questions.length}!`
      );
    }
  };
  return (
    <div style={style.container}>
      <div id="question" style={style.question}>
        {question}
      </div>
      <div style={style.options}>
        <RadioGroup
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          options={options}
        />
      </div>
      <button style={style.button} id="submitBtn" onClick={handleSubmit}>
        Submit
      </button>
      <div id="feedback" style={style.feedback}>
        {feedback}
      </div>
    </div>
  );
}

function RadioGroup({ value, onChange, options }) {
  return (
    <>
      {options.map((option) => {
        return (
          <label key={option}>
            <input
              type="radio"
              value={option}
              checked={value === option}
              onChange={onChange}
            />
            {option}
          </label>
        );
      })}
    </>
  );
}
