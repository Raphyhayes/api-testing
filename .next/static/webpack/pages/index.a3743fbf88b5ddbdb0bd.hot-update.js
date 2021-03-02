webpackHotUpdate_N_E("pages/index",{

/***/ "./components/UpcomingLaunchDisplay.js":
/*!*********************************************!*\
  !*** ./components/UpcomingLaunchDisplay.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return UpcomingLaunchDisplay; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! node-fetch */ \"./node_modules/node-fetch/browser.js\");\n/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(node_fetch__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nvar _jsxFileName = \"/Users/Raphy/code/api-testing.mjs/components/UpcomingLaunchDisplay.js\",\n    _s = $RefreshSig$();\n\n\n\nfunction UpcomingLaunchDisplay() {\n  _s();\n\n  var _this = this;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])([]),\n      launchData = _useState[0],\n      setLaunchData = _useState[1];\n\n  function handleButtonClick(e) {\n    e.preventDefault();\n    node_fetch__WEBPACK_IMPORTED_MODULE_1___default()(\"/api/launch-fetcher\", {\n      method: \"POST\",\n      headers: {\n        \"Content-Type\": \"application/json\"\n      },\n      body: JSON.stringify({\n        endpoint: \"upcoming\"\n      })\n    }).then(function (result) {\n      console.log(result);\n      return result.json();\n    }).then(function (data) {\n      setLaunchData(data.map(function (entry) {\n        return {\n          name: entry.name,\n          rocket: entry.rocket,\n          static_fire_date: entry.static_fire_date_utc,\n          launch_date: entry.date_utc,\n          details: entry.details,\n          webcast: entry.links.webcast\n        };\n      }));\n    })[\"catch\"](function (error) {\n      return console.log(error);\n    });\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n      onClick: handleButtonClick,\n      children: \"Fetch Upcoming Launches\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 7\n    }, this), launchData.length > 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      children: Object.keys(launchData[0]).map(function (key) {\n        console.log(key);\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n          children: key\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 45,\n          columnNumber: 20\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 9\n    }, this), launchData.length > 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      children: launchData.map(function (event) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ul\", {\n          children: Object.keys(launchData[0]).map(function (key) {\n            console.log(event, \"this be the event\");\n            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"strong\", {\n                children: key[0].toUpperCase() + key.substring(1)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 58,\n                columnNumber: 23\n              }, _this), \": \".concat(event[key])]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 57,\n              columnNumber: 21\n            }, _this);\n          })\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 53,\n          columnNumber: 15\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 9\n    }, this)]\n  }, void 0, true);\n}\n\n_s(UpcomingLaunchDisplay, \"Csu8RpLc2XF0rtJcvGOssRjT3qM=\");\n\n_c = UpcomingLaunchDisplay;\n\nvar _c;\n\n$RefreshReg$(_c, \"UpcomingLaunchDisplay\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9VcGNvbWluZ0xhdW5jaERpc3BsYXkuanM/Y2UzYiJdLCJuYW1lcyI6WyJVcGNvbWluZ0xhdW5jaERpc3BsYXkiLCJ1c2VTdGF0ZSIsImxhdW5jaERhdGEiLCJzZXRMYXVuY2hEYXRhIiwiaGFuZGxlQnV0dG9uQ2xpY2siLCJlIiwicHJldmVudERlZmF1bHQiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImVuZHBvaW50IiwidGhlbiIsInJlc3VsdCIsImNvbnNvbGUiLCJsb2ciLCJqc29uIiwiZGF0YSIsIm1hcCIsImVudHJ5IiwibmFtZSIsInJvY2tldCIsInN0YXRpY19maXJlX2RhdGUiLCJzdGF0aWNfZmlyZV9kYXRlX3V0YyIsImxhdW5jaF9kYXRlIiwiZGF0ZV91dGMiLCJkZXRhaWxzIiwid2ViY2FzdCIsImxpbmtzIiwiZXJyb3IiLCJsZW5ndGgiLCJPYmplY3QiLCJrZXlzIiwia2V5IiwiZXZlbnQiLCJ0b1VwcGVyQ2FzZSIsInN1YnN0cmluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRWUsU0FBU0EscUJBQVQsR0FBaUM7QUFBQTs7QUFBQTs7QUFBQSxrQkFDVkMsc0RBQVEsQ0FBQyxFQUFELENBREU7QUFBQSxNQUN2Q0MsVUFEdUM7QUFBQSxNQUMzQkMsYUFEMkI7O0FBRTlDLFdBQVNDLGlCQUFULENBQTJCQyxDQUEzQixFQUE4QjtBQUM1QkEsS0FBQyxDQUFDQyxjQUFGO0FBQ0FDLHFEQUFLLENBQUMscUJBQUQsRUFBd0I7QUFDM0JDLFlBQU0sRUFBRSxNQURtQjtBQUUzQkMsYUFBTyxFQUFFO0FBQ1Asd0JBQWdCO0FBRFQsT0FGa0I7QUFLM0JDLFVBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFMLENBQWU7QUFDbkJDLGdCQUFRLEVBQUU7QUFEUyxPQUFmO0FBTHFCLEtBQXhCLENBQUwsQ0FTR0MsSUFUSCxDQVNRLFVBQUNDLE1BQUQsRUFBWTtBQUNoQkMsYUFBTyxDQUFDQyxHQUFSLENBQVlGLE1BQVo7QUFDQSxhQUFPQSxNQUFNLENBQUNHLElBQVAsRUFBUDtBQUNELEtBWkgsRUFhR0osSUFiSCxDQWFRLFVBQUNLLElBQUQsRUFBVTtBQUNkaEIsbUJBQWEsQ0FDWGdCLElBQUksQ0FBQ0MsR0FBTCxDQUFTLFVBQUNDLEtBQUQsRUFBVztBQUNsQixlQUFPO0FBQ0xDLGNBQUksRUFBRUQsS0FBSyxDQUFDQyxJQURQO0FBRUxDLGdCQUFNLEVBQUVGLEtBQUssQ0FBQ0UsTUFGVDtBQUdMQywwQkFBZ0IsRUFBRUgsS0FBSyxDQUFDSSxvQkFIbkI7QUFJTEMscUJBQVcsRUFBRUwsS0FBSyxDQUFDTSxRQUpkO0FBS0xDLGlCQUFPLEVBQUVQLEtBQUssQ0FBQ08sT0FMVjtBQU1MQyxpQkFBTyxFQUFFUixLQUFLLENBQUNTLEtBQU4sQ0FBWUQ7QUFOaEIsU0FBUDtBQVFELE9BVEQsQ0FEVyxDQUFiO0FBWUQsS0ExQkgsV0EyQlMsVUFBQ0UsS0FBRDtBQUFBLGFBQVdmLE9BQU8sQ0FBQ0MsR0FBUixDQUFZYyxLQUFaLENBQVg7QUFBQSxLQTNCVDtBQTRCRDs7QUFFRCxzQkFDRTtBQUFBLDRCQUNFO0FBQVEsYUFBTyxFQUFFM0IsaUJBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsRUFFR0YsVUFBVSxDQUFDOEIsTUFBWCxHQUFvQixDQUFwQixpQkFDQztBQUFBLGdCQUNHQyxNQUFNLENBQUNDLElBQVAsQ0FBWWhDLFVBQVUsQ0FBQyxDQUFELENBQXRCLEVBQTJCa0IsR0FBM0IsQ0FBK0IsVUFBQ2UsR0FBRCxFQUFTO0FBQ3ZDbkIsZUFBTyxDQUFDQyxHQUFSLENBQVlrQixHQUFaO0FBQ0EsNEJBQU87QUFBQSxvQkFBS0E7QUFBTDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUFQO0FBQ0QsT0FIQTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFISixFQVVHakMsVUFBVSxDQUFDOEIsTUFBWCxHQUFvQixDQUFwQixpQkFDQztBQUFBLGdCQUNHOUIsVUFBVSxDQUFDa0IsR0FBWCxDQUFlLFVBQUNnQixLQUFELEVBQVc7QUFDekIsNEJBQ0U7QUFBQSxvQkFDR0gsTUFBTSxDQUFDQyxJQUFQLENBQVloQyxVQUFVLENBQUMsQ0FBRCxDQUF0QixFQUEyQmtCLEdBQTNCLENBQStCLFVBQUNlLEdBQUQsRUFBUztBQUN2Q25CLG1CQUFPLENBQUNDLEdBQVIsQ0FBWW1CLEtBQVosRUFBbUIsbUJBQW5CO0FBQ0EsZ0NBQ0U7QUFBQSxzQ0FDRTtBQUFBLDBCQUFTRCxHQUFHLENBQUMsQ0FBRCxDQUFILENBQU9FLFdBQVAsS0FBdUJGLEdBQUcsQ0FBQ0csU0FBSixDQUFjLENBQWQ7QUFBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFERixjQUVRRixLQUFLLENBQUNELEdBQUQsQ0FGYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREY7QUFNRCxXQVJBO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERjtBQWFELE9BZEE7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBWEo7QUFBQSxrQkFERjtBQWdDRDs7R0FsRXVCbkMscUI7O0tBQUFBLHFCIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9VcGNvbWluZ0xhdW5jaERpc3BsYXkuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZmV0Y2ggZnJvbSBcIm5vZGUtZmV0Y2hcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFVwY29taW5nTGF1bmNoRGlzcGxheSgpIHtcbiAgY29uc3QgW2xhdW5jaERhdGEsIHNldExhdW5jaERhdGFdID0gdXNlU3RhdGUoW10pO1xuICBmdW5jdGlvbiBoYW5kbGVCdXR0b25DbGljayhlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGZldGNoKFwiL2FwaS9sYXVuY2gtZmV0Y2hlclwiLCB7XG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgIH0sXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIGVuZHBvaW50OiBcInVwY29taW5nXCIsXG4gICAgICB9KSxcbiAgICB9KVxuICAgICAgLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xuICAgICAgICByZXR1cm4gcmVzdWx0Lmpzb24oKTtcbiAgICAgIH0pXG4gICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICBzZXRMYXVuY2hEYXRhKFxuICAgICAgICAgIGRhdGEubWFwKChlbnRyeSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgbmFtZTogZW50cnkubmFtZSxcbiAgICAgICAgICAgICAgcm9ja2V0OiBlbnRyeS5yb2NrZXQsXG4gICAgICAgICAgICAgIHN0YXRpY19maXJlX2RhdGU6IGVudHJ5LnN0YXRpY19maXJlX2RhdGVfdXRjLFxuICAgICAgICAgICAgICBsYXVuY2hfZGF0ZTogZW50cnkuZGF0ZV91dGMsXG4gICAgICAgICAgICAgIGRldGFpbHM6IGVudHJ5LmRldGFpbHMsXG4gICAgICAgICAgICAgIHdlYmNhc3Q6IGVudHJ5LmxpbmtzLndlYmNhc3QsXG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH0pXG4gICAgICAgICk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnJvcikgPT4gY29uc29sZS5sb2coZXJyb3IpKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlQnV0dG9uQ2xpY2t9PkZldGNoIFVwY29taW5nIExhdW5jaGVzPC9idXR0b24+XG4gICAgICB7bGF1bmNoRGF0YS5sZW5ndGggPiAwICYmIChcbiAgICAgICAgPHA+XG4gICAgICAgICAge09iamVjdC5rZXlzKGxhdW5jaERhdGFbMF0pLm1hcCgoa2V5KSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhrZXkpO1xuICAgICAgICAgICAgcmV0dXJuIDxsaT57a2V5fTwvbGk+O1xuICAgICAgICAgIH0pfVxuICAgICAgICA8L3A+XG4gICAgICApfVxuICAgICAge2xhdW5jaERhdGEubGVuZ3RoID4gMCAmJiAoXG4gICAgICAgIDxwPlxuICAgICAgICAgIHtsYXVuY2hEYXRhLm1hcCgoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICB7T2JqZWN0LmtleXMobGF1bmNoRGF0YVswXSkubWFwKChrZXkpID0+IHtcbiAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGV2ZW50LCBcInRoaXMgYmUgdGhlIGV2ZW50XCIpO1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+e2tleVswXS50b1VwcGVyQ2FzZSgpICsga2V5LnN1YnN0cmluZygxKX08L3N0cm9uZz5cbiAgICAgICAgICAgICAgICAgICAgICB7YDogJHtldmVudFtrZXldfWB9XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC9wPlxuICAgICAgKX1cbiAgICA8Lz5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/UpcomingLaunchDisplay.js\n");

/***/ })

})