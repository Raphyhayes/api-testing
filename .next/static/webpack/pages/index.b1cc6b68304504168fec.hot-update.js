webpackHotUpdate_N_E("pages/index",{

/***/ "./components/MostRecentLaunchDisplay.js":
/*!***********************************************!*\
  !*** ./components/MostRecentLaunchDisplay.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return MostRecentLaunchDisplay; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! node-fetch */ \"./node_modules/node-fetch/browser.js\");\n/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(node_fetch__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nvar _jsxFileName = \"/Users/Raphy/code/api-testing.mjs/components/MostRecentLaunchDisplay.js\",\n    _s = $RefreshSig$();\n\n\n\nfunction MostRecentLaunchDisplay() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])([]),\n      latestLaunchData = _useState[0],\n      setLatestLaunchData = _useState[1];\n\n  function handleButtonClick() {\n    node_fetch__WEBPACK_IMPORTED_MODULE_1___default()(\"/api/launch-fetcher\", {\n      method: \"POST\",\n      headers: {\n        \"Content-Type\": \"application/json\"\n      },\n      body: JSON.stringify({\n        endpoint: \"latest\"\n      })\n    }).then(function (response) {\n      return response.json();\n    }).then(function (data) {\n      console.log(data);\n      setLatestLaunchData(data);\n    });\n  }\n\n  console.log(\"state\", Object.keys(latestLaunchData).split(\", \"));\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n      onClick: handleButtonClick,\n      children: \"Fetch Most Recent Launch\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 7\n    }, this), Object.keys(latestLaunchData).length > 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      children: Object.keys(latestLaunchData)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 9\n    }, this)]\n  }, void 0, true);\n}\n\n_s(MostRecentLaunchDisplay, \"3fwxnVca65bSdDyEkQAf4MxV7yU=\");\n\n_c = MostRecentLaunchDisplay;\n\nvar _c;\n\n$RefreshReg$(_c, \"MostRecentLaunchDisplay\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Nb3N0UmVjZW50TGF1bmNoRGlzcGxheS5qcz85Njc2Il0sIm5hbWVzIjpbIk1vc3RSZWNlbnRMYXVuY2hEaXNwbGF5IiwidXNlU3RhdGUiLCJsYXRlc3RMYXVuY2hEYXRhIiwic2V0TGF0ZXN0TGF1bmNoRGF0YSIsImhhbmRsZUJ1dHRvbkNsaWNrIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJlbmRwb2ludCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJkYXRhIiwiY29uc29sZSIsImxvZyIsIk9iamVjdCIsImtleXMiLCJzcGxpdCIsImxlbmd0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRWUsU0FBU0EsdUJBQVQsR0FBbUM7QUFBQTs7QUFBQSxrQkFDQUMsc0RBQVEsQ0FBQyxFQUFELENBRFI7QUFBQSxNQUN6Q0MsZ0JBRHlDO0FBQUEsTUFDdkJDLG1CQUR1Qjs7QUFFaEQsV0FBU0MsaUJBQVQsR0FBNkI7QUFDM0JDLHFEQUFLLENBQUMscUJBQUQsRUFBd0I7QUFDM0JDLFlBQU0sRUFBRSxNQURtQjtBQUUzQkMsYUFBTyxFQUFFO0FBQ1Asd0JBQWdCO0FBRFQsT0FGa0I7QUFLM0JDLFVBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFMLENBQWU7QUFDbkJDLGdCQUFRLEVBQUU7QUFEUyxPQUFmO0FBTHFCLEtBQXhCLENBQUwsQ0FTR0MsSUFUSCxDQVNRLFVBQUNDLFFBQUQ7QUFBQSxhQUFjQSxRQUFRLENBQUNDLElBQVQsRUFBZDtBQUFBLEtBVFIsRUFVR0YsSUFWSCxDQVVRLFVBQUNHLElBQUQsRUFBVTtBQUNkQyxhQUFPLENBQUNDLEdBQVIsQ0FBWUYsSUFBWjtBQUNBWix5QkFBbUIsQ0FBQ1ksSUFBRCxDQUFuQjtBQUNELEtBYkg7QUFjRDs7QUFDREMsU0FBTyxDQUFDQyxHQUFSLENBQVksT0FBWixFQUFxQkMsTUFBTSxDQUFDQyxJQUFQLENBQVlqQixnQkFBWixFQUE4QmtCLEtBQTlCLENBQW9DLElBQXBDLENBQXJCO0FBQ0Esc0JBQ0U7QUFBQSw0QkFDRTtBQUFRLGFBQU8sRUFBRWhCLGlCQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLEVBRUdjLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZakIsZ0JBQVosRUFBOEJtQixNQUE5QixHQUF1QyxDQUF2QyxpQkFDQztBQUFBLGdCQUFJSCxNQUFNLENBQUNDLElBQVAsQ0FBWWpCLGdCQUFaO0FBQUo7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUhKO0FBQUEsa0JBREY7QUFRRDs7R0EzQnVCRix1Qjs7S0FBQUEsdUIiLCJmaWxlIjoiLi9jb21wb25lbnRzL01vc3RSZWNlbnRMYXVuY2hEaXNwbGF5LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZldGNoIGZyb20gXCJub2RlLWZldGNoXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNb3N0UmVjZW50TGF1bmNoRGlzcGxheSgpIHtcbiAgY29uc3QgW2xhdGVzdExhdW5jaERhdGEsIHNldExhdGVzdExhdW5jaERhdGFdID0gdXNlU3RhdGUoW10pO1xuICBmdW5jdGlvbiBoYW5kbGVCdXR0b25DbGljaygpIHtcbiAgICBmZXRjaChcIi9hcGkvbGF1bmNoLWZldGNoZXJcIiwge1xuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICBlbmRwb2ludDogXCJsYXRlc3RcIixcbiAgICAgIH0pLFxuICAgIH0pXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICBzZXRMYXRlc3RMYXVuY2hEYXRhKGRhdGEpO1xuICAgICAgfSk7XG4gIH1cbiAgY29uc29sZS5sb2coXCJzdGF0ZVwiLCBPYmplY3Qua2V5cyhsYXRlc3RMYXVuY2hEYXRhKS5zcGxpdChcIiwgXCIpKTtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVCdXR0b25DbGlja30+RmV0Y2ggTW9zdCBSZWNlbnQgTGF1bmNoPC9idXR0b24+XG4gICAgICB7T2JqZWN0LmtleXMobGF0ZXN0TGF1bmNoRGF0YSkubGVuZ3RoID4gMCAmJiAoXG4gICAgICAgIDxwPntPYmplY3Qua2V5cyhsYXRlc3RMYXVuY2hEYXRhKX08L3A+XG4gICAgICApfVxuICAgIDwvPlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/MostRecentLaunchDisplay.js\n");

/***/ })

})