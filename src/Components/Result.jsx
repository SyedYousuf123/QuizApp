import React, { useContext } from "react";
import { QuizContext } from "../Context/QuizHolder";
const Result = () => {
	const { correctAns,setCorrectAns, setStart, setExit, quizzes } = useContext(QuizContext);
  const playagain = ()=>{
    setExit(false);
    setStart(false);
    setCorrectAns(0)
  }
	return (
		<div className="w-full h-screen flex justify-center items-center">
			<div className="border shadow-md  w-[50%] h-[40%] flex justify-center items-center flex-col gap-4">
				<h2 className="text-3xl font-semibold">
				Result:	{correctAns} out of {quizzes.length}
				</h2>
        <button onClick={playagain} className="border p-4 rounded animate-bounce text-white bg-orange-400 duration-200">Play Again</button>
			</div> 
		</div>
	);
};

export default Result;
