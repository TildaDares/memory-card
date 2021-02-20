import React, { useState } from "react";
import uniqid from 'uniqid';
import khaleesi from "../images/khaleesi.jpg";
import arya from "../images/arya.jpg";
import cersei from "../images/cersei.jpg";
import jaime from "../images/jaime.jpg";
import jon from "../images/jon.jpg";
import margaret from "../images/margaret.jpg";
import sansa from "../images/sansa.jpg";
import tyrion from "../images/tyrion.jpg";

function MemoryCard() {
	const initImgArr = [
		{ src: khaleesi, id: uniqid(), clicked: false },
		{ src: jon, id: uniqid(), clicked: false },
		{ src: arya, id: uniqid(), clicked: false },
    { src: cersei, id: uniqid(), clicked: false },
    { src: margaret, id: uniqid(), clicked: false },
    { src: sansa, id: uniqid(), clicked: false },
    { src: tyrion, id: uniqid(), clicked: false },
    { src: jaime, id: uniqid(), clicked: false },
	];
	const [imgArr, setImgArr] = useState(initImgArr);
}
