module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/upcoming-launch-fetcher.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/api/upcoming-launch-fetcher.js":
/*!**********************************************!*\
  !*** ./pages/api/upcoming-launch-fetcher.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return handler; });\n/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! node-fetch */ \"node-fetch\");\n/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(node_fetch__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction handler(req, res) {\n  node_fetch__WEBPACK_IMPORTED_MODULE_0___default()(`https://api.spacexdata.com/v4/launches/${req.body.endpoint}`).then(response => response.json()).then(data => {\n    console.log(data);\n    res.status(200).json(data.map(entry => {\n      return {\n        name: entry.name,\n        rocket: entry.rocket,\n        static_fire_date: entry.static_fire_date_utc,\n        launch_date: entry.date_utc,\n        details: entry.details,\n        webcast: entry.links.webcast\n      };\n    }));\n    {}\n  }).catch(error => console.log(error));\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvdXBjb21pbmctbGF1bmNoLWZldGNoZXIuanM/NTNlYiJdLCJuYW1lcyI6WyJoYW5kbGVyIiwicmVxIiwicmVzIiwiZmV0Y2giLCJib2R5IiwiZW5kcG9pbnQiLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJzdGF0dXMiLCJtYXAiLCJlbnRyeSIsIm5hbWUiLCJyb2NrZXQiLCJzdGF0aWNfZmlyZV9kYXRlIiwic3RhdGljX2ZpcmVfZGF0ZV91dGMiLCJsYXVuY2hfZGF0ZSIsImRhdGVfdXRjIiwiZGV0YWlscyIsIndlYmNhc3QiLCJsaW5rcyIsImNhdGNoIiwiZXJyb3IiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDZSxTQUFTQSxPQUFULENBQWlCQyxHQUFqQixFQUFzQkMsR0FBdEIsRUFBMkI7QUFDeENDLG1EQUFLLENBQUUsMENBQXlDRixHQUFHLENBQUNHLElBQUosQ0FBU0MsUUFBUyxFQUE3RCxDQUFMLENBQ0dDLElBREgsQ0FDU0MsUUFBRCxJQUFjQSxRQUFRLENBQUNDLElBQVQsRUFEdEIsRUFFR0YsSUFGSCxDQUVTRyxJQUFELElBQVU7QUFDZEMsV0FBTyxDQUFDQyxHQUFSLENBQVlGLElBQVo7QUFDQVAsT0FBRyxDQUFDVSxNQUFKLENBQVcsR0FBWCxFQUFnQkosSUFBaEIsQ0FDRUMsSUFBSSxDQUFDSSxHQUFMLENBQVVDLEtBQUQsSUFBVztBQUNsQixhQUFPO0FBQ0xDLFlBQUksRUFBRUQsS0FBSyxDQUFDQyxJQURQO0FBRUxDLGNBQU0sRUFBRUYsS0FBSyxDQUFDRSxNQUZUO0FBR0xDLHdCQUFnQixFQUFFSCxLQUFLLENBQUNJLG9CQUhuQjtBQUlMQyxtQkFBVyxFQUFFTCxLQUFLLENBQUNNLFFBSmQ7QUFLTEMsZUFBTyxFQUFFUCxLQUFLLENBQUNPLE9BTFY7QUFNTEMsZUFBTyxFQUFFUixLQUFLLENBQUNTLEtBQU4sQ0FBWUQ7QUFOaEIsT0FBUDtBQVFELEtBVEQsQ0FERjtBQVlBLEtBQ0M7QUFDRixHQWxCSCxFQW1CR0UsS0FuQkgsQ0FtQlVDLEtBQUQsSUFBV2YsT0FBTyxDQUFDQyxHQUFSLENBQVljLEtBQVosQ0FuQnBCO0FBb0JEIiwiZmlsZSI6Ii4vcGFnZXMvYXBpL3VwY29taW5nLWxhdW5jaC1mZXRjaGVyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZldGNoIGZyb20gXCJub2RlLWZldGNoXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XG4gIGZldGNoKGBodHRwczovL2FwaS5zcGFjZXhkYXRhLmNvbS92NC9sYXVuY2hlcy8ke3JlcS5ib2R5LmVuZHBvaW50fWApXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oXG4gICAgICAgIGRhdGEubWFwKChlbnRyeSkgPT4ge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBuYW1lOiBlbnRyeS5uYW1lLFxuICAgICAgICAgICAgcm9ja2V0OiBlbnRyeS5yb2NrZXQsXG4gICAgICAgICAgICBzdGF0aWNfZmlyZV9kYXRlOiBlbnRyeS5zdGF0aWNfZmlyZV9kYXRlX3V0YyxcbiAgICAgICAgICAgIGxhdW5jaF9kYXRlOiBlbnRyeS5kYXRlX3V0YyxcbiAgICAgICAgICAgIGRldGFpbHM6IGVudHJ5LmRldGFpbHMsXG4gICAgICAgICAgICB3ZWJjYXN0OiBlbnRyeS5saW5rcy53ZWJjYXN0LFxuICAgICAgICAgIH07XG4gICAgICAgIH0pXG4gICAgICApO1xuICAgICAge1xuICAgICAgfVxuICAgIH0pXG4gICAgLmNhdGNoKChlcnJvcikgPT4gY29uc29sZS5sb2coZXJyb3IpKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/upcoming-launch-fetcher.js\n");

/***/ }),

/***/ "node-fetch":
/*!*****************************!*\
  !*** external "node-fetch" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"node-fetch\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJub2RlLWZldGNoXCI/NWNkNSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJub2RlLWZldGNoLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibm9kZS1mZXRjaFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///node-fetch\n");

/***/ })

/******/ });