/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/Users/daphnedanneels/Desktop/pagepiling2/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	eval("__webpack_require__(1);\nmodule.exports = __webpack_require__(2);\n\n\n//////////////////\n// WEBPACK FOOTER\n// multi main\n// module id = 0\n// module chunks = 0\n//# sourceURL=webpack:///multi_main?");

/***/ },
/* 1 */
/***/ function(module, exports) {

	eval("'use strict';\n\n$(document).ready(function () {\n\n\tvar previousSectionIndex = getSectionIndex();\n\tvar currentSectionId = '#section' + previousSectionIndex;\n\tvar path = $(currentSectionId).find('path');\n\n\tvar currentFrame = 0;\n\tvar totalFrames = 60;\n\tvar handle = undefined;\n\tvar bgColors = [\"\", \"RGBA(220, 194, 93, 1.00)\", \"RGBA(27, 167, 162, 1.00)\", \"RGBA(110, 157, 73, 1.00)\", \"RGBA(52, 48, 65, 1.00)\", \"RGBA(174, 58, 103, 1.00)\"];\n\tvar direction;\n\tvar mobile = false;\n\n\t// DIT WEGHALEN !!!!!!!!!!!!!!!!\n\t$(document).ready(function () {\n\t\tsectionTrigger(previousSectionIndex);\n\t\tif (window.innerWidth < 900) {\n\t\t\tmobile = true;\n\t\t}\n\t});\n\n\tfunction initFrame() {\n\t\tvar l = path[0].getTotalLength();\n\t\tpath[0].style.strokeDasharray = l + ' ' + l;\n\t\tpath[0].style.strokeDashoffset = l;\n\t\tdrawFrame();\n\t};\n\n\tfunction drawFrame() {\n\t\tcurrentFrame++;\n\t\tvar progress = currentFrame / totalFrames;\n\n\t\tvar l = path[0].getTotalLength();\n\t\tpath[0].style.strokeDashoffset = Math.floor(l * (1 - progress));\n\n\t\thandle = requestAnimationFrame(drawFrame);\n\n\t\tif (progress >= 1) {\n\t\t\tcancelAnimationFrame(handle);\n\t\t\tcurrentFrame = 0;\n\t\t\tprogress = 0;\n\t\t}\n\t};\n\n\t$('#pagepiling').pagepiling({\n\t\tmenu: '#menu',\n\t\tanchors: ['page1', 'page2', 'page3', 'page4', 'page5'],\n\t\tsectionsColor: ['RGBA(220, 194, 93, 1.00)', 'RGBA(27, 167, 162, 1.00)', 'RGBA(110, 157, 73, 1.00)', 'RGBA(52, 48, 65, 1.00)', 'RGBA(174, 58, 103, 1.00)'],\n\t\tnavigation: {\n\t\t\t'position': 'right',\n\t\t\t'tooltips': ['Cooking', 'Music', 'Singing', 'Writing', 'Design']\n\t\t},\n\t\tafterRender: function afterRender() {\n\t\t\t$('#pp-nav').addClass('custom');\n\t\t},\n\t\tafterLoad: function afterLoad(anchorLink, index) {\n\t\t\tif (index > 1) {\n\t\t\t\t$('#pp-nav').removeClass('custom');\n\t\t\t} else {\n\t\t\t\t$('#pp-nav').addClass('custom');\n\t\t\t}\n\t\t}\n\t});\n\n\t$(window).mousemove(function (event) {\n\t\t// MAAK PROPER!!!!!!!\n\t\tvar imageOffsetX = event.clientX - window.innerWidth / 2;\n\t\tvar imageOffsetXNegative = -(event.clientX - window.innerWidth / 2);\n\t\tvar imageOffsetY = -(event.clientY - window.innerHeight / 2);\n\t\t$('.image').css({\n\t\t\t'transform': 'perspective(1000px) rotateX(' + imageOffsetY / 200 + 'deg) rotateY(' + imageOffsetX / 400 + 'deg) translate(' + imageOffsetXNegative / 30 + 'px, ' + imageOffsetY / 60 + 'px)'\n\t\t});\n\t\tvar frameOffsetX = event.clientX - window.innerWidth / 2;\n\t\tvar frameOffsetXNegative = -(event.clientX - window.innerWidth / 2);\n\t\tvar frameOffsetY = -(event.clientY - window.innerHeight / 2);\n\t\t$('.frame').css({\n\t\t\t'transform': 'perspective(1000px) rotateX(' + frameOffsetY / 400 + 'deg) rotateY(' + frameOffsetX / 800 + 'deg) translate(' + frameOffsetXNegative / 50 + 'px, ' + frameOffsetY / 100 + 'px)'\n\t\t});\n\t\tvar plainOffsetX = event.clientX - window.innerWidth / 2;\n\t\tvar plainOffsetXNegative = -(event.clientX - window.innerWidth / 2);\n\t\tvar plainOffsetY = -(event.clientY - window.innerHeight / 2);\n\t\t$('.plain').css({\n\t\t\t'transform': 'perspective(1000px) rotateX(' + plainOffsetY / 100 + 'deg) rotateY(' + plainOffsetX / 200 + 'deg) translate(' + plainOffsetXNegative / 20 + 'px, ' + plainOffsetY / 40 + 'px)'\n\t\t});\n\t\tvar containerOffsetX = event.clientX - window.innerWidth / 2;\n\t\tvar containerOffsetXNegative = -(event.clientX - window.innerWidth / 2);\n\t\tvar containerOffsetY = -(event.clientY - window.innerHeight / 2);\n\t\t$('.container').css({\n\t\t\t'transform': 'perspective(1000px) rotateX(' + containerOffsetY / 300 + 'deg) rotateY(' + containerOffsetX / 600 + 'deg) translate(' + containerOffsetXNegative / 100 + 'px, ' + containerOffsetY / 200 + 'px)'\n\t\t});\n\t});\n\n\t$(window).on('hashchange', function () {\n\t\tvar sectionIndex = getSectionIndex();\n\t\tdirectionDetection(sectionIndex, previousSectionIndex);\n\t\tsectionUntrigger(previousSectionIndex);\n\t\tsectionTrigger(sectionIndex);\n\t\tif (!mobile) {\n\t\t\tcolorChange(sectionIndex, previousSectionIndex);\n\t\t}\n\t\tpreviousSectionIndex = sectionIndex;\n\t});\n\n\tfunction directionDetection(sectionIndex, previousSectionIndex) {\n\t\tif (sectionIndex > previousSectionIndex) {\n\t\t\tdirection = 'up';\n\t\t} else {\n\t\t\tdirection = 'down';\n\t\t}\n\t}\n\n\tfunction getSectionIndex() {\n\t\tvar sectionIndex;\n\t\tif (window.location.hash) {\n\t\t\tsectionIndex = window.location.hash.replace('#page', '');\n\t\t} else {\n\t\t\tsectionIndex = 1;\n\t\t}\n\n\t\treturn sectionIndex;\n\t};\n\n\tfunction sectionUntrigger(section) {\n\t\tvar currentDirection = direction;\n\t\tvar sectionId = '#section' + section + '';\n\t\tvar previousSection = $(sectionId);\n\t\tvar container = previousSection.find('.container');\n\t\t//add animate out !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!\n\t\tpreviousSection.addClass(currentDirection + '-animation');\n\t\tcontainer.css('background-color', 'rgba(0,0,0,0)').css('box-shadow', 'none').css('transition-duration', '0.5s');\n\t\t//delay addclass hidden after animate out!!!!!!!!!!!!!!!!!!!!!!!!!!\n\t\tsetTimeout(function () {\n\t\t\tpreviousSection.removeClass(currentDirection + '-animation');\n\t\t\tpreviousSection.addClass('hidden');\n\t\t\tif (!mobile) {\n\t\t\t\tcontainer.css('background-color', 'white').css('box-shadow', '10px 10px 10px RGBA(40, 40, 40, 0.2)').css('transition-duration', '0s');\n\t\t\t}\n\t\t}, 100);\n\t};\n\n\tfunction colorChange(section, previousSection) {\n\t\tvar sectionId = '#section' + section + '';\n\t\tvar previousSectionId = '#section' + previousSection + '';\n\t\tvar newSection = $(sectionId).find('.bg-color');\n\t\tvar oldSection = $(previousSectionId).find('.bg-color');\n\t\tnewSection.css(\"background-color\", bgColors[previousSection]);\n\t\tsetTimeout(function () {\n\t\t\tnewSection.css(\"transition-duration\", \"1s\");\n\t\t\tnewSection.addClass('.color-change').css(\"background-color\", bgColors[section]);\n\t\t\toldSection.css(\"transition-duration\", \"1s\");\n\t\t\toldSection.addClass('.color-change').css(\"background-color\", bgColors[section]);\n\t\t}, 100);\n\t\tsetTimeout(function () {\n\t\t\tnewSection.css(\"transition-duraction\", \"0s\");\n\t\t\toldSection.css(\"transition-duration\", \"0s\");\n\t\t\toldSection.removeClass('.color-change');\n\t\t\tnewSection.removeClass('.color-change');\n\t\t}, 1000);\n\t}\n\n\tfunction sectionTrigger(section) {\n\t\tvar sectionId = '#section' + section + '';\n\t\tvar currentSection = $(sectionId);\n\t\tpath = $(sectionId).find('path');\n\t\tinitFrame();\n\t\tcurrentSection.removeClass('hidden');\n\t};\n});\n\n//////////////////\n// WEBPACK FOOTER\n// ./_js/script.js\n// module id = 1\n// module chunks = 0\n//# sourceURL=webpack:///./_js/script.js?");

/***/ },
/* 2 */
/***/ function(module, exports) {

	eval("// removed by extract-text-webpack-plugin\n\n//////////////////\n// WEBPACK FOOTER\n// ./_scss/style.scss\n// module id = 2\n// module chunks = 0\n//# sourceURL=webpack:///./_scss/style.scss?");

/***/ }
/******/ ]);