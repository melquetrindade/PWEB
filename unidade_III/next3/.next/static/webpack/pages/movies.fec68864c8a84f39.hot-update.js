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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Movies; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_movie_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/movie.module.css */ \"./styles/movie.module.css\");\n/* harmony import */ var _styles_movie_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_movie_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\n/*\r\nexport async function getServerSideProps(context){\r\n\r\n    const res = await fetch(`http://www.omdbapi.com/?apikey=cc202b3f&s=bagdad`)\r\n    const data = await res.json()\r\n  \r\n    return {\r\n        props: {data}\r\n    }\r\n\r\n}\r\n*/ function Movies(param) {\n    let { data } = param;\n    var _moviesData;\n    _s();\n    const [divFilme, setIsVisible1] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const toggDivFilme = ()=>{\n        if (divChave) {\n            setIsVisible2(!divChave);\n        }\n        setIsVisible1(!divFilme);\n    };\n    const [divChave, setIsVisible2] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const toggleDivChave = ()=>{\n        if (divFilme) {\n            setIsVisible1(!divFilme);\n        }\n        setIsVisible2(!divChave);\n    };\n    const [movieId, setMovie] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const handleChange = (e)=>{\n        const inputText = e.target.value;\n        // Use uma expressão regular para validar se o texto contém apenas letras.\n        if (/^[a-zA-Z ]+$/.test(inputText) || inputText === \"\") {\n            setMovie(inputText);\n        }\n    };\n    const [anoId, setAno] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const handleChangeYear = (e)=>{\n        const inputText = e.target.value;\n        if (/^[0-9]+$/.test(inputText) || inputText === \"\") {\n            setAno(inputText);\n        }\n    };\n    const [chaveId, setChave] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const handleChangeChave = (e)=>{\n        const inputText = e.target.value;\n        if (/^[a-zA-Z ]+$/.test(inputText) || inputText === \"\") {\n            setChave(inputText);\n        }\n    };\n    const [moviesData, setMovies] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(data);\n    const loadMovies = async (param)=>{\n        let { nameMovie, yearMovie, typeSearch: typeSearch1 } = param;\n        console.log(\"entrou\");\n        if (typeSearch1 == \"byMovie\") {\n            const res = await fetch(\"https://www.omdbapi.com/?apikey=cc202b3f&t=\".concat(nameMovie, \"&y=\").concat(yearMovie));\n            const resJson = await res.json();\n            setMovies(resJson);\n        } else {\n            const res = await fetch(\"https://www.omdbapi.com/?apikey=cc202b3f&s=\".concat(nameMovie));\n            const resJson = await res.json();\n            setMovies(resJson);\n        }\n    };\n    const searchMovie = ()=>{\n        console.log(\"entrou\");\n        //console.log(`title antes: ${movieId}`)\n        if (typeSearch === \"byMovie\") {\n            console.log(\"entrou\");\n            const titleFormat = movieId.replace(/ /g, \"+\");\n            console.log(\"title depois: \".concat(titleFormat));\n        //loadMovies(titleFormat, anoId, typeSearch)\n        } else {\n        //const titleFormat = chaveId.replace(/ /g, '+')\n        //console.log(`title depois: ${titleFormat}`)\n        //loadMovies(titleFormat, 0, typeSearch)\n        }\n    //console.log(`title depois: ${titleFormat}`)\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        className: \"text-center py-2\",\n                        children: \"Filtros de Pesquisa\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next3\\\\pages\\\\movies.js\",\n                        lineNumber: 105,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_movie_module_css__WEBPACK_IMPORTED_MODULE_2___default().filtro),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: toggDivFilme,\n                                children: \"Por Filme Espec\\xedfico\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next3\\\\pages\\\\movies.js\",\n                                lineNumber: 107,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: toggleDivChave,\n                                children: \"Por Chave de T\\xedtulo\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next3\\\\pages\\\\movies.js\",\n                                lineNumber: 108,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next3\\\\pages\\\\movies.js\",\n                        lineNumber: 106,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next3\\\\pages\\\\movies.js\",\n                lineNumber: 104,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_movie_module_css__WEBPACK_IMPORTED_MODULE_2___default().porFilme),\n                style: {\n                    display: divFilme ? \"block\" : \"none\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        className: \"text-center py-2\",\n                        children: \"Pesquise por um Filme\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next3\\\\pages\\\\movies.js\",\n                        lineNumber: 112,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        action: \"#\",\n                        className: (_styles_movie_module_css__WEBPACK_IMPORTED_MODULE_2___default().form),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                class: \"form-floating\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"text\",\n                                        id: \"movieId\",\n                                        class: \"form-control shadow-none\",\n                                        placeholder: \"Nome do Filme\",\n                                        required: true,\n                                        value: movieId,\n                                        onChange: handleChange\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next3\\\\pages\\\\movies.js\",\n                                        lineNumber: 115,\n                                        columnNumber: 25\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        for: \"movieId\",\n                                        children: \"Digite o Filme\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next3\\\\pages\\\\movies.js\",\n                                        lineNumber: 125,\n                                        columnNumber: 25\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next3\\\\pages\\\\movies.js\",\n                                lineNumber: 114,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                class: \"form-floating\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"text\",\n                                        id: \"anoId\",\n                                        class: \"form-control shadow-none\",\n                                        required: true,\n                                        placeholder: \"Ano de Lan\\xe7amento\",\n                                        minlength: \"1\",\n                                        maxlength: \"6\",\n                                        value: anoId,\n                                        onChange: handleChangeYear\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next3\\\\pages\\\\movies.js\",\n                                        lineNumber: 128,\n                                        columnNumber: 25\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        for: \"anoId\",\n                                        children: \"Digite o Ano\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next3\\\\pages\\\\movies.js\",\n                                        lineNumber: 140,\n                                        columnNumber: 25\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next3\\\\pages\\\\movies.js\",\n                                lineNumber: 127,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next3\\\\pages\\\\movies.js\",\n                        lineNumber: 113,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: searchMovie(\"byMovie\"),\n                        className: (_styles_movie_module_css__WEBPACK_IMPORTED_MODULE_2___default().buttonSearch),\n                        children: \"Buscar\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next3\\\\pages\\\\movies.js\",\n                        lineNumber: 143,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next3\\\\pages\\\\movies.js\",\n                lineNumber: 111,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_movie_module_css__WEBPACK_IMPORTED_MODULE_2___default().porChave),\n                style: {\n                    display: divChave ? \"block\" : \"none\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        className: \"text-center py-2\",\n                        children: \"Pesquise por uma Chave\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next3\\\\pages\\\\movies.js\",\n                        lineNumber: 146,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        action: \"#\",\n                        className: (_styles_movie_module_css__WEBPACK_IMPORTED_MODULE_2___default().form),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            class: \"form-floating\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"text\",\n                                    id: \"chaveId\",\n                                    class: \"form-control shadow-none\",\n                                    placeholder: \"Ex: Bagdad\",\n                                    required: true,\n                                    value: chaveId,\n                                    onChange: handleChangeChave\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next3\\\\pages\\\\movies.js\",\n                                    lineNumber: 149,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    for: \"chaveId\",\n                                    children: \"Digite uma Chave\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next3\\\\pages\\\\movies.js\",\n                                    lineNumber: 158,\n                                    columnNumber: 25\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next3\\\\pages\\\\movies.js\",\n                            lineNumber: 148,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next3\\\\pages\\\\movies.js\",\n                        lineNumber: 147,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: searchMovie(\"byChave\"),\n                        className: (_styles_movie_module_css__WEBPACK_IMPORTED_MODULE_2___default().buttonSearch),\n                        children: \"Buscar\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next3\\\\pages\\\\movies.js\",\n                        lineNumber: 161,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next3\\\\pages\\\\movies.js\",\n                lineNumber: 145,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: (_moviesData = moviesData) === null || _moviesData === void 0 ? void 0 : _moviesData.Search.map((m)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            m.Title,\n                            \" --- \",\n                            m.Year\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next3\\\\pages\\\\movies.js\",\n                        lineNumber: 165,\n                        columnNumber: 21\n                    }, this))\n            }, void 0, false, {\n                fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next3\\\\pages\\\\movies.js\",\n                lineNumber: 163,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Movies, \"sA5EgqlUVus+ezDW/+XRmxo2P9s=\");\n_c = Movies;\nvar _c;\n$RefreshReg$(_c, \"Movies\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q2lDO29DQUFNQyxLQUFJOzhDQUFVOzs7Ozs7Ozs7Ozs7Ozs7OztrQ0FHN0IsOERBQUNmO3dCQUFPQyxTQUFTUixZQUFZO3dCQUFZSyxXQUFXeEMsOEVBQW1CO2tDQUFFOzs7Ozs7Ozs7Ozs7MEJBRTdFLDhEQUFDc0M7MkJBQ0luQyxjQUFBQSx3QkFBQUEsa0NBQUFBLFlBQVkyRCxNQUFNLENBQUNDLEdBQUcsQ0FBQyxDQUFDQyxrQkFDckIsOERBQUMxQjs7NEJBQUswQixFQUFFQyxLQUFLOzRCQUFDOzRCQUFNRCxFQUFFRSxJQUFJOzs7Ozs7Ozs7Ozs7OztBQUs5QztHQXpKd0JqRTtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9tb3ZpZXMuanM/YWY1NCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VSZWYsIHVzZVN0YXRlfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvbW92aWUubW9kdWxlLmNzcydcclxuXHJcbi8qXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCl7XHJcblxyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly93d3cub21kYmFwaS5jb20vP2FwaWtleT1jYzIwMmIzZiZzPWJhZ2RhZGApXHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKVxyXG4gIFxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBwcm9wczoge2RhdGF9XHJcbiAgICB9XHJcblxyXG59XHJcbiovXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNb3ZpZXMoe2RhdGF9KXtcclxuXHJcbiAgICBjb25zdCBbZGl2RmlsbWUsIHNldElzVmlzaWJsZTFdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAgIGNvbnN0IHRvZ2dEaXZGaWxtZSA9ICgpID0+IHtcclxuICAgICAgICBpZihkaXZDaGF2ZSl7XHJcbiAgICAgICAgICAgIHNldElzVmlzaWJsZTIoIWRpdkNoYXZlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0SXNWaXNpYmxlMSghZGl2RmlsbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IFtkaXZDaGF2ZSwgc2V0SXNWaXNpYmxlMl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gICAgY29uc3QgdG9nZ2xlRGl2Q2hhdmUgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYoZGl2RmlsbWUpe1xyXG4gICAgICAgICAgICBzZXRJc1Zpc2libGUxKCFkaXZGaWxtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldElzVmlzaWJsZTIoIWRpdkNoYXZlKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBbbW92aWVJZCwgc2V0TW92aWVdID0gdXNlU3RhdGUoJycpXHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGUpID0+IHtcclxuICAgICAgICBjb25zdCBpbnB1dFRleHQgPSBlLnRhcmdldC52YWx1ZVxyXG4gICAgXHJcbiAgICAgICAgLy8gVXNlIHVtYSBleHByZXNzw6NvIHJlZ3VsYXIgcGFyYSB2YWxpZGFyIHNlIG8gdGV4dG8gY29udMOpbSBhcGVuYXMgbGV0cmFzLlxyXG4gICAgICAgIGlmICgvXlthLXpBLVogXSskLy50ZXN0KGlucHV0VGV4dCkgfHwgaW5wdXRUZXh0ID09PSAnJykge1xyXG4gICAgICAgICAgc2V0TW92aWUoaW5wdXRUZXh0KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBbYW5vSWQsIHNldEFub10gPSB1c2VTdGF0ZSgnJylcclxuXHJcbiAgICBjb25zdCBoYW5kbGVDaGFuZ2VZZWFyID0gKGUpID0+IHtcclxuICAgICAgICBjb25zdCBpbnB1dFRleHQgPSBlLnRhcmdldC52YWx1ZVxyXG5cclxuICAgICAgICBpZiAoL15bMC05XSskLy50ZXN0KGlucHV0VGV4dCkgfHwgaW5wdXRUZXh0ID09PSAnJykge1xyXG4gICAgICAgICAgICBzZXRBbm8oaW5wdXRUZXh0KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBbY2hhdmVJZCwgc2V0Q2hhdmVdID0gdXNlU3RhdGUoJycpXHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlQ2hhdmUgPSAoZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGlucHV0VGV4dCA9IGUudGFyZ2V0LnZhbHVlXHJcblxyXG4gICAgICAgIGlmICgvXlthLXpBLVogXSskLy50ZXN0KGlucHV0VGV4dCkgfHwgaW5wdXRUZXh0ID09PSAnJykge1xyXG4gICAgICAgICAgICBzZXRDaGF2ZShpbnB1dFRleHQpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IFttb3ZpZXNEYXRhLCBzZXRNb3ZpZXNdID0gdXNlU3RhdGUoZGF0YSlcclxuXHJcbiAgICBjb25zdCBsb2FkTW92aWVzID0gYXN5bmMgKHtuYW1lTW92aWUsIHllYXJNb3ZpZSwgdHlwZVNlYXJjaH0pID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZygnZW50cm91JylcclxuICAgICAgICBcclxuICAgICAgICBpZih0eXBlU2VhcmNoID09ICdieU1vdmllJyl7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwczovL3d3dy5vbWRiYXBpLmNvbS8/YXBpa2V5PWNjMjAyYjNmJnQ9JHtuYW1lTW92aWV9Jnk9JHt5ZWFyTW92aWV9YClcclxuICAgICAgICAgICAgY29uc3QgcmVzSnNvbiA9IGF3YWl0IHJlcy5qc29uKClcclxuICAgICAgICAgICAgc2V0TW92aWVzKHJlc0pzb24pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwczovL3d3dy5vbWRiYXBpLmNvbS8/YXBpa2V5PWNjMjAyYjNmJnM9JHtuYW1lTW92aWV9YClcclxuICAgICAgICAgICAgY29uc3QgcmVzSnNvbiA9IGF3YWl0IHJlcy5qc29uKClcclxuICAgICAgICAgICAgc2V0TW92aWVzKHJlc0pzb24pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHNlYXJjaE1vdmllID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdlbnRyb3UnKVxyXG4gICAgICAgIC8vY29uc29sZS5sb2coYHRpdGxlIGFudGVzOiAke21vdmllSWR9YClcclxuICAgICAgICBpZih0eXBlU2VhcmNoID09PSAnYnlNb3ZpZScpe1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnZW50cm91JylcclxuICAgICAgICAgICAgY29uc3QgdGl0bGVGb3JtYXQgPSBtb3ZpZUlkLnJlcGxhY2UoLyAvZywgJysnKVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgdGl0bGUgZGVwb2lzOiAke3RpdGxlRm9ybWF0fWApXHJcbiAgICAgICAgICAgIC8vbG9hZE1vdmllcyh0aXRsZUZvcm1hdCwgYW5vSWQsIHR5cGVTZWFyY2gpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIC8vY29uc3QgdGl0bGVGb3JtYXQgPSBjaGF2ZUlkLnJlcGxhY2UoLyAvZywgJysnKVxyXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKGB0aXRsZSBkZXBvaXM6ICR7dGl0bGVGb3JtYXR9YClcclxuICAgICAgICAgICAgLy9sb2FkTW92aWVzKHRpdGxlRm9ybWF0LCAwLCB0eXBlU2VhcmNoKVxyXG4gICAgICAgIH1cclxuICAgICAgICAvL2NvbnNvbGUubG9nKGB0aXRsZSBkZXBvaXM6ICR7dGl0bGVGb3JtYXR9YClcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPSd0ZXh0LWNlbnRlciBweS0yJz5GaWx0cm9zIGRlIFBlc3F1aXNhPC9oMz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZmlsdHJvfT5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RvZ2dEaXZGaWxtZX0+UG9yIEZpbG1lIEVzcGVjw61maWNvPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0b2dnbGVEaXZDaGF2ZX0+UG9yIENoYXZlIGRlIFTDrXR1bG88L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wb3JGaWxtZX0gc3R5bGU9e3sgZGlzcGxheTogZGl2RmlsbWUgPyAnYmxvY2snIDogJ25vbmUnIH19PlxyXG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT0ndGV4dC1jZW50ZXIgcHktMic+UGVzcXVpc2UgcG9yIHVtIEZpbG1lPC9oMz5cclxuICAgICAgICAgICAgICAgIDxmb3JtIGFjdGlvbj0nIycgY2xhc3NOYW1lPXtzdHlsZXMuZm9ybX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nZm9ybS1mbG9hdGluZyc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9J3RleHQnIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9J21vdmllSWQnIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2wgc2hhZG93LW5vbmVcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdOb21lIGRvIEZpbG1lJyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17bW92aWVJZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJtb3ZpZUlkXCI+RGlnaXRlIG8gRmlsbWU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J2Zvcm0tZmxvYXRpbmcnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJhbm9JZFwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2wgc2hhZG93LW5vbmVcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJBbm8gZGUgTGFuw6dhbWVudG9cIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbmxlbmd0aD1cIjFcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heGxlbmd0aD1cIjZcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Fub0lkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZVllYXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9pbnB1dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImFub0lkXCI+RGlnaXRlIG8gQW5vPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17c2VhcmNoTW92aWUoJ2J5TW92aWUnKX0gY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9uU2VhcmNofT5CdXNjYXI8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucG9yQ2hhdmV9IHN0eWxlPXt7IGRpc3BsYXk6IGRpdkNoYXZlID8gJ2Jsb2NrJyA6ICdub25lJyB9fT5cclxuICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9J3RleHQtY2VudGVyIHB5LTInPlBlc3F1aXNlIHBvciB1bWEgQ2hhdmU8L2gzPlxyXG4gICAgICAgICAgICAgICAgPGZvcm0gYWN0aW9uPScjJyBjbGFzc05hbWU9e3N0eWxlcy5mb3JtfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSdmb3JtLWZsb2F0aW5nJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPSd0ZXh0JyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9J2NoYXZlSWQnIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbCBzaGFkb3ctbm9uZVwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nRXg6IEJhZ2RhZCcgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtjaGF2ZUlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlQ2hhdmV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiY2hhdmVJZFwiPkRpZ2l0ZSB1bWEgQ2hhdmU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtzZWFyY2hNb3ZpZSgnYnlDaGF2ZScpfSBjbGFzc05hbWU9e3N0eWxlcy5idXR0b25TZWFyY2h9PkJ1c2NhcjwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIHttb3ZpZXNEYXRhPy5TZWFyY2gubWFwKChtKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj57bS5UaXRsZX0gLS0tIHttLlllYXJ9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICApKX0gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn0iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsInN0eWxlcyIsIk1vdmllcyIsImRhdGEiLCJtb3ZpZXNEYXRhIiwiZGl2RmlsbWUiLCJzZXRJc1Zpc2libGUxIiwidG9nZ0RpdkZpbG1lIiwiZGl2Q2hhdmUiLCJzZXRJc1Zpc2libGUyIiwidG9nZ2xlRGl2Q2hhdmUiLCJtb3ZpZUlkIiwic2V0TW92aWUiLCJoYW5kbGVDaGFuZ2UiLCJlIiwiaW5wdXRUZXh0IiwidGFyZ2V0IiwidmFsdWUiLCJ0ZXN0IiwiYW5vSWQiLCJzZXRBbm8iLCJoYW5kbGVDaGFuZ2VZZWFyIiwiY2hhdmVJZCIsInNldENoYXZlIiwiaGFuZGxlQ2hhbmdlQ2hhdmUiLCJzZXRNb3ZpZXMiLCJsb2FkTW92aWVzIiwibmFtZU1vdmllIiwieWVhck1vdmllIiwidHlwZVNlYXJjaCIsImNvbnNvbGUiLCJsb2ciLCJyZXMiLCJmZXRjaCIsInJlc0pzb24iLCJqc29uIiwic2VhcmNoTW92aWUiLCJ0aXRsZUZvcm1hdCIsInJlcGxhY2UiLCJkaXYiLCJoMyIsImNsYXNzTmFtZSIsImZpbHRybyIsImJ1dHRvbiIsIm9uQ2xpY2siLCJwb3JGaWxtZSIsInN0eWxlIiwiZGlzcGxheSIsImZvcm0iLCJhY3Rpb24iLCJjbGFzcyIsImlucHV0IiwidHlwZSIsImlkIiwicGxhY2Vob2xkZXIiLCJyZXF1aXJlZCIsIm9uQ2hhbmdlIiwibGFiZWwiLCJmb3IiLCJtaW5sZW5ndGgiLCJtYXhsZW5ndGgiLCJidXR0b25TZWFyY2giLCJwb3JDaGF2ZSIsIlNlYXJjaCIsIm1hcCIsIm0iLCJUaXRsZSIsIlllYXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/movies.js\n"));

/***/ })

});