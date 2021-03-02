webpackHotUpdate_N_E("pages/index",{

/***/ "./components/MostRecentLaunchDisplay.js":
/*!***********************************************!*\
  !*** ./components/MostRecentLaunchDisplay.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return MostRecentLaunchDisplay; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! node-fetch */ \"./node_modules/node-fetch/browser.js\");\n/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(node_fetch__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\nvar _jsxFileName = \"/Users/Raphy/code/api-testing.mjs/components/MostRecentLaunchDisplay.js\",\n    _s = $RefreshSig$();\n\n\n\n\nfunction MostRecentLaunchDisplay() {\n  _s();\n\n  var _this = this;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])([]),\n      latestLaunchData = _useState[0],\n      setLatestLaunchData = _useState[1];\n\n  function handleButtonClick() {\n    node_fetch__WEBPACK_IMPORTED_MODULE_1___default()(\"/api/launch-fetcher\", {\n      method: \"POST\",\n      headers: {\n        \"Content-Type\": \"application/json\"\n      },\n      body: JSON.stringify({\n        endpoint: \"latest\"\n      })\n    }).then(function (response) {\n      return response.json();\n    }).then(function (data) {\n      data = {\n        reddit: data.links.reddit,\n        pics: data.links.flickr.original,\n        webcast: data.links.webcast,\n        name: data.name,\n        details: data.details\n      };\n      setLatestLaunchData(data);\n    });\n  }\n\n  console.log(latestLaunchData.reddit);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n      onClick: handleButtonClick,\n      children: \"Fetch Most Recent Launch\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 7\n    }, this), Object.keys(latestLaunchData).length > 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h3\", {\n        children: latestLaunchData.name\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 11\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        children: latestLaunchData.details\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 11\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ul\", {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n          href: latestLaunchData.webcast,\n          target: \"_blank\",\n          children: \"Webcast\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 37,\n          columnNumber: 13\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 11\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ul\", {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"strong\", {\n          children: \"Pics\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 42,\n          columnNumber: 13\n        }, this), \" :\", latestLaunchData.pics.map(function (pic) {\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            width: 50,\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n              src: pic,\n              height: 100\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 45,\n              columnNumber: 17\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 44,\n            columnNumber: 15\n          }, _this);\n        })]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 41,\n        columnNumber: 11\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ul\", {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"strong\", {\n          children: \"Reddit Threads\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 50,\n          columnNumber: 13\n        }, this), \" :\", Object.keys(latestLaunchData.reddit).map(function (key) {\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n              target: \"_blank\",\n              href: latestLaunchData.reddit[key],\n              children: key\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 54,\n              columnNumber: 19\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 53,\n            columnNumber: 17\n          }, _this);\n        })]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 49,\n        columnNumber: 11\n      }, this)]\n    }, void 0, true)]\n  }, void 0, true);\n}\n\n_s(MostRecentLaunchDisplay, \"3fwxnVca65bSdDyEkQAf4MxV7yU=\");\n\n_c = MostRecentLaunchDisplay;\n\nvar _c;\n\n$RefreshReg$(_c, \"MostRecentLaunchDisplay\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Nb3N0UmVjZW50TGF1bmNoRGlzcGxheS5qcz85Njc2Il0sIm5hbWVzIjpbIk1vc3RSZWNlbnRMYXVuY2hEaXNwbGF5IiwidXNlU3RhdGUiLCJsYXRlc3RMYXVuY2hEYXRhIiwic2V0TGF0ZXN0TGF1bmNoRGF0YSIsImhhbmRsZUJ1dHRvbkNsaWNrIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJlbmRwb2ludCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJkYXRhIiwicmVkZGl0IiwibGlua3MiLCJwaWNzIiwiZmxpY2tyIiwib3JpZ2luYWwiLCJ3ZWJjYXN0IiwibmFtZSIsImRldGFpbHMiLCJjb25zb2xlIiwibG9nIiwiT2JqZWN0Iiwia2V5cyIsImxlbmd0aCIsIm1hcCIsInBpYyIsImtleSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNlLFNBQVNBLHVCQUFULEdBQW1DO0FBQUE7O0FBQUE7O0FBQUEsa0JBQ0FDLHNEQUFRLENBQUMsRUFBRCxDQURSO0FBQUEsTUFDekNDLGdCQUR5QztBQUFBLE1BQ3ZCQyxtQkFEdUI7O0FBRWhELFdBQVNDLGlCQUFULEdBQTZCO0FBQzNCQyxxREFBSyxDQUFDLHFCQUFELEVBQXdCO0FBQzNCQyxZQUFNLEVBQUUsTUFEbUI7QUFFM0JDLGFBQU8sRUFBRTtBQUNQLHdCQUFnQjtBQURULE9BRmtCO0FBSzNCQyxVQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBTCxDQUFlO0FBQ25CQyxnQkFBUSxFQUFFO0FBRFMsT0FBZjtBQUxxQixLQUF4QixDQUFMLENBU0dDLElBVEgsQ0FTUSxVQUFDQyxRQUFEO0FBQUEsYUFBY0EsUUFBUSxDQUFDQyxJQUFULEVBQWQ7QUFBQSxLQVRSLEVBVUdGLElBVkgsQ0FVUSxVQUFDRyxJQUFELEVBQVU7QUFDZEEsVUFBSSxHQUFHO0FBQ0xDLGNBQU0sRUFBRUQsSUFBSSxDQUFDRSxLQUFMLENBQVdELE1BRGQ7QUFFTEUsWUFBSSxFQUFFSCxJQUFJLENBQUNFLEtBQUwsQ0FBV0UsTUFBWCxDQUFrQkMsUUFGbkI7QUFHTEMsZUFBTyxFQUFFTixJQUFJLENBQUNFLEtBQUwsQ0FBV0ksT0FIZjtBQUlMQyxZQUFJLEVBQUVQLElBQUksQ0FBQ08sSUFKTjtBQUtMQyxlQUFPLEVBQUVSLElBQUksQ0FBQ1E7QUFMVCxPQUFQO0FBT0FwQix5QkFBbUIsQ0FBQ1ksSUFBRCxDQUFuQjtBQUNELEtBbkJIO0FBb0JEOztBQUNEUyxTQUFPLENBQUNDLEdBQVIsQ0FBWXZCLGdCQUFnQixDQUFDYyxNQUE3QjtBQUNBLHNCQUNFO0FBQUEsNEJBQ0U7QUFBUSxhQUFPLEVBQUVaLGlCQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLEVBRUdzQixNQUFNLENBQUNDLElBQVAsQ0FBWXpCLGdCQUFaLEVBQThCMEIsTUFBOUIsR0FBdUMsQ0FBdkMsaUJBQ0M7QUFBQSw4QkFDRTtBQUFBLGtCQUFLMUIsZ0JBQWdCLENBQUNvQjtBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFRTtBQUFBLGtCQUFJcEIsZ0JBQWdCLENBQUNxQjtBQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkYsZUFHRTtBQUFBLCtCQUNFO0FBQUcsY0FBSSxFQUFFckIsZ0JBQWdCLENBQUNtQixPQUExQjtBQUFtQyxnQkFBTSxFQUFDLFFBQTFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUhGLGVBUUU7QUFBQSxnQ0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixRQUVHbkIsZ0JBQWdCLENBQUNnQixJQUFqQixDQUFzQlcsR0FBdEIsQ0FBMEIsVUFBQ0MsR0FBRDtBQUFBLDhCQUN6QjtBQUFLLGlCQUFLLEVBQUUsRUFBWjtBQUFBLG1DQUNFO0FBQUssaUJBQUcsRUFBRUEsR0FBVjtBQUFlLG9CQUFNLEVBQUU7QUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRHlCO0FBQUEsU0FBMUIsQ0FGSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FSRixlQWdCRTtBQUFBLGdDQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLFFBRUdKLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZekIsZ0JBQWdCLENBQUNjLE1BQTdCLEVBQXFDYSxHQUFyQyxDQUF5QyxVQUFDRSxHQUFELEVBQVM7QUFDakQsOEJBQ0U7QUFBQSxtQ0FDRTtBQUFHLG9CQUFNLEVBQUMsUUFBVjtBQUFtQixrQkFBSSxFQUFFN0IsZ0JBQWdCLENBQUNjLE1BQWpCLENBQXdCZSxHQUF4QixDQUF6QjtBQUFBLHdCQUNHQTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGO0FBT0QsU0FSQSxDQUZIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWhCRjtBQUFBLG9CQUhKO0FBQUEsa0JBREY7QUFvQ0Q7O0dBN0R1Qi9CLHVCOztLQUFBQSx1QiIsImZpbGUiOiIuL2NvbXBvbmVudHMvTW9zdFJlY2VudExhdW5jaERpc3BsYXkuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZmV0Y2ggZnJvbSBcIm5vZGUtZmV0Y2hcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNb3N0UmVjZW50TGF1bmNoRGlzcGxheSgpIHtcbiAgY29uc3QgW2xhdGVzdExhdW5jaERhdGEsIHNldExhdGVzdExhdW5jaERhdGFdID0gdXNlU3RhdGUoW10pO1xuICBmdW5jdGlvbiBoYW5kbGVCdXR0b25DbGljaygpIHtcbiAgICBmZXRjaChcIi9hcGkvbGF1bmNoLWZldGNoZXJcIiwge1xuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICBlbmRwb2ludDogXCJsYXRlc3RcIixcbiAgICAgIH0pLFxuICAgIH0pXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgIGRhdGEgPSB7XG4gICAgICAgICAgcmVkZGl0OiBkYXRhLmxpbmtzLnJlZGRpdCxcbiAgICAgICAgICBwaWNzOiBkYXRhLmxpbmtzLmZsaWNrci5vcmlnaW5hbCxcbiAgICAgICAgICB3ZWJjYXN0OiBkYXRhLmxpbmtzLndlYmNhc3QsXG4gICAgICAgICAgbmFtZTogZGF0YS5uYW1lLFxuICAgICAgICAgIGRldGFpbHM6IGRhdGEuZGV0YWlscyxcbiAgICAgICAgfTtcbiAgICAgICAgc2V0TGF0ZXN0TGF1bmNoRGF0YShkYXRhKTtcbiAgICAgIH0pO1xuICB9XG4gIGNvbnNvbGUubG9nKGxhdGVzdExhdW5jaERhdGEucmVkZGl0KTtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVCdXR0b25DbGlja30+RmV0Y2ggTW9zdCBSZWNlbnQgTGF1bmNoPC9idXR0b24+XG4gICAgICB7T2JqZWN0LmtleXMobGF0ZXN0TGF1bmNoRGF0YSkubGVuZ3RoID4gMCAmJiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgPGgzPntsYXRlc3RMYXVuY2hEYXRhLm5hbWV9PC9oMz5cbiAgICAgICAgICA8cD57bGF0ZXN0TGF1bmNoRGF0YS5kZXRhaWxzfTwvcD5cbiAgICAgICAgICA8dWw+XG4gICAgICAgICAgICA8YSBocmVmPXtsYXRlc3RMYXVuY2hEYXRhLndlYmNhc3R9IHRhcmdldD1cIl9ibGFua1wiPlxuICAgICAgICAgICAgICBXZWJjYXN0XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgICA8dWw+XG4gICAgICAgICAgICA8c3Ryb25nPlBpY3M8L3N0cm9uZz4gOlxuICAgICAgICAgICAge2xhdGVzdExhdW5jaERhdGEucGljcy5tYXAoKHBpYykgPT4gKFxuICAgICAgICAgICAgICA8ZGl2IHdpZHRoPXs1MH0+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9e3BpY30gaGVpZ2h0PXsxMDB9PjwvaW1nPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgPHVsPlxuICAgICAgICAgICAgPHN0cm9uZz5SZWRkaXQgVGhyZWFkczwvc3Ryb25nPiA6XG4gICAgICAgICAgICB7T2JqZWN0LmtleXMobGF0ZXN0TGF1bmNoRGF0YS5yZWRkaXQpLm1hcCgoa2V5KSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgPGEgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj17bGF0ZXN0TGF1bmNoRGF0YS5yZWRkaXRba2V5XX0+XG4gICAgICAgICAgICAgICAgICAgIHtrZXl9XG4gICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvPlxuICAgICAgKX1cbiAgICA8Lz5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/MostRecentLaunchDisplay.js\n");

/***/ })

})