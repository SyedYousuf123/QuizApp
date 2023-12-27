import React from 'react';
import './Components/Design.css';
import Quiz from './Components/Quiz';
import Result from './Components/Result';
import Start from './Components/Start';
import { useContext } from 'react';
import { QuizContext } from './Context/QuizHolder';

function App() {
  const { start, exit } = useContext(QuizContext);
  return (
    <div className="container">
      {!exit ? (
        start ? <Quiz /> : <Start />
      ) : (
        <Result />
      )}
    </div>
  );
}

export default App;
