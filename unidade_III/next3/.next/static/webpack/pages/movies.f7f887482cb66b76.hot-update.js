"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/movies",{

/***/ "./pages/movies.js":
/*!*************************!*\
  !*** ./pages/movies.js ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   __N_SSP: function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"default\": function() { return /* binding */ Movies; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_movie_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/movie.module.css */ \"./styles/movie.module.css\");\n/* harmony import */ var _styles_movie_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_movie_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nvar __N_SSP = true;\nfunction Movies(param) {\n    let { data } = param;\n    //const divFilme = useRef()\n    const toggleFunc = (divEl)=>{\n        console.log(divEl);\n        if (divEl == \"porFilme\") {}\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        className: \"text-center py-2\",\n                        children: \"Filtros de Pesquisa\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next3\\\\pages\\\\movies.js\",\n                        lineNumber: 29,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_movie_module_css__WEBPACK_IMPORTED_MODULE_2___default().filtro),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: toggleFunc(\"porFilme\"),\n                                children: \"Por Filme Espec\\xedfico\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next3\\\\pages\\\\movies.js\",\n                                lineNumber: 31,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                children: \"Por Chave de T\\xedtulo\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next3\\\\pages\\\\movies.js\",\n                                lineNumber: 32,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next3\\\\pages\\\\movies.js\",\n                        lineNumber: 30,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next3\\\\pages\\\\movies.js\",\n                lineNumber: 28,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_movie_module_css__WEBPACK_IMPORTED_MODULE_2___default().porFilme),\n                id: \"porFilme\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        className: \"text-center py-2\",\n                        children: \"Pesquise por um Filme\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next3\\\\pages\\\\movies.js\",\n                        lineNumber: 36,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        action: \"#\",\n                        className: (_styles_movie_module_css__WEBPACK_IMPORTED_MODULE_2___default().form),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                class: \"form-floating\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"text\",\n                                        id: \"movieId\",\n                                        class: \"form-control shadow-none\",\n                                        placeholder: \"Nome do Filme\",\n                                        required: true\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next3\\\\pages\\\\movies.js\",\n                                        lineNumber: 40,\n                                        columnNumber: 25\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        for: \"movieId\",\n                                        children: \"Digite o Filme\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next3\\\\pages\\\\movies.js\",\n                                        lineNumber: 41,\n                                        columnNumber: 25\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next3\\\\pages\\\\movies.js\",\n                                lineNumber: 38,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                class: \"form-floating\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"text\",\n                                        id: \"anoId\",\n                                        class: \"form-control shadow-none\",\n                                        required: true,\n                                        placeholder: \"Ano de Lan\\xe7amento\",\n                                        minlength: \"1\",\n                                        maxlength: \"8\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next3\\\\pages\\\\movies.js\",\n                                        lineNumber: 44,\n                                        columnNumber: 25\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        for: \"anoId\",\n                                        children: \"Digite o Ano\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next3\\\\pages\\\\movies.js\",\n                                        lineNumber: 45,\n                                        columnNumber: 25\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next3\\\\pages\\\\movies.js\",\n                                lineNumber: 43,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next3\\\\pages\\\\movies.js\",\n                        lineNumber: 37,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next3\\\\pages\\\\movies.js\",\n                lineNumber: 35,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_movie_module_css__WEBPACK_IMPORTED_MODULE_2___default().porChave),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        className: \"text-center py-2\",\n                        children: \"Pesquise por uma Chave\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next3\\\\pages\\\\movies.js\",\n                        lineNumber: 50,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        action: \"#\",\n                        className: (_styles_movie_module_css__WEBPACK_IMPORTED_MODULE_2___default().form),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            class: \"form-floating\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"text\",\n                                    id: \"chaveId\",\n                                    class: \"form-control shadow-none\",\n                                    placeholder: \"Ex: Bagdad\",\n                                    required: true\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next3\\\\pages\\\\movies.js\",\n                                    lineNumber: 53,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    for: \"chaveId\",\n                                    children: \"Digite uma Chave\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next3\\\\pages\\\\movies.js\",\n                                    lineNumber: 54,\n                                    columnNumber: 25\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next3\\\\pages\\\\movies.js\",\n                            lineNumber: 52,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next3\\\\pages\\\\movies.js\",\n                        lineNumber: 51,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next3\\\\pages\\\\movies.js\",\n                lineNumber: 49,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: data.Search.map((m)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            m.Title,\n                            \" --- \",\n                            m.Year\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next3\\\\pages\\\\movies.js\",\n                        lineNumber: 60,\n                        columnNumber: 21\n                    }, this))\n            }, void 0, false, {\n                fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next3\\\\pages\\\\movies.js\",\n                lineNumber: 58,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true);\n}\n_c = Movies;\nvar _c;\n$RefreshReg$(_c, \"Movies\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9tb3ZpZXMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQW1DO0FBQ1k7O0FBYWhDLFNBQVNHLE9BQU8sS0FBTTtRQUFOLEVBQUNDLElBQUksRUFBQyxHQUFOO0lBRTNCLDJCQUEyQjtJQUUzQixNQUFNQyxhQUFhLENBQUNDO1FBQ2hCQyxRQUFRQyxHQUFHLENBQUNGO1FBQ1osSUFBR0EsU0FBUyxZQUFXLENBRXZCO0lBQ0o7SUFFQSxxQkFDSTs7MEJBQ0ksOERBQUNHOztrQ0FDRyw4REFBQ0M7d0JBQUdDLFdBQVU7a0NBQW1COzs7Ozs7a0NBQ2pDLDhEQUFDRjt3QkFBSUUsV0FBV1Qsd0VBQWE7OzBDQUN6Qiw4REFBQ1c7Z0NBQU9DLFNBQVNULFdBQVc7MENBQWE7Ozs7OzswQ0FDekMsOERBQUNROzBDQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBR2hCLDhEQUFDSjtnQkFBSUUsV0FBV1QsMEVBQWU7Z0JBQUVjLElBQUc7O2tDQUNoQyw4REFBQ047d0JBQUdDLFdBQVU7a0NBQW1COzs7Ozs7a0NBQ2pDLDhEQUFDTTt3QkFBS0MsUUFBTzt3QkFBSVAsV0FBV1Qsc0VBQVc7OzBDQUNuQyw4REFBQ087Z0NBQUlVLE9BQU07O2tEQUVQLDhEQUFDQzt3Q0FBTUMsTUFBSzt3Q0FBT0wsSUFBRzt3Q0FBVUcsT0FBTTt3Q0FBMkJHLGFBQVk7d0NBQWdCQyxRQUFROzs7Ozs7a0RBQ3JHLDhEQUFDQzt3Q0FBTUMsS0FBSTtrREFBVTs7Ozs7Ozs7Ozs7OzBDQUV6Qiw4REFBQ2hCO2dDQUFJVSxPQUFNOztrREFDUCw4REFBQ0M7d0NBQU1DLE1BQUs7d0NBQU9MLElBQUc7d0NBQVFHLE9BQU07d0NBQTJCSSxRQUFRO3dDQUFDRCxhQUFZO3dDQUFvQkksV0FBVTt3Q0FBSUMsV0FBVTs7Ozs7O2tEQUNoSSw4REFBQ0g7d0NBQU1DLEtBQUk7a0RBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFJL0IsOERBQUNoQjtnQkFBSUUsV0FBV1QsMEVBQWU7O2tDQUMzQiw4REFBQ1E7d0JBQUdDLFdBQVU7a0NBQW1COzs7Ozs7a0NBQ2pDLDhEQUFDTTt3QkFBS0MsUUFBTzt3QkFBSVAsV0FBV1Qsc0VBQVc7a0NBQ25DLDRFQUFDTzs0QkFBSVUsT0FBTTs7OENBQ1AsOERBQUNDO29DQUFNQyxNQUFLO29DQUFPTCxJQUFHO29DQUFVRyxPQUFNO29DQUEyQkcsYUFBWTtvQ0FBYUMsUUFBUTs7Ozs7OzhDQUNsRyw4REFBQ0M7b0NBQU1DLEtBQUk7OENBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUlqQyw4REFBQ2hCOzBCQUNJTCxLQUFLeUIsTUFBTSxDQUFDQyxHQUFHLENBQUMsQ0FBQ0Msa0JBQ2QsOERBQUN0Qjs7NEJBQUtzQixFQUFFQyxLQUFLOzRCQUFDOzRCQUFNRCxFQUFFRSxJQUFJOzs7Ozs7Ozs7Ozs7OztBQUs5QztLQWxEd0I5QiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9tb3ZpZXMuanM/YWY1NCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VSZWZ9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9tb3ZpZS5tb2R1bGUuY3NzJ1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0KXtcclxuXHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgaHR0cDovL3d3dy5vbWRiYXBpLmNvbS8/YXBpa2V5PWNjMjAyYjNmJnM9YmFnZGFkYClcclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpXHJcbiAgXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHByb3BzOiB7ZGF0YX1cclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1vdmllcyh7ZGF0YX0pe1xyXG5cclxuICAgIC8vY29uc3QgZGl2RmlsbWUgPSB1c2VSZWYoKVxyXG5cclxuICAgIGNvbnN0IHRvZ2dsZUZ1bmMgPSAoZGl2RWwpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhkaXZFbClcclxuICAgICAgICBpZihkaXZFbCA9PSAncG9yRmlsbWUnKXtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9J3RleHQtY2VudGVyIHB5LTInPkZpbHRyb3MgZGUgUGVzcXVpc2E8L2gzPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5maWx0cm99PlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17dG9nZ2xlRnVuYygncG9yRmlsbWUnKX0+UG9yIEZpbG1lIEVzcGVjw61maWNvPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbj5Qb3IgQ2hhdmUgZGUgVMOtdHVsbzwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBvckZpbG1lfSBpZD0ncG9yRmlsbWUnPlxyXG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT0ndGV4dC1jZW50ZXIgcHktMic+UGVzcXVpc2UgcG9yIHVtIEZpbG1lPC9oMz5cclxuICAgICAgICAgICAgICAgIDxmb3JtIGFjdGlvbj0nIycgY2xhc3NOYW1lPXtzdHlsZXMuZm9ybX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nZm9ybS1mbG9hdGluZyc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT0ndGV4dCcgaWQ9J21vdmllSWQnIGNsYXNzPVwiZm9ybS1jb250cm9sIHNoYWRvdy1ub25lXCIgcGxhY2Vob2xkZXI9J05vbWUgZG8gRmlsbWUnIHJlcXVpcmVkPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJtb3ZpZUlkXCI+RGlnaXRlIG8gRmlsbWU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J2Zvcm0tZmxvYXRpbmcnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cImFub0lkXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2wgc2hhZG93LW5vbmVcIiByZXF1aXJlZCBwbGFjZWhvbGRlcj1cIkFubyBkZSBMYW7Dp2FtZW50b1wiIG1pbmxlbmd0aD1cIjFcIiBtYXhsZW5ndGg9XCI4XCI+PC9pbnB1dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImFub0lkXCI+RGlnaXRlIG8gQW5vPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucG9yQ2hhdmV9PlxyXG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT0ndGV4dC1jZW50ZXIgcHktMic+UGVzcXVpc2UgcG9yIHVtYSBDaGF2ZTwvaDM+XHJcbiAgICAgICAgICAgICAgICA8Zm9ybSBhY3Rpb249JyMnIGNsYXNzTmFtZT17c3R5bGVzLmZvcm19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J2Zvcm0tZmxvYXRpbmcnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT0ndGV4dCcgaWQ9J2NoYXZlSWQnIGNsYXNzPVwiZm9ybS1jb250cm9sIHNoYWRvdy1ub25lXCIgcGxhY2Vob2xkZXI9J0V4OiBCYWdkYWQnIHJlcXVpcmVkPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJjaGF2ZUlkXCI+RGlnaXRlIHVtYSBDaGF2ZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAge2RhdGEuU2VhcmNoLm1hcCgobSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+e20uVGl0bGV9IC0tLSB7bS5ZZWFyfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKSl9ICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlUmVmIiwic3R5bGVzIiwiTW92aWVzIiwiZGF0YSIsInRvZ2dsZUZ1bmMiLCJkaXZFbCIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJoMyIsImNsYXNzTmFtZSIsImZpbHRybyIsImJ1dHRvbiIsIm9uQ2xpY2siLCJwb3JGaWxtZSIsImlkIiwiZm9ybSIsImFjdGlvbiIsImNsYXNzIiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJyZXF1aXJlZCIsImxhYmVsIiwiZm9yIiwibWlubGVuZ3RoIiwibWF4bGVuZ3RoIiwicG9yQ2hhdmUiLCJTZWFyY2giLCJtYXAiLCJtIiwiVGl0bGUiLCJZZWFyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/movies.js\n"));

/***/ })

});