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
			var mobile = false;

			// DIT WEGHALEN !!!!!!!!!!!!!!!!
			$(document).ready(function() {
				sectionTrigger(previousSectionIndex);
				if(window.innerWidth < 900){
					mobile = true;
				}
			});

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
			   		'tooltips': ['Cooking', 'Music', 'Singing', 'Writing', 'Design']
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
				// MAAK PROPER!!!!!!!
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
				if(!mobile){
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
				var sectionIndex;
				if(window.location.hash){
					sectionIndex = window.location.hash.replace('#page', '');
				} else {
					sectionIndex = 1;
				}

				return sectionIndex;
			};

			function sectionUntrigger(section){
				var currentDirection = direction;
				var sectionId = '#section' + section + '';
				var previousSection = $(sectionId);
				let container = previousSection.find('.container');
				//add animate out !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
				previousSection.addClass(currentDirection + '-animation');
				container.css('background-color', 'rgba(0,0,0,0)').css('box-shadow', 'none').css('transition-duration', '0.5s');
				//delay addclass hidden after animate out!!!!!!!!!!!!!!!!!!!!!!!!!!
				setTimeout(function () {
					previousSection.removeClass(currentDirection + '-animation');
					previousSection.addClass('hidden');
					if(!mobile){
						container.css('background-color', 'white').css('box-shadow', '10px 10px 10px RGBA(40, 40, 40, 0.2)').css('transition-duration', '0s');
					}
				}, 100);
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
				currentSection.removeClass('hidden');
			};
});
