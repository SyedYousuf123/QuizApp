import React, { useContext, useState } from "react";
import { QuizContext } from "../Context/QuizHolder";

const Quiz = () => {
	const [current, setCurrent] = useState(0);
	return (
		<div className="w-full h-screen flex justify-center items-center">
			<Box
				current={current}
				next={setCurrent}
			/>
		</div>
	);
};

export default Quiz;

const Box = ({ current, next }) => {
	const { quizzes, correctAns, setCorrectAns, setExit } =
		useContext(QuizContext);
	const [select, setSelect] = useState("");

	const save = () => {
		if (quizzes[current].correct === select) {
			setCorrectAns(correctAns + 1);
			next(current + 1);
			setSelect("");
		} else {
			setSelect("");
		}
		if (current + 1 === quizzes.length) {
			setExit(true);
		} else {
			next(current + 1);
		}
	};

	const reset = () => {
		setSelect("");
	};
	return (
		<div className="QuizStyle w-[50%] border shadow-2xl">
			<span className="p-2 text-lg font-semibold">
				{current + 1}){quizzes[current].question}
			</span>
			<div className="grid grid-cols-2 mt-11 pb-10">
				<div
					className={`pl-1 border py-3 hover:bg-blue-400 hover:text-white text-sm ${
						select === "a" ? "bg-blue-400 text-white" : ""
					}`}
					onClick={() => setSelect("a")}
				>
					{quizzes[current].a}
				</div>
				<div
					className={`pl-1 border py-3 hover:bg-blue-400 hover:text-white text-sm ${
						select === "b" ? "bg-blue-400 text-white" : ""
					}`}
					onClick={() => setSelect("b")}
				>
					{quizzes[current].b}
				</div>
				<div
					className={`pl-1 border py-3 hover:bg-blue-400 hover:text-white text-sm ${
						select === "c" ? "bg-blue-400 text-white" : ""
					}`}
					onClick={() => setSelect("c")}
				>
					{quizzes[current].c}
				</div>
				<div
					className={`pl-1 border py-3 hover:bg-blue-400 hover:text-white text-sm ${
						select === "d" ? "bg-blue-400 text-white" : ""
					}`}
					onClick={() => setSelect("d")}
				>
					{quizzes[current].d}
				</div>
			</div>
			<div className="flex justify-between">
				<button
					onClick={reset}
					className="border py-2 px-3 rounded-br-2xl bg-orange-500 text-white"
				>
					Reset
				</button>
				<button
					onClick={save}
					className="border py-2 px-3 rounded-b-2xl  bg-green-500  text-white"
				>
					Save&Next
				</button>
				<button
					onClick={() => setExit(true)}
					className="border py-2 px-3 rounded-bl-2xl bg-red-500 text-white"
				>
					Exit
				</button>
			</div>
		</div>
	);
};
