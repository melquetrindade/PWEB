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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ InfoCliente; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swr */ \"./node_modules/swr/core/dist/index.mjs\");\n\nvar _s = $RefreshSig$();\n\n\nfunction InfoCliente() {\n    _s();\n    const { data, error } = (0,swr__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"https://extreme-ip-lookup.com/json/?key=bbjnSAZBbYg2kosjued6 \", fetcher02);\n    if (error) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n            className: \"text-center py-2\",\n            children: \"Nenhum Resultados Encontrado\"\n        }, void 0, false, {\n            fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next4\\\\pages\\\\infoCliente.js\",\n            lineNumber: 8,\n            columnNumber: 13\n        }, this);\n    }\n    if (data) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"text-center py-2\",\n                    children: \"Informa\\xe7\\xf5es da M\\xe1quina\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next4\\\\pages\\\\infoCliente.js\",\n                    lineNumber: 14,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: contai,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: [\n                                \"IP de Consulta: \",\n                                data.query\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next4\\\\pages\\\\infoCliente.js\",\n                            lineNumber: 16,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: [\n                                \"Pa\\xeds: \",\n                                data.country\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next4\\\\pages\\\\infoCliente.js\",\n                            lineNumber: 17,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: [\n                                \"Cidade: \",\n                                data.city\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next4\\\\pages\\\\infoCliente.js\",\n                            lineNumber: 18,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: [\n                                \"Regi\\xe3o: \",\n                                data.region\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next4\\\\pages\\\\infoCliente.js\",\n                            lineNumber: 19,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: [\n                                \"ISP: \",\n                                data.isp\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next4\\\\pages\\\\infoCliente.js\",\n                            lineNumber: 20,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: [\n                                \"Latitude: \",\n                                data.lat\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next4\\\\pages\\\\infoCliente.js\",\n                            lineNumber: 21,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: [\n                                \"Longitude: \",\n                                data.lon\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next4\\\\pages\\\\infoCliente.js\",\n                            lineNumber: 22,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next4\\\\pages\\\\infoCliente.js\",\n                    lineNumber: 15,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next4\\\\pages\\\\infoCliente.js\",\n            lineNumber: 13,\n            columnNumber: 13\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Load, {}, void 0, false, {\n        fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next4\\\\pages\\\\infoCliente.js\",\n        lineNumber: 28,\n        columnNumber: 9\n    }, this);\n}\n_s(InfoCliente, \"PLUSh3GLacfZJClYQJks7Deieck=\", false, function() {\n    return [\n        swr__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n    ];\n});\n_c = InfoCliente;\nasync function fetcher02(url) {\n    const res = await fetch(url);\n    const json = await res.json();\n    return json;\n}\nfunction Load() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: styles.fade,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            class: \"spinner-border text-info\",\n            role: \"status\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                class: \"visually-hidden\",\n                children: \"Loading...\"\n            }, void 0, false, {\n                fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next4\\\\pages\\\\infoCliente.js\",\n                lineNumber: 42,\n                columnNumber: 17\n            }, this)\n        }, void 0, false, {\n            fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next4\\\\pages\\\\infoCliente.js\",\n            lineNumber: 41,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next4\\\\pages\\\\infoCliente.js\",\n        lineNumber: 40,\n        columnNumber: 9\n    }, this);\n}\n_c1 = Load;\nvar _c, _c1;\n$RefreshReg$(_c, \"InfoCliente\");\n$RefreshReg$(_c1, \"Load\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmZvQ2xpZW50ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUEwQjtBQUNEO0FBRVYsU0FBU0U7O0lBQ3BCLE1BQU0sRUFBQ0MsSUFBSSxFQUFFQyxLQUFLLEVBQUMsR0FBR0gsK0NBQU1BLENBQUUsaUVBQStESTtJQUM3RixJQUFHRCxPQUFNO1FBQ0wscUJBQ0ksOERBQUNFO1lBQUdDLFdBQVU7c0JBQW1COzs7Ozs7SUFFekM7SUFDQSxJQUFHSixNQUFLO1FBQ0oscUJBQ0ksOERBQUNLOzs4QkFDRyw4REFBQ0Y7b0JBQUdDLFdBQVU7OEJBQW1COzs7Ozs7OEJBQ2pDLDhEQUFDQztvQkFBSUQsV0FBV0U7O3NDQUNaLDhEQUFDQzs7Z0NBQUU7Z0NBQWlCUCxLQUFLUSxLQUFLOzs7Ozs7O3NDQUM5Qiw4REFBQ0Q7O2dDQUFFO2dDQUFPUCxLQUFLUyxPQUFPOzs7Ozs7O3NDQUN0Qiw4REFBQ0Y7O2dDQUFFO2dDQUFTUCxLQUFLVSxJQUFJOzs7Ozs7O3NDQUNyQiw4REFBQ0g7O2dDQUFFO2dDQUFTUCxLQUFLVyxNQUFNOzs7Ozs7O3NDQUN2Qiw4REFBQ0o7O2dDQUFFO2dDQUFNUCxLQUFLWSxHQUFHOzs7Ozs7O3NDQUNqQiw4REFBQ0w7O2dDQUFFO2dDQUFXUCxLQUFLYSxHQUFHOzs7Ozs7O3NDQUN0Qiw4REFBQ047O2dDQUFFO2dDQUFZUCxLQUFLYyxHQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBSXZDO0lBQ0EscUJBQ0ksOERBQUNDOzs7OztBQUVUO0dBMUJ3QmhCOztRQUNFRCwyQ0FBTUE7OztLQURSQztBQTRCeEIsZUFBZUcsVUFBVWMsR0FBRztJQUN4QixNQUFNQyxNQUFNLE1BQU1DLE1BQU1GO0lBQ3hCLE1BQU1HLE9BQU8sTUFBTUYsSUFBSUUsSUFBSTtJQUMzQixPQUFPQTtBQUNYO0FBRUEsU0FBU0o7SUFDTCxxQkFDSSw4REFBQ1Y7UUFBSUQsV0FBV2dCLE9BQU9DLElBQUk7a0JBQ3ZCLDRFQUFDaEI7WUFBSWlCLE9BQU07WUFBMkJDLE1BQUs7c0JBQ3ZDLDRFQUFDQztnQkFBS0YsT0FBTTswQkFBa0I7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJOUM7TUFSU1AiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5mb0NsaWVudGUuanM/ZDEyMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgdXNlU1dSIGZyb20gJ3N3cic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmZvQ2xpZW50ZSgpe1xyXG4gICAgY29uc3Qge2RhdGEsIGVycm9yfSA9IHVzZVNXUihgaHR0cHM6Ly9leHRyZW1lLWlwLWxvb2t1cC5jb20vanNvbi8/a2V5PWJiam5TQVpCYllnMmtvc2p1ZWQ2IGAsZmV0Y2hlcjAyKVxyXG4gICAgaWYoZXJyb3Ipe1xyXG4gICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT0ndGV4dC1jZW50ZXIgcHktMic+TmVuaHVtIFJlc3VsdGFkb3MgRW5jb250cmFkbzwvaDE+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG4gICAgaWYoZGF0YSl7XHJcbiAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT0ndGV4dC1jZW50ZXIgcHktMic+SW5mb3JtYcOnw7VlcyBkYSBNw6FxdWluYTwvaDE+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y29udGFpfT5cclxuICAgICAgICAgICAgICAgICAgICA8cD5JUCBkZSBDb25zdWx0YToge2RhdGEucXVlcnl9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPlBhw61zOiB7ZGF0YS5jb3VudHJ5fTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8cD5DaWRhZGU6IHtkYXRhLmNpdHl9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPlJlZ2nDo286IHtkYXRhLnJlZ2lvbn08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+SVNQOiB7ZGF0YS5pc3B9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPkxhdGl0dWRlOiB7ZGF0YS5sYXR9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPkxvbmdpdHVkZToge2RhdGEubG9ufTwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPExvYWQvPlxyXG4gICAgKVxyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBmZXRjaGVyMDIodXJsKXtcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKHVybClcclxuICAgIGNvbnN0IGpzb24gPSBhd2FpdCByZXMuanNvbigpXHJcbiAgICByZXR1cm4ganNvblxyXG59XHJcblxyXG5mdW5jdGlvbiBMb2FkKCl7XHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mYWRlfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNwaW5uZXItYm9yZGVyIHRleHQtaW5mb1wiIHJvbGU9XCJzdGF0dXNcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidmlzdWFsbHktaGlkZGVuXCI+TG9hZGluZy4uLjwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn0iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTV1IiLCJJbmZvQ2xpZW50ZSIsImRhdGEiLCJlcnJvciIsImZldGNoZXIwMiIsImgxIiwiY2xhc3NOYW1lIiwiZGl2IiwiY29udGFpIiwicCIsInF1ZXJ5IiwiY291bnRyeSIsImNpdHkiLCJyZWdpb24iLCJpc3AiLCJsYXQiLCJsb24iLCJMb2FkIiwidXJsIiwicmVzIiwiZmV0Y2giLCJqc29uIiwic3R5bGVzIiwiZmFkZSIsImNsYXNzIiwicm9sZSIsInNwYW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/infoCliente.js\n"));

/***/ })

});