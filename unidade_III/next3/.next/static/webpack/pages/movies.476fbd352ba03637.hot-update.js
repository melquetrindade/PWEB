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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   __N_SSP: function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"default\": function() { return /* binding */ Movies; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_movie_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/movie.module.css */ \"./styles/movie.module.css\");\n/* harmony import */ var _styles_movie_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_movie_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nvar __N_SSP = true;\nfunction Movies(param) {\n    let { data } = param;\n    _s();\n    const [divFilme, setIsVisible1] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const toggDivFilme = ()=>{\n        if (divChave) {\n            setIsVisible2(!divChave);\n        }\n        setIsVisible1(!divFilme);\n    };\n    const [divChave, setIsVisible2] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const toggleDivChave = ()=>{\n        if (divFilme) {\n            setIsVisible1(!divFilme);\n        }\n        setIsVisible2(!divChave);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        className: \"text-center py-2\",\n                        children: \"Filtros de Pesquisa\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next3\\\\pages\\\\movies.js\",\n                        lineNumber: 38,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_movie_module_css__WEBPACK_IMPORTED_MODULE_2___default().filtro),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: toggDivFilme,\n                                children: \"Por Filme Espec\\xedfico\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next3\\\\pages\\\\movies.js\",\n                                lineNumber: 40,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: toggleDivChave,\n                                children: \"Por Chave de T\\xedtulo\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next3\\\\pages\\\\movies.js\",\n                                lineNumber: 41,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next3\\\\pages\\\\movies.js\",\n                        lineNumber: 39,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next3\\\\pages\\\\movies.js\",\n                lineNumber: 37,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_movie_module_css__WEBPACK_IMPORTED_MODULE_2___default().porFilme),\n                style: {\n                    display: divFilme ? \"block\" : \"none\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        className: \"text-center py-2\",\n                        children: \"Pesquise por um Filme\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next3\\\\pages\\\\movies.js\",\n                        lineNumber: 45,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        action: \"#\",\n                        className: (_styles_movie_module_css__WEBPACK_IMPORTED_MODULE_2___default().form),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                class: \"form-floating\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"text\",\n                                        id: \"movieId\",\n                                        class: \"form-control shadow-none\",\n                                        placeholder: \"Nome do Filme\",\n                                        required: true\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next3\\\\pages\\\\movies.js\",\n                                        lineNumber: 48,\n                                        columnNumber: 25\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        for: \"movieId\",\n                                        children: \"Digite o Filme\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next3\\\\pages\\\\movies.js\",\n                                        lineNumber: 49,\n                                        columnNumber: 25\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next3\\\\pages\\\\movies.js\",\n                                lineNumber: 47,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                class: \"form-floating\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"text\",\n                                        id: \"anoId\",\n                                        class: \"form-control shadow-none\",\n                                        required: true,\n                                        placeholder: \"Ano de Lan\\xe7amento\",\n                                        minlength: \"1\",\n                                        maxlength: \"8\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next3\\\\pages\\\\movies.js\",\n                                        lineNumber: 52,\n                                        columnNumber: 25\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        for: \"anoId\",\n                                        children: \"Digite o Ano\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next3\\\\pages\\\\movies.js\",\n                                        lineNumber: 53,\n                                        columnNumber: 25\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next3\\\\pages\\\\movies.js\",\n                                lineNumber: 51,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next3\\\\pages\\\\movies.js\",\n                        lineNumber: 46,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        cla: true,\n                        children: \"Buscar\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next3\\\\pages\\\\movies.js\",\n                        lineNumber: 56,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next3\\\\pages\\\\movies.js\",\n                lineNumber: 44,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_movie_module_css__WEBPACK_IMPORTED_MODULE_2___default().porChave),\n                style: {\n                    display: divChave ? \"block\" : \"none\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        className: \"text-center py-2\",\n                        children: \"Pesquise por uma Chave\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next3\\\\pages\\\\movies.js\",\n                        lineNumber: 59,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        action: \"#\",\n                        className: (_styles_movie_module_css__WEBPACK_IMPORTED_MODULE_2___default().form),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            class: \"form-floating\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"text\",\n                                    id: \"chaveId\",\n                                    class: \"form-control shadow-none\",\n                                    placeholder: \"Ex: Bagdad\",\n                                    required: true\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next3\\\\pages\\\\movies.js\",\n                                    lineNumber: 62,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    for: \"chaveId\",\n                                    children: \"Digite uma Chave\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next3\\\\pages\\\\movies.js\",\n                                    lineNumber: 63,\n                                    columnNumber: 25\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next3\\\\pages\\\\movies.js\",\n                            lineNumber: 61,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next3\\\\pages\\\\movies.js\",\n                        lineNumber: 60,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next3\\\\pages\\\\movies.js\",\n                lineNumber: 58,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: data.Search.map((m)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            m.Title,\n                            \" --- \",\n                            m.Year\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next3\\\\pages\\\\movies.js\",\n                        lineNumber: 69,\n                        columnNumber: 21\n                    }, this))\n            }, void 0, false, {\n                fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next3\\\\pages\\\\movies.js\",\n                lineNumber: 67,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Movies, \"Nadu3qcZVAbi+f7Kmc6fRQQ6z6k=\");\n_c = Movies;\nvar _c;\n$RefreshReg$(_c, \"Movies\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9tb3ZpZXMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUE2QztBQUNFOztBQWFoQyxTQUFTSSxPQUFPLEtBQU07UUFBTixFQUFDQyxJQUFJLEVBQUMsR0FBTjs7SUFFM0IsTUFBTSxDQUFDQyxVQUFVQyxjQUFjLEdBQUdMLCtDQUFRQSxDQUFDO0lBRTNDLE1BQU1NLGVBQWU7UUFDakIsSUFBR0MsVUFBUztZQUNSQyxjQUFjLENBQUNEO1FBQ25CO1FBQ0FGLGNBQWMsQ0FBQ0Q7SUFDbkI7SUFFQSxNQUFNLENBQUNHLFVBQVVDLGNBQWMsR0FBR1IsK0NBQVFBLENBQUM7SUFFM0MsTUFBTVMsaUJBQWlCO1FBQ25CLElBQUdMLFVBQVM7WUFDUkMsY0FBYyxDQUFDRDtRQUNuQjtRQUNBSSxjQUFjLENBQUNEO0lBQ25CO0lBRUEscUJBQ0k7OzBCQUNJLDhEQUFDRzs7a0NBQ0csOERBQUNDO3dCQUFHQyxXQUFVO2tDQUFtQjs7Ozs7O2tDQUNqQyw4REFBQ0Y7d0JBQUlFLFdBQVdYLHdFQUFhOzswQ0FDekIsOERBQUNhO2dDQUFPQyxTQUFTVDswQ0FBYzs7Ozs7OzBDQUMvQiw4REFBQ1E7Z0NBQU9DLFNBQVNOOzBDQUFnQjs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUd6Qyw4REFBQ0M7Z0JBQUlFLFdBQVdYLDBFQUFlO2dCQUFFZ0IsT0FBTztvQkFBRUMsU0FBU2QsV0FBVyxVQUFVO2dCQUFPOztrQ0FDM0UsOERBQUNPO3dCQUFHQyxXQUFVO2tDQUFtQjs7Ozs7O2tDQUNqQyw4REFBQ087d0JBQUtDLFFBQU87d0JBQUlSLFdBQVdYLHNFQUFXOzswQ0FDbkMsOERBQUNTO2dDQUFJVyxPQUFNOztrREFDUCw4REFBQ0M7d0NBQU1DLE1BQUs7d0NBQU9DLElBQUc7d0NBQVVILE9BQU07d0NBQTJCSSxhQUFZO3dDQUFnQkMsUUFBUTs7Ozs7O2tEQUNyRyw4REFBQ0M7d0NBQU1DLEtBQUk7a0RBQVU7Ozs7Ozs7Ozs7OzswQ0FFekIsOERBQUNsQjtnQ0FBSVcsT0FBTTs7a0RBQ1AsOERBQUNDO3dDQUFNQyxNQUFLO3dDQUFPQyxJQUFHO3dDQUFRSCxPQUFNO3dDQUEyQkssUUFBUTt3Q0FBQ0QsYUFBWTt3Q0FBb0JJLFdBQVU7d0NBQUlDLFdBQVU7Ozs7OztrREFDaEksOERBQUNIO3dDQUFNQyxLQUFJO2tEQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBRzNCLDhEQUFDZDt3QkFBT2lCLEdBQUc7a0NBQUM7Ozs7Ozs7Ozs7OzswQkFFaEIsOERBQUNyQjtnQkFBSUUsV0FBV1gsMEVBQWU7Z0JBQUVnQixPQUFPO29CQUFFQyxTQUFTWCxXQUFXLFVBQVU7Z0JBQU87O2tDQUMzRSw4REFBQ0k7d0JBQUdDLFdBQVU7a0NBQW1COzs7Ozs7a0NBQ2pDLDhEQUFDTzt3QkFBS0MsUUFBTzt3QkFBSVIsV0FBV1gsc0VBQVc7a0NBQ25DLDRFQUFDUzs0QkFBSVcsT0FBTTs7OENBQ1AsOERBQUNDO29DQUFNQyxNQUFLO29DQUFPQyxJQUFHO29DQUFVSCxPQUFNO29DQUEyQkksYUFBWTtvQ0FBYUMsUUFBUTs7Ozs7OzhDQUNsRyw4REFBQ0M7b0NBQU1DLEtBQUk7OENBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUlqQyw4REFBQ2xCOzBCQUNJUCxLQUFLOEIsTUFBTSxDQUFDQyxHQUFHLENBQUMsQ0FBQ0Msa0JBQ2QsOERBQUN6Qjs7NEJBQUt5QixFQUFFQyxLQUFLOzRCQUFDOzRCQUFNRCxFQUFFRSxJQUFJOzs7Ozs7Ozs7Ozs7OztBQUs5QztHQTNEd0JuQztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9tb3ZpZXMuanM/YWY1NCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VSZWYsIHVzZVN0YXRlfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvbW92aWUubW9kdWxlLmNzcydcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCl7XHJcblxyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly93d3cub21kYmFwaS5jb20vP2FwaWtleT1jYzIwMmIzZiZzPWJhZ2RhZGApXHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKVxyXG4gIFxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBwcm9wczoge2RhdGF9XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNb3ZpZXMoe2RhdGF9KXtcclxuXHJcbiAgICBjb25zdCBbZGl2RmlsbWUsIHNldElzVmlzaWJsZTFdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAgIGNvbnN0IHRvZ2dEaXZGaWxtZSA9ICgpID0+IHtcclxuICAgICAgICBpZihkaXZDaGF2ZSl7XHJcbiAgICAgICAgICAgIHNldElzVmlzaWJsZTIoIWRpdkNoYXZlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0SXNWaXNpYmxlMSghZGl2RmlsbWUpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBbZGl2Q2hhdmUsIHNldElzVmlzaWJsZTJdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAgIGNvbnN0IHRvZ2dsZURpdkNoYXZlID0gKCkgPT4ge1xyXG4gICAgICAgIGlmKGRpdkZpbG1lKXtcclxuICAgICAgICAgICAgc2V0SXNWaXNpYmxlMSghZGl2RmlsbWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRJc1Zpc2libGUyKCFkaXZDaGF2ZSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9J3RleHQtY2VudGVyIHB5LTInPkZpbHRyb3MgZGUgUGVzcXVpc2E8L2gzPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5maWx0cm99PlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17dG9nZ0RpdkZpbG1lfT5Qb3IgRmlsbWUgRXNwZWPDrWZpY288L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RvZ2dsZURpdkNoYXZlfT5Qb3IgQ2hhdmUgZGUgVMOtdHVsbzwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBvckZpbG1lfSBzdHlsZT17eyBkaXNwbGF5OiBkaXZGaWxtZSA/ICdibG9jaycgOiAnbm9uZScgfX0+XHJcbiAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPSd0ZXh0LWNlbnRlciBweS0yJz5QZXNxdWlzZSBwb3IgdW0gRmlsbWU8L2gzPlxyXG4gICAgICAgICAgICAgICAgPGZvcm0gYWN0aW9uPScjJyBjbGFzc05hbWU9e3N0eWxlcy5mb3JtfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSdmb3JtLWZsb2F0aW5nJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9J3RleHQnIGlkPSdtb3ZpZUlkJyBjbGFzcz1cImZvcm0tY29udHJvbCBzaGFkb3ctbm9uZVwiIHBsYWNlaG9sZGVyPSdOb21lIGRvIEZpbG1lJyByZXF1aXJlZD48L2lucHV0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwibW92aWVJZFwiPkRpZ2l0ZSBvIEZpbG1lPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSdmb3JtLWZsb2F0aW5nJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJhbm9JZFwiIGNsYXNzPVwiZm9ybS1jb250cm9sIHNoYWRvdy1ub25lXCIgcmVxdWlyZWQgcGxhY2Vob2xkZXI9XCJBbm8gZGUgTGFuw6dhbWVudG9cIiBtaW5sZW5ndGg9XCIxXCIgbWF4bGVuZ3RoPVwiOFwiPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJhbm9JZFwiPkRpZ2l0ZSBvIEFubzwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYT5CdXNjYXI8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucG9yQ2hhdmV9IHN0eWxlPXt7IGRpc3BsYXk6IGRpdkNoYXZlID8gJ2Jsb2NrJyA6ICdub25lJyB9fT5cclxuICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9J3RleHQtY2VudGVyIHB5LTInPlBlc3F1aXNlIHBvciB1bWEgQ2hhdmU8L2gzPlxyXG4gICAgICAgICAgICAgICAgPGZvcm0gYWN0aW9uPScjJyBjbGFzc05hbWU9e3N0eWxlcy5mb3JtfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSdmb3JtLWZsb2F0aW5nJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9J3RleHQnIGlkPSdjaGF2ZUlkJyBjbGFzcz1cImZvcm0tY29udHJvbCBzaGFkb3ctbm9uZVwiIHBsYWNlaG9sZGVyPSdFeDogQmFnZGFkJyByZXF1aXJlZD48L2lucHV0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiY2hhdmVJZFwiPkRpZ2l0ZSB1bWEgQ2hhdmU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIHtkYXRhLlNlYXJjaC5tYXAoKG0pID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PnttLlRpdGxlfSAtLS0ge20uWWVhcn08L2Rpdj5cclxuICAgICAgICAgICAgICAgICkpfSAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVJlZiIsInVzZVN0YXRlIiwic3R5bGVzIiwiTW92aWVzIiwiZGF0YSIsImRpdkZpbG1lIiwic2V0SXNWaXNpYmxlMSIsInRvZ2dEaXZGaWxtZSIsImRpdkNoYXZlIiwic2V0SXNWaXNpYmxlMiIsInRvZ2dsZURpdkNoYXZlIiwiZGl2IiwiaDMiLCJjbGFzc05hbWUiLCJmaWx0cm8iLCJidXR0b24iLCJvbkNsaWNrIiwicG9yRmlsbWUiLCJzdHlsZSIsImRpc3BsYXkiLCJmb3JtIiwiYWN0aW9uIiwiY2xhc3MiLCJpbnB1dCIsInR5cGUiLCJpZCIsInBsYWNlaG9sZGVyIiwicmVxdWlyZWQiLCJsYWJlbCIsImZvciIsIm1pbmxlbmd0aCIsIm1heGxlbmd0aCIsImNsYSIsInBvckNoYXZlIiwiU2VhcmNoIiwibWFwIiwibSIsIlRpdGxlIiwiWWVhciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/movies.js\n"));

/***/ })

});