/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/About.js":
/*!**********************!*\
  !*** ./src/About.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst aboutDiv = document.createElement('section')\r\naboutDiv.className = 'about'\r\naboutDiv.innerText = 'About'\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (aboutDiv);    \n\n//# sourceURL=webpack://restaurant-page/./src/About.js?");

/***/ }),

/***/ "./src/Contact.js":
/*!************************!*\
  !*** ./src/Contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst contactDiv = document.createElement('section')\r\ncontactDiv.className = 'contact'\r\n\r\nconst phoneDiv = document.createElement('div')\r\nphoneDiv.innerText = 'phone number'\r\nconst emailDiv = document.createElement('div')\r\nemailDiv.innerText = 'email id'\r\nconst addressDiv = document.createElement('div')\r\naddressDiv.innerText = 'address'\r\n\r\ncontactDiv.appendChild(phoneDiv)\r\ncontactDiv.appendChild(emailDiv)\r\ncontactDiv.appendChild(addressDiv)\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contactDiv);\n\n//# sourceURL=webpack://restaurant-page/./src/Contact.js?");

/***/ }),

/***/ "./src/Menu.js":
/*!*********************!*\
  !*** ./src/Menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst menuDiv = document.createElement('section')\r\n\r\nmenuDiv.className = 'menu'\r\nmenuDiv.innerText = 'menu'\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menuDiv);\n\n//# sourceURL=webpack://restaurant-page/./src/Menu.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pageLoad__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pageLoad */ \"./src/pageLoad.js\");\n/* harmony import */ var _About__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./About */ \"./src/About.js\");\n/* harmony import */ var _Contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Contact */ \"./src/Contact.js\");\n/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Menu */ \"./src/Menu.js\");\n\r\n\r\n\r\n\r\n\r\nconst contentDiv = document.querySelector('#content')\r\ncontentDiv.appendChild(_pageLoad__WEBPACK_IMPORTED_MODULE_0__.navDiv)\r\n\r\n_pageLoad__WEBPACK_IMPORTED_MODULE_0__.aboutLink.addEventListener('click',() => {\r\n\r\n    if(contentDiv.childElementCount == 2) {\r\n        \r\n        contentDiv.removeChild(contentDiv.lastChild)\r\n    \r\n    }\r\n    contentDiv.appendChild(_About__WEBPACK_IMPORTED_MODULE_1__.default)\r\n})\r\n\r\n_pageLoad__WEBPACK_IMPORTED_MODULE_0__.contactLink.addEventListener('click',() => {\r\n    \r\n    if(contentDiv.childElementCount == 2) {\r\n        \r\n        contentDiv.removeChild(contentDiv.lastChild)\r\n    \r\n    }\r\n    contentDiv.appendChild(_Contact__WEBPACK_IMPORTED_MODULE_2__.default)\r\n})\r\n\r\n_pageLoad__WEBPACK_IMPORTED_MODULE_0__.menuLink.addEventListener('click',() => {\r\n    \r\n    if(contentDiv.childElementCount == 2) {\r\n        \r\n        contentDiv.removeChild(contentDiv.lastChild)\r\n    \r\n    }\r\n    contentDiv.appendChild(_Menu__WEBPACK_IMPORTED_MODULE_3__.default)\r\n})\r\n\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/pageLoad.js":
/*!*************************!*\
  !*** ./src/pageLoad.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"navDiv\": () => (/* binding */ navDiv),\n/* harmony export */   \"menuLink\": () => (/* binding */ menuLink),\n/* harmony export */   \"contactLink\": () => (/* binding */ contactLink),\n/* harmony export */   \"aboutLink\": () => (/* binding */ aboutLink)\n/* harmony export */ });\nconst RESTAURANT_NAME = 'bread butter'\r\nconst ABOUT = 'about'\r\nconst CONTACT = 'contact us'\r\nconst MENU = 'menu'\r\n\r\nlet navDiv = document.createElement('nav')\r\nnavDiv.innerText = RESTAURANT_NAME\r\n\r\nlet navLinks = document.createElement('ul')\r\n\r\nconst menuLink = document.createElement('li')\r\nmenuLink.innerText = MENU \r\nnavLinks.appendChild(menuLink)\r\nconst contactLink = document.createElement('li')\r\ncontactLink.innerText = CONTACT\r\nnavLinks.appendChild(contactLink)\r\nconst aboutLink = document.createElement('li')\r\naboutLink.innerText = ABOUT \r\nnavLinks.appendChild(aboutLink)\r\n\r\nnavDiv.appendChild(navLinks)\r\n\r\n \n\n//# sourceURL=webpack://restaurant-page/./src/pageLoad.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;