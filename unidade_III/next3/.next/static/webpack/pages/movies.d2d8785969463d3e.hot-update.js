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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Movies; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_movie_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/movie.module.css */ \"./styles/movie.module.css\");\n/* harmony import */ var _styles_movie_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_movie_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\n/*\r\nexport async function getServerSideProps(context){\r\n\r\n    const res = await fetch(`http://www.omdbapi.com/?apikey=cc202b3f&s=bagdad`)\r\n    const data = await res.json()\r\n  \r\n    return {\r\n        props: {data}\r\n    }\r\n\r\n}\r\n*/ function Movies(param) {\n    let { data } = param;\n    var _moviesData;\n    _s();\n    const [divFilme, setIsVisible1] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const toggDivFilme = ()=>{\n        if (divChave) {\n            setIsVisible2(!divChave);\n        }\n        setIsVisible1(!divFilme);\n    };\n    const [divChave, setIsVisible2] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const toggleDivChave = ()=>{\n        if (divFilme) {\n            setIsVisible1(!divFilme);\n        }\n        setIsVisible2(!divChave);\n    };\n    const [movieId, setMovie] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const handleChange = (e)=>{\n        const inputText = e.target.value;\n        // Use uma expressão regular para validar se o texto contém apenas letras.\n        if (/^[a-zA-Z ]+$/.test(inputText) || inputText === \"\") {\n            setMovie(inputText);\n        }\n    };\n    const [anoId, setAno] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const handleChangeYear = (e)=>{\n        const inputText = e.target.value;\n        if (/^[0-9]+$/.test(inputText) || inputText === \"\") {\n            setAno(inputText);\n        }\n    };\n    const [chaveId, setChave] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const handleChangeChave = (e)=>{\n        const inputText = e.target.value;\n        if (/^[a-zA-Z ]+$/.test(inputText) || inputText === \"\") {\n            setChave(inputText);\n        }\n    };\n    const [moviesData, setMovies] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(data);\n    const loadMovies = async (param)=>{\n        let { nameMovie, yearMovie, typeSearch } = param;\n        console.log(\"entrou\");\n        if (typeSearch == \"byMovie\") {\n            const res = await fetch(\"https://www.omdbapi.com/?apikey=cc202b3f&t=\".concat(nameMovie, \"&y=\").concat(yearMovie));\n            const resJson = await res.json();\n            setMovies(resJson);\n        } else {\n            const res = await fetch(\"https://www.omdbapi.com/?apikey=cc202b3f&s=\".concat(nameMovie));\n            const resJson = await res.json();\n            setMovies(resJson);\n        }\n    };\n    function searchMovie(typeSearch) {\n        //console.log(`title antes: ${movieId}`)\n        if (typeSearch === \"byMovie\") {\n            console.log(\"entrou\");\n            const titleFormat = movieId.replace(/ /g, \"+\");\n            console.log(\"title depois: \".concat(titleFormat));\n        //loadMovies(titleFormat, anoId, typeSearch)\n        } else {\n        //const titleFormat = chaveId.replace(/ /g, '+')\n        //console.log(`title depois: ${titleFormat}`)\n        //loadMovies(titleFormat, 0, typeSearch)\n        }\n    //console.log(`title depois: ${titleFormat}`)\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        className: \"text-center py-2\",\n                        children: \"Filtros de Pesquisa\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next3\\\\pages\\\\movies.js\",\n                        lineNumber: 104,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_movie_module_css__WEBPACK_IMPORTED_MODULE_2___default().filtro),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: toggDivFilme,\n                                children: \"Por Filme Espec\\xedfico\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next3\\\\pages\\\\movies.js\",\n                                lineNumber: 106,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: toggleDivChave,\n                                children: \"Por Chave de T\\xedtulo\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next3\\\\pages\\\\movies.js\",\n                                lineNumber: 107,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next3\\\\pages\\\\movies.js\",\n                        lineNumber: 105,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next3\\\\pages\\\\movies.js\",\n                lineNumber: 103,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_movie_module_css__WEBPACK_IMPORTED_MODULE_2___default().porFilme),\n                style: {\n                    display: divFilme ? \"block\" : \"none\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        className: \"text-center py-2\",\n                        children: \"Pesquise por um Filme\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next3\\\\pages\\\\movies.js\",\n                        lineNumber: 111,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        action: \"#\",\n                        className: (_styles_movie_module_css__WEBPACK_IMPORTED_MODULE_2___default().form),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                class: \"form-floating\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"text\",\n                                        id: \"movieId\",\n                                        class: \"form-control shadow-none\",\n                                        placeholder: \"Nome do Filme\",\n                                        required: true,\n                                        value: movieId,\n                                        onChange: handleChange\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next3\\\\pages\\\\movies.js\",\n                                        lineNumber: 114,\n                                        columnNumber: 25\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        for: \"movieId\",\n                                        children: \"Digite o Filme\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next3\\\\pages\\\\movies.js\",\n                                        lineNumber: 124,\n                                        columnNumber: 25\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next3\\\\pages\\\\movies.js\",\n                                lineNumber: 113,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                class: \"form-floating\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"text\",\n                                        id: \"anoId\",\n                                        class: \"form-control shadow-none\",\n                                        required: true,\n                                        placeholder: \"Ano de Lan\\xe7amento\",\n                                        minlength: \"1\",\n                                        maxlength: \"6\",\n                                        value: anoId,\n                                        onChange: handleChangeYear\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next3\\\\pages\\\\movies.js\",\n                                        lineNumber: 127,\n                                        columnNumber: 25\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        for: \"anoId\",\n                                        children: \"Digite o Ano\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next3\\\\pages\\\\movies.js\",\n                                        lineNumber: 139,\n                                        columnNumber: 25\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next3\\\\pages\\\\movies.js\",\n                                lineNumber: 126,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next3\\\\pages\\\\movies.js\",\n                        lineNumber: 112,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: searchMovie(\"byMovie\"),\n                        className: (_styles_movie_module_css__WEBPACK_IMPORTED_MODULE_2___default().buttonSearch),\n                        children: \"Buscar\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next3\\\\pages\\\\movies.js\",\n                        lineNumber: 142,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next3\\\\pages\\\\movies.js\",\n                lineNumber: 110,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_movie_module_css__WEBPACK_IMPORTED_MODULE_2___default().porChave),\n                style: {\n                    display: divChave ? \"block\" : \"none\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        className: \"text-center py-2\",\n                        children: \"Pesquise por uma Chave\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next3\\\\pages\\\\movies.js\",\n                        lineNumber: 145,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        action: \"#\",\n                        className: (_styles_movie_module_css__WEBPACK_IMPORTED_MODULE_2___default().form),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            class: \"form-floating\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"text\",\n                                    id: \"chaveId\",\n                                    class: \"form-control shadow-none\",\n                                    placeholder: \"Ex: Bagdad\",\n                                    required: true,\n                                    value: chaveId,\n                                    onChange: handleChangeChave\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next3\\\\pages\\\\movies.js\",\n                                    lineNumber: 148,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    for: \"chaveId\",\n                                    children: \"Digite uma Chave\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next3\\\\pages\\\\movies.js\",\n                                    lineNumber: 157,\n                                    columnNumber: 25\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next3\\\\pages\\\\movies.js\",\n                            lineNumber: 147,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next3\\\\pages\\\\movies.js\",\n                        lineNumber: 146,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: searchMovie(\"byChave\"),\n                        className: (_styles_movie_module_css__WEBPACK_IMPORTED_MODULE_2___default().buttonSearch),\n                        children: \"Buscar\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next3\\\\pages\\\\movies.js\",\n                        lineNumber: 160,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next3\\\\pages\\\\movies.js\",\n                lineNumber: 144,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: (_moviesData = moviesData) === null || _moviesData === void 0 ? void 0 : _moviesData.Search.map((m)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            m.Title,\n                            \" --- \",\n                            m.Year\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next3\\\\pages\\\\movies.js\",\n                        lineNumber: 164,\n                        columnNumber: 21\n                    }, this))\n            }, void 0, false, {\n                fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next3\\\\pages\\\\movies.js\",\n                lineNumber: 162,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Movies, \"sA5EgqlUVus+ezDW/+XRmxo2P9s=\");\n_c = Movies;\nvar _c;\n$RefreshReg$(_c, \"Movies\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQUc3Qiw4REFBQ2Y7d0JBQU9DLFNBQVNSLFlBQVk7d0JBQVlLLFdBQVd4Qyw4RUFBbUI7a0NBQUU7Ozs7Ozs7Ozs7OzswQkFFN0UsOERBQUNzQzsyQkFDSW5DLGNBQUFBLHdCQUFBQSxrQ0FBQUEsWUFBWTJELE1BQU0sQ0FBQ0MsR0FBRyxDQUFDLENBQUNDLGtCQUNyQiw4REFBQzFCOzs0QkFBSzBCLEVBQUVDLEtBQUs7NEJBQUM7NEJBQU1ELEVBQUVFLElBQUk7Ozs7Ozs7Ozs7Ozs7O0FBSzlDO0dBeEp3QmpFO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL21vdmllcy5qcz9hZjU0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVJlZiwgdXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9tb3ZpZS5tb2R1bGUuY3NzJ1xyXG5cclxuLypcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0KXtcclxuXHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgaHR0cDovL3d3dy5vbWRiYXBpLmNvbS8/YXBpa2V5PWNjMjAyYjNmJnM9YmFnZGFkYClcclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpXHJcbiAgXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHByb3BzOiB7ZGF0YX1cclxuICAgIH1cclxuXHJcbn1cclxuKi9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1vdmllcyh7ZGF0YX0pe1xyXG5cclxuICAgIGNvbnN0IFtkaXZGaWxtZSwgc2V0SXNWaXNpYmxlMV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gICAgY29uc3QgdG9nZ0RpdkZpbG1lID0gKCkgPT4ge1xyXG4gICAgICAgIGlmKGRpdkNoYXZlKXtcclxuICAgICAgICAgICAgc2V0SXNWaXNpYmxlMighZGl2Q2hhdmUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRJc1Zpc2libGUxKCFkaXZGaWxtZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgW2RpdkNoYXZlLCBzZXRJc1Zpc2libGUyXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgICBjb25zdCB0b2dnbGVEaXZDaGF2ZSA9ICgpID0+IHtcclxuICAgICAgICBpZihkaXZGaWxtZSl7XHJcbiAgICAgICAgICAgIHNldElzVmlzaWJsZTEoIWRpdkZpbG1lKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0SXNWaXNpYmxlMighZGl2Q2hhdmUpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IFttb3ZpZUlkLCBzZXRNb3ZpZV0gPSB1c2VTdGF0ZSgnJylcclxuXHJcbiAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGlucHV0VGV4dCA9IGUudGFyZ2V0LnZhbHVlXHJcbiAgICBcclxuICAgICAgICAvLyBVc2UgdW1hIGV4cHJlc3PDo28gcmVndWxhciBwYXJhIHZhbGlkYXIgc2UgbyB0ZXh0byBjb250w6ltIGFwZW5hcyBsZXRyYXMuXHJcbiAgICAgICAgaWYgKC9eW2EtekEtWiBdKyQvLnRlc3QoaW5wdXRUZXh0KSB8fCBpbnB1dFRleHQgPT09ICcnKSB7XHJcbiAgICAgICAgICBzZXRNb3ZpZShpbnB1dFRleHQpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IFthbm9JZCwgc2V0QW5vXSA9IHVzZVN0YXRlKCcnKVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZVllYXIgPSAoZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGlucHV0VGV4dCA9IGUudGFyZ2V0LnZhbHVlXHJcblxyXG4gICAgICAgIGlmICgvXlswLTldKyQvLnRlc3QoaW5wdXRUZXh0KSB8fCBpbnB1dFRleHQgPT09ICcnKSB7XHJcbiAgICAgICAgICAgIHNldEFubyhpbnB1dFRleHQpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IFtjaGF2ZUlkLCBzZXRDaGF2ZV0gPSB1c2VTdGF0ZSgnJylcclxuXHJcbiAgICBjb25zdCBoYW5kbGVDaGFuZ2VDaGF2ZSA9IChlKSA9PiB7XHJcbiAgICAgICAgY29uc3QgaW5wdXRUZXh0ID0gZS50YXJnZXQudmFsdWVcclxuXHJcbiAgICAgICAgaWYgKC9eW2EtekEtWiBdKyQvLnRlc3QoaW5wdXRUZXh0KSB8fCBpbnB1dFRleHQgPT09ICcnKSB7XHJcbiAgICAgICAgICAgIHNldENoYXZlKGlucHV0VGV4dClcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgW21vdmllc0RhdGEsIHNldE1vdmllc10gPSB1c2VTdGF0ZShkYXRhKVxyXG5cclxuICAgIGNvbnN0IGxvYWRNb3ZpZXMgPSBhc3luYyAoe25hbWVNb3ZpZSwgeWVhck1vdmllLCB0eXBlU2VhcmNofSkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdlbnRyb3UnKVxyXG4gICAgICAgIFxyXG4gICAgICAgIGlmKHR5cGVTZWFyY2ggPT0gJ2J5TW92aWUnKXtcclxuICAgICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vd3d3Lm9tZGJhcGkuY29tLz9hcGlrZXk9Y2MyMDJiM2YmdD0ke25hbWVNb3ZpZX0meT0ke3llYXJNb3ZpZX1gKVxyXG4gICAgICAgICAgICBjb25zdCByZXNKc29uID0gYXdhaXQgcmVzLmpzb24oKVxyXG4gICAgICAgICAgICBzZXRNb3ZpZXMocmVzSnNvbilcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vd3d3Lm9tZGJhcGkuY29tLz9hcGlrZXk9Y2MyMDJiM2Ymcz0ke25hbWVNb3ZpZX1gKVxyXG4gICAgICAgICAgICBjb25zdCByZXNKc29uID0gYXdhaXQgcmVzLmpzb24oKVxyXG4gICAgICAgICAgICBzZXRNb3ZpZXMocmVzSnNvbilcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc2VhcmNoTW92aWUgKHR5cGVTZWFyY2gpICB7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhgdGl0bGUgYW50ZXM6ICR7bW92aWVJZH1gKVxyXG4gICAgICAgIGlmKHR5cGVTZWFyY2ggPT09ICdieU1vdmllJyl7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdlbnRyb3UnKVxyXG4gICAgICAgICAgICBjb25zdCB0aXRsZUZvcm1hdCA9IG1vdmllSWQucmVwbGFjZSgvIC9nLCAnKycpXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGB0aXRsZSBkZXBvaXM6ICR7dGl0bGVGb3JtYXR9YClcclxuICAgICAgICAgICAgLy9sb2FkTW92aWVzKHRpdGxlRm9ybWF0LCBhbm9JZCwgdHlwZVNlYXJjaClcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgLy9jb25zdCB0aXRsZUZvcm1hdCA9IGNoYXZlSWQucmVwbGFjZSgvIC9nLCAnKycpXHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coYHRpdGxlIGRlcG9pczogJHt0aXRsZUZvcm1hdH1gKVxyXG4gICAgICAgICAgICAvL2xvYWRNb3ZpZXModGl0bGVGb3JtYXQsIDAsIHR5cGVTZWFyY2gpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vY29uc29sZS5sb2coYHRpdGxlIGRlcG9pczogJHt0aXRsZUZvcm1hdH1gKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9J3RleHQtY2VudGVyIHB5LTInPkZpbHRyb3MgZGUgUGVzcXVpc2E8L2gzPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5maWx0cm99PlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17dG9nZ0RpdkZpbG1lfT5Qb3IgRmlsbWUgRXNwZWPDrWZpY288L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RvZ2dsZURpdkNoYXZlfT5Qb3IgQ2hhdmUgZGUgVMOtdHVsbzwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBvckZpbG1lfSBzdHlsZT17eyBkaXNwbGF5OiBkaXZGaWxtZSA/ICdibG9jaycgOiAnbm9uZScgfX0+XHJcbiAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPSd0ZXh0LWNlbnRlciBweS0yJz5QZXNxdWlzZSBwb3IgdW0gRmlsbWU8L2gzPlxyXG4gICAgICAgICAgICAgICAgPGZvcm0gYWN0aW9uPScjJyBjbGFzc05hbWU9e3N0eWxlcy5mb3JtfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSdmb3JtLWZsb2F0aW5nJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT0ndGV4dCcgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD0nbW92aWVJZCcgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbCBzaGFkb3ctbm9uZVwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J05vbWUgZG8gRmlsbWUnIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXttb3ZpZUlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9pbnB1dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cIm1vdmllSWRcIj5EaWdpdGUgbyBGaWxtZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nZm9ybS1mbG9hdGluZyc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImFub0lkXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbCBzaGFkb3ctbm9uZVwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkFubyBkZSBMYW7Dp2FtZW50b1wiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWlubGVuZ3RoPVwiMVwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4bGVuZ3RoPVwiNlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17YW5vSWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlWWVhcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2lucHV0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiYW5vSWRcIj5EaWdpdGUgbyBBbm88L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtzZWFyY2hNb3ZpZSgnYnlNb3ZpZScpfSBjbGFzc05hbWU9e3N0eWxlcy5idXR0b25TZWFyY2h9PkJ1c2NhcjwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wb3JDaGF2ZX0gc3R5bGU9e3sgZGlzcGxheTogZGl2Q2hhdmUgPyAnYmxvY2snIDogJ25vbmUnIH19PlxyXG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT0ndGV4dC1jZW50ZXIgcHktMic+UGVzcXVpc2UgcG9yIHVtYSBDaGF2ZTwvaDM+XHJcbiAgICAgICAgICAgICAgICA8Zm9ybSBhY3Rpb249JyMnIGNsYXNzTmFtZT17c3R5bGVzLmZvcm19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J2Zvcm0tZmxvYXRpbmcnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9J3RleHQnIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD0nY2hhdmVJZCcgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sIHNoYWRvdy1ub25lXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdFeDogQmFnZGFkJyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2NoYXZlSWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2VDaGF2ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJjaGF2ZUlkXCI+RGlnaXRlIHVtYSBDaGF2ZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3NlYXJjaE1vdmllKCdieUNoYXZlJyl9IGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvblNlYXJjaH0+QnVzY2FyPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAge21vdmllc0RhdGE/LlNlYXJjaC5tYXAoKG0pID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PnttLlRpdGxlfSAtLS0ge20uWWVhcn08L2Rpdj5cclxuICAgICAgICAgICAgICAgICkpfSAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVJlZiIsInVzZVN0YXRlIiwic3R5bGVzIiwiTW92aWVzIiwiZGF0YSIsIm1vdmllc0RhdGEiLCJkaXZGaWxtZSIsInNldElzVmlzaWJsZTEiLCJ0b2dnRGl2RmlsbWUiLCJkaXZDaGF2ZSIsInNldElzVmlzaWJsZTIiLCJ0b2dnbGVEaXZDaGF2ZSIsIm1vdmllSWQiLCJzZXRNb3ZpZSIsImhhbmRsZUNoYW5nZSIsImUiLCJpbnB1dFRleHQiLCJ0YXJnZXQiLCJ2YWx1ZSIsInRlc3QiLCJhbm9JZCIsInNldEFubyIsImhhbmRsZUNoYW5nZVllYXIiLCJjaGF2ZUlkIiwic2V0Q2hhdmUiLCJoYW5kbGVDaGFuZ2VDaGF2ZSIsInNldE1vdmllcyIsImxvYWRNb3ZpZXMiLCJuYW1lTW92aWUiLCJ5ZWFyTW92aWUiLCJ0eXBlU2VhcmNoIiwiY29uc29sZSIsImxvZyIsInJlcyIsImZldGNoIiwicmVzSnNvbiIsImpzb24iLCJzZWFyY2hNb3ZpZSIsInRpdGxlRm9ybWF0IiwicmVwbGFjZSIsImRpdiIsImgzIiwiY2xhc3NOYW1lIiwiZmlsdHJvIiwiYnV0dG9uIiwib25DbGljayIsInBvckZpbG1lIiwic3R5bGUiLCJkaXNwbGF5IiwiZm9ybSIsImFjdGlvbiIsImNsYXNzIiwiaW5wdXQiLCJ0eXBlIiwiaWQiLCJwbGFjZWhvbGRlciIsInJlcXVpcmVkIiwib25DaGFuZ2UiLCJsYWJlbCIsImZvciIsIm1pbmxlbmd0aCIsIm1heGxlbmd0aCIsImJ1dHRvblNlYXJjaCIsInBvckNoYXZlIiwiU2VhcmNoIiwibWFwIiwibSIsIlRpdGxlIiwiWWVhciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/movies.js\n"));

/***/ })

});