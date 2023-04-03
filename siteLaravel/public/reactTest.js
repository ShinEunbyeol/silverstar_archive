var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

/******/(function () {
  // webpackBootstrap
  /******/var __webpack_modules__ = {

    /***/"./resources/js/reactTest.js":
    /*!***********************************!*\
      !*** ./resources/js/reactTest.js ***!
      \***********************************/
    /***/function resourcesJsReactTestJs() {

      throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: /var/www/html/silverstar_archive/siteLaravel/resources/js/reactTest.js: Support for the experimental syntax 'jsx' isn't currently enabled (17:9):\n\n\x1B[0m \x1B[90m 15 |\x1B[39m\x1B[0m\n\x1B[0m \x1B[90m 16 |\x1B[39m     \x1B[36mreturn\x1B[39m (\x1B[0m\n\x1B[0m\x1B[31m\x1B[1m>\x1B[22m\x1B[39m\x1B[90m 17 |\x1B[39m         \x1B[33m<\x1B[39m\x1B[33mbutton\x1B[39m onClick\x1B[33m=\x1B[39m{() \x1B[33m=>\x1B[39m \x1B[36mthis\x1B[39m\x1B[33m.\x1B[39msetState({ liked\x1B[33m:\x1B[39m \x1B[36mtrue\x1B[39m })}\x1B[33m>\x1B[39m\x1B[0m\n\x1B[0m \x1B[90m    |\x1B[39m         \x1B[31m\x1B[1m^\x1B[22m\x1B[39m\x1B[0m\n\x1B[0m \x1B[90m 18 |\x1B[39m           \x1B[33mLike\x1B[39m\x1B[0m\n\x1B[0m \x1B[90m 19 |\x1B[39m         \x1B[33m<\x1B[39m\x1B[33m/\x1B[39m\x1B[33mbutton\x1B[39m\x1B[33m>\x1B[39m\x1B[0m\n\x1B[0m \x1B[90m 20 |\x1B[39m       )\x1B[33m;\x1B[39m\x1B[0m\n\nAdd @babel/preset-react (https://github.com/babel/babel/tree/main/packages/babel-preset-react) to the 'presets' section of your Babel config to enable transformation.\nIf you want to leave it as-is, add @babel/plugin-syntax-jsx (https://github.com/babel/babel/tree/main/packages/babel-plugin-syntax-jsx) to the 'plugins' section to enable parsing.\n    at instantiate (/var/www/html/silverstar_archive/siteLaravel/node_modules/@babel/parser/lib/index.js:653:32)\n    at constructor (/var/www/html/silverstar_archive/siteLaravel/node_modules/@babel/parser/lib/index.js:947:12)\n    at Parser.raise (/var/www/html/silverstar_archive/siteLaravel/node_modules/@babel/parser/lib/index.js:3271:19)\n    at Parser.expectOnePlugin (/var/www/html/silverstar_archive/siteLaravel/node_modules/@babel/parser/lib/index.js:3317:18)\n    at Parser.parseExprAtom (/var/www/html/silverstar_archive/siteLaravel/node_modules/@babel/parser/lib/index.js:11230:18)\n    at Parser.parseExprSubscripts (/var/www/html/silverstar_archive/siteLaravel/node_modules/@babel/parser/lib/index.js:10880:23)\n    at Parser.parseUpdate (/var/www/html/silverstar_archive/siteLaravel/node_modules/@babel/parser/lib/index.js:10863:21)\n    at Parser.parseMaybeUnary (/var/www/html/silverstar_archive/siteLaravel/node_modules/@babel/parser/lib/index.js:10839:23)\n    at Parser.parseMaybeUnaryOrPrivate (/var/www/html/silverstar_archive/siteLaravel/node_modules/@babel/parser/lib/index.js:10677:61)\n    at Parser.parseExprOps (/var/www/html/silverstar_archive/siteLaravel/node_modules/@babel/parser/lib/index.js:10682:23)\n    at Parser.parseMaybeConditional (/var/www/html/silverstar_archive/siteLaravel/node_modules/@babel/parser/lib/index.js:10659:23)\n    at Parser.parseMaybeAssign (/var/www/html/silverstar_archive/siteLaravel/node_modules/@babel/parser/lib/index.js:10620:21)\n    at /var/www/html/silverstar_archive/siteLaravel/node_modules/@babel/parser/lib/index.js:10590:39\n    at Parser.allowInAnd (/var/www/html/silverstar_archive/siteLaravel/node_modules/@babel/parser/lib/index.js:12265:12)\n    at Parser.parseMaybeAssignAllowIn (/var/www/html/silverstar_archive/siteLaravel/node_modules/@babel/parser/lib/index.js:10590:17)\n    at Parser.parseParenAndDistinguishExpression (/var/www/html/silverstar_archive/siteLaravel/node_modules/@babel/parser/lib/index.js:11498:28)\n    at Parser.parseExprAtom (/var/www/html/silverstar_archive/siteLaravel/node_modules/@babel/parser/lib/index.js:11149:23)\n    at Parser.parseExprSubscripts (/var/www/html/silverstar_archive/siteLaravel/node_modules/@babel/parser/lib/index.js:10880:23)\n    at Parser.parseUpdate (/var/www/html/silverstar_archive/siteLaravel/node_modules/@babel/parser/lib/index.js:10863:21)\n    at Parser.parseMaybeUnary (/var/www/html/silverstar_archive/siteLaravel/node_modules/@babel/parser/lib/index.js:10839:23)\n    at Parser.parseMaybeUnaryOrPrivate (/var/www/html/silverstar_archive/siteLaravel/node_modules/@babel/parser/lib/index.js:10677:61)\n    at Parser.parseExprOps (/var/www/html/silverstar_archive/siteLaravel/node_modules/@babel/parser/lib/index.js:10682:23)\n    at Parser.parseMaybeConditional (/var/www/html/silverstar_archive/siteLaravel/node_modules/@babel/parser/lib/index.js:10659:23)\n    at Parser.parseMaybeAssign (/var/www/html/silverstar_archive/siteLaravel/node_modules/@babel/parser/lib/index.js:10620:21)\n    at Parser.parseExpressionBase (/var/www/html/silverstar_archive/siteLaravel/node_modules/@babel/parser/lib/index.js:10574:23)\n    at /var/www/html/silverstar_archive/siteLaravel/node_modules/@babel/parser/lib/index.js:10570:39\n    at Parser.allowInAnd (/var/www/html/silverstar_archive/siteLaravel/node_modules/@babel/parser/lib/index.js:12260:16)\n    at Parser.parseExpression (/var/www/html/silverstar_archive/siteLaravel/node_modules/@babel/parser/lib/index.js:10570:17)\n    at Parser.parseReturnStatement (/var/www/html/silverstar_archive/siteLaravel/node_modules/@babel/parser/lib/index.js:12943:28)\n    at Parser.parseStatementContent (/var/www/html/silverstar_archive/siteLaravel/node_modules/@babel/parser/lib/index.js:12590:21)\n    at Parser.parseStatementLike (/var/www/html/silverstar_archive/siteLaravel/node_modules/@babel/parser/lib/index.js:12557:17)\n    at Parser.parseStatementListItem (/var/www/html/silverstar_archive/siteLaravel/node_modules/@babel/parser/lib/index.js:12537:17)\n    at Parser.parseBlockOrModuleBlockBody (/var/www/html/silverstar_archive/siteLaravel/node_modules/@babel/parser/lib/index.js:13129:61)\n    at Parser.parseBlockBody (/var/www/html/silverstar_archive/siteLaravel/node_modules/@babel/parser/lib/index.js:13122:10)\n    at Parser.parseBlock (/var/www/html/silverstar_archive/siteLaravel/node_modules/@babel/parser/lib/index.js:13110:10)\n    at Parser.parseFunctionBody (/var/www/html/silverstar_archive/siteLaravel/node_modules/@babel/parser/lib/index.js:11932:24)\n    at Parser.parseFunctionBodyAndFinish (/var/www/html/silverstar_archive/siteLaravel/node_modules/@babel/parser/lib/index.js:11918:10)\n    at Parser.parseMethod (/var/www/html/silverstar_archive/siteLaravel/node_modules/@babel/parser/lib/index.js:11876:31)\n    at Parser.pushClassMethod (/var/www/html/silverstar_archive/siteLaravel/node_modules/@babel/parser/lib/index.js:13570:30)\n    at Parser.parseClassMemberWithIsStatic (/var/www/html/silverstar_archive/siteLaravel/node_modules/@babel/parser/lib/index.js:13442:12)\n    at Parser.parseClassMember (/var/www/html/silverstar_archive/siteLaravel/node_modules/@babel/parser/lib/index.js:13386:10)\n    at /var/www/html/silverstar_archive/siteLaravel/node_modules/@babel/parser/lib/index.js:13336:14\n    at Parser.withSmartMixTopicForbiddingContext (/var/www/html/silverstar_archive/siteLaravel/node_modules/@babel/parser/lib/index.js:12242:14)\n    at Parser.parseClassBody (/var/www/html/silverstar_archive/siteLaravel/node_modules/@babel/parser/lib/index.js:13316:10)\n    at Parser.parseClass (/var/www/html/silverstar_archive/siteLaravel/node_modules/@babel/parser/lib/index.js:13294:22)\n    at Parser.parseStatementContent (/var/www/html/silverstar_archive/siteLaravel/node_modules/@babel/parser/lib/index.js:12586:21)\n    at Parser.parseStatementLike (/var/www/html/silverstar_archive/siteLaravel/node_modules/@babel/parser/lib/index.js:12557:17)\n    at Parser.parseModuleItem (/var/www/html/silverstar_archive/siteLaravel/node_modules/@babel/parser/lib/index.js:12534:17)\n    at Parser.parseBlockOrModuleBlockBody (/var/www/html/silverstar_archive/siteLaravel/node_modules/@babel/parser/lib/index.js:13129:36)\n    at Parser.parseBlockBody (/var/www/html/silverstar_archive/siteLaravel/node_modules/@babel/parser/lib/index.js:13122:10)");

      /***/
    },

    /***/"./resources/css/main.css":
    /*!********************************!*\
      !*** ./resources/css/main.css ***!
      \********************************/
    /***/function resourcesCssMainCss(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

      "use strict";

      __webpack_require__.r(__webpack_exports__);
      // extracted by mini-css-extract-plugin


      /***/
    }

    /******/ };
  /************************************************************************/
  /******/ // The module cache
  /******/var __webpack_module_cache__ = {};
  /******/
  /******/ // The require function
  /******/function __webpack_require__(moduleId) {
    /******/ // Check if module is in cache
    /******/var cachedModule = __webpack_module_cache__[moduleId];
    /******/if (cachedModule !== undefined) {
      /******/return cachedModule.exports;
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/var module = __webpack_module_cache__[moduleId] = {
      /******/ // no module.id needed
      /******/ // no module.loaded needed
      /******/exports: {}
      /******/ };
    /******/
    /******/ // Execute the module function
    /******/__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
    /******/
    /******/ // Return the exports of the module
    /******/return module.exports;
    /******/
  }
  /******/
  /******/ // expose the modules object (__webpack_modules__)
  /******/__webpack_require__.m = __webpack_modules__;
  /******/
  /************************************************************************/
  /******/ /* webpack/runtime/chunk loaded */
  /******/(function () {
    /******/var deferred = [];
    /******/__webpack_require__.O = function (result, chunkIds, fn, priority) {
      /******/if (chunkIds) {
        /******/priority = priority || 0;
        /******/for (var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) {
          deferred[i] = deferred[i - 1];
        } /******/deferred[i] = [chunkIds, fn, priority];
        /******/return;
        /******/
      }
      /******/var notFulfilled = Infinity;
      /******/for (var i = 0; i < deferred.length; i++) {
        /******/var _deferred$i = _slicedToArray(deferred[i], 3),
            chunkIds = _deferred$i[0],
            fn = _deferred$i[1],
            priority = _deferred$i[2];
        /******/

        var fulfilled = true;
        /******/for (var j = 0; j < chunkIds.length; j++) {
          /******/if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function (key) {
            return __webpack_require__.O[key](chunkIds[j]);
          })) {
            /******/chunkIds.splice(j--, 1);
            /******/
          } else {
            /******/fulfilled = false;
            /******/if (priority < notFulfilled) notFulfilled = priority;
            /******/
          }
          /******/
        }
        /******/if (fulfilled) {
          /******/deferred.splice(i--, 1);
          /******/var r = fn();
          /******/if (r !== undefined) result = r;
          /******/
        }
        /******/
      }
      /******/return result;
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/hasOwnProperty shorthand */
  /******/(function () {
    /******/__webpack_require__.o = function (obj, prop) {
      return Object.prototype.hasOwnProperty.call(obj, prop);
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/make namespace object */
  /******/(function () {
    /******/ // define __esModule on exports
    /******/__webpack_require__.r = function (exports) {
      /******/if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
        /******/Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
        /******/
      }
      /******/Object.defineProperty(exports, '__esModule', { value: true });
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/jsonp chunk loading */
  /******/(function () {
    /******/ // no baseURI
    /******/
    /******/ // object to store loaded and loading chunks
    /******/ // undefined = chunk not loaded, null = chunk preloaded/prefetched
    /******/ // [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
    /******/var installedChunks = {
      /******/"/js/reactTest": 0,
      /******/"css/main": 0
      /******/ };
    /******/
    /******/ // no chunk on demand loading
    /******/
    /******/ // no prefetching
    /******/
    /******/ // no preloaded
    /******/
    /******/ // no HMR
    /******/
    /******/ // no HMR manifest
    /******/
    /******/__webpack_require__.O.j = function (chunkId) {
      return installedChunks[chunkId] === 0;
    };
    /******/
    /******/ // install a JSONP callback for chunk loading
    /******/var webpackJsonpCallback = function webpackJsonpCallback(parentChunkLoadingFunction, data) {
      /******/var _data = _slicedToArray(data, 3),
          chunkIds = _data[0],
          moreModules = _data[1],
          runtime = _data[2];
      /******/ // add "moreModules" to the modules object,
      /******/ // then flag all "chunkIds" as loaded and fire callback
      /******/

      var moduleId,
          chunkId,
          i = 0;
      /******/if (chunkIds.some(function (id) {
        return installedChunks[id] !== 0;
      })) {
        /******/for (moduleId in moreModules) {
          /******/if (__webpack_require__.o(moreModules, moduleId)) {
            /******/__webpack_require__.m[moduleId] = moreModules[moduleId];
            /******/
          }
          /******/
        }
        /******/if (runtime) var result = runtime(__webpack_require__);
        /******/
      }
      /******/if (parentChunkLoadingFunction) parentChunkLoadingFunction(data);
      /******/for (; i < chunkIds.length; i++) {
        /******/chunkId = chunkIds[i];
        /******/if (__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
          /******/installedChunks[chunkId][0]();
          /******/
        }
        /******/installedChunks[chunkId] = 0;
        /******/
      }
      /******/return __webpack_require__.O(result);
      /******/
    };
    /******/
    /******/var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
    /******/chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
    /******/chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
    /******/
  })();
  /******/
  /************************************************************************/
  /******/
  /******/ // startup
  /******/ // Load entry module and return exports
  /******/ // This entry module depends on other loaded chunks and execution need to be delayed
  /******/__webpack_require__.O(undefined, ["css/main"], function () {
    return __webpack_require__("./resources/js/reactTest.js");
  });
  /******/var __webpack_exports__ = __webpack_require__.O(undefined, ["css/main"], function () {
    return __webpack_require__("./resources/css/main.css");
  });
  /******/__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
  /******/
  /******/
})();