webpackHotUpdate_N_E("pages/index",{

/***/ "./components/LaunchDisplay.js":
/*!*************************************!*\
  !*** ./components/LaunchDisplay.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return LaunchDisplay; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! node-fetch */ \"./node_modules/node-fetch/browser.js\");\n/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(node_fetch__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nvar _jsxFileName = \"/Users/Raphy/code/api-testing.mjs/components/LaunchDisplay.js\",\n    _s = $RefreshSig$();\n\n\n\nfunction LaunchDisplay() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])([]),\n      launchData = _useState[0],\n      setLaunchData = _useState[1];\n\n  function handleButtonClick(e) {\n    e.preventDefault();\n    node_fetch__WEBPACK_IMPORTED_MODULE_1___default()(\"/api/launchfetcher\", {\n      method: \"POST\",\n      headers: {\n        \"Content-Type\": \"application/json\"\n      },\n      body: JSON.stringify({\n        query: \"give me the data fam.\"\n      })\n    }).then(function (result) {\n      console.log(result);\n      return result.json();\n    }).then(function (data) {\n      return setLaunchData(data);\n    })[\"catch\"](function (error) {\n      return console.log(error);\n    });\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n      onClick: handleButtonClick,\n      children: \"fetch\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 7\n    }, this), launchData.length > 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      children: JSON.stringify(launchData)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 33\n    }, this)]\n  }, void 0, true);\n}\n\n_s(LaunchDisplay, \"Csu8RpLc2XF0rtJcvGOssRjT3qM=\");\n\n_c = LaunchDisplay;\n\nvar _c;\n\n$RefreshReg$(_c, \"LaunchDisplay\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MYXVuY2hEaXNwbGF5LmpzPzI2NGQiXSwibmFtZXMiOlsiTGF1bmNoRGlzcGxheSIsInVzZVN0YXRlIiwibGF1bmNoRGF0YSIsInNldExhdW5jaERhdGEiLCJoYW5kbGVCdXR0b25DbGljayIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwicXVlcnkiLCJ0aGVuIiwicmVzdWx0IiwiY29uc29sZSIsImxvZyIsImpzb24iLCJkYXRhIiwiZXJyb3IiLCJsZW5ndGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVlLFNBQVNBLGFBQVQsR0FBeUI7QUFBQTs7QUFBQSxrQkFDRkMsc0RBQVEsQ0FBQyxFQUFELENBRE47QUFBQSxNQUMvQkMsVUFEK0I7QUFBQSxNQUNuQkMsYUFEbUI7O0FBRXRDLFdBQVNDLGlCQUFULENBQTJCQyxDQUEzQixFQUE4QjtBQUM1QkEsS0FBQyxDQUFDQyxjQUFGO0FBQ0FDLHFEQUFLLENBQUMsb0JBQUQsRUFBdUI7QUFDMUJDLFlBQU0sRUFBRSxNQURrQjtBQUUxQkMsYUFBTyxFQUFFO0FBQ1Asd0JBQWdCO0FBRFQsT0FGaUI7QUFLMUJDLFVBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFMLENBQWU7QUFDbkJDLGFBQUssRUFBRTtBQURZLE9BQWY7QUFMb0IsS0FBdkIsQ0FBTCxDQVNHQyxJQVRILENBU1EsVUFBQ0MsTUFBRCxFQUFZO0FBQ2hCQyxhQUFPLENBQUNDLEdBQVIsQ0FBWUYsTUFBWjtBQUNBLGFBQU9BLE1BQU0sQ0FBQ0csSUFBUCxFQUFQO0FBQ0QsS0FaSCxFQWFHSixJQWJILENBYVEsVUFBQ0ssSUFBRDtBQUFBLGFBQVVoQixhQUFhLENBQUNnQixJQUFELENBQXZCO0FBQUEsS0FiUixXQWNTLFVBQUNDLEtBQUQ7QUFBQSxhQUFXSixPQUFPLENBQUNDLEdBQVIsQ0FBWUcsS0FBWixDQUFYO0FBQUEsS0FkVDtBQWVEOztBQUVELHNCQUNFO0FBQUEsNEJBQ0U7QUFBUSxhQUFPLEVBQUVoQixpQkFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixFQUVHRixVQUFVLENBQUNtQixNQUFYLEdBQW9CLENBQXBCLGlCQUF5QjtBQUFBLGdCQUFJVixJQUFJLENBQUNDLFNBQUwsQ0FBZVYsVUFBZjtBQUFKO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGNUI7QUFBQSxrQkFERjtBQU1EOztHQTNCdUJGLGE7O0tBQUFBLGEiLCJmaWxlIjoiLi9jb21wb25lbnRzL0xhdW5jaERpc3BsYXkuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZmV0Y2ggZnJvbSBcIm5vZGUtZmV0Y2hcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExhdW5jaERpc3BsYXkoKSB7XG4gIGNvbnN0IFtsYXVuY2hEYXRhLCBzZXRMYXVuY2hEYXRhXSA9IHVzZVN0YXRlKFtdKTtcbiAgZnVuY3Rpb24gaGFuZGxlQnV0dG9uQ2xpY2soZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBmZXRjaChcIi9hcGkvbGF1bmNoZmV0Y2hlclwiLCB7XG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgIH0sXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIHF1ZXJ5OiBcImdpdmUgbWUgdGhlIGRhdGEgZmFtLlwiLFxuICAgICAgfSksXG4gICAgfSlcbiAgICAgIC50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdC5qc29uKCk7XG4gICAgICB9KVxuICAgICAgLnRoZW4oKGRhdGEpID0+IHNldExhdW5jaERhdGEoZGF0YSkpXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiBjb25zb2xlLmxvZyhlcnJvcikpO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVCdXR0b25DbGlja30+ZmV0Y2g8L2J1dHRvbj5cbiAgICAgIHtsYXVuY2hEYXRhLmxlbmd0aCA+IDAgJiYgPHA+e0pTT04uc3RyaW5naWZ5KGxhdW5jaERhdGEpfTwvcD59XG4gICAgPC8+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/LaunchDisplay.js\n");

/***/ })

})