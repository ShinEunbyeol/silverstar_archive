/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/js/library/typing.js":
/*!****************************************!*\
  !*** ./resources/js/library/typing.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "typing": () => (/* binding */ typing)
/* harmony export */ });
/**
 * HTML ex)
 *      <span class="typingContainer">
 *          <span class='typingText'></span>
 *          <span class="typingCursor"></span>
 *      </span>
 */

var span_typingText;
var span_typingCursor;
document.addEventListener("DOMContentLoaded", function () {
  span_typingText = document.querySelector('.typingText');
  span_typingCursor = document.querySelector('.typingCursor');
});

// const textArray = ['welcome', 'to', 'my', 'wolrd'];
var typingDelay = 200; // 글자 입력 후에 다시 입력되기까지의 딜레이
var erasingDelay = 100; // 글자 지우기 후에 다시 지우기까지의 딜레이 
var beforeErasingDelay = 2000; // 단어 입력 완료 후 지우기까지의 딜레이
var beforeNewTypingDelay = 1000; // 단어 지우기 완료 후 다음 단어를 입력하기까지의 딜레이

var idx_textArray = 0; // 입력해야 하는 단어의 인덱스(ex. 'my' => idx_textArray=2)
var idx_letter = 0; // 입력 중인 현재 글자 위치 인덱스

/**
 * 타이핑 애니메이션을 적용하는 것에서 글자 입력을 담당하는 함수
 * call ex) setTimeout(typing, 1000, typingTextArr);
 * @param {Array} textArray 타이핑할 문자열 배열
 */
function typing(textArray) {
  var count_currentWord = textArray[idx_textArray].length; // 입력해야 하는 단어의 길이
  if (idx_letter < count_currentWord) {
    // 글자 입력
    var notBlink = span_typingCursor.classList.contains('typing');
    if (!notBlink) {
      span_typingCursor.classList.add('typing');
    }
    span_typingText.textContent += textArray[idx_textArray].charAt(idx_letter);
    idx_letter++;
    setTimeout(typing, typingDelay, textArray);
  } else {
    // 글자 입력 완료, 지우기 실행
    span_typingCursor.classList.remove('typing');
    setTimeout(erasing, beforeErasingDelay, textArray);
  }
}

/**
 * 타이핑 애니메이션을 적용하는 것에서 글자 제거를 담당하는 함수
 * @param {Array} textArray 타이핑할 문자열 배열
 */
function erasing(textArray) {
  if (idx_letter > 0) {
    // 글자 지우기
    var notBlink = span_typingCursor.classList.contains('typing');
    if (!notBlink) {
      span_typingCursor.classList.add('typing');
    }
    span_typingText.textContent = textArray[idx_textArray].substring(0, idx_letter - 1);
    idx_letter--;
    setTimeout(erasing, erasingDelay, textArray);
  } else {
    // 글자 지우기 완료, 다음 단어 입력 실행
    span_typingCursor.classList.remove('typing');
    idx_textArray++;
    var count_textArray = textArray.length;
    if (idx_textArray >= count_textArray) {
      idx_textArray = 0;
    }
    setTimeout(typing, beforeNewTypingDelay, textArray);
  }
}

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************************!*\
  !*** ./resources/js/content.js ***!
  \*********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _library_typing_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./library/typing.js */ "./resources/js/library/typing.js");

var typingTextArr = ['문제 해결', '편리', '성장', '논리'];
document.addEventListener("DOMContentLoaded", function () {
  setTimeout(_library_typing_js__WEBPACK_IMPORTED_MODULE_0__.typing, 1000, typingTextArr);
});
})();

/******/ })()
;