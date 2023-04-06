/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!******************************!*\
  !*** ./resources/js/main.js ***!
  \******************************/
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
var class_activeMenu = 'activeMenu'; // 활성화된 메인 메뉴

document.addEventListener("DOMContentLoaded", function () {
  var menu = document.querySelectorAll('.eachMenu');
  menu.forEach(function (target) {
    return target.addEventListener('click', function () {
      check_activeMenu(target.getAttribute('id'));
    });
  });
});

/**
 * 활성화된 메뉴에 따라서 자동으로 적용해주는 함수
 * @param {string} mainMenu 활성화된 메인 메뉴 id
 */
function check_activeMenu(mainMenu) {
  var tag_currentActiveMenu = document.querySelectorAll('.' + class_activeMenu);
  var tag_mainMenu = document.getElementById(mainMenu);
  var tag_sideMenu = document.getElementById(mainMenu + '-side');

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
  tag_sideMenu.classList.add(class_activeMenu);
}
/******/ })()
;