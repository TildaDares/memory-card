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

	return (
		<div class="md:container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-12 p-7">
			{imgArr.map((img) => (
				<div
					class="bg-gray-800 shadow-lg cursor-pointer pb-5 rounded-lg transition duration-500 ease-in-out transform hover:-translate-y-4"
					id={img.id}
				>
					<img class="w-full h-100 object-cover" src={img.src} alt={img.name} />
					<p class="text-center font-mono text-white text-lg font-semibold mt-4">
						{img.name}
					</p>
				</div>
			))}
		</div>
	);
}
