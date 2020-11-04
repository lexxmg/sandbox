/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/btn.js":
/*!********************!*\
  !*** ./src/btn.js ***!
  \********************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Button = /*#__PURE__*/function () {\n  _createClass(Button, [{\n    key: \"_declOfNum\",\n    value: function _declOfNum(number, titles) {\n      var cases = [2, 0, 1, 1, 1, 2];\n      return titles[number % 100 > 4 && number % 100 < 20 ? 2 : cases[number % 10 < 5 ? number % 10 : 5]];\n    }\n  }]);\n\n  function Button() {\n    _classCallCheck(this, Button);\n\n    this._btnName = 'btn';\n    this._bgColor = '';\n    this._color = '';\n    this._count = 0;\n  }\n\n  _createClass(Button, [{\n    key: \"createBtn\",\n    value: function createBtn() {\n      var _this = this;\n\n      var body = document.querySelector('body');\n      var btn = document.createElement('button');\n      btn.className = 'btn';\n      btn.style.backgroundColor = this._bgColor;\n      btn.style.color = this._color;\n      btn.innerHTML = this._btnName;\n      body.append(btn);\n      btn.addEventListener('click', function () {\n        _this._count++;\n        btn.innerHTML = _this._count;\n        btn.innerHTML += ' ' + _this._declOfNum(_this._count, ['клик', 'клика', 'кликов']);\n      });\n    }\n  }, {\n    key: \"options\",\n    value: function options() {\n      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},\n          _ref$btnName = _ref.btnName,\n          btnName = _ref$btnName === void 0 ? this._btnName : _ref$btnName,\n          _ref$bg = _ref.bg,\n          bg = _ref$bg === void 0 ? this._bgColor : _ref$bg,\n          _ref$color = _ref.color,\n          color = _ref$color === void 0 ? this._color : _ref$color;\n\n      this._btnName = btnName;\n      this._bgColor = bg;\n      this._color = color;\n    }\n  }]);\n\n  return Button;\n}();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Button);\n\n//# sourceURL=webpack://webpack-test/./src/btn.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _btn_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./btn.js */ \"./src/btn.js\");\n/* harmony import */ var _btn_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./btn.css */ \"./src/btn.css\");\n;\n\nvar btn1 = new _btn_js__WEBPACK_IMPORTED_MODULE_0__.default();\nvar btn2 = new _btn_js__WEBPACK_IMPORTED_MODULE_0__.default();\nbtn1.options({\n  btnName: 'Кнопкa-1',\n  bg: 'green',\n  color: '#fff'\n});\nbtn2.options({\n  color: 'red'\n});\nbtn1.createBtn();\nbtn2.createBtn();\n\n//# sourceURL=webpack://webpack-test/./src/index.js?");

/***/ }),

/***/ "./src/btn.css":
/*!*********************!*\
  !*** ./src/btn.css ***!
  \*********************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://webpack-test/./src/btn.css?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
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
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;