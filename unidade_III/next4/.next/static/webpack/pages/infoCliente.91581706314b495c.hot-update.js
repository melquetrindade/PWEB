"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/infoCliente",{

/***/ "./pages/infoCliente.js":
/*!******************************!*\
  !*** ./pages/infoCliente.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ InfoCliente; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swr */ \"./node_modules/swr/core/dist/index.mjs\");\n\nvar _s = $RefreshSig$();\n\n\nfunction InfoCliente() {\n    _s();\n    const { data, error } = (0,swr__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"https://extreme-ip-lookup.com/json \", fetcher02);\n    if (error) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"Deu erro\"\n        }, void 0, false, {\n            fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next4\\\\pages\\\\infoCliente.js\",\n            lineNumber: 8,\n            columnNumber: 13\n        }, this);\n    }\n    if (data) {\n        console.log(\"entrou\");\n        console.log(\"aqui: \".concat(data.query));\n        console.log(\"pas: \".concat(data.country));\n        console.log(\"aqui: \".concat(data.city));\n        console.log(\"aqui: \".concat(data.region));\n        console.log(\"aqui: \".concat(data.isp));\n        console.log(\"aqui: \".concat(data.query));\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"Deu cero\"\n        }, void 0, false, {\n            fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next4\\\\pages\\\\infoCliente.js\",\n            lineNumber: 21,\n            columnNumber: 13\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"Deu pau\"\n    }, void 0, false, {\n        fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next4\\\\pages\\\\infoCliente.js\",\n        lineNumber: 25,\n        columnNumber: 9\n    }, this);\n}\n_s(InfoCliente, \"PLUSh3GLacfZJClYQJks7Deieck=\", false, function() {\n    return [\n        swr__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n    ];\n});\n_c = InfoCliente;\nasync function fetcher02(url) {\n    const res = await fetch(url);\n    const json = await res.json();\n    return json;\n}\nvar _c;\n$RefreshReg$(_c, \"InfoCliente\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmZvQ2xpZW50ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUEwQjtBQUNEO0FBRVYsU0FBU0U7O0lBQ3BCLE1BQU0sRUFBQ0MsSUFBSSxFQUFFQyxLQUFLLEVBQUMsR0FBR0gsK0NBQU1BLENBQUUsdUNBQXFDSTtJQUNuRSxJQUFHRCxPQUFNO1FBQ0wscUJBQ0ksOERBQUNFO3NCQUFJOzs7Ozs7SUFFYjtJQUNBLElBQUdILE1BQUs7UUFDSkksUUFBUUMsR0FBRyxDQUFDO1FBQ1pELFFBQVFDLEdBQUcsQ0FBQyxTQUFvQixPQUFYTCxLQUFLTSxLQUFLO1FBQy9CRixRQUFRQyxHQUFHLENBQUMsUUFBcUIsT0FBYkwsS0FBS08sT0FBTztRQUNoQ0gsUUFBUUMsR0FBRyxDQUFDLFNBQW1CLE9BQVZMLEtBQUtRLElBQUk7UUFDOUJKLFFBQVFDLEdBQUcsQ0FBQyxTQUFxQixPQUFaTCxLQUFLUyxNQUFNO1FBQ2hDTCxRQUFRQyxHQUFHLENBQUMsU0FBa0IsT0FBVEwsS0FBS1UsR0FBRztRQUM3Qk4sUUFBUUMsR0FBRyxDQUFDLFNBQW9CLE9BQVhMLEtBQUtNLEtBQUs7UUFFL0IscUJBQ0ksOERBQUNIO3NCQUFJOzs7Ozs7SUFFYjtJQUNBLHFCQUNJLDhEQUFDQTtrQkFBSTs7Ozs7O0FBRWI7R0F2QndCSjs7UUFDRUQsMkNBQU1BOzs7S0FEUkM7QUF5QnhCLGVBQWVHLFVBQVVTLEdBQUc7SUFDeEIsTUFBTUMsTUFBTSxNQUFNQyxNQUFNRjtJQUN4QixNQUFNRyxPQUFPLE1BQU1GLElBQUlFLElBQUk7SUFDM0IsT0FBT0E7QUFDWCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmZvQ2xpZW50ZS5qcz9kMTIyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB1c2VTV1IgZnJvbSAnc3dyJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZm9DbGllbnRlKCl7XHJcbiAgICBjb25zdCB7ZGF0YSwgZXJyb3J9ID0gdXNlU1dSKGBodHRwczovL2V4dHJlbWUtaXAtbG9va3VwLmNvbS9qc29uIGAsZmV0Y2hlcjAyKVxyXG4gICAgaWYoZXJyb3Ipe1xyXG4gICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgPGRpdj5EZXUgZXJybzwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxuICAgIGlmKGRhdGEpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdlbnRyb3UnKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKGBhcXVpOiAke2RhdGEucXVlcnl9YClcclxuICAgICAgICBjb25zb2xlLmxvZyhgcGFzOiAke2RhdGEuY291bnRyeX1gKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKGBhcXVpOiAke2RhdGEuY2l0eX1gKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKGBhcXVpOiAke2RhdGEucmVnaW9ufWApXHJcbiAgICAgICAgY29uc29sZS5sb2coYGFxdWk6ICR7ZGF0YS5pc3B9YClcclxuICAgICAgICBjb25zb2xlLmxvZyhgYXF1aTogJHtkYXRhLnF1ZXJ5fWApXHJcblxyXG4gICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgPGRpdj5EZXUgY2VybzwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2PkRldSBwYXU8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gZmV0Y2hlcjAyKHVybCl7XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCh1cmwpXHJcbiAgICBjb25zdCBqc29uID0gYXdhaXQgcmVzLmpzb24oKVxyXG4gICAgcmV0dXJuIGpzb25cclxufSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVNXUiIsIkluZm9DbGllbnRlIiwiZGF0YSIsImVycm9yIiwiZmV0Y2hlcjAyIiwiZGl2IiwiY29uc29sZSIsImxvZyIsInF1ZXJ5IiwiY291bnRyeSIsImNpdHkiLCJyZWdpb24iLCJpc3AiLCJ1cmwiLCJyZXMiLCJmZXRjaCIsImpzb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/infoCliente.js\n"));

/***/ })

});