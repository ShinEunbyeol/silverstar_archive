/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/js/common.js":
/*!********************************!*\
  !*** ./resources/js/common.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "get_firstChild": () => (/* binding */ get_firstChild),
/* harmony export */   "test": () => (/* binding */ test)
/* harmony export */ });
function test() {
  console.log(test);
}

/**
 * firstChild 리턴값을 Text타입에서 Element타입으로 변경하는 함수
 * @param {Element} element 첫번째 자식 노드를 가져오려는 부모 노드
 * @returns Element타입의 첫번째 자식 노드
 */
function get_firstChild(element) {
  var firstChild = element.firstChild;
  while (firstChild != null && firstChild.nodeType == 3) {
    firstChild = firstChild.nextSibling;
  }
  return firstChild;
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
/*!******************************!*\
  !*** ./resources/js/main.js ***!
  \******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common.js */ "./resources/js/common.js");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

var class_activeMenu = 'activeMenu'; // 활성화된 메인 메뉴

document.addEventListener("DOMContentLoaded", function () {
  // 메인/사이드 메뉴 클릭
  var tag_menu = document.querySelectorAll('.eachMenu');
  tag_menu.forEach(function (target) {
    return target.addEventListener('click', function () {
      check_activeMenu(target.getAttribute('id'));
    });
  });
});

/**
 * 활성화된 메뉴에 따라서 자동으로 적용해주는 함수
 * @param {string} menuId 활성화된 메뉴 id ([메인메뉴]-[사이드메뉴])
 */
function check_activeMenu(menuId) {
  var mainMenuId; // 메인 메뉴 id
  var sideMenuId; // 사이드 메뉴 id
  if (menuId.indexOf('-') != -1) {
    var split_menuId = menuId.split('-');
    mainMenuId = split_menuId[0];
    sideMenuId = menuId;
  } else {
    mainMenuId = menuId;
  }
  var tag_currentActiveMenu = document.querySelectorAll('.' + class_activeMenu); // 이전에 선택된 메인/사이드 메뉴 노드
  var tag_mainMenu = document.getElementById(mainMenuId); // 선택된 메인 메뉴 노드
  var tag_sideMenuContainer = document.getElementById(mainMenuId + '-side'); // 선택된 사이트 메뉴 컨테이너 노드

  if (typeof sideMenuId == 'undefined') {
    sideMenuId = _common_js__WEBPACK_IMPORTED_MODULE_0__.get_firstChild(tag_sideMenuContainer).getAttribute('id');
  }
  var tag_sideMenu = document.getElementById(sideMenuId);

  // 메인/사이드 메뉴 활성 변경
  var _iterator = _createForOfIteratorHelper(tag_currentActiveMenu),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var tag_cam = _step.value;
      tag_cam.classList.remove(class_activeMenu);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  tag_mainMenu.classList.add(class_activeMenu);
  tag_sideMenuContainer.classList.add(class_activeMenu);
  tag_sideMenu.classList.add(class_activeMenu);
}
})();

/******/ })()
;