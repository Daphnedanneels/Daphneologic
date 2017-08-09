// 'use strict';
//
// import $option from './render/$option';
// import $radio from './render/$radio';
// import $image from './render/$image';
//
// let imagesPath="assets/img/";
// let svgPath="assets/svg/artwork.svg";
//
// let artSize=30;
// let artX=50;
// let artY=10;
// let artR=0;
//
// const init = d => {
// 	console.log(d);
// 	initArtworks(d.artworks);
// 	initColors(d.colors);
// 	initControls();
// 	initBackground('bg2');
// 	setDefault();
// }
//
// const setDefault = () => {
// 	document.querySelector('.artwork').selectedIndex = 0;
// 	setArwork(document.querySelector('.artwork').value);
//
// 	document.querySelector('.color').checked=true;
// 	setColor(document.querySelector('.color').value);
//
// 	drawArtwork();
// }
//
// const initBackground = basename => {
// 	let $postcardImage = document.querySelector('.postcard-image');
// 	let srcset={"s":257,"m":515,"l":772,"xl":1029};
// 	let sizes={"100":100,"300":30,"600":20};
// 	let sources={"xl":750,"l":500,"m":250,"s":100};
// 	$postcardImage.appendChild($image(basename, imagesPath,srcset, sizes, sources));
// }
//
// const initControls = () =>{
// 	document.querySelector('.message').addEventListener('keyup', e => {
// 		setMessage(e.currentTarget.value);
// 	});
//
// 	document.querySelector('.artwork').addEventListener('change', e => {
// 		setArwork(e.currentTarget.value);
// 	});
//
// 	[...document.querySelectorAll('.color')].forEach($color => {
// 		$color.addEventListener('change', e => setColor(e.currentTarget.value));
// 	});
//
// 	[...document.querySelectorAll('input[type="range"]')].forEach($range =>{
// 		$range.addEventListener('input', rangeHandler);
// 		switch($range.name){
// 			case 'xpos':
// 				$range.value=artX;
// 				break;
// 			case 'ypos':
// 				$range.value=artY;
// 				break;
// 			case 'size':
// 				$range.value=artSize;
// 				break;
// 			case 'rotate':
// 				$range.value=artR;
// 				break;
// 		}
// 	});
// }
//
// const rangeHandler = e => {
// 	let $range = e.currentTarget;
// 	switch($range.name){
// 		case 'xpos':
// 			artX = $range.value;
// 			break;
// 		case 'ypos':
// 			artY = $range.value;
// 			break;
// 		case 'size':
// 			artSize = $range.value;
// 			break;
// 		case 'rotate':
// 			artR = $range.value;
// 			break;
// 	}
// 	drawArtwork();
// }
//
// const drawArtwork = () => {
// 	let $art = document.querySelector('.art');
//
// 	let newX = map(artX,100,100-artSize);
// 	let newY = map(artY,100,75-artSize);
// 	$art.setAttribute('transform',`translate(${newX} ${newY})
// 									rotate(${artR} ${artSize/2} ${artSize/2})
// 									scale(${artSize/100}) `);
// }
//
// const map = (value, istop, ostop) =>{
// 	return ostop * ((value) / istop);
// }
//
// const setMessage = message => {
// 	let $postcardMessage = document.querySelector('.postcard-message');
// 	$postcardMessage.innerHTML = message;
// }
//
// const setArwork = artwork => {
// 	document.querySelector('.art').setAttribute('xlink:href',`${svgPath}#${artwork}`);
// }
//
// const setColor = color =>{
// 	document.querySelector('.art').style.fill = color;
// }
//
//
//
// const initArtworks = artworks => {
// 	let $select = document.querySelector('.artwork');
// 	artworks.forEach(artwork =>{
// 		$select.appendChild($option(artwork));
// 	});
// }
//
// const initColors = colors => {
// 	let $radios = document.querySelector('.radio-group');
// 	colors.forEach(color =>{
// 		$radios.appendChild($radio(color));
// 		document.querySelector(`label[for="color${color.value}"]`).style.backgroundColor=color.value;
// 	});
// }
//
// const load = () => {
// 	fetch("assets/data/data.json")
// 		.then(r => r.json())
// 		.then(d => init(d));
// }
//
// load();









// 'use strict';
//
// var previousOffset = window.pageYOffset;
// var scrollDestination;
// var scrollEnabled = true;
// const container = document.querySelector('.container');
//
// const init = () => {
//   console.log('hello daphné');
// };
//
// window.addEventListener('scroll', e => {
// 	const height = window.innerHeight;
// 	const newOffset = window.pageYOffset;
// 	const currentSection = determineSection(height, newOffset);
// 	console.log(currentSection);
// 	if (scrollEnabled) {
//
// 		if(previousOffset < newOffset){
// 			scrollDestination = currentSection + 1;
// 		}else if(previousOffset > newOffset){
// 			scrollDestination = currentSection - 1;
// 		}else{
// 			scrollDestination = currentSection;
// 		};
// 		// doScrolling()
// 		window.scrollTo(0, scrollDestination*height);
// 		if(window.pageYOffset = scrollDestination*height){
// 			disableScroll();
// 			previousOffset = window.pageYOffset;
// 			console.log('im here');
// 		}
//
// 		// setTimeout(document.querySelector('.container').removeClass('stop-scrolling'), 3000);
// 	}
// 	console.log(scrollDestination);
//
// });
//
// const disableScroll = () => {
//     scrollEnabled = false;
//
//     setTimeout(function() {
//         scrollEnabled = true;
//     }, 3000);
// }
//
// const doScrolling = (elementY, duration) => {
//   var startingY = window.pageYOffset
//   var diff = elementY - startingY
//   var start
//
//   // Bootstrap our animation - it will get called right before next frame shall be rendered.
//   window.requestAnimationFrame(function step(timestamp) {
//     if (!start) start = timestamp
//     // Elapsed miliseconds since start of scrolling.
//     var time = timestamp - start
//     // Get percent of completion in range [0, 1].
//     var percent = Math.min(time / duration, 1)
//
//     window.scrollTo(0, startingY + diff * percent)
//
//     // Proceed with animation as long as we wanted it to.
//     if (time < duration) {
//       window.requestAnimationFrame(step)
//     }
//   })
// }
//
// const determineSection = (height, offset) => {
// 	const amountOfSections = document.querySelectorAll('section').length;
// 	const totalHeight = height * amountOfSections;
// 	const currentSection = Math.floor(offset / (totalHeight/amountOfSections));
// 	return currentSection;
// }
//
// init();









'use strict';

$(document).ready(function() {

			var previousSectionIndex = getSectionIndex();
			let currentSectionId = '#section' + previousSectionIndex;
			var path = $(currentSectionId).find('path');

			let currentFrame = 0;
			let totalFrames = 60;
			let handle;
			let bgColors = ["", "RGBA(220, 194, 93, 1.00)", "RGBA(27, 167, 162, 1.00)", "RGBA(110, 157, 73, 1.00)", "RGBA(52, 48, 65, 1.00)", "RGBA(174, 58, 103, 1.00)"];
			var direction;

			$(document).ready(function() {
				sectionTrigger(previousSectionIndex);
				transformSVG();
			});

			function transformSVG(){
				var viewWidth = (window.innerWidth * 0.4);
				var scaleFactor = viewWidth/viewWidth;
				console.log(scaleFactor);

				// $('svg').css('transform' : 'scale(' + (viewWidth*2.5)/100 + ')');

				requestAnimationFrame(transformSVG);
			}

			function initFrame(){
				let l = path[0].getTotalLength();
				path[0].style.strokeDasharray = `${l} ${l}`;
				path[0].style.strokeDashoffset = l;
				drawFrame();
			};

			function drawFrame(){
				currentFrame ++;
				let progress = currentFrame / totalFrames;

				let l = path[0].getTotalLength();
				path[0].style.strokeDashoffset = Math.floor(l*(1-progress));

				handle = requestAnimationFrame(drawFrame);

				if(progress>=1){
					cancelAnimationFrame(handle);
					currentFrame = 0;
					progress = 0;
				}
			};

	    $('#pagepiling').pagepiling({
	    		menu: '#menu',
	    		anchors: ['page1', 'page2', 'page3', 'page4', 'page5'],
			    sectionsColor: ['RGBA(220, 194, 93, 1.00)', 'RGBA(27, 167, 162, 1.00)', 'RGBA(110, 157, 73, 1.00)', 'RGBA(52, 48, 65, 1.00)', 'RGBA(174, 58, 103, 1.00)'],
			    navigation: {
			    	'position': 'right',
			   		'tooltips': ['Page 1', 'Page 2', 'Page 3', 'Page 4', 'Page 5']
			   	},
			    afterRender: function(){
			    	$('#pp-nav').addClass('custom');
			    },
			    afterLoad: function(anchorLink, index){
			    	if(index>1){
			    		$('#pp-nav').removeClass('custom');
			    	}else{
			    		$('#pp-nav').addClass('custom');
			    	}
			    }
			});


			$(window).mousemove(function(event){
				// MAAK PROPER!!!!
				var imageOffsetX = event.clientX - window.innerWidth/2;
				var imageOffsetXNegative = -(event.clientX - window.innerWidth/2);
				var imageOffsetY = -(event.clientY - window.innerHeight/2);
				$('.image').css({
					'transform' : 'perspective(1000px) rotateX(' + imageOffsetY/200 + 'deg) rotateY(' + imageOffsetX/400 + 'deg) translate(' + imageOffsetXNegative/30 + 'px, ' + imageOffsetY/60 + 'px)'
				});
				var frameOffsetX = event.clientX - window.innerWidth/2;
				var frameOffsetXNegative = -(event.clientX - window.innerWidth/2);
				var frameOffsetY = -(event.clientY - window.innerHeight/2);
				$('.frame').css({
					'transform' : 'perspective(1000px) rotateX(' + frameOffsetY/400 + 'deg) rotateY(' + frameOffsetX/800 + 'deg) translate(' + frameOffsetXNegative/50 + 'px, ' + frameOffsetY/100 + 'px)'
				});
				var plainOffsetX = event.clientX - window.innerWidth/2;
				var plainOffsetXNegative = -(event.clientX - window.innerWidth/2);
				var plainOffsetY = -(event.clientY - window.innerHeight/2);
				$('.plain').css({
					'transform' : 'perspective(1000px) rotateX(' + plainOffsetY/100 + 'deg) rotateY(' + plainOffsetX/200 + 'deg) translate(' + plainOffsetXNegative/20 + 'px, ' + plainOffsetY/40 + 'px)'
				});
				var containerOffsetX = event.clientX - window.innerWidth/2;
				var containerOffsetXNegative = -(event.clientX - window.innerWidth/2);
				var containerOffsetY = -(event.clientY - window.innerHeight/2);
				$('.container').css({
					'transform' : 'perspective(1000px) rotateX(' + containerOffsetY/300 + 'deg) rotateY(' + containerOffsetX/600 + 'deg) translate(' + containerOffsetXNegative/100 + 'px, ' + containerOffsetY/200 + 'px)'
				});
			});

			$(window).on('hashchange',function(){
				var sectionIndex = getSectionIndex();
				directionDetection(sectionIndex, previousSectionIndex);
				sectionUntrigger(previousSectionIndex);
				sectionTrigger(sectionIndex);
				if(window.innerWidth > 900){
					colorChange(sectionIndex, previousSectionIndex);
				}
				previousSectionIndex = sectionIndex;
			});

			function directionDetection(sectionIndex, previousSectionIndex) {
				if(sectionIndex > previousSectionIndex){
					direction = 'up';
				} else {
					direction = 'down';
				}
			}

			function getSectionIndex(){
				var sectionIndex = window.location.hash.replace('#page', '');
				return sectionIndex;
			};

			function sectionUntrigger(section){
				console.log(direction);
				var sectionId = '#section' + section + '';
				var previousSection = $(sectionId);
				var plain = previousSection.find('.plain');
				var frame = previousSection.find('.frame');
				var image = previousSection.find('.image');
				var container = previousSection.find('.container');
				var p = previousSection.find('p');
				var title = previousSection.find('.title');
				//add animate out !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
				plain.addClass('animate-out').addClass(direction);
				image.addClass('animate-out').addClass(direction);
				frame.addClass('animate-out').addClass(direction);
				p.addClass('animate-out').addClass(direction);
				title.addClass('animate-out').addClass(direction);
				container.css('background-color', 'rgba(0,0,0,0)').css('box-shadow', 'none').css('transition-duration', '0.5s');
				//delay addclass hidden after animate out!!!!!!!!!!!!!!!!!!!!!!!!!!
				setTimeout(function () {
					plain.addClass('hidden');
					image.addClass('hidden');
					frame.addClass('hidden');
					title.addClass('hidden');
					p.addClass('hidden');
					plain.removeClass('animate-out').removeClass(direction);
					frame.removeClass('animate-out').removeClass(direction);
					image.removeClass('animate-out').removeClass(direction);
					p.removeClass('animate-out').removeClass(direction);
					title.removeClass('animate-out').removeClass(direction);
					container.css('background-color', 'white').css('box-shadow', '10px 10px 10px RGBA(40, 40, 40, 0.2)').css('transition-duration', '0s');
				}, 800);
			};

			function colorChange(section, previousSection){
				var sectionId = '#section' + section + '';
				var previousSectionId = '#section' + previousSection + '';
				var newSection = $(sectionId).find('.bg-color');
				var oldSection = $(previousSectionId).find('.bg-color');
				newSection.css("background-color", bgColors[previousSection]);
				setTimeout(function () {
					newSection.css("transition-duration", "1s");
					newSection.addClass('.color-change').css("background-color", bgColors[section]);
					oldSection.css("transition-duration", "1s");
					oldSection.addClass('.color-change').css("background-color", bgColors[section]);
				}, 100);
				setTimeout(function () {
					newSection.css("transition-duraction", "0s");
					oldSection.css("transition-duration", "0s");
					oldSection.removeClass('.color-change');
					newSection.removeClass('.color-change');
				}, 1000);
			}

			function sectionTrigger(section){
				var sectionId = '#section' + section + '';
				var currentSection = $(sectionId);
				path = $(sectionId).find('path');
				initFrame();
				currentSection.find('.title').removeClass('hidden');
				currentSection.find('p').removeClass('hidden');
				currentSection.find('.plain').removeClass('hidden');
				currentSection.find('.image').removeClass('hidden');
			};
});
