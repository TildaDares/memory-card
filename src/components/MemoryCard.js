import React, { useState, useEffect } from "react";
import uniqid from "uniqid";
import khaleesi from "../images/khaleesi.jpg";
import arya from "../images/arya.jpg";
import cersei from "../images/cersei.jpg";
import jaime from "../images/jaime.jpg";
import jon from "../images/jon.jpg";
import margaery from "../images/margaery.jpg";
import sansa from "../images/sansa.jpg";
import tyrion from "../images/tyrion.jpg";

export default function MemoryCard() {
	const initImgArr = [
		{ src: khaleesi, id: uniqid(), clicked: false, name: "Daenerys Targaryen" },
		{ src: jon, id: uniqid(), clicked: false, name: "Jon Snow" },
		{ src: arya, id: uniqid(), clicked: false, name: "Arya Stark" },
		{ src: cersei, id: uniqid(), clicked: false, name: "Cersei Lannister" },
		{ src: margaery, id: uniqid(), clicked: false, name: "Margaery Tyrell" },
		{ src: sansa, id: uniqid(), clicked: false, name: "Sansa Stark" },
		{ src: tyrion, id: uniqid(), clicked: false, name: "Tyrion Lannister" },
		{ src: jaime, id: uniqid(), clicked: false, name: "Jaime Lannister" },
	];
	const [imgArr, setImgArr] = useState(initImgArr);

	useEffect(() => {
		setImgArr(shuffle(imgArr));
	}, []);

	const [score, setScore] = useState(0);

	useEffect(() => {
		if (score === 8) {
			setPlaying(false);
		}
	}, [score]);

	const [highScore, setHighScore] = useState(0);
	const [playing, setPlaying] = useState(true);

	function resetGame() {
		setPlaying(true);
		resetScores();
	}

	function displayGameResult(result) {
		return (
			<div className="container flex items-center justify-center h-screen">
				<div className="container bg-gray-800 max-w-md py-6 px-4 rounded-lg">
					<p className="text-xl text-white text-center">You {result}!</p>
					<button
						className="bg-blue-500 float-right rounded p-3 mt-2 text-white"
						onClick={resetGame}
					>
						Play Again
					</button>
				</div>
			</div>
		);
	}

	function displayCards() {
		return (
			<div>
				<div className="text-center text-white text-xl mt-5">
					<p>Score: {score}</p>
					<p>HighScore: {highScore}</p>
				</div>
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-12 p-7">
					{imgArr.map((img) => (
						<div
							className="bg-gray-800 shadow-lg cursor-pointer pb-5 rounded-lg transition duration-500 ease-in-out transform hover:-translate-y-4"
							id={img.id}
							onClick={handleCardClick}
							key={img.id}
						>
							<img
								className="w-full h-100 object-cover"
								src={img.src}
								alt={img.name}
							/>
							<p className="text-center font-mono text-white text-lg font-semibold mt-4">
								{img.name}
							</p>
						</div>
					))}
				</div>
			</div>
		);
	}

	function handleCardClick(event) {
		const imgMem = imgArr.find((img) => img.id === event.currentTarget.id);
		if (imgMem.clicked) {
			setPlaying(false);
		} else {
			const updatedArr = imgArr.map((img) => {
				if (img.id === event.currentTarget.id) {
					img.clicked = !img.clicked;
					setScore(score + 1);
				}
				return img;
			});
			setImgArr(shuffle(updatedArr));
		}
	}

	function resetScores() {
		setImgArr(shuffle(initImgArr));
		setHighScore(Math.max(highScore, score));
		setScore(0);
	}

	function displayBody() {
		if (!playing) {
			let result = score < 8 ? "lose" : "win";
			return displayGameResult(result);
		}
		return displayCards();
	}

	function shuffle(arr) {
		let copyArr = arr;
		for (let i = copyArr.length - 1; i > 0; i--) {
			let rand = Math.floor(Math.random() * (i + 1));
			let temp = copyArr[i];
			copyArr[i] = copyArr[rand];
			copyArr[rand] = temp;
		}
		return copyArr;
	}

	return <div className="md:container mx-auto font-mono">{displayBody()}</div>;
}
