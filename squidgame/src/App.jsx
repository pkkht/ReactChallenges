import { Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import GreenAlert from "./GreenAlert";
import Timer from "./Timer";

const App = () => {
  const [gameStarted, isGameStarted] = useState(false);
  // const [gameWon, isGameWon] = useState(false);
  const [counter, setCounter] = useState(16);
  const [score, setScore] = useState(0);

  useEffect(() => {
    let interval = null;
    if (gameStarted) {
      interval = setInterval(() => {
        setCounter((prev) => (prev > 0 ? prev - 1 : 0));
      }, 1000);
    }
    return () =>  clearInterval(interval);
  });

  const handleGameStart = () => {
    isGameStarted(true);
  };

  const handleScore = () => {
    setScore((score) => (score < 15 ? score + 1 : score));
  };

  let str = null;
  const handleGameWin = () => {
    isGameStarted(false);
  };

  if (score === 15) {
    str = "You win!";
    handleGameWin();
  }

  return (
    <>
      <div className="card">
        <div className="align-items-center justify-content-center text-center min-vh-100">
          {!gameStarted && (
            <Button variant="dark" onClick={handleGameStart}>
              Start Game
            </Button>
          )}

          {gameStarted && (
            <>
              <Timer counter={counter} />
              <GreenAlert onScore={handleScore} />
              <div>Score: {score}</div>
            </>
          )}
          <p>{str}</p>
        </div>
      </div>
    </>
  );
};

export default App;
