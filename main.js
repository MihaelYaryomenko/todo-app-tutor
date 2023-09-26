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

/***/ "./src/components/app.js":
/*!*******************************!*\
  !*** ./src/components/app.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   app: () => (/* binding */ app)\n/* harmony export */ });\nconst inputBox = document.querySelector('#input-box')\r\nconst listContainer = document.querySelector('#list-container')\r\n\r\nconst app = (() => {\r\n  const saveData = () => {\r\n    localStorage.setItem('data', listContainer.innerHTML)\r\n  }\r\n  \r\n  const showTask = () => {\r\n    listContainer.innerHTML = localStorage.getItem('data')\r\n  }\r\n  \r\n  const addTask = () => {\r\n    if (inputBox.value === '') {\r\n      alert('Please, enter the text :(')\r\n      return\r\n    }\r\n    const li = document.createElement('li')\r\n    li.innerText = inputBox.value\r\n    listContainer.appendChild(li)\r\n    const span = document.createElement('span')\r\n    span.innerText = '\\u00d7'\r\n    li.appendChild(span)\r\n    inputBox.value = ''\r\n    saveData()\r\n  }\r\n  \r\n  const checkTask = (e) => {\r\n    if (e.target.tagName === 'LI') {\r\n      e.target.classList.toggle('checked')\r\n      saveData()\r\n      return\r\n    }\r\n    if (e.target.tagName === 'SPAN') {\r\n      e.target.parentElement.remove()\r\n      saveData()\r\n      return\r\n    }\r\n  }\r\n\r\n  return { addTask, showTask, checkTask }\r\n})()\n\n//# sourceURL=webpack:///./src/components/app.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/app */ \"./src/components/app.js\");\n\r\n\r\nconst listContainer = document.querySelector('#list-container')\r\nconst btn = document.querySelector('button')\r\n\r\nbtn.addEventListener('click', _components_app__WEBPACK_IMPORTED_MODULE_0__.app.addTask)\r\nlistContainer.addEventListener('click', e => {_components_app__WEBPACK_IMPORTED_MODULE_0__.app.checkTask(e)}, false)\r\n_components_app__WEBPACK_IMPORTED_MODULE_0__.app.showTask()\n\n//# sourceURL=webpack:///./src/index.js?");

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