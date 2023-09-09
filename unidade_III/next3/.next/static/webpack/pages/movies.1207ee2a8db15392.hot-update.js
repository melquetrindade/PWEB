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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   __N_SSP: function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"default\": function() { return /* binding */ Movies; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_movie_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/movie.module.css */ \"./styles/movie.module.css\");\n/* harmony import */ var _styles_movie_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_movie_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nvar __N_SSP = true;\nfunction Movies(param) {\n    let { data } = param;\n    _s();\n    const [divFilme, setIsVisible1] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const toggDivFilme = ()=>{\n        if (divChave) {\n            setIsVisible2(!divChave);\n        }\n        setIsVisible1(!divFilme);\n    };\n    const [divChave, setIsVisible2] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const toggleDivChave = ()=>{\n        if (divFilme) {\n            setIsVisible1(!divFilme);\n        }\n        setIsVisible2(!divChave);\n    };\n    const inputNome = document.querySelector(\"#movieId\");\n    input.addEventListener(\"keypress\", (e)=>{\n        const onlyNumbers = /[a-zA-Z]/;\n        const key = String.fromCharCode(e.keyCode);\n        if (!onlyNumbers.test(key)) {\n            e.preventDefault();\n            return;\n        }\n    });\n    inputEl.addEventListener(\"keypress\", (e)=>{\n        const onlyNumbers = /[0-9]/;\n        const key = String.fromCharCode(e.keyCode);\n        if (!onlyNumbers.test(key)) {\n            e.preventDefault();\n            return;\n        }\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        className: \"text-center py-2\",\n                        children: \"Filtros de Pesquisa\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next3\\\\pages\\\\movies.js\",\n                        lineNumber: 60,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_movie_module_css__WEBPACK_IMPORTED_MODULE_2___default().filtro),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: toggDivFilme,\n                                children: \"Por Filme Espec\\xedfico\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next3\\\\pages\\\\movies.js\",\n                                lineNumber: 62,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: toggleDivChave,\n                                children: \"Por Chave de T\\xedtulo\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next3\\\\pages\\\\movies.js\",\n                                lineNumber: 63,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next3\\\\pages\\\\movies.js\",\n                        lineNumber: 61,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next3\\\\pages\\\\movies.js\",\n                lineNumber: 59,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_movie_module_css__WEBPACK_IMPORTED_MODULE_2___default().porFilme),\n                style: {\n                    display: divFilme ? \"block\" : \"none\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        className: \"text-center py-2\",\n                        children: \"Pesquise por um Filme\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next3\\\\pages\\\\movies.js\",\n                        lineNumber: 67,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        action: \"#\",\n                        className: (_styles_movie_module_css__WEBPACK_IMPORTED_MODULE_2___default().form),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                class: \"form-floating\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"text\",\n                                        id: \"movieId\",\n                                        class: \"form-control shadow-none\",\n                                        placeholder: \"Nome do Filme\",\n                                        required: true\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next3\\\\pages\\\\movies.js\",\n                                        lineNumber: 70,\n                                        columnNumber: 25\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        for: \"movieId\",\n                                        children: \"Digite o Filme\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next3\\\\pages\\\\movies.js\",\n                                        lineNumber: 71,\n                                        columnNumber: 25\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next3\\\\pages\\\\movies.js\",\n                                lineNumber: 69,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                class: \"form-floating\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"text\",\n                                        id: \"anoId\",\n                                        class: \"form-control shadow-none\",\n                                        required: true,\n                                        placeholder: \"Ano de Lan\\xe7amento\",\n                                        minlength: \"1\",\n                                        maxlength: \"8\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next3\\\\pages\\\\movies.js\",\n                                        lineNumber: 74,\n                                        columnNumber: 25\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        for: \"anoId\",\n                                        children: \"Digite o Ano\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next3\\\\pages\\\\movies.js\",\n                                        lineNumber: 75,\n                                        columnNumber: 25\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next3\\\\pages\\\\movies.js\",\n                                lineNumber: 73,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next3\\\\pages\\\\movies.js\",\n                        lineNumber: 68,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: (_styles_movie_module_css__WEBPACK_IMPORTED_MODULE_2___default().buttonSearch),\n                        children: \"Buscar\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next3\\\\pages\\\\movies.js\",\n                        lineNumber: 78,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next3\\\\pages\\\\movies.js\",\n                lineNumber: 66,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_movie_module_css__WEBPACK_IMPORTED_MODULE_2___default().porChave),\n                style: {\n                    display: divChave ? \"block\" : \"none\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        className: \"text-center py-2\",\n                        children: \"Pesquise por uma Chave\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next3\\\\pages\\\\movies.js\",\n                        lineNumber: 81,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        action: \"#\",\n                        className: (_styles_movie_module_css__WEBPACK_IMPORTED_MODULE_2___default().form),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            class: \"form-floating\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"text\",\n                                    id: \"chaveId\",\n                                    class: \"form-control shadow-none\",\n                                    placeholder: \"Ex: Bagdad\",\n                                    required: true\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next3\\\\pages\\\\movies.js\",\n                                    lineNumber: 84,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    for: \"chaveId\",\n                                    children: \"Digite uma Chave\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next3\\\\pages\\\\movies.js\",\n                                    lineNumber: 85,\n                                    columnNumber: 25\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next3\\\\pages\\\\movies.js\",\n                            lineNumber: 83,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next3\\\\pages\\\\movies.js\",\n                        lineNumber: 82,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: (_styles_movie_module_css__WEBPACK_IMPORTED_MODULE_2___default().buttonSearch),\n                        children: \"Buscar\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next3\\\\pages\\\\movies.js\",\n                        lineNumber: 88,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next3\\\\pages\\\\movies.js\",\n                lineNumber: 80,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: data.Search.map((m)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            m.Title,\n                            \" --- \",\n                            m.Year\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next3\\\\pages\\\\movies.js\",\n                        lineNumber: 92,\n                        columnNumber: 21\n                    }, this))\n            }, void 0, false, {\n                fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next3\\\\pages\\\\movies.js\",\n                lineNumber: 90,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Movies, \"Nadu3qcZVAbi+f7Kmc6fRQQ6z6k=\");\n_c = Movies;\nvar _c;\n$RefreshReg$(_c, \"Movies\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVU7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQUc3Qiw4REFBQ2I7d0JBQU9GLFdBQVd6Qiw4RUFBbUI7a0NBQUU7Ozs7Ozs7Ozs7OzswQkFFNUMsOERBQUN1QjswQkFDSXJCLEtBQUsyQyxNQUFNLENBQUNDLEdBQUcsQ0FBQyxDQUFDQyxrQkFDZCw4REFBQ3hCOzs0QkFBS3dCLEVBQUVDLEtBQUs7NEJBQUM7NEJBQU1ELEVBQUVFLElBQUk7Ozs7Ozs7Ozs7Ozs7O0FBSzlDO0dBbEZ3QmhEO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL21vdmllcy5qcz9hZjU0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVJlZiwgdXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9tb3ZpZS5tb2R1bGUuY3NzJ1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0KXtcclxuXHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgaHR0cDovL3d3dy5vbWRiYXBpLmNvbS8/YXBpa2V5PWNjMjAyYjNmJnM9YmFnZGFkYClcclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpXHJcbiAgXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHByb3BzOiB7ZGF0YX1cclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1vdmllcyh7ZGF0YX0pe1xyXG5cclxuICAgIGNvbnN0IFtkaXZGaWxtZSwgc2V0SXNWaXNpYmxlMV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gICAgY29uc3QgdG9nZ0RpdkZpbG1lID0gKCkgPT4ge1xyXG4gICAgICAgIGlmKGRpdkNoYXZlKXtcclxuICAgICAgICAgICAgc2V0SXNWaXNpYmxlMighZGl2Q2hhdmUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRJc1Zpc2libGUxKCFkaXZGaWxtZSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IFtkaXZDaGF2ZSwgc2V0SXNWaXNpYmxlMl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gICAgY29uc3QgdG9nZ2xlRGl2Q2hhdmUgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYoZGl2RmlsbWUpe1xyXG4gICAgICAgICAgICBzZXRJc1Zpc2libGUxKCFkaXZGaWxtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldElzVmlzaWJsZTIoIWRpdkNoYXZlKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgaW5wdXROb21lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtb3ZpZUlkXCIpXHJcblxyXG4gICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImtleXByZXNzXCIsIChlKSA9PiB7XHJcbiAgICAgICAgY29uc3Qgb25seU51bWJlcnMgPSAvW2EtekEtWl0vXHJcbiAgICAgICAgY29uc3Qga2V5ID0gU3RyaW5nLmZyb21DaGFyQ29kZShlLmtleUNvZGUpXHJcbiAgICBcclxuICAgICAgICBpZighb25seU51bWJlcnMudGVzdChrZXkpKXtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcblxyXG4gICAgaW5wdXRFbC5hZGRFdmVudExpc3RlbmVyKFwia2V5cHJlc3NcIiwgKGUpID0+IHtcclxuICAgICAgICBjb25zdCBvbmx5TnVtYmVycyA9IC9bMC05XS9cclxuICAgICAgICBjb25zdCBrZXkgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGUua2V5Q29kZSlcclxuICAgIFxyXG4gICAgICAgIGlmKCFvbmx5TnVtYmVycy50ZXN0KGtleSkpe1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPSd0ZXh0LWNlbnRlciBweS0yJz5GaWx0cm9zIGRlIFBlc3F1aXNhPC9oMz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZmlsdHJvfT5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RvZ2dEaXZGaWxtZX0+UG9yIEZpbG1lIEVzcGVjw61maWNvPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0b2dnbGVEaXZDaGF2ZX0+UG9yIENoYXZlIGRlIFTDrXR1bG88L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wb3JGaWxtZX0gc3R5bGU9e3sgZGlzcGxheTogZGl2RmlsbWUgPyAnYmxvY2snIDogJ25vbmUnIH19PlxyXG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT0ndGV4dC1jZW50ZXIgcHktMic+UGVzcXVpc2UgcG9yIHVtIEZpbG1lPC9oMz5cclxuICAgICAgICAgICAgICAgIDxmb3JtIGFjdGlvbj0nIycgY2xhc3NOYW1lPXtzdHlsZXMuZm9ybX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nZm9ybS1mbG9hdGluZyc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPSd0ZXh0JyBpZD0nbW92aWVJZCcgY2xhc3M9XCJmb3JtLWNvbnRyb2wgc2hhZG93LW5vbmVcIiBwbGFjZWhvbGRlcj0nTm9tZSBkbyBGaWxtZScgcmVxdWlyZWQ+PC9pbnB1dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cIm1vdmllSWRcIj5EaWdpdGUgbyBGaWxtZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nZm9ybS1mbG9hdGluZyc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwiYW5vSWRcIiBjbGFzcz1cImZvcm0tY29udHJvbCBzaGFkb3ctbm9uZVwiIHJlcXVpcmVkIHBsYWNlaG9sZGVyPVwiQW5vIGRlIExhbsOnYW1lbnRvXCIgbWlubGVuZ3RoPVwiMVwiIG1heGxlbmd0aD1cIjhcIj48L2lucHV0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiYW5vSWRcIj5EaWdpdGUgbyBBbm88L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5idXR0b25TZWFyY2h9PkJ1c2NhcjwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wb3JDaGF2ZX0gc3R5bGU9e3sgZGlzcGxheTogZGl2Q2hhdmUgPyAnYmxvY2snIDogJ25vbmUnIH19PlxyXG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT0ndGV4dC1jZW50ZXIgcHktMic+UGVzcXVpc2UgcG9yIHVtYSBDaGF2ZTwvaDM+XHJcbiAgICAgICAgICAgICAgICA8Zm9ybSBhY3Rpb249JyMnIGNsYXNzTmFtZT17c3R5bGVzLmZvcm19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J2Zvcm0tZmxvYXRpbmcnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT0ndGV4dCcgaWQ9J2NoYXZlSWQnIGNsYXNzPVwiZm9ybS1jb250cm9sIHNoYWRvdy1ub25lXCIgcGxhY2Vob2xkZXI9J0V4OiBCYWdkYWQnIHJlcXVpcmVkPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJjaGF2ZUlkXCI+RGlnaXRlIHVtYSBDaGF2ZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvblNlYXJjaH0+QnVzY2FyPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAge2RhdGEuU2VhcmNoLm1hcCgobSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+e20uVGl0bGV9IC0tLSB7bS5ZZWFyfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKSl9ICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlUmVmIiwidXNlU3RhdGUiLCJzdHlsZXMiLCJNb3ZpZXMiLCJkYXRhIiwiZGl2RmlsbWUiLCJzZXRJc1Zpc2libGUxIiwidG9nZ0RpdkZpbG1lIiwiZGl2Q2hhdmUiLCJzZXRJc1Zpc2libGUyIiwidG9nZ2xlRGl2Q2hhdmUiLCJpbnB1dE5vbWUiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJpbnB1dCIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwib25seU51bWJlcnMiLCJrZXkiLCJTdHJpbmciLCJmcm9tQ2hhckNvZGUiLCJrZXlDb2RlIiwidGVzdCIsInByZXZlbnREZWZhdWx0IiwiaW5wdXRFbCIsImRpdiIsImgzIiwiY2xhc3NOYW1lIiwiZmlsdHJvIiwiYnV0dG9uIiwib25DbGljayIsInBvckZpbG1lIiwic3R5bGUiLCJkaXNwbGF5IiwiZm9ybSIsImFjdGlvbiIsImNsYXNzIiwidHlwZSIsImlkIiwicGxhY2Vob2xkZXIiLCJyZXF1aXJlZCIsImxhYmVsIiwiZm9yIiwibWlubGVuZ3RoIiwibWF4bGVuZ3RoIiwiYnV0dG9uU2VhcmNoIiwicG9yQ2hhdmUiLCJTZWFyY2giLCJtYXAiLCJtIiwiVGl0bGUiLCJZZWFyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/movies.js\n"));

/***/ })

});