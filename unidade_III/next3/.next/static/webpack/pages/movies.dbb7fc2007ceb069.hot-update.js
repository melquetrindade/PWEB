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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Movies; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_movie_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/movie.module.css */ \"./styles/movie.module.css\");\n/* harmony import */ var _styles_movie_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_movie_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\n/*\r\nexport async function getServerSideProps(context){\r\n\r\n    const res = await fetch(`http://www.omdbapi.com/?apikey=cc202b3f&s=bagdad`)\r\n    const data = await res.json()\r\n  \r\n    return {\r\n        props: {data}\r\n    }\r\n\r\n}\r\n*/ function Movies(param) {\n    let { data } = param;\n    var _moviesData;\n    _s();\n    const [divFilme, setIsVisible1] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const toggDivFilme = ()=>{\n        if (divChave) {\n            setIsVisible2(!divChave);\n        }\n        setIsVisible1(!divFilme);\n    };\n    const [divChave, setIsVisible2] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const toggleDivChave = ()=>{\n        if (divFilme) {\n            setIsVisible1(!divFilme);\n        }\n        setIsVisible2(!divChave);\n    };\n    const [movieId, setMovie] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const handleChange = (e)=>{\n        const inputText = e.target.value;\n        // Use uma expressão regular para validar se o texto contém apenas letras.\n        if (/^[a-zA-Z ]+$/.test(inputText) || inputText === \"\") {\n            setMovie(inputText);\n        }\n    };\n    const [anoId, setAno] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const handleChangeYear = (e)=>{\n        const inputText = e.target.value;\n        if (/^[0-9]+$/.test(inputText) || inputText === \"\") {\n            setAno(inputText);\n        }\n    };\n    const [chaveId, setChave] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const handleChangeChave = (e)=>{\n        const inputText = e.target.value;\n        if (/^[a-zA-Z ]+$/.test(inputText) || inputText === \"\") {\n            setChave(inputText);\n        }\n    };\n    const [moviesData, setMovies] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const loadMovies = async (param)=>{\n        let { nameMovie, yearMovie, typeSearch } = param;\n        console.log(\"entrou\");\n        if (typeSearch == \"byMovie\") {\n            const res = await fetch(\"https://www.omdbapi.com/?apikey=cc202b3f&t=\".concat(nameMovie, \"&y=\").concat(yearMovie));\n            const resJson = await res.json();\n            setMovies(resJson);\n        } else {\n            const res = await fetch(\"https://www.omdbapi.com/?apikey=cc202b3f&s=\".concat(nameMovie));\n            const resJson = await res.json();\n            setMovies(resJson);\n        }\n    };\n    const searchMovie = (typeSearch)=>{\n        //console.log(`title antes: ${movieId}`)\n        if (typeSearch === \"byMovie\") {\n            console.log(\"entrou\");\n            const titleFormat = movieId.replace(/ /g, \"+\");\n            console.log(\"title depois: \".concat(titleFormat));\n        //loadMovies(titleFormat, anoId, typeSearch)\n        } else {\n        //const titleFormat = chaveId.replace(/ /g, '+')\n        //console.log(`title depois: ${titleFormat}`)\n        //loadMovies(titleFormat, 0, typeSearch)\n        }\n    //console.log(`title depois: ${titleFormat}`)\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        className: \"text-center py-2\",\n                        children: \"Filtros de Pesquisa\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next3\\\\pages\\\\movies.js\",\n                        lineNumber: 104,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_movie_module_css__WEBPACK_IMPORTED_MODULE_2___default().filtro),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: toggDivFilme,\n                                children: \"Por Filme Espec\\xedfico\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next3\\\\pages\\\\movies.js\",\n                                lineNumber: 106,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: toggleDivChave,\n                                children: \"Por Chave de T\\xedtulo\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next3\\\\pages\\\\movies.js\",\n                                lineNumber: 107,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next3\\\\pages\\\\movies.js\",\n                        lineNumber: 105,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next3\\\\pages\\\\movies.js\",\n                lineNumber: 103,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_movie_module_css__WEBPACK_IMPORTED_MODULE_2___default().porFilme),\n                style: {\n                    display: divFilme ? \"block\" : \"none\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        className: \"text-center py-2\",\n                        children: \"Pesquise por um Filme\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next3\\\\pages\\\\movies.js\",\n                        lineNumber: 111,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        action: \"#\",\n                        className: (_styles_movie_module_css__WEBPACK_IMPORTED_MODULE_2___default().form),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                class: \"form-floating\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"text\",\n                                        id: \"movieId\",\n                                        class: \"form-control shadow-none\",\n                                        placeholder: \"Nome do Filme\",\n                                        required: true,\n                                        value: movieId,\n                                        onChange: handleChange\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next3\\\\pages\\\\movies.js\",\n                                        lineNumber: 114,\n                                        columnNumber: 25\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        for: \"movieId\",\n                                        children: \"Digite o Filme\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next3\\\\pages\\\\movies.js\",\n                                        lineNumber: 124,\n                                        columnNumber: 25\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next3\\\\pages\\\\movies.js\",\n                                lineNumber: 113,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                class: \"form-floating\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"text\",\n                                        id: \"anoId\",\n                                        class: \"form-control shadow-none\",\n                                        required: true,\n                                        placeholder: \"Ano de Lan\\xe7amento\",\n                                        minlength: \"1\",\n                                        maxlength: \"6\",\n                                        value: anoId,\n                                        onChange: handleChangeYear\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next3\\\\pages\\\\movies.js\",\n                                        lineNumber: 127,\n                                        columnNumber: 25\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        for: \"anoId\",\n                                        children: \"Digite o Ano\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next3\\\\pages\\\\movies.js\",\n                                        lineNumber: 139,\n                                        columnNumber: 25\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next3\\\\pages\\\\movies.js\",\n                                lineNumber: 126,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next3\\\\pages\\\\movies.js\",\n                        lineNumber: 112,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: searchMovie(\"byMovie\"),\n                        className: (_styles_movie_module_css__WEBPACK_IMPORTED_MODULE_2___default().buttonSearch),\n                        children: \"Buscar\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next3\\\\pages\\\\movies.js\",\n                        lineNumber: 142,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next3\\\\pages\\\\movies.js\",\n                lineNumber: 110,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_movie_module_css__WEBPACK_IMPORTED_MODULE_2___default().porChave),\n                style: {\n                    display: divChave ? \"block\" : \"none\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        className: \"text-center py-2\",\n                        children: \"Pesquise por uma Chave\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next3\\\\pages\\\\movies.js\",\n                        lineNumber: 145,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        action: \"#\",\n                        className: (_styles_movie_module_css__WEBPACK_IMPORTED_MODULE_2___default().form),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            class: \"form-floating\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"text\",\n                                    id: \"chaveId\",\n                                    class: \"form-control shadow-none\",\n                                    placeholder: \"Ex: Bagdad\",\n                                    required: true,\n                                    value: chaveId,\n                                    onChange: handleChangeChave\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next3\\\\pages\\\\movies.js\",\n                                    lineNumber: 148,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    for: \"chaveId\",\n                                    children: \"Digite uma Chave\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next3\\\\pages\\\\movies.js\",\n                                    lineNumber: 157,\n                                    columnNumber: 25\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next3\\\\pages\\\\movies.js\",\n                            lineNumber: 147,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next3\\\\pages\\\\movies.js\",\n                        lineNumber: 146,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: searchMovie(\"byChave\"),\n                        className: (_styles_movie_module_css__WEBPACK_IMPORTED_MODULE_2___default().buttonSearch),\n                        children: \"Buscar\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next3\\\\pages\\\\movies.js\",\n                        lineNumber: 160,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next3\\\\pages\\\\movies.js\",\n                lineNumber: 144,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: (_moviesData = moviesData) === null || _moviesData === void 0 ? void 0 : _moviesData.Search.map((m)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            m.Title,\n                            \" --- \",\n                            m.Year\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next3\\\\pages\\\\movies.js\",\n                        lineNumber: 164,\n                        columnNumber: 21\n                    }, this))\n            }, void 0, false, {\n                fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next3\\\\pages\\\\movies.js\",\n                lineNumber: 162,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Movies, \"zuCukKDpYl8Ib/KvA+WGVg8cWzo=\");\n_c = Movies;\nvar _c;\n$RefreshReg$(_c, \"Movies\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7Ozs7Ozs7Ozs7a0NBRzdCLDhEQUFDZjt3QkFBT0MsU0FBU1IsWUFBWTt3QkFBWUssV0FBV3hDLDhFQUFtQjtrQ0FBRTs7Ozs7Ozs7Ozs7OzBCQUU3RSw4REFBQ3NDOzJCQUNJbkMsY0FBQUEsd0JBQUFBLGtDQUFBQSxZQUFZMkQsTUFBTSxDQUFDQyxHQUFHLENBQUMsQ0FBQ0Msa0JBQ3JCLDhEQUFDMUI7OzRCQUFLMEIsRUFBRUMsS0FBSzs0QkFBQzs0QkFBTUQsRUFBRUUsSUFBSTs7Ozs7Ozs7Ozs7Ozs7QUFLOUM7R0F4SndCakU7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbW92aWVzLmpzP2FmNTQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlUmVmLCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL21vdmllLm1vZHVsZS5jc3MnXHJcblxyXG4vKlxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQpe1xyXG5cclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwOi8vd3d3Lm9tZGJhcGkuY29tLz9hcGlrZXk9Y2MyMDJiM2Ymcz1iYWdkYWRgKVxyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKClcclxuICBcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcHJvcHM6IHtkYXRhfVxyXG4gICAgfVxyXG5cclxufVxyXG4qL1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTW92aWVzKHtkYXRhfSl7XHJcblxyXG4gICAgY29uc3QgW2RpdkZpbG1lLCBzZXRJc1Zpc2libGUxXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgICBjb25zdCB0b2dnRGl2RmlsbWUgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYoZGl2Q2hhdmUpe1xyXG4gICAgICAgICAgICBzZXRJc1Zpc2libGUyKCFkaXZDaGF2ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldElzVmlzaWJsZTEoIWRpdkZpbG1lKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBbZGl2Q2hhdmUsIHNldElzVmlzaWJsZTJdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAgIGNvbnN0IHRvZ2dsZURpdkNoYXZlID0gKCkgPT4ge1xyXG4gICAgICAgIGlmKGRpdkZpbG1lKXtcclxuICAgICAgICAgICAgc2V0SXNWaXNpYmxlMSghZGl2RmlsbWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRJc1Zpc2libGUyKCFkaXZDaGF2ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgW21vdmllSWQsIHNldE1vdmllXSA9IHVzZVN0YXRlKCcnKVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChlKSA9PiB7XHJcbiAgICAgICAgY29uc3QgaW5wdXRUZXh0ID0gZS50YXJnZXQudmFsdWVcclxuICAgIFxyXG4gICAgICAgIC8vIFVzZSB1bWEgZXhwcmVzc8OjbyByZWd1bGFyIHBhcmEgdmFsaWRhciBzZSBvIHRleHRvIGNvbnTDqW0gYXBlbmFzIGxldHJhcy5cclxuICAgICAgICBpZiAoL15bYS16QS1aIF0rJC8udGVzdChpbnB1dFRleHQpIHx8IGlucHV0VGV4dCA9PT0gJycpIHtcclxuICAgICAgICAgIHNldE1vdmllKGlucHV0VGV4dClcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgW2Fub0lkLCBzZXRBbm9dID0gdXNlU3RhdGUoJycpXHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlWWVhciA9IChlKSA9PiB7XHJcbiAgICAgICAgY29uc3QgaW5wdXRUZXh0ID0gZS50YXJnZXQudmFsdWVcclxuXHJcbiAgICAgICAgaWYgKC9eWzAtOV0rJC8udGVzdChpbnB1dFRleHQpIHx8IGlucHV0VGV4dCA9PT0gJycpIHtcclxuICAgICAgICAgICAgc2V0QW5vKGlucHV0VGV4dClcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgW2NoYXZlSWQsIHNldENoYXZlXSA9IHVzZVN0YXRlKCcnKVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZUNoYXZlID0gKGUpID0+IHtcclxuICAgICAgICBjb25zdCBpbnB1dFRleHQgPSBlLnRhcmdldC52YWx1ZVxyXG5cclxuICAgICAgICBpZiAoL15bYS16QS1aIF0rJC8udGVzdChpbnB1dFRleHQpIHx8IGlucHV0VGV4dCA9PT0gJycpIHtcclxuICAgICAgICAgICAgc2V0Q2hhdmUoaW5wdXRUZXh0KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBbbW92aWVzRGF0YSwgc2V0TW92aWVzXSA9IHVzZVN0YXRlKFwiXCIpXHJcblxyXG4gICAgY29uc3QgbG9hZE1vdmllcyA9IGFzeW5jICh7bmFtZU1vdmllLCB5ZWFyTW92aWUsIHR5cGVTZWFyY2h9KSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2VudHJvdScpXHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYodHlwZVNlYXJjaCA9PSAnYnlNb3ZpZScpe1xyXG4gICAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly93d3cub21kYmFwaS5jb20vP2FwaWtleT1jYzIwMmIzZiZ0PSR7bmFtZU1vdmllfSZ5PSR7eWVhck1vdmllfWApXHJcbiAgICAgICAgICAgIGNvbnN0IHJlc0pzb24gPSBhd2FpdCByZXMuanNvbigpXHJcbiAgICAgICAgICAgIHNldE1vdmllcyhyZXNKc29uKVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly93d3cub21kYmFwaS5jb20vP2FwaWtleT1jYzIwMmIzZiZzPSR7bmFtZU1vdmllfWApXHJcbiAgICAgICAgICAgIGNvbnN0IHJlc0pzb24gPSBhd2FpdCByZXMuanNvbigpXHJcbiAgICAgICAgICAgIHNldE1vdmllcyhyZXNKc29uKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzZWFyY2hNb3ZpZSA9ICh0eXBlU2VhcmNoKSA9PiB7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhgdGl0bGUgYW50ZXM6ICR7bW92aWVJZH1gKVxyXG4gICAgICAgIGlmKHR5cGVTZWFyY2ggPT09ICdieU1vdmllJyl7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdlbnRyb3UnKVxyXG4gICAgICAgICAgICBjb25zdCB0aXRsZUZvcm1hdCA9IG1vdmllSWQucmVwbGFjZSgvIC9nLCAnKycpXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGB0aXRsZSBkZXBvaXM6ICR7dGl0bGVGb3JtYXR9YClcclxuICAgICAgICAgICAgLy9sb2FkTW92aWVzKHRpdGxlRm9ybWF0LCBhbm9JZCwgdHlwZVNlYXJjaClcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgLy9jb25zdCB0aXRsZUZvcm1hdCA9IGNoYXZlSWQucmVwbGFjZSgvIC9nLCAnKycpXHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coYHRpdGxlIGRlcG9pczogJHt0aXRsZUZvcm1hdH1gKVxyXG4gICAgICAgICAgICAvL2xvYWRNb3ZpZXModGl0bGVGb3JtYXQsIDAsIHR5cGVTZWFyY2gpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vY29uc29sZS5sb2coYHRpdGxlIGRlcG9pczogJHt0aXRsZUZvcm1hdH1gKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9J3RleHQtY2VudGVyIHB5LTInPkZpbHRyb3MgZGUgUGVzcXVpc2E8L2gzPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5maWx0cm99PlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17dG9nZ0RpdkZpbG1lfT5Qb3IgRmlsbWUgRXNwZWPDrWZpY288L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RvZ2dsZURpdkNoYXZlfT5Qb3IgQ2hhdmUgZGUgVMOtdHVsbzwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBvckZpbG1lfSBzdHlsZT17eyBkaXNwbGF5OiBkaXZGaWxtZSA/ICdibG9jaycgOiAnbm9uZScgfX0+XHJcbiAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPSd0ZXh0LWNlbnRlciBweS0yJz5QZXNxdWlzZSBwb3IgdW0gRmlsbWU8L2gzPlxyXG4gICAgICAgICAgICAgICAgPGZvcm0gYWN0aW9uPScjJyBjbGFzc05hbWU9e3N0eWxlcy5mb3JtfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSdmb3JtLWZsb2F0aW5nJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT0ndGV4dCcgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD0nbW92aWVJZCcgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbCBzaGFkb3ctbm9uZVwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J05vbWUgZG8gRmlsbWUnIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXttb3ZpZUlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9pbnB1dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cIm1vdmllSWRcIj5EaWdpdGUgbyBGaWxtZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nZm9ybS1mbG9hdGluZyc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImFub0lkXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbCBzaGFkb3ctbm9uZVwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkFubyBkZSBMYW7Dp2FtZW50b1wiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWlubGVuZ3RoPVwiMVwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4bGVuZ3RoPVwiNlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17YW5vSWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlWWVhcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2lucHV0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiYW5vSWRcIj5EaWdpdGUgbyBBbm88L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtzZWFyY2hNb3ZpZSgnYnlNb3ZpZScpfSBjbGFzc05hbWU9e3N0eWxlcy5idXR0b25TZWFyY2h9PkJ1c2NhcjwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wb3JDaGF2ZX0gc3R5bGU9e3sgZGlzcGxheTogZGl2Q2hhdmUgPyAnYmxvY2snIDogJ25vbmUnIH19PlxyXG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT0ndGV4dC1jZW50ZXIgcHktMic+UGVzcXVpc2UgcG9yIHVtYSBDaGF2ZTwvaDM+XHJcbiAgICAgICAgICAgICAgICA8Zm9ybSBhY3Rpb249JyMnIGNsYXNzTmFtZT17c3R5bGVzLmZvcm19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J2Zvcm0tZmxvYXRpbmcnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9J3RleHQnIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD0nY2hhdmVJZCcgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sIHNoYWRvdy1ub25lXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdFeDogQmFnZGFkJyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2NoYXZlSWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2VDaGF2ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJjaGF2ZUlkXCI+RGlnaXRlIHVtYSBDaGF2ZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3NlYXJjaE1vdmllKCdieUNoYXZlJyl9IGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvblNlYXJjaH0+QnVzY2FyPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAge21vdmllc0RhdGE/LlNlYXJjaC5tYXAoKG0pID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PnttLlRpdGxlfSAtLS0ge20uWWVhcn08L2Rpdj5cclxuICAgICAgICAgICAgICAgICkpfSAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVJlZiIsInVzZVN0YXRlIiwic3R5bGVzIiwiTW92aWVzIiwiZGF0YSIsIm1vdmllc0RhdGEiLCJkaXZGaWxtZSIsInNldElzVmlzaWJsZTEiLCJ0b2dnRGl2RmlsbWUiLCJkaXZDaGF2ZSIsInNldElzVmlzaWJsZTIiLCJ0b2dnbGVEaXZDaGF2ZSIsIm1vdmllSWQiLCJzZXRNb3ZpZSIsImhhbmRsZUNoYW5nZSIsImUiLCJpbnB1dFRleHQiLCJ0YXJnZXQiLCJ2YWx1ZSIsInRlc3QiLCJhbm9JZCIsInNldEFubyIsImhhbmRsZUNoYW5nZVllYXIiLCJjaGF2ZUlkIiwic2V0Q2hhdmUiLCJoYW5kbGVDaGFuZ2VDaGF2ZSIsInNldE1vdmllcyIsImxvYWRNb3ZpZXMiLCJuYW1lTW92aWUiLCJ5ZWFyTW92aWUiLCJ0eXBlU2VhcmNoIiwiY29uc29sZSIsImxvZyIsInJlcyIsImZldGNoIiwicmVzSnNvbiIsImpzb24iLCJzZWFyY2hNb3ZpZSIsInRpdGxlRm9ybWF0IiwicmVwbGFjZSIsImRpdiIsImgzIiwiY2xhc3NOYW1lIiwiZmlsdHJvIiwiYnV0dG9uIiwib25DbGljayIsInBvckZpbG1lIiwic3R5bGUiLCJkaXNwbGF5IiwiZm9ybSIsImFjdGlvbiIsImNsYXNzIiwiaW5wdXQiLCJ0eXBlIiwiaWQiLCJwbGFjZWhvbGRlciIsInJlcXVpcmVkIiwib25DaGFuZ2UiLCJsYWJlbCIsImZvciIsIm1pbmxlbmd0aCIsIm1heGxlbmd0aCIsImJ1dHRvblNlYXJjaCIsInBvckNoYXZlIiwiU2VhcmNoIiwibWFwIiwibSIsIlRpdGxlIiwiWWVhciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/movies.js\n"));

/***/ })

});