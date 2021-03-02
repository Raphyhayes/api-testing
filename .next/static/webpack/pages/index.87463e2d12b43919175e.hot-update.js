webpackHotUpdate_N_E("pages/index",{

/***/ "./components/MostRecentLaunchDisplay.js":
/*!***********************************************!*\
  !*** ./components/MostRecentLaunchDisplay.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return MostRecentLaunchDisplay; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! node-fetch */ \"./node_modules/node-fetch/browser.js\");\n/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(node_fetch__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nvar _jsxFileName = \"/Users/Raphy/code/api-testing.mjs/components/MostRecentLaunchDisplay.js\",\n    _s = $RefreshSig$();\n\n\n\nfunction MostRecentLaunchDisplay() {\n  _s();\n\n  var _this = this;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])([]),\n      latestLaunchData = _useState[0],\n      setLatestLaunchData = _useState[1];\n\n  function handleButtonClick() {\n    node_fetch__WEBPACK_IMPORTED_MODULE_1___default()(\"/api/launch-fetcher\", {\n      method: \"POST\",\n      headers: {\n        \"Content-Type\": \"application/json\"\n      },\n      body: JSON.stringify({\n        endpoint: \"latest\"\n      })\n    }).then(function (response) {\n      return response.json();\n    }).then(function (data) {\n      data = {\n        reddit: data.links.reddit,\n        pics: data.links.flickr.original,\n        webcast: data.webcast,\n        name: data.name\n      };\n      setLatestLaunchData(data);\n    });\n  }\n\n  console.log(latestLaunchData);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n      onClick: handleButtonClick,\n      children: \"Fetch Most Recent Launch\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 7\n    }, this), Object.keys(latestLaunchData).length > 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h3\", {\n        children: \"latestLaunchData.name\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 11\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ul\", {\n        children: [\"Webcast : \", latestLaunchData.webcast]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 11\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ul\", {\n        children: \"Pics : \"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 11\n      }, this), latestLaunchData.pics.map(function (pic) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n          children: \"pic\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 37,\n          columnNumber: 13\n        }, _this);\n      }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ul\", {\n        children: \"Reddit Threads : \"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 39,\n        columnNumber: 11\n      }, this), Object.keys(latestLaunchData.reddit).map(function (key) {\n        /*#__PURE__*/\n        Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n          children: \"\".concat(key, \" : \").concat(latestLaunchData.reddit[key])\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 41,\n          columnNumber: 13\n        }, _this);\n      })]\n    }, void 0, true)]\n  }, void 0, true);\n}\n\n_s(MostRecentLaunchDisplay, \"3fwxnVca65bSdDyEkQAf4MxV7yU=\");\n\n_c = MostRecentLaunchDisplay;\n\nvar _c;\n\n$RefreshReg$(_c, \"MostRecentLaunchDisplay\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Nb3N0UmVjZW50TGF1bmNoRGlzcGxheS5qcz85Njc2Il0sIm5hbWVzIjpbIk1vc3RSZWNlbnRMYXVuY2hEaXNwbGF5IiwidXNlU3RhdGUiLCJsYXRlc3RMYXVuY2hEYXRhIiwic2V0TGF0ZXN0TGF1bmNoRGF0YSIsImhhbmRsZUJ1dHRvbkNsaWNrIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJlbmRwb2ludCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJkYXRhIiwicmVkZGl0IiwibGlua3MiLCJwaWNzIiwiZmxpY2tyIiwib3JpZ2luYWwiLCJ3ZWJjYXN0IiwibmFtZSIsImNvbnNvbGUiLCJsb2ciLCJPYmplY3QiLCJrZXlzIiwibGVuZ3RoIiwibWFwIiwicGljIiwia2V5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFZSxTQUFTQSx1QkFBVCxHQUFtQztBQUFBOztBQUFBOztBQUFBLGtCQUNBQyxzREFBUSxDQUFDLEVBQUQsQ0FEUjtBQUFBLE1BQ3pDQyxnQkFEeUM7QUFBQSxNQUN2QkMsbUJBRHVCOztBQUVoRCxXQUFTQyxpQkFBVCxHQUE2QjtBQUMzQkMscURBQUssQ0FBQyxxQkFBRCxFQUF3QjtBQUMzQkMsWUFBTSxFQUFFLE1BRG1CO0FBRTNCQyxhQUFPLEVBQUU7QUFDUCx3QkFBZ0I7QUFEVCxPQUZrQjtBQUszQkMsVUFBSSxFQUFFQyxJQUFJLENBQUNDLFNBQUwsQ0FBZTtBQUNuQkMsZ0JBQVEsRUFBRTtBQURTLE9BQWY7QUFMcUIsS0FBeEIsQ0FBTCxDQVNHQyxJQVRILENBU1EsVUFBQ0MsUUFBRDtBQUFBLGFBQWNBLFFBQVEsQ0FBQ0MsSUFBVCxFQUFkO0FBQUEsS0FUUixFQVVHRixJQVZILENBVVEsVUFBQ0csSUFBRCxFQUFVO0FBQ2RBLFVBQUksR0FBRztBQUNMQyxjQUFNLEVBQUVELElBQUksQ0FBQ0UsS0FBTCxDQUFXRCxNQURkO0FBRUxFLFlBQUksRUFBRUgsSUFBSSxDQUFDRSxLQUFMLENBQVdFLE1BQVgsQ0FBa0JDLFFBRm5CO0FBR0xDLGVBQU8sRUFBRU4sSUFBSSxDQUFDTSxPQUhUO0FBSUxDLFlBQUksRUFBRVAsSUFBSSxDQUFDTztBQUpOLE9BQVA7QUFNQW5CLHlCQUFtQixDQUFDWSxJQUFELENBQW5CO0FBQ0QsS0FsQkg7QUFtQkQ7O0FBQ0RRLFNBQU8sQ0FBQ0MsR0FBUixDQUFZdEIsZ0JBQVo7QUFDQSxzQkFDRTtBQUFBLDRCQUNFO0FBQVEsYUFBTyxFQUFFRSxpQkFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixFQUVHcUIsTUFBTSxDQUFDQyxJQUFQLENBQVl4QixnQkFBWixFQUE4QnlCLE1BQTlCLEdBQXVDLENBQXZDLGlCQUNDO0FBQUEsOEJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUVFO0FBQUEsaUNBQWV6QixnQkFBZ0IsQ0FBQ21CLE9BQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGLGVBR0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FIRixFQUlHbkIsZ0JBQWdCLENBQUNnQixJQUFqQixDQUFzQlUsR0FBdEIsQ0FBMEIsVUFBQ0MsR0FBRDtBQUFBLDRCQUN6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEeUI7QUFBQSxPQUExQixDQUpILGVBT0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FQRixFQVFHSixNQUFNLENBQUNDLElBQVAsQ0FBWXhCLGdCQUFnQixDQUFDYyxNQUE3QixFQUFxQ1ksR0FBckMsQ0FBeUMsVUFBQ0UsR0FBRCxFQUFTO0FBQ2pEO0FBQUE7QUFBQSw4QkFBUUEsR0FBUixnQkFBaUI1QixnQkFBZ0IsQ0FBQ2MsTUFBakIsQ0FBd0JjLEdBQXhCLENBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNELE9BRkEsQ0FSSDtBQUFBLG9CQUhKO0FBQUEsa0JBREY7QUFtQkQ7O0dBM0N1QjlCLHVCOztLQUFBQSx1QiIsImZpbGUiOiIuL2NvbXBvbmVudHMvTW9zdFJlY2VudExhdW5jaERpc3BsYXkuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZmV0Y2ggZnJvbSBcIm5vZGUtZmV0Y2hcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1vc3RSZWNlbnRMYXVuY2hEaXNwbGF5KCkge1xuICBjb25zdCBbbGF0ZXN0TGF1bmNoRGF0YSwgc2V0TGF0ZXN0TGF1bmNoRGF0YV0gPSB1c2VTdGF0ZShbXSk7XG4gIGZ1bmN0aW9uIGhhbmRsZUJ1dHRvbkNsaWNrKCkge1xuICAgIGZldGNoKFwiL2FwaS9sYXVuY2gtZmV0Y2hlclwiLCB7XG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgIH0sXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIGVuZHBvaW50OiBcImxhdGVzdFwiLFxuICAgICAgfSksXG4gICAgfSlcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgZGF0YSA9IHtcbiAgICAgICAgICByZWRkaXQ6IGRhdGEubGlua3MucmVkZGl0LFxuICAgICAgICAgIHBpY3M6IGRhdGEubGlua3MuZmxpY2tyLm9yaWdpbmFsLFxuICAgICAgICAgIHdlYmNhc3Q6IGRhdGEud2ViY2FzdCxcbiAgICAgICAgICBuYW1lOiBkYXRhLm5hbWUsXG4gICAgICAgIH07XG4gICAgICAgIHNldExhdGVzdExhdW5jaERhdGEoZGF0YSk7XG4gICAgICB9KTtcbiAgfVxuICBjb25zb2xlLmxvZyhsYXRlc3RMYXVuY2hEYXRhKTtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVCdXR0b25DbGlja30+RmV0Y2ggTW9zdCBSZWNlbnQgTGF1bmNoPC9idXR0b24+XG4gICAgICB7T2JqZWN0LmtleXMobGF0ZXN0TGF1bmNoRGF0YSkubGVuZ3RoID4gMCAmJiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgPGgzPmxhdGVzdExhdW5jaERhdGEubmFtZTwvaDM+XG4gICAgICAgICAgPHVsPldlYmNhc3QgOiB7bGF0ZXN0TGF1bmNoRGF0YS53ZWJjYXN0fTwvdWw+XG4gICAgICAgICAgPHVsPlBpY3MgOiA8L3VsPlxuICAgICAgICAgIHtsYXRlc3RMYXVuY2hEYXRhLnBpY3MubWFwKChwaWMpID0+IChcbiAgICAgICAgICAgIDxsaT57fXBpYzwvbGk+XG4gICAgICAgICAgKSl9XG4gICAgICAgICAgPHVsPlJlZGRpdCBUaHJlYWRzIDogPC91bD5cbiAgICAgICAgICB7T2JqZWN0LmtleXMobGF0ZXN0TGF1bmNoRGF0YS5yZWRkaXQpLm1hcCgoa2V5KSA9PiB7XG4gICAgICAgICAgICA8bGk+e2Ake2tleX0gOiAke2xhdGVzdExhdW5jaERhdGEucmVkZGl0W2tleV19YH08L2xpPjtcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC8+XG4gICAgICApfVxuICAgIDwvPlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/MostRecentLaunchDisplay.js\n");

/***/ })

})