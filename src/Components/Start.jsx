import React, { useContext } from "react";
import { QuizContext } from "../Context/QuizHolder";
const Start = () => {
	const { setStart } = useContext(QuizContext);
	return (
		<div className="flex justify-center items-center w-full h-screen text-5xl ">
			<button
				onClick={() => setStart(true)}
				className="border border-orange-700 p-4 rounded hover:bg-orange-600 hover:text-white duration-200"
			>
				Start
			</button>
		</div>
	);
};

export default Start;
