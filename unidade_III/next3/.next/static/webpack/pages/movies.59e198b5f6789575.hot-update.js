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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   __N_SSP: function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"default\": function() { return /* binding */ Movies; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_movie_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/movie.module.css */ \"./styles/movie.module.css\");\n/* harmony import */ var _styles_movie_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_movie_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nvar __N_SSP = true;\nfunction Movies(param) {\n    let { data } = param;\n    _s();\n    const [isVisible, setIsVisible] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    // Função para alternar a visibilidade\n    const toggleVisibility = ()=>{\n        setIsVisible(!isVisible);\n    };\n    const toggleFunc = ()=>{\n        document.getElementById(\"porFilme\").style.display = \"block\";\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        className: \"text-center py-2\",\n                        children: \"Filtros de Pesquisa\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next3\\\\pages\\\\movies.js\",\n                        lineNumber: 31,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_movie_module_css__WEBPACK_IMPORTED_MODULE_2___default().filtro),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: toggleVisibility,\n                                children: \"Por Filme Espec\\xedfico\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next3\\\\pages\\\\movies.js\",\n                                lineNumber: 33,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: toggleFunc(),\n                                children: \"Por Chave de T\\xedtulo\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next3\\\\pages\\\\movies.js\",\n                                lineNumber: 34,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next3\\\\pages\\\\movies.js\",\n                        lineNumber: 32,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next3\\\\pages\\\\movies.js\",\n                lineNumber: 30,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_movie_module_css__WEBPACK_IMPORTED_MODULE_2___default().porFilme),\n                id: \"porFilme\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        className: \"text-center py-2\",\n                        children: \"Pesquise por um Filme\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next3\\\\pages\\\\movies.js\",\n                        lineNumber: 38,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        action: \"#\",\n                        className: (_styles_movie_module_css__WEBPACK_IMPORTED_MODULE_2___default().form),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                class: \"form-floating\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"text\",\n                                        id: \"movieId\",\n                                        class: \"form-control shadow-none\",\n                                        placeholder: \"Nome do Filme\",\n                                        required: true\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next3\\\\pages\\\\movies.js\",\n                                        lineNumber: 42,\n                                        columnNumber: 25\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        for: \"movieId\",\n                                        children: \"Digite o Filme\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next3\\\\pages\\\\movies.js\",\n                                        lineNumber: 43,\n                                        columnNumber: 25\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next3\\\\pages\\\\movies.js\",\n                                lineNumber: 40,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                class: \"form-floating\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"text\",\n                                        id: \"anoId\",\n                                        class: \"form-control shadow-none\",\n                                        required: true,\n                                        placeholder: \"Ano de Lan\\xe7amento\",\n                                        minlength: \"1\",\n                                        maxlength: \"8\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next3\\\\pages\\\\movies.js\",\n                                        lineNumber: 46,\n                                        columnNumber: 25\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        for: \"anoId\",\n                                        children: \"Digite o Ano\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next3\\\\pages\\\\movies.js\",\n                                        lineNumber: 47,\n                                        columnNumber: 25\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next3\\\\pages\\\\movies.js\",\n                                lineNumber: 45,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next3\\\\pages\\\\movies.js\",\n                        lineNumber: 39,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next3\\\\pages\\\\movies.js\",\n                lineNumber: 37,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_movie_module_css__WEBPACK_IMPORTED_MODULE_2___default().porChave),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        className: \"text-center py-2\",\n                        children: \"Pesquise por uma Chave\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next3\\\\pages\\\\movies.js\",\n                        lineNumber: 52,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        action: \"#\",\n                        className: (_styles_movie_module_css__WEBPACK_IMPORTED_MODULE_2___default().form),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            class: \"form-floating\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"text\",\n                                    id: \"chaveId\",\n                                    class: \"form-control shadow-none\",\n                                    placeholder: \"Ex: Bagdad\",\n                                    required: true\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next3\\\\pages\\\\movies.js\",\n                                    lineNumber: 55,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    for: \"chaveId\",\n                                    children: \"Digite uma Chave\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next3\\\\pages\\\\movies.js\",\n                                    lineNumber: 56,\n                                    columnNumber: 25\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next3\\\\pages\\\\movies.js\",\n                            lineNumber: 54,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next3\\\\pages\\\\movies.js\",\n                        lineNumber: 53,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next3\\\\pages\\\\movies.js\",\n                lineNumber: 51,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: data.Search.map((m)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            m.Title,\n                            \" --- \",\n                            m.Year\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next3\\\\pages\\\\movies.js\",\n                        lineNumber: 62,\n                        columnNumber: 21\n                    }, this))\n            }, void 0, false, {\n                fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next3\\\\pages\\\\movies.js\",\n                lineNumber: 60,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Movies, \"QjDZesRvLCmcrZLxgN677nXnVLA=\");\n_c = Movies;\nvar _c;\n$RefreshReg$(_c, \"Movies\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9tb3ZpZXMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUE2QztBQUNFOztBQWFoQyxTQUFTSSxPQUFPLEtBQU07UUFBTixFQUFDQyxJQUFJLEVBQUMsR0FBTjs7SUFFM0IsTUFBTSxDQUFDQyxXQUFXQyxhQUFhLEdBQUdMLCtDQUFRQSxDQUFDO0lBRTNDLHNDQUFzQztJQUN0QyxNQUFNTSxtQkFBbUI7UUFDckJELGFBQWEsQ0FBQ0Q7SUFDbEI7SUFFQSxNQUFNRyxhQUFhO1FBQ2ZDLFNBQVNDLGNBQWMsQ0FBQyxZQUFZQyxLQUFLLENBQUNDLE9BQU8sR0FBRztJQUN4RDtJQUVBLHFCQUNJOzswQkFDSSw4REFBQ0M7O2tDQUNHLDhEQUFDQzt3QkFBR0MsV0FBVTtrQ0FBbUI7Ozs7OztrQ0FDakMsOERBQUNGO3dCQUFJRSxXQUFXYix3RUFBYTs7MENBQ3pCLDhEQUFDZTtnQ0FBT0MsU0FBU1g7MENBQWtCOzs7Ozs7MENBQ25DLDhEQUFDVTtnQ0FBT0MsU0FBU1Y7MENBQWM7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFHdkMsOERBQUNLO2dCQUFJRSxXQUFXYiwwRUFBZTtnQkFBRWtCLElBQUc7O2tDQUNoQyw4REFBQ047d0JBQUdDLFdBQVU7a0NBQW1COzs7Ozs7a0NBQ2pDLDhEQUFDTTt3QkFBS0MsUUFBTzt3QkFBSVAsV0FBV2Isc0VBQVc7OzBDQUNuQyw4REFBQ1c7Z0NBQUlVLE9BQU07O2tEQUVQLDhEQUFDQzt3Q0FBTUMsTUFBSzt3Q0FBT0wsSUFBRzt3Q0FBVUcsT0FBTTt3Q0FBMkJHLGFBQVk7d0NBQWdCQyxRQUFROzs7Ozs7a0RBQ3JHLDhEQUFDQzt3Q0FBTUMsS0FBSTtrREFBVTs7Ozs7Ozs7Ozs7OzBDQUV6Qiw4REFBQ2hCO2dDQUFJVSxPQUFNOztrREFDUCw4REFBQ0M7d0NBQU1DLE1BQUs7d0NBQU9MLElBQUc7d0NBQVFHLE9BQU07d0NBQTJCSSxRQUFRO3dDQUFDRCxhQUFZO3dDQUFvQkksV0FBVTt3Q0FBSUMsV0FBVTs7Ozs7O2tEQUNoSSw4REFBQ0g7d0NBQU1DLEtBQUk7a0RBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFJL0IsOERBQUNoQjtnQkFBSUUsV0FBV2IsMEVBQWU7O2tDQUMzQiw4REFBQ1k7d0JBQUdDLFdBQVU7a0NBQW1COzs7Ozs7a0NBQ2pDLDhEQUFDTTt3QkFBS0MsUUFBTzt3QkFBSVAsV0FBV2Isc0VBQVc7a0NBQ25DLDRFQUFDVzs0QkFBSVUsT0FBTTs7OENBQ1AsOERBQUNDO29DQUFNQyxNQUFLO29DQUFPTCxJQUFHO29DQUFVRyxPQUFNO29DQUEyQkcsYUFBWTtvQ0FBYUMsUUFBUTs7Ozs7OzhDQUNsRyw4REFBQ0M7b0NBQU1DLEtBQUk7OENBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUlqQyw4REFBQ2hCOzBCQUNJVCxLQUFLNkIsTUFBTSxDQUFDQyxHQUFHLENBQUMsQ0FBQ0Msa0JBQ2QsOERBQUN0Qjs7NEJBQUtzQixFQUFFQyxLQUFLOzRCQUFDOzRCQUFNRCxFQUFFRSxJQUFJOzs7Ozs7Ozs7Ozs7OztBQUs5QztHQXBEd0JsQztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9tb3ZpZXMuanM/YWY1NCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VSZWYsIHVzZVN0YXRlfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvbW92aWUubW9kdWxlLmNzcydcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCl7XHJcblxyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly93d3cub21kYmFwaS5jb20vP2FwaWtleT1jYzIwMmIzZiZzPWJhZ2RhZGApXHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKVxyXG4gIFxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBwcm9wczoge2RhdGF9XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNb3ZpZXMoe2RhdGF9KXtcclxuXHJcbiAgICBjb25zdCBbaXNWaXNpYmxlLCBzZXRJc1Zpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAgIC8vIEZ1bsOnw6NvIHBhcmEgYWx0ZXJuYXIgYSB2aXNpYmlsaWRhZGVcclxuICAgIGNvbnN0IHRvZ2dsZVZpc2liaWxpdHkgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0SXNWaXNpYmxlKCFpc1Zpc2libGUpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCB0b2dnbGVGdW5jID0gKCkgPT4ge1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwb3JGaWxtZScpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT0ndGV4dC1jZW50ZXIgcHktMic+RmlsdHJvcyBkZSBQZXNxdWlzYTwvaDM+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZpbHRyb30+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0b2dnbGVWaXNpYmlsaXR5fT5Qb3IgRmlsbWUgRXNwZWPDrWZpY288L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RvZ2dsZUZ1bmMoKX0+UG9yIENoYXZlIGRlIFTDrXR1bG88L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wb3JGaWxtZX0gaWQ9J3BvckZpbG1lJz5cclxuICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9J3RleHQtY2VudGVyIHB5LTInPlBlc3F1aXNlIHBvciB1bSBGaWxtZTwvaDM+XHJcbiAgICAgICAgICAgICAgICA8Zm9ybSBhY3Rpb249JyMnIGNsYXNzTmFtZT17c3R5bGVzLmZvcm19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J2Zvcm0tZmxvYXRpbmcnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9J3RleHQnIGlkPSdtb3ZpZUlkJyBjbGFzcz1cImZvcm0tY29udHJvbCBzaGFkb3ctbm9uZVwiIHBsYWNlaG9sZGVyPSdOb21lIGRvIEZpbG1lJyByZXF1aXJlZD48L2lucHV0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwibW92aWVJZFwiPkRpZ2l0ZSBvIEZpbG1lPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSdmb3JtLWZsb2F0aW5nJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJhbm9JZFwiIGNsYXNzPVwiZm9ybS1jb250cm9sIHNoYWRvdy1ub25lXCIgcmVxdWlyZWQgcGxhY2Vob2xkZXI9XCJBbm8gZGUgTGFuw6dhbWVudG9cIiBtaW5sZW5ndGg9XCIxXCIgbWF4bGVuZ3RoPVwiOFwiPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJhbm9JZFwiPkRpZ2l0ZSBvIEFubzwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBvckNoYXZlfT5cclxuICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9J3RleHQtY2VudGVyIHB5LTInPlBlc3F1aXNlIHBvciB1bWEgQ2hhdmU8L2gzPlxyXG4gICAgICAgICAgICAgICAgPGZvcm0gYWN0aW9uPScjJyBjbGFzc05hbWU9e3N0eWxlcy5mb3JtfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSdmb3JtLWZsb2F0aW5nJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9J3RleHQnIGlkPSdjaGF2ZUlkJyBjbGFzcz1cImZvcm0tY29udHJvbCBzaGFkb3ctbm9uZVwiIHBsYWNlaG9sZGVyPSdFeDogQmFnZGFkJyByZXF1aXJlZD48L2lucHV0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiY2hhdmVJZFwiPkRpZ2l0ZSB1bWEgQ2hhdmU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIHtkYXRhLlNlYXJjaC5tYXAoKG0pID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PnttLlRpdGxlfSAtLS0ge20uWWVhcn08L2Rpdj5cclxuICAgICAgICAgICAgICAgICkpfSAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVJlZiIsInVzZVN0YXRlIiwic3R5bGVzIiwiTW92aWVzIiwiZGF0YSIsImlzVmlzaWJsZSIsInNldElzVmlzaWJsZSIsInRvZ2dsZVZpc2liaWxpdHkiLCJ0b2dnbGVGdW5jIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInN0eWxlIiwiZGlzcGxheSIsImRpdiIsImgzIiwiY2xhc3NOYW1lIiwiZmlsdHJvIiwiYnV0dG9uIiwib25DbGljayIsInBvckZpbG1lIiwiaWQiLCJmb3JtIiwiYWN0aW9uIiwiY2xhc3MiLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsInJlcXVpcmVkIiwibGFiZWwiLCJmb3IiLCJtaW5sZW5ndGgiLCJtYXhsZW5ndGgiLCJwb3JDaGF2ZSIsIlNlYXJjaCIsIm1hcCIsIm0iLCJUaXRsZSIsIlllYXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/movies.js\n"));

/***/ })

});