"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/movieDetails",{

/***/ "./pages/movieDetails.js":
/*!*******************************!*\
  !*** ./pages/movieDetails.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ MovieDetails; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swr */ \"./node_modules/swr/core/dist/index.mjs\");\n/* harmony import */ var _styles_movieDetails_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/movieDetails.module.css */ \"./styles/movieDetails.module.css\");\n/* harmony import */ var _styles_movieDetails_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_movieDetails_module_css__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction MovieDetails() {\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const { id } = router.query;\n    const { data, error } = (0,swr__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\"https://www.omdbapi.com/?apikey=cc202b3f&i=\".concat(id), fetcher);\n    if (error) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n        className: \"text-center py-2\",\n        children: \"Nenhum Resultados Encontrado\"\n    }, void 0, false, {\n        fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next4\\\\pages\\\\movieDetails.js\",\n        lineNumber: 13,\n        columnNumber: 22\n    }, this);\n    if (!data) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Load, {}, void 0, false, {\n        fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next4\\\\pages\\\\movieDetails.js\",\n        lineNumber: 14,\n        columnNumber: 22\n    }, this);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MovieCard, {\n        movie: data\n    }, void 0, false, {\n        fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next4\\\\pages\\\\movieDetails.js\",\n        lineNumber: 17,\n        columnNumber: 9\n    }, this);\n}\n_s(MovieDetails, \"mZuyhWoEayG5q+fyCgnn11lj9Sg=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter,\n        swr__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n    ];\n});\n_c = MovieDetails;\nfunction MovieCard(props) {\n    const { movie } = props;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_movieDetails_module_css__WEBPACK_IMPORTED_MODULE_4___default().containerCard),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_styles_movieDetails_module_css__WEBPACK_IMPORTED_MODULE_4___default().card),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_movieDetails_module_css__WEBPACK_IMPORTED_MODULE_4___default().containerPoster),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: movie.Poster\n                    }, void 0, false, {\n                        fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next4\\\\pages\\\\movieDetails.js\",\n                        lineNumber: 29,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next4\\\\pages\\\\movieDetails.js\",\n                    lineNumber: 28,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_movieDetails_module_css__WEBPACK_IMPORTED_MODULE_4___default().containerDetails),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_movieDetails_module_css__WEBPACK_IMPORTED_MODULE_4___default().cont01),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                        children: movie.Title\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next4\\\\pages\\\\movieDetails.js\",\n                                        lineNumber: 33,\n                                        columnNumber: 28\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next4\\\\pages\\\\movieDetails.js\",\n                                    lineNumber: 33,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: (_styles_movieDetails_module_css__WEBPACK_IMPORTED_MODULE_4___default().cont02),\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            children: movie.Year\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next4\\\\pages\\\\movieDetails.js\",\n                                            lineNumber: 35,\n                                            columnNumber: 29\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            children: movie.Runtime\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next4\\\\pages\\\\movieDetails.js\",\n                                            lineNumber: 36,\n                                            columnNumber: 29\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            children: movie.Type\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next4\\\\pages\\\\movieDetails.js\",\n                                            lineNumber: 37,\n                                            columnNumber: 29\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next4\\\\pages\\\\movieDetails.js\",\n                                    lineNumber: 34,\n                                    columnNumber: 25\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next4\\\\pages\\\\movieDetails.js\",\n                            lineNumber: 32,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_movieDetails_module_css__WEBPACK_IMPORTED_MODULE_4___default().cont03),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: (_styles_movieDetails_module_css__WEBPACK_IMPORTED_MODULE_4___default().cont04),\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            style: {\n                                                color: \"darkgrey\"\n                                            },\n                                            children: \"Elenco:\"\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next4\\\\pages\\\\movieDetails.js\",\n                                            lineNumber: 42,\n                                            columnNumber: 29\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            style: {\n                                                marginTop: \"-10px\"\n                                            },\n                                            children: movie.Actors\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next4\\\\pages\\\\movieDetails.js\",\n                                            lineNumber: 43,\n                                            columnNumber: 29\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next4\\\\pages\\\\movieDetails.js\",\n                                    lineNumber: 41,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: (_styles_movieDetails_module_css__WEBPACK_IMPORTED_MODULE_4___default().cont04),\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            style: {\n                                                color: \"darkgrey\"\n                                            },\n                                            children: \"G\\xeaneros:\"\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next4\\\\pages\\\\movieDetails.js\",\n                                            lineNumber: 46,\n                                            columnNumber: 29\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            style: {\n                                                marginTop: \"-10px\"\n                                            },\n                                            children: movie.Genre\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next4\\\\pages\\\\movieDetails.js\",\n                                            lineNumber: 47,\n                                            columnNumber: 29\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next4\\\\pages\\\\movieDetails.js\",\n                                    lineNumber: 45,\n                                    columnNumber: 25\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next4\\\\pages\\\\movieDetails.js\",\n                            lineNumber: 40,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next4\\\\pages\\\\movieDetails.js\",\n                    lineNumber: 31,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next4\\\\pages\\\\movieDetails.js\",\n            lineNumber: 27,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next4\\\\pages\\\\movieDetails.js\",\n        lineNumber: 26,\n        columnNumber: 9\n    }, this);\n}\n_c1 = MovieCard;\nasync function fetcher(url) {\n    const res = await fetch(url);\n    const json = await res.json();\n    return json;\n}\nfunction Load() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_movieDetails_module_css__WEBPACK_IMPORTED_MODULE_4___default().fade),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            class: \"spinner-border text-info\",\n            role: \"status\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                class: \"visually-hidden\",\n                children: \"Loading...\"\n            }, void 0, false, {\n                fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next4\\\\pages\\\\movieDetails.js\",\n                lineNumber: 66,\n                columnNumber: 17\n            }, this)\n        }, void 0, false, {\n            fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next4\\\\pages\\\\movieDetails.js\",\n            lineNumber: 65,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next4\\\\pages\\\\movieDetails.js\",\n        lineNumber: 64,\n        columnNumber: 9\n    }, this);\n}\n_c2 = Load;\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"MovieDetails\");\n$RefreshReg$(_c1, \"MovieCard\");\n$RefreshReg$(_c2, \"Load\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9tb3ZpZURldGFpbHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQXdDO0FBQ0E7QUFDZjtBQUM2QjtBQUV2QyxTQUFTSzs7SUFFcEIsTUFBTUMsU0FBU0osc0RBQVNBO0lBQ3hCLE1BQU0sRUFBRUssRUFBRSxFQUFFLEdBQUdELE9BQU9FLEtBQUs7SUFFM0IsTUFBTSxFQUFDQyxJQUFJLEVBQUVDLEtBQUssRUFBQyxHQUFHUCwrQ0FBTUEsQ0FBQyw4Q0FBaUQsT0FBSEksS0FBTUk7SUFFakYsSUFBR0QsT0FBTyxxQkFBTyw4REFBQ0U7UUFBR0MsV0FBVTtrQkFBbUI7Ozs7OztJQUNsRCxJQUFHLENBQUNKLE1BQU0scUJBQU8sOERBQUNLOzs7OztJQUVsQixxQkFDSSw4REFBQ0M7UUFBVUMsT0FBT1A7Ozs7OztBQUUxQjtHQWJ3Qko7O1FBRUxILGtEQUFTQTtRQUdGQywyQ0FBTUE7OztLQUxSRTtBQWV4QixTQUFTVSxVQUFVRSxLQUFLO0lBRXBCLE1BQU0sRUFBQ0QsS0FBSyxFQUFDLEdBQUdDO0lBRWhCLHFCQUNJLDhEQUFDQztRQUFJTCxXQUFXVCxzRkFBb0I7a0JBQ2hDLDRFQUFDYztZQUFJTCxXQUFXVCw2RUFBVzs7OEJBQ3ZCLDhEQUFDYztvQkFBSUwsV0FBV1Qsd0ZBQXNCOzhCQUNsQyw0RUFBQ2tCO3dCQUFJQyxLQUFLUCxNQUFNUSxNQUFNOzs7Ozs7Ozs7Ozs4QkFFMUIsOERBQUNOO29CQUFJTCxXQUFXVCx5RkFBdUI7O3NDQUNuQyw4REFBQ2M7NEJBQUlMLFdBQVdULCtFQUFhOzs4Q0FDekIsOERBQUN1Qjs4Q0FBRSw0RUFBQ2Y7a0RBQUlJLE1BQU1ZLEtBQUs7Ozs7Ozs7Ozs7OzhDQUNuQiw4REFBQ1Y7b0NBQUlMLFdBQVdULCtFQUFhOztzREFDekIsOERBQUN1QjtzREFBR1gsTUFBTWMsSUFBSTs7Ozs7O3NEQUNkLDhEQUFDSDtzREFBR1gsTUFBTWUsT0FBTzs7Ozs7O3NEQUNqQiw4REFBQ0o7c0RBQUdYLE1BQU1nQixJQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7c0NBR3RCLDhEQUFDZDs0QkFBSUwsV0FBV1QsK0VBQWE7OzhDQUN6Qiw4REFBQ2M7b0NBQUlMLFdBQVdULCtFQUFhOztzREFDekIsOERBQUN1Qjs0Q0FBRVEsT0FBTztnREFBQ0MsT0FBTzs0Q0FBVTtzREFBRzs7Ozs7O3NEQUMvQiw4REFBQ1Q7NENBQUVRLE9BQU87Z0RBQUNFLFdBQVc7NENBQU87c0RBQUlyQixNQUFNc0IsTUFBTTs7Ozs7Ozs7Ozs7OzhDQUVqRCw4REFBQ3BCO29DQUFJTCxXQUFXVCwrRUFBYTs7c0RBQ3pCLDhEQUFDdUI7NENBQUVRLE9BQU87Z0RBQUNDLE9BQU87NENBQVU7c0RBQUc7Ozs7OztzREFDL0IsOERBQUNUOzRDQUFFUSxPQUFPO2dEQUFDRSxXQUFXOzRDQUFPO3NEQUFJckIsTUFBTXVCLEtBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT3hFO01BakNTeEI7QUFtQ1QsZUFBZUosUUFBUTZCLEdBQUc7SUFDdEIsTUFBTUMsTUFBTSxNQUFNQyxNQUFNRjtJQUN4QixNQUFNRyxPQUFPLE1BQU1GLElBQUlFLElBQUk7SUFDM0IsT0FBT0E7QUFDWDtBQUVBLFNBQVM3QjtJQUNMLHFCQUNJLDhEQUFDSTtRQUFJTCxXQUFXVCw2RUFBVztrQkFDdkIsNEVBQUNjO1lBQUkyQixPQUFNO1lBQTJCQyxNQUFLO3NCQUN2Qyw0RUFBQ0M7Z0JBQUtGLE9BQU07MEJBQWtCOzs7Ozs7Ozs7Ozs7Ozs7O0FBSTlDO01BUlMvQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9tb3ZpZURldGFpbHMuanM/ZDQ3MSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHVzZVNXUiBmcm9tICdzd3InO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9tb3ZpZURldGFpbHMubW9kdWxlLmNzcydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1vdmllRGV0YWlscygpe1xyXG5cclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gICAgY29uc3QgeyBpZCB9ID0gcm91dGVyLnF1ZXJ5O1xyXG5cclxuICAgIGNvbnN0IHtkYXRhLCBlcnJvcn0gPSB1c2VTV1IoYGh0dHBzOi8vd3d3Lm9tZGJhcGkuY29tLz9hcGlrZXk9Y2MyMDJiM2YmaT0ke2lkfWAsIGZldGNoZXIpXHJcblxyXG4gICAgaWYoZXJyb3IpIHJldHVybiA8aDEgY2xhc3NOYW1lPSd0ZXh0LWNlbnRlciBweS0yJz5OZW5odW0gUmVzdWx0YWRvcyBFbmNvbnRyYWRvPC9oMT5cclxuICAgIGlmKCFkYXRhKSByZXR1cm4gPExvYWQvPlxyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8TW92aWVDYXJkIG1vdmllPXtkYXRhfSAvPlxyXG4gICAgKVxyXG59XHJcblxyXG5mdW5jdGlvbiBNb3ZpZUNhcmQocHJvcHMpe1xyXG5cclxuICAgIGNvbnN0IHttb3ZpZX0gPSBwcm9wc1xyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lckNhcmR9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhcmR9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJQb3N0ZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXttb3ZpZS5Qb3N0ZXJ9PjwvaW1nPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lckRldGFpbHN9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udDAxfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+PGgxPnttb3ZpZS5UaXRsZX08L2gxPjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250MDJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e21vdmllLlllYXJ9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e21vdmllLlJ1bnRpbWV9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e21vdmllLlR5cGV9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnQwM30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udDA0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7Y29sb3I6ICdkYXJrZ3JleSd9fT5FbGVuY286PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3ttYXJnaW5Ub3A6ICctMTBweCd9fT57bW92aWUuQWN0b3JzfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udDA0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7Y29sb3I6ICdkYXJrZ3JleSd9fT5Hw6puZXJvczo8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17e21hcmdpblRvcDogJy0xMHB4J319Pnttb3ZpZS5HZW5yZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBmZXRjaGVyKHVybCl7XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCh1cmwpXHJcbiAgICBjb25zdCBqc29uID0gYXdhaXQgcmVzLmpzb24oKVxyXG4gICAgcmV0dXJuIGpzb25cclxufVxyXG5cclxuZnVuY3Rpb24gTG9hZCgpe1xyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZmFkZX0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzcGlubmVyLWJvcmRlciB0ZXh0LWluZm9cIiByb2xlPVwic3RhdHVzXCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInZpc3VhbGx5LWhpZGRlblwiPkxvYWRpbmcuLi48L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VSb3V0ZXIiLCJ1c2VTV1IiLCJzdHlsZXMiLCJNb3ZpZURldGFpbHMiLCJyb3V0ZXIiLCJpZCIsInF1ZXJ5IiwiZGF0YSIsImVycm9yIiwiZmV0Y2hlciIsImgxIiwiY2xhc3NOYW1lIiwiTG9hZCIsIk1vdmllQ2FyZCIsIm1vdmllIiwicHJvcHMiLCJkaXYiLCJjb250YWluZXJDYXJkIiwiY2FyZCIsImNvbnRhaW5lclBvc3RlciIsImltZyIsInNyYyIsIlBvc3RlciIsImNvbnRhaW5lckRldGFpbHMiLCJjb250MDEiLCJwIiwiVGl0bGUiLCJjb250MDIiLCJZZWFyIiwiUnVudGltZSIsIlR5cGUiLCJjb250MDMiLCJjb250MDQiLCJzdHlsZSIsImNvbG9yIiwibWFyZ2luVG9wIiwiQWN0b3JzIiwiR2VucmUiLCJ1cmwiLCJyZXMiLCJmZXRjaCIsImpzb24iLCJmYWRlIiwiY2xhc3MiLCJyb2xlIiwic3BhbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/movieDetails.js\n"));

/***/ })

});