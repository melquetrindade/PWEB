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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   __N_SSP: function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"default\": function() { return /* binding */ Movies; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_movie_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/movie.module.css */ \"./styles/movie.module.css\");\n/* harmony import */ var _styles_movie_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_movie_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nvar __N_SSP = true;\nfunction Movies(param) {\n    let { data } = param;\n    _s();\n    const [divFilme, setIsVisible1] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const toggDivFilme = ()=>{\n        if (divChave) {\n            setIsVisible2(!divChave);\n        }\n        setIsVisible1(!divFilme);\n    };\n    const [divChave, setIsVisible2] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const toggleDivChave = ()=>{\n        if (divFilme) {\n            setIsVisible1(!divFilme);\n        }\n        setIsVisible2(!divChave);\n    };\n    /*\r\n    inputNome.addEventListener(\"keypress\", (e) => {\r\n        const onlyNumbers = /[a-zA-Z]/\r\n        const key = String.fromCharCode(e.keyCode)\r\n    \r\n        if(!onlyNumbers.test(key)){\r\n            e.preventDefault()\r\n            return\r\n        }\r\n    })\r\n\r\n    inputAno.addEventListener(\"keypress\", (e) => {\r\n        const onlyNumbers = /[0-9]/\r\n        const key = String.fromCharCode(e.keyCode)\r\n    \r\n        if(!onlyNumbers.test(key)){\r\n            e.preventDefault()\r\n            return\r\n        }\r\n    })*/ const [movieId, setMovie] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const handleChange = (e)=>{\n        const inputText = e.target.value;\n        // Use uma expressão regular para validar se o texto contém apenas letras.\n        if (/^[a-zA-Z ]+$/.test(inputText) || inputText === \"\") {\n            setMovie(inputText);\n        }\n    };\n    const [anoId, setAno] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const handleChangeYear = (e)=>{\n        const inputText = e.target.value;\n        if (/^[0-9]+$/.test(inputText) || inputText === \"\") {\n            setMovie(inputText);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        className: \"text-center py-2\",\n                        children: \"Filtros de Pesquisa\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next3\\\\pages\\\\movies.js\",\n                        lineNumber: 80,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_movie_module_css__WEBPACK_IMPORTED_MODULE_2___default().filtro),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: toggDivFilme,\n                                children: \"Por Filme Espec\\xedfico\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next3\\\\pages\\\\movies.js\",\n                                lineNumber: 82,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: toggleDivChave,\n                                children: \"Por Chave de T\\xedtulo\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next3\\\\pages\\\\movies.js\",\n                                lineNumber: 83,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next3\\\\pages\\\\movies.js\",\n                        lineNumber: 81,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next3\\\\pages\\\\movies.js\",\n                lineNumber: 79,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_movie_module_css__WEBPACK_IMPORTED_MODULE_2___default().porFilme),\n                style: {\n                    display: divFilme ? \"block\" : \"none\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        className: \"text-center py-2\",\n                        children: \"Pesquise por um Filme\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next3\\\\pages\\\\movies.js\",\n                        lineNumber: 87,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        action: \"#\",\n                        className: (_styles_movie_module_css__WEBPACK_IMPORTED_MODULE_2___default().form),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                class: \"form-floating\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"text\",\n                                        id: \"movieId\",\n                                        class: \"form-control shadow-none\",\n                                        placeholder: \"Nome do Filme\",\n                                        required: true,\n                                        value: movieId,\n                                        onChange: handleChange\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next3\\\\pages\\\\movies.js\",\n                                        lineNumber: 90,\n                                        columnNumber: 25\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        for: \"movieId\",\n                                        children: \"Digite o Filme\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next3\\\\pages\\\\movies.js\",\n                                        lineNumber: 100,\n                                        columnNumber: 25\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next3\\\\pages\\\\movies.js\",\n                                lineNumber: 89,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                class: \"form-floating\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"text\",\n                                        id: \"anoId\",\n                                        class: \"form-control shadow-none\",\n                                        required: true,\n                                        placeholder: \"Ano de Lan\\xe7amento\",\n                                        minlength: \"1\",\n                                        maxlength: \"8\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next3\\\\pages\\\\movies.js\",\n                                        lineNumber: 103,\n                                        columnNumber: 25\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        for: \"anoId\",\n                                        children: \"Digite o Ano\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next3\\\\pages\\\\movies.js\",\n                                        lineNumber: 104,\n                                        columnNumber: 25\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next3\\\\pages\\\\movies.js\",\n                                lineNumber: 102,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next3\\\\pages\\\\movies.js\",\n                        lineNumber: 88,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: (_styles_movie_module_css__WEBPACK_IMPORTED_MODULE_2___default().buttonSearch),\n                        children: \"Buscar\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next3\\\\pages\\\\movies.js\",\n                        lineNumber: 107,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next3\\\\pages\\\\movies.js\",\n                lineNumber: 86,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_movie_module_css__WEBPACK_IMPORTED_MODULE_2___default().porChave),\n                style: {\n                    display: divChave ? \"block\" : \"none\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        className: \"text-center py-2\",\n                        children: \"Pesquise por uma Chave\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next3\\\\pages\\\\movies.js\",\n                        lineNumber: 110,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        action: \"#\",\n                        className: (_styles_movie_module_css__WEBPACK_IMPORTED_MODULE_2___default().form),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            class: \"form-floating\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"text\",\n                                    id: \"chaveId\",\n                                    class: \"form-control shadow-none\",\n                                    placeholder: \"Ex: Bagdad\",\n                                    required: true\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next3\\\\pages\\\\movies.js\",\n                                    lineNumber: 113,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    for: \"chaveId\",\n                                    children: \"Digite uma Chave\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next3\\\\pages\\\\movies.js\",\n                                    lineNumber: 114,\n                                    columnNumber: 25\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next3\\\\pages\\\\movies.js\",\n                            lineNumber: 112,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next3\\\\pages\\\\movies.js\",\n                        lineNumber: 111,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: (_styles_movie_module_css__WEBPACK_IMPORTED_MODULE_2___default().buttonSearch),\n                        children: \"Buscar\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next3\\\\pages\\\\movies.js\",\n                        lineNumber: 117,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next3\\\\pages\\\\movies.js\",\n                lineNumber: 109,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: data.Search.map((m)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            m.Title,\n                            \" --- \",\n                            m.Year\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next3\\\\pages\\\\movies.js\",\n                        lineNumber: 121,\n                        columnNumber: 21\n                    }, this))\n            }, void 0, false, {\n                fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next3\\\\pages\\\\movies.js\",\n                lineNumber: 119,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Movies, \"iFrPG6R6GDQEOhRdalEALJUUoMA=\");\n_c = Movies;\nvar _c;\n$RefreshReg$(_c, \"Movies\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFFBQVE7Ozs7Ozs4Q0FDbEcsOERBQUNFO29DQUFNQyxLQUFJOzhDQUFVOzs7Ozs7Ozs7Ozs7Ozs7OztrQ0FHN0IsOERBQUNmO3dCQUFPRixXQUFXdEIsOEVBQW1CO2tDQUFFOzs7Ozs7Ozs7Ozs7MEJBRTVDLDhEQUFDb0I7MEJBQ0lsQixLQUFLMEMsTUFBTSxDQUFDQyxHQUFHLENBQUMsQ0FBQ0Msa0JBQ2QsOERBQUMxQjs7NEJBQUswQixFQUFFQyxLQUFLOzRCQUFDOzRCQUFNRCxFQUFFRSxJQUFJOzs7Ozs7Ozs7Ozs7OztBQUs5QztHQS9Hd0IvQztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9tb3ZpZXMuanM/YWY1NCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VSZWYsIHVzZVN0YXRlfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvbW92aWUubW9kdWxlLmNzcydcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCl7XHJcblxyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly93d3cub21kYmFwaS5jb20vP2FwaWtleT1jYzIwMmIzZiZzPWJhZ2RhZGApXHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKVxyXG4gIFxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBwcm9wczoge2RhdGF9XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNb3ZpZXMoe2RhdGF9KXtcclxuXHJcbiAgICBjb25zdCBbZGl2RmlsbWUsIHNldElzVmlzaWJsZTFdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAgIGNvbnN0IHRvZ2dEaXZGaWxtZSA9ICgpID0+IHtcclxuICAgICAgICBpZihkaXZDaGF2ZSl7XHJcbiAgICAgICAgICAgIHNldElzVmlzaWJsZTIoIWRpdkNoYXZlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0SXNWaXNpYmxlMSghZGl2RmlsbWUpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBbZGl2Q2hhdmUsIHNldElzVmlzaWJsZTJdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAgIGNvbnN0IHRvZ2dsZURpdkNoYXZlID0gKCkgPT4ge1xyXG4gICAgICAgIGlmKGRpdkZpbG1lKXtcclxuICAgICAgICAgICAgc2V0SXNWaXNpYmxlMSghZGl2RmlsbWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRJc1Zpc2libGUyKCFkaXZDaGF2ZSk7XHJcbiAgICB9O1xyXG5cclxuICAgIC8qXHJcbiAgICBpbnB1dE5vbWUuYWRkRXZlbnRMaXN0ZW5lcihcImtleXByZXNzXCIsIChlKSA9PiB7XHJcbiAgICAgICAgY29uc3Qgb25seU51bWJlcnMgPSAvW2EtekEtWl0vXHJcbiAgICAgICAgY29uc3Qga2V5ID0gU3RyaW5nLmZyb21DaGFyQ29kZShlLmtleUNvZGUpXHJcbiAgICBcclxuICAgICAgICBpZighb25seU51bWJlcnMudGVzdChrZXkpKXtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcblxyXG4gICAgaW5wdXRBbm8uYWRkRXZlbnRMaXN0ZW5lcihcImtleXByZXNzXCIsIChlKSA9PiB7XHJcbiAgICAgICAgY29uc3Qgb25seU51bWJlcnMgPSAvWzAtOV0vXHJcbiAgICAgICAgY29uc3Qga2V5ID0gU3RyaW5nLmZyb21DaGFyQ29kZShlLmtleUNvZGUpXHJcbiAgICBcclxuICAgICAgICBpZighb25seU51bWJlcnMudGVzdChrZXkpKXtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuICAgIH0pKi9cclxuXHJcbiAgICBjb25zdCBbbW92aWVJZCwgc2V0TW92aWVdID0gdXNlU3RhdGUoJycpXHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGUpID0+IHtcclxuICAgICAgICBjb25zdCBpbnB1dFRleHQgPSBlLnRhcmdldC52YWx1ZVxyXG4gICAgXHJcbiAgICAgICAgLy8gVXNlIHVtYSBleHByZXNzw6NvIHJlZ3VsYXIgcGFyYSB2YWxpZGFyIHNlIG8gdGV4dG8gY29udMOpbSBhcGVuYXMgbGV0cmFzLlxyXG4gICAgICAgIGlmICgvXlthLXpBLVogXSskLy50ZXN0KGlucHV0VGV4dCkgfHwgaW5wdXRUZXh0ID09PSAnJykge1xyXG4gICAgICAgICAgc2V0TW92aWUoaW5wdXRUZXh0KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBbYW5vSWQsIHNldEFub10gPSB1c2VTdGF0ZSgnJylcclxuXHJcbiAgICBjb25zdCBoYW5kbGVDaGFuZ2VZZWFyID0gKGUpID0+IHtcclxuICAgICAgICBjb25zdCBpbnB1dFRleHQgPSBlLnRhcmdldC52YWx1ZVxyXG5cclxuICAgICAgICBpZiAoL15bMC05XSskLy50ZXN0KGlucHV0VGV4dCkgfHwgaW5wdXRUZXh0ID09PSAnJykge1xyXG4gICAgICAgICAgICBzZXRNb3ZpZShpbnB1dFRleHQpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9J3RleHQtY2VudGVyIHB5LTInPkZpbHRyb3MgZGUgUGVzcXVpc2E8L2gzPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5maWx0cm99PlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17dG9nZ0RpdkZpbG1lfT5Qb3IgRmlsbWUgRXNwZWPDrWZpY288L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RvZ2dsZURpdkNoYXZlfT5Qb3IgQ2hhdmUgZGUgVMOtdHVsbzwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBvckZpbG1lfSBzdHlsZT17eyBkaXNwbGF5OiBkaXZGaWxtZSA/ICdibG9jaycgOiAnbm9uZScgfX0+XHJcbiAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPSd0ZXh0LWNlbnRlciBweS0yJz5QZXNxdWlzZSBwb3IgdW0gRmlsbWU8L2gzPlxyXG4gICAgICAgICAgICAgICAgPGZvcm0gYWN0aW9uPScjJyBjbGFzc05hbWU9e3N0eWxlcy5mb3JtfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSdmb3JtLWZsb2F0aW5nJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT0ndGV4dCcgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD0nbW92aWVJZCcgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbCBzaGFkb3ctbm9uZVwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J05vbWUgZG8gRmlsbWUnIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXttb3ZpZUlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9pbnB1dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cIm1vdmllSWRcIj5EaWdpdGUgbyBGaWxtZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nZm9ybS1mbG9hdGluZyc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwiYW5vSWRcIiBjbGFzcz1cImZvcm0tY29udHJvbCBzaGFkb3ctbm9uZVwiIHJlcXVpcmVkIHBsYWNlaG9sZGVyPVwiQW5vIGRlIExhbsOnYW1lbnRvXCIgbWlubGVuZ3RoPVwiMVwiIG1heGxlbmd0aD1cIjhcIj48L2lucHV0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiYW5vSWRcIj5EaWdpdGUgbyBBbm88L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5idXR0b25TZWFyY2h9PkJ1c2NhcjwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wb3JDaGF2ZX0gc3R5bGU9e3sgZGlzcGxheTogZGl2Q2hhdmUgPyAnYmxvY2snIDogJ25vbmUnIH19PlxyXG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT0ndGV4dC1jZW50ZXIgcHktMic+UGVzcXVpc2UgcG9yIHVtYSBDaGF2ZTwvaDM+XHJcbiAgICAgICAgICAgICAgICA8Zm9ybSBhY3Rpb249JyMnIGNsYXNzTmFtZT17c3R5bGVzLmZvcm19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J2Zvcm0tZmxvYXRpbmcnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT0ndGV4dCcgaWQ9J2NoYXZlSWQnIGNsYXNzPVwiZm9ybS1jb250cm9sIHNoYWRvdy1ub25lXCIgcGxhY2Vob2xkZXI9J0V4OiBCYWdkYWQnIHJlcXVpcmVkPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJjaGF2ZUlkXCI+RGlnaXRlIHVtYSBDaGF2ZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvblNlYXJjaH0+QnVzY2FyPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAge2RhdGEuU2VhcmNoLm1hcCgobSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+e20uVGl0bGV9IC0tLSB7bS5ZZWFyfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKSl9ICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlUmVmIiwidXNlU3RhdGUiLCJzdHlsZXMiLCJNb3ZpZXMiLCJkYXRhIiwiZGl2RmlsbWUiLCJzZXRJc1Zpc2libGUxIiwidG9nZ0RpdkZpbG1lIiwiZGl2Q2hhdmUiLCJzZXRJc1Zpc2libGUyIiwidG9nZ2xlRGl2Q2hhdmUiLCJtb3ZpZUlkIiwic2V0TW92aWUiLCJoYW5kbGVDaGFuZ2UiLCJlIiwiaW5wdXRUZXh0IiwidGFyZ2V0IiwidmFsdWUiLCJ0ZXN0IiwiYW5vSWQiLCJzZXRBbm8iLCJoYW5kbGVDaGFuZ2VZZWFyIiwiZGl2IiwiaDMiLCJjbGFzc05hbWUiLCJmaWx0cm8iLCJidXR0b24iLCJvbkNsaWNrIiwicG9yRmlsbWUiLCJzdHlsZSIsImRpc3BsYXkiLCJmb3JtIiwiYWN0aW9uIiwiY2xhc3MiLCJpbnB1dCIsInR5cGUiLCJpZCIsInBsYWNlaG9sZGVyIiwicmVxdWlyZWQiLCJvbkNoYW5nZSIsImxhYmVsIiwiZm9yIiwibWlubGVuZ3RoIiwibWF4bGVuZ3RoIiwiYnV0dG9uU2VhcmNoIiwicG9yQ2hhdmUiLCJTZWFyY2giLCJtYXAiLCJtIiwiVGl0bGUiLCJZZWFyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/movies.js\n"));

/***/ })

});