'use strict';

import $image from './render/$image';
import $option from './render/$option';
import $radio from './render/$radio';

let imagesPath ="assets/img/";
let svgPath = "assets/svg/artwork.svg";

let artSize=20;
let artX =50;
let artY =10;
let artR =0;

const init = d => {
    initArtworks(d.artworks);
    initColors(d.colors);
    initControls();
    initBackground('bg2');
    setDefault();
    drawArtwork();
};

const setDefault = () => {
	document.querySelector('.artwork').selectedIndex=0;
	setArtwork(document.querySelector('.artwork').value);

	document.querySelector('.color').checked=true;
	setColor(document.querySelector('.color').value);
}

const initControls = () => {
	document.querySelector('.message').addEventListener('keyup', e => {
		setMessage(e.currentTarget.value);
	});

	document.querySelector('.artwork').addEventListener('change', e => {
		setArtwork(e.currentTarget.value);
	});

	[...document.querySelectorAll('.color')].forEach($color => {
		$color.addEventListener('change', e => setColor(e.currentTarget.value));
	});

	[...document.querySelectorAll('input[type="range"]')].forEach($range => {
		$range.addEventListener('input',rangeHandler);
		switch($range.name){
			case 'xpos':
				$range.value=artX;
				break;
			case 'ypos':
				$range.value=artY;
				break;
			case 'size':
				$range.value=artSize;
				break;
			case 'rotate':
				$range.value=artR;
				break;
		}
	});
}



const initBackground = basename => {
	let $postcardImage = document.querySelector('.postcard-image');
	let srcset={"s":257,"m":515,"l":772,"xl":1029};
	let sizes={"100":100,"300":30,"600":20};
	let sources={"xl":750,"l":500,"m":250,"s":100};
	$postcardImage.appendChild($image(basename, imagesPath,srcset, sizes, sources));	
}


const initArtworks = artworks => {
	let $select = document.querySelector('.artwork');
	artworks.forEach(artwork => {
		$select.appendChild($option(artwork));	
	});
}

const initColors = colors => {
	let $radios = document.querySelector('.radio-group');
	colors.forEach(color => {
		$radios.appendChild($radio(color));	
		document.querySelector(`label[for="color${color.value}"]`).style.backgroundColor=color.value;
	});
}

const rangeHandler = e => {
	let $range = e.currentTarget;
	switch($range.name){
		case 'xpos':
			artX = $range.value;
			break;
		case 'ypos':
			artY = $range.value;
			break;
		case 'size':
			artSize = $range.value;
			break;
		case 'rotate':
			artR = $range.value;
			break;
	}
	drawArtwork();
}


const drawArtwork = () => {
 	let $art = document.querySelector('.art');

 	let newX = map(artX,100,100-artSize);
 	let newY = map(artY,100,75-artSize);
 	$art.setAttribute('transform',`translate(${newX} ${newY}) rotate(${artR} ${artSize/2} ${artSize/2}) scale(${artSize/100})`);
}

const setMessage = message =>{
	let $postcardMessage = document.querySelector('.postcard-message');
	$postcardMessage.innerHTML = message;
}

const setColor = color =>{
 	document.querySelector('.art').style.fill = color;
}

const setArtwork = artwork => {
	document.querySelector('.art').setAttribute('xlink:href',`${svgPath}#${artwork}`);
}

const map = (value, istop,  ostop) =>{
    return ostop * ((value) / (istop));
}

const load = () => {
	fetch("assets/data/data.json")
		.then(r => r.json())
		.then(d => init(d));
}

load();