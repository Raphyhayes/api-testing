webpackHotUpdate_N_E("pages/index",{

/***/ "./components/MostRecentLaunchDisplay.js":
/*!***********************************************!*\
  !*** ./components/MostRecentLaunchDisplay.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return MostRecentLaunchDisplay; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! node-fetch */ \"./node_modules/node-fetch/browser.js\");\n/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(node_fetch__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nvar _jsxFileName = \"/Users/Raphy/code/api-testing.mjs/components/MostRecentLaunchDisplay.js\",\n    _s = $RefreshSig$();\n\n\n\nfunction MostRecentLaunchDisplay() {\n  _s();\n\n  var _this = this;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])([]),\n      latestLaunchData = _useState[0],\n      setLatestLaunchData = _useState[1];\n\n  function handleButtonClick() {\n    node_fetch__WEBPACK_IMPORTED_MODULE_1___default()(\"/api/launch-fetcher\", {\n      method: \"POST\",\n      headers: {\n        \"Content-Type\": \"application/json\"\n      },\n      body: JSON.stringify({\n        endpoint: \"latest\"\n      })\n    }).then(function (response) {\n      return response.json();\n    }).then(function (data) {\n      data = {\n        reddit: data.links.reddit,\n        pics: data.links.flickr.original,\n        webcast: data.links.webcast,\n        name: data.name\n      };\n      setLatestLaunchData(data);\n    });\n  }\n\n  console.log(latestLaunchData.reddit);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n      onClick: handleButtonClick,\n      children: \"Fetch Most Recent Launch\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 7\n    }, this), Object.keys(latestLaunchData).length > 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h3\", {\n        children: latestLaunchData.name\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 11\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ul\", {\n        children: [\"Webcast : \", latestLaunchData.webcast]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 11\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ul\", {\n        children: [\"Pics :\", latestLaunchData.pics.map(function (pic) {\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n            children: pic\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 38,\n            columnNumber: 15\n          }, _this);\n        })]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 11\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ul\", {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"strong\", {\n          children: \"Reddit Threads\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 42,\n          columnNumber: 13\n        }, this), \" :\", Object.keys(latestLaunchData.reddit).map(function (key) {\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n            children: \"\".concat(key, \" : \").concat(latestLaunchData.reddit[key])\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 44,\n            columnNumber: 22\n          }, _this);\n        })]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 41,\n        columnNumber: 11\n      }, this)]\n    }, void 0, true)]\n  }, void 0, true);\n}\n\n_s(MostRecentLaunchDisplay, \"3fwxnVca65bSdDyEkQAf4MxV7yU=\");\n\n_c = MostRecentLaunchDisplay;\n\nvar _c;\n\n$RefreshReg$(_c, \"MostRecentLaunchDisplay\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Nb3N0UmVjZW50TGF1bmNoRGlzcGxheS5qcz85Njc2Il0sIm5hbWVzIjpbIk1vc3RSZWNlbnRMYXVuY2hEaXNwbGF5IiwidXNlU3RhdGUiLCJsYXRlc3RMYXVuY2hEYXRhIiwic2V0TGF0ZXN0TGF1bmNoRGF0YSIsImhhbmRsZUJ1dHRvbkNsaWNrIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJlbmRwb2ludCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJkYXRhIiwicmVkZGl0IiwibGlua3MiLCJwaWNzIiwiZmxpY2tyIiwib3JpZ2luYWwiLCJ3ZWJjYXN0IiwibmFtZSIsImNvbnNvbGUiLCJsb2ciLCJPYmplY3QiLCJrZXlzIiwibGVuZ3RoIiwibWFwIiwicGljIiwia2V5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFZSxTQUFTQSx1QkFBVCxHQUFtQztBQUFBOztBQUFBOztBQUFBLGtCQUNBQyxzREFBUSxDQUFDLEVBQUQsQ0FEUjtBQUFBLE1BQ3pDQyxnQkFEeUM7QUFBQSxNQUN2QkMsbUJBRHVCOztBQUVoRCxXQUFTQyxpQkFBVCxHQUE2QjtBQUMzQkMscURBQUssQ0FBQyxxQkFBRCxFQUF3QjtBQUMzQkMsWUFBTSxFQUFFLE1BRG1CO0FBRTNCQyxhQUFPLEVBQUU7QUFDUCx3QkFBZ0I7QUFEVCxPQUZrQjtBQUszQkMsVUFBSSxFQUFFQyxJQUFJLENBQUNDLFNBQUwsQ0FBZTtBQUNuQkMsZ0JBQVEsRUFBRTtBQURTLE9BQWY7QUFMcUIsS0FBeEIsQ0FBTCxDQVNHQyxJQVRILENBU1EsVUFBQ0MsUUFBRDtBQUFBLGFBQWNBLFFBQVEsQ0FBQ0MsSUFBVCxFQUFkO0FBQUEsS0FUUixFQVVHRixJQVZILENBVVEsVUFBQ0csSUFBRCxFQUFVO0FBQ2RBLFVBQUksR0FBRztBQUNMQyxjQUFNLEVBQUVELElBQUksQ0FBQ0UsS0FBTCxDQUFXRCxNQURkO0FBRUxFLFlBQUksRUFBRUgsSUFBSSxDQUFDRSxLQUFMLENBQVdFLE1BQVgsQ0FBa0JDLFFBRm5CO0FBR0xDLGVBQU8sRUFBRU4sSUFBSSxDQUFDRSxLQUFMLENBQVdJLE9BSGY7QUFJTEMsWUFBSSxFQUFFUCxJQUFJLENBQUNPO0FBSk4sT0FBUDtBQU1BbkIseUJBQW1CLENBQUNZLElBQUQsQ0FBbkI7QUFDRCxLQWxCSDtBQW1CRDs7QUFDRFEsU0FBTyxDQUFDQyxHQUFSLENBQVl0QixnQkFBZ0IsQ0FBQ2MsTUFBN0I7QUFDQSxzQkFDRTtBQUFBLDRCQUNFO0FBQVEsYUFBTyxFQUFFWixpQkFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixFQUVHcUIsTUFBTSxDQUFDQyxJQUFQLENBQVl4QixnQkFBWixFQUE4QnlCLE1BQTlCLEdBQXVDLENBQXZDLGlCQUNDO0FBQUEsOEJBQ0U7QUFBQSxrQkFBS3pCLGdCQUFnQixDQUFDb0I7QUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBRUU7QUFBQSxpQ0FBZXBCLGdCQUFnQixDQUFDbUIsT0FBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkYsZUFHRTtBQUFBLDZCQUVHbkIsZ0JBQWdCLENBQUNnQixJQUFqQixDQUFzQlUsR0FBdEIsQ0FBMEIsVUFBQ0MsR0FBRDtBQUFBLDhCQUN6QjtBQUFBLHNCQUFLQTtBQUFMO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRHlCO0FBQUEsU0FBMUIsQ0FGSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FIRixlQVNFO0FBQUEsZ0NBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsUUFFR0osTUFBTSxDQUFDQyxJQUFQLENBQVl4QixnQkFBZ0IsQ0FBQ2MsTUFBN0IsRUFBcUNZLEdBQXJDLENBQXlDLFVBQUNFLEdBQUQsRUFBUztBQUNqRCw4QkFBTztBQUFBLGdDQUFRQSxHQUFSLGdCQUFpQjVCLGdCQUFnQixDQUFDYyxNQUFqQixDQUF3QmMsR0FBeEIsQ0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUFQO0FBQ0QsU0FGQSxDQUZIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVRGO0FBQUEsb0JBSEo7QUFBQSxrQkFERjtBQXVCRDs7R0EvQ3VCOUIsdUI7O0tBQUFBLHVCIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9Nb3N0UmVjZW50TGF1bmNoRGlzcGxheS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmZXRjaCBmcm9tIFwibm9kZS1mZXRjaFwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTW9zdFJlY2VudExhdW5jaERpc3BsYXkoKSB7XG4gIGNvbnN0IFtsYXRlc3RMYXVuY2hEYXRhLCBzZXRMYXRlc3RMYXVuY2hEYXRhXSA9IHVzZVN0YXRlKFtdKTtcbiAgZnVuY3Rpb24gaGFuZGxlQnV0dG9uQ2xpY2soKSB7XG4gICAgZmV0Y2goXCIvYXBpL2xhdW5jaC1mZXRjaGVyXCIsIHtcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgfSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgZW5kcG9pbnQ6IFwibGF0ZXN0XCIsXG4gICAgICB9KSxcbiAgICB9KVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICBkYXRhID0ge1xuICAgICAgICAgIHJlZGRpdDogZGF0YS5saW5rcy5yZWRkaXQsXG4gICAgICAgICAgcGljczogZGF0YS5saW5rcy5mbGlja3Iub3JpZ2luYWwsXG4gICAgICAgICAgd2ViY2FzdDogZGF0YS5saW5rcy53ZWJjYXN0LFxuICAgICAgICAgIG5hbWU6IGRhdGEubmFtZSxcbiAgICAgICAgfTtcbiAgICAgICAgc2V0TGF0ZXN0TGF1bmNoRGF0YShkYXRhKTtcbiAgICAgIH0pO1xuICB9XG4gIGNvbnNvbGUubG9nKGxhdGVzdExhdW5jaERhdGEucmVkZGl0KTtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVCdXR0b25DbGlja30+RmV0Y2ggTW9zdCBSZWNlbnQgTGF1bmNoPC9idXR0b24+XG4gICAgICB7T2JqZWN0LmtleXMobGF0ZXN0TGF1bmNoRGF0YSkubGVuZ3RoID4gMCAmJiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgPGgzPntsYXRlc3RMYXVuY2hEYXRhLm5hbWV9PC9oMz5cbiAgICAgICAgICA8dWw+V2ViY2FzdCA6IHtsYXRlc3RMYXVuY2hEYXRhLndlYmNhc3R9PC91bD5cbiAgICAgICAgICA8dWw+XG4gICAgICAgICAgICBQaWNzIDpcbiAgICAgICAgICAgIHtsYXRlc3RMYXVuY2hEYXRhLnBpY3MubWFwKChwaWMpID0+IChcbiAgICAgICAgICAgICAgPGxpPntwaWN9PC9saT5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgPHVsPlxuICAgICAgICAgICAgPHN0cm9uZz5SZWRkaXQgVGhyZWFkczwvc3Ryb25nPiA6XG4gICAgICAgICAgICB7T2JqZWN0LmtleXMobGF0ZXN0TGF1bmNoRGF0YS5yZWRkaXQpLm1hcCgoa2V5KSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiA8bGk+e2Ake2tleX0gOiAke2xhdGVzdExhdW5jaERhdGEucmVkZGl0W2tleV19YH08L2xpPjtcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvPlxuICAgICAgKX1cbiAgICA8Lz5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/MostRecentLaunchDisplay.js\n");

/***/ })

})