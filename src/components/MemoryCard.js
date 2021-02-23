import React, { useState } from "react";
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
	const [score, setScore] = useState(0);
	const [highScore, setHighScore] = useState(0);

	function handleCardClick(event) {
		setImgArr(
			imgArr.map((img) => {
				if (img.id === event.target.id) {
					if (!img.clicked) {
						setScore(score + 1);
					}
					img.clicked = !img.clicked;
				}
				return img;
			})
		);
	}

	return (
		<div className="md:container mx-auto font-mono">
			<div className="text-center text-white text-lg mt-5">
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
