"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/movieTest",{

/***/ "./pages/movieTest.js":
/*!****************************!*\
  !*** ./pages/movieTest.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Movies2; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swr */ \"./node_modules/swr/core/dist/index.mjs\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_showMovie_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/showMovie.module.css */ \"./styles/showMovie.module.css\");\n/* harmony import */ var _styles_showMovie_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_showMovie_module_css__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$(), _s2 = $RefreshSig$();\n\n\n\n\nfunction Movies2() {\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const { nameMovie, yearMovie, typeSearch } = router.query;\n    if (typeSearch == \"byMovie\") {\n        var _data;\n        const { data, error } = (0,swr__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"https://www.omdbapi.com/?apikey=cc202b3f&t=\".concat(nameMovie, \"&y=\").concat(yearMovie), fetcher);\n        const array = [];\n        array.push(data);\n        console.log(\"aqui: \".concat((_data = data) === null || _data === void 0 ? void 0 : _data.Search));\n        if (error) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n            className: \"text-center py-2\",\n            children: \"Nenhum Resultados Encontrado\"\n        }, void 0, false, {\n            fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next4\\\\pages\\\\movieTest.js\",\n            lineNumber: 22,\n            columnNumber: 27\n        }, this);\n        if (!data) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Load, {}, void 0, false, {\n            fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next4\\\\pages\\\\movieTest.js\",\n            lineNumber: 23,\n            columnNumber: 27\n        }, this);\n        if (data.length != 0) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-center py-2\",\n                        children: \"Resultados\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next4\\\\pages\\\\movieTest.js\",\n                        lineNumber: 27,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CardMovie, {\n                        datas: data,\n                        typeBusca: typeSearch\n                    }, void 0, false, {\n                        fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next4\\\\pages\\\\movieTest.js\",\n                        lineNumber: 28,\n                        columnNumber: 21\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next4\\\\pages\\\\movieTest.js\",\n                lineNumber: 26,\n                columnNumber: 17\n            }, this);\n        }\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n            className: \"text-center py-2\",\n            children: \"Nenhum Resultados Encontrado\"\n        }, void 0, false, {\n            fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next4\\\\pages\\\\movieTest.js\",\n            lineNumber: 32,\n            columnNumber: 16\n        }, this);\n    } else {\n        var _data1, _data2;\n        const { data, error } = (0,swr__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"https://www.omdbapi.com/?apikey=cc202b3f&s=\".concat(nameMovie), fetcher);\n        console.log(\"aqui: \".concat((_data1 = data) === null || _data1 === void 0 ? void 0 : _data1.Search));\n        if (error) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n            className: \"text-center py-2\",\n            children: \"Nenhum Resultados Encontrado\"\n        }, void 0, false, {\n            fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next4\\\\pages\\\\movieTest.js\",\n            lineNumber: 42,\n            columnNumber: 27\n        }, this);\n        if (!data) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Load, {}, void 0, false, {\n            fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next4\\\\pages\\\\movieTest.js\",\n            lineNumber: 43,\n            columnNumber: 27\n        }, this);\n        if (((_data2 = data) === null || _data2 === void 0 ? void 0 : _data2.Search) != undefined) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-center py-2\",\n                        children: \"Resultados\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next4\\\\pages\\\\movieTest.js\",\n                        lineNumber: 47,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CardMovie, {\n                        datas: data,\n                        typeBusca: typeSearch\n                    }, void 0, false, {\n                        fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next4\\\\pages\\\\movieTest.js\",\n                        lineNumber: 48,\n                        columnNumber: 21\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next4\\\\pages\\\\movieTest.js\",\n                lineNumber: 46,\n                columnNumber: 17\n            }, this);\n        }\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n            className: \"text-center py-2\",\n            children: \"Nenhum Resultados Encontrado\"\n        }, void 0, false, {\n            fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next4\\\\pages\\\\movieTest.js\",\n            lineNumber: 52,\n            columnNumber: 16\n        }, this);\n    }\n}\n_s(Movies2, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = Movies2;\nfunction CardMovie(props) {\n    var _datas, _datas1;\n    _s1();\n    const { datas, typeBusca } = props;\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    function navegationMovie(props) {\n        const { movieId } = props;\n        router.push({\n            pathname: \"/movieDetails\",\n            query: {\n                id: movieId\n            }\n        });\n    }\n    return typeBusca == \"byMovie\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_showMovie_module_css__WEBPACK_IMPORTED_MODULE_4___default().containerCard),\n        children: (_datas = datas) === null || _datas === void 0 ? void 0 : _datas.map((m)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                onClick: navegationMovie({\n                    movieId: m.imdbID\n                }),\n                className: (_styles_showMovie_module_css__WEBPACK_IMPORTED_MODULE_4___default().card),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_showMovie_module_css__WEBPACK_IMPORTED_MODULE_4___default().poster),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: m.Poster\n                        }, void 0, false, {\n                            fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next4\\\\pages\\\\movieTest.js\",\n                            lineNumber: 76,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next4\\\\pages\\\\movieTest.js\",\n                        lineNumber: 75,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(DetailsMovie, {\n                        name: m.Title,\n                        year: m.Year\n                    }, void 0, false, {\n                        fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next4\\\\pages\\\\movieTest.js\",\n                        lineNumber: 78,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next4\\\\pages\\\\movieTest.js\",\n                lineNumber: 74,\n                columnNumber: 13\n            }, this))\n    }, void 0, false, {\n        fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next4\\\\pages\\\\movieTest.js\",\n        lineNumber: 73,\n        columnNumber: 9\n    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_showMovie_module_css__WEBPACK_IMPORTED_MODULE_4___default().containerCard),\n        children: (_datas1 = datas) === null || _datas1 === void 0 ? void 0 : _datas1.Search.map((m)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                onClick: navegationMovie,\n                className: (_styles_showMovie_module_css__WEBPACK_IMPORTED_MODULE_4___default().card),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_showMovie_module_css__WEBPACK_IMPORTED_MODULE_4___default().poster),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: m.Poster\n                        }, void 0, false, {\n                            fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next4\\\\pages\\\\movieTest.js\",\n                            lineNumber: 85,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next4\\\\pages\\\\movieTest.js\",\n                        lineNumber: 84,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(DetailsMovie, {\n                        name: m.Title,\n                        year: m.Year\n                    }, void 0, false, {\n                        fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next4\\\\pages\\\\movieTest.js\",\n                        lineNumber: 87,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next4\\\\pages\\\\movieTest.js\",\n                lineNumber: 83,\n                columnNumber: 13\n            }, this))\n    }, void 0, false, {\n        fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next4\\\\pages\\\\movieTest.js\",\n        lineNumber: 82,\n        columnNumber: 9\n    }, this);\n}\n_s1(CardMovie, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c1 = CardMovie;\nfunction Load() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_showMovie_module_css__WEBPACK_IMPORTED_MODULE_4___default().fade),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            class: \"spinner-border text-info\",\n            role: \"status\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                class: \"visually-hidden\",\n                children: \"Loading...\"\n            }, void 0, false, {\n                fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next4\\\\pages\\\\movieTest.js\",\n                lineNumber: 97,\n                columnNumber: 17\n            }, this)\n        }, void 0, false, {\n            fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next4\\\\pages\\\\movieTest.js\",\n            lineNumber: 96,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next4\\\\pages\\\\movieTest.js\",\n        lineNumber: 95,\n        columnNumber: 9\n    }, this);\n}\n_c2 = Load;\nfunction DetailsMovie(props) {\n    const { name, year } = props;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_showMovie_module_css__WEBPACK_IMPORTED_MODULE_4___default().details),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                className: (_styles_showMovie_module_css__WEBPACK_IMPORTED_MODULE_4___default().h3),\n                children: name\n            }, void 0, false, {\n                fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next4\\\\pages\\\\movieTest.js\",\n                lineNumber: 109,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: (_styles_showMovie_module_css__WEBPACK_IMPORTED_MODULE_4___default().p),\n                children: year\n            }, void 0, false, {\n                fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next4\\\\pages\\\\movieTest.js\",\n                lineNumber: 110,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next4\\\\pages\\\\movieTest.js\",\n        lineNumber: 108,\n        columnNumber: 9\n    }, this);\n}\n_c3 = DetailsMovie;\nasync function fetcher(url) {\n    const res = await fetch(url);\n    const json = await res.json();\n    return json;\n}\nfunction MovieLink(param) {\n    let { movie } = param;\n    _s2();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const handleClick = ()=>{\n        router.push({\n            pathname: \"/details\",\n            query: {\n                id: movie.imdbID\n            }\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            onClick: handleClick,\n            style: {\n                cursor: \"pointer\"\n            },\n            children: [\n                movie.Title,\n                \" --- \",\n                movie.Year\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next4\\\\pages\\\\movieTest.js\",\n            lineNumber: 134,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next4\\\\pages\\\\movieTest.js\",\n        lineNumber: 133,\n        columnNumber: 9\n    }, this);\n}\n_s2(MovieLink, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c4 = MovieLink;\nvar _c, _c1, _c2, _c3, _c4;\n$RefreshReg$(_c, \"Movies2\");\n$RefreshReg$(_c1, \"CardMovie\");\n$RefreshReg$(_c2, \"Load\");\n$RefreshReg$(_c3, \"DetailsMovie\");\n$RefreshReg$(_c4, \"MovieLink\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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U0FBU0gsc0RBQVNBO0lBRXhCLE1BQU0wRCxjQUFjO1FBQ2hCdkQsT0FBT1MsSUFBSSxDQUFDO1lBQ1JnQixVQUFVO1lBQ1ZyQixPQUFPO2dCQUFFc0IsSUFBSTRCLE1BQU12QixNQUFNO1lBQUM7UUFDOUI7SUFDSjtJQUVBLHFCQUNJLDhEQUFDZDtrQkFDRyw0RUFBQ0E7WUFBSWEsU0FBU3lCO1lBQWFDLE9BQU87Z0JBQUVDLFFBQVE7WUFBVTs7Z0JBQ2pESCxNQUFNZixLQUFLO2dCQUFDO2dCQUFNZSxNQUFNYixJQUFJOzs7Ozs7Ozs7Ozs7QUFJN0M7SUFqQlNZOztRQUNVeEQsa0RBQVNBOzs7TUFEbkJ3RCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9tb3ZpZVRlc3QuanM/OTk1MSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB1c2VTV1IgZnJvbSAnc3dyJztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9zaG93TW92aWUubW9kdWxlLmNzcydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1vdmllczIoKSB7XHJcblxyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgICBjb25zdCB7IG5hbWVNb3ZpZSwgeWVhck1vdmllLCB0eXBlU2VhcmNoIH0gPSByb3V0ZXIucXVlcnk7XHJcblxyXG4gICAgaWYodHlwZVNlYXJjaCA9PSAnYnlNb3ZpZScpe1xyXG4gICAgICAgIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IHVzZVNXUihcclxuICAgICAgICAgICAgYGh0dHBzOi8vd3d3Lm9tZGJhcGkuY29tLz9hcGlrZXk9Y2MyMDJiM2YmdD0ke25hbWVNb3ZpZX0meT0ke3llYXJNb3ZpZX1gLFxyXG4gICAgICAgICAgICBmZXRjaGVyXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgY29uc3QgYXJyYXkgPSBbXVxyXG4gICAgICAgIGFycmF5LnB1c2goZGF0YSlcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coYGFxdWk6ICR7ZGF0YT8uU2VhcmNofWApXHJcbiAgICBcclxuICAgICAgICBpZiAoZXJyb3IpIHJldHVybiA8aDEgY2xhc3NOYW1lPSd0ZXh0LWNlbnRlciBweS0yJz5OZW5odW0gUmVzdWx0YWRvcyBFbmNvbnRyYWRvPC9oMT5cclxuICAgICAgICBpZiAoIWRhdGEpIHJldHVybiA8TG9hZC8+XHJcbiAgICAgICAgaWYoZGF0YS5sZW5ndGggIT0gMCl7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9J3RleHQtY2VudGVyIHB5LTInPlJlc3VsdGFkb3M8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDYXJkTW92aWUgZGF0YXM9e2RhdGF9IHR5cGVCdXNjYT17dHlwZVNlYXJjaH0vPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiA8aDEgY2xhc3NOYW1lPSd0ZXh0LWNlbnRlciBweS0yJz5OZW5odW0gUmVzdWx0YWRvcyBFbmNvbnRyYWRvPC9oMT5cclxuICAgIH1cclxuICAgIGVsc2V7XHJcbiAgICAgICAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gdXNlU1dSKFxyXG4gICAgICAgICAgICBgaHR0cHM6Ly93d3cub21kYmFwaS5jb20vP2FwaWtleT1jYzIwMmIzZiZzPSR7bmFtZU1vdmllfWAsXHJcbiAgICAgICAgICAgIGZldGNoZXJcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhgYXF1aTogJHtkYXRhPy5TZWFyY2h9YClcclxuICAgIFxyXG4gICAgICAgIGlmIChlcnJvcikgcmV0dXJuIDxoMSBjbGFzc05hbWU9J3RleHQtY2VudGVyIHB5LTInPk5lbmh1bSBSZXN1bHRhZG9zIEVuY29udHJhZG88L2gxPlxyXG4gICAgICAgIGlmICghZGF0YSkgcmV0dXJuIDxMb2FkLz5cclxuICAgICAgICBpZihkYXRhPy5TZWFyY2ggIT0gdW5kZWZpbmVkKXtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT0ndGV4dC1jZW50ZXIgcHktMic+UmVzdWx0YWRvczwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgPENhcmRNb3ZpZSBkYXRhcz17ZGF0YX0gdHlwZUJ1c2NhPXt0eXBlU2VhcmNofS8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIDxoMSBjbGFzc05hbWU9J3RleHQtY2VudGVyIHB5LTInPk5lbmh1bSBSZXN1bHRhZG9zIEVuY29udHJhZG88L2gxPlxyXG4gICAgICAgIFxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBDYXJkTW92aWUocHJvcHMpe1xyXG5cclxuICAgIGNvbnN0IHtkYXRhcywgdHlwZUJ1c2NhfSA9IHByb3BzXHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG5cclxuICAgIGZ1bmN0aW9uIG5hdmVnYXRpb25Nb3ZpZShwcm9wcykge1xyXG4gICAgICAgIGNvbnN0IHttb3ZpZUlkfSA9IHByb3BzXHJcblxyXG4gICAgICAgIHJvdXRlci5wdXNoKHtcclxuICAgICAgICAgICAgcGF0aG5hbWU6ICcvbW92aWVEZXRhaWxzJyxcclxuICAgICAgICAgICAgcXVlcnk6IHtpZDogbW92aWVJZH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgdHlwZUJ1c2NhID09ICdieU1vdmllJyA/XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJDYXJkfT57ZGF0YXM/Lm1hcCgobSkgPT4gKFxyXG4gICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9e25hdmVnYXRpb25Nb3ZpZSh7bW92aWVJZDogbS5pbWRiSUR9KX0gY2xhc3NOYW1lPXtzdHlsZXMuY2FyZH0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBvc3Rlcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e20uUG9zdGVyfS8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxEZXRhaWxzTW92aWUgbmFtZT17bS5UaXRsZX0geWVhcj17bS5ZZWFyfS8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICkpfTwvZGl2PlxyXG4gICAgICAgIDpcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lckNhcmR9PntkYXRhcz8uU2VhcmNoLm1hcCgobSkgPT4gKFxyXG4gICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9e25hdmVnYXRpb25Nb3ZpZX0gY2xhc3NOYW1lPXtzdHlsZXMuY2FyZH0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBvc3Rlcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e20uUG9zdGVyfS8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxEZXRhaWxzTW92aWUgbmFtZT17bS5UaXRsZX0geWVhcj17bS5ZZWFyfS8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICkpfTwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5mdW5jdGlvbiBMb2FkKCl7XHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mYWRlfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNwaW5uZXItYm9yZGVyIHRleHQtaW5mb1wiIHJvbGU9XCJzdGF0dXNcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidmlzdWFsbHktaGlkZGVuXCI+TG9hZGluZy4uLjwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgICBcclxufVxyXG5cclxuZnVuY3Rpb24gRGV0YWlsc01vdmllKHByb3BzKXtcclxuICAgIGNvbnN0IHtuYW1lLCB5ZWFyfSA9IHByb3BzO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kZXRhaWxzfT5cclxuICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT17c3R5bGVzLmgzfT57bmFtZX08L2gzPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5wfT57eWVhcn08L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICApXHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGZldGNoZXIodXJsKSB7XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCh1cmwpO1xyXG4gICAgY29uc3QganNvbiA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgICByZXR1cm4ganNvbjtcclxufVxyXG5cclxuZnVuY3Rpb24gTW92aWVMaW5rKHsgbW92aWUgfSkge1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgcm91dGVyLnB1c2goe1xyXG4gICAgICAgICAgICBwYXRobmFtZTogJy9kZXRhaWxzJyxcclxuICAgICAgICAgICAgcXVlcnk6IHsgaWQ6IG1vdmllLmltZGJJRCB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXtoYW5kbGVDbGlja30gc3R5bGU9e3sgY3Vyc29yOiAncG9pbnRlcicgfX0+XHJcbiAgICAgICAgICAgICAgICB7bW92aWUuVGl0bGV9IC0tLSB7bW92aWUuWWVhcn1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VTV1IiLCJ1c2VSb3V0ZXIiLCJzdHlsZXMiLCJNb3ZpZXMyIiwicm91dGVyIiwibmFtZU1vdmllIiwieWVhck1vdmllIiwidHlwZVNlYXJjaCIsInF1ZXJ5IiwiZGF0YSIsImVycm9yIiwiZmV0Y2hlciIsImFycmF5IiwicHVzaCIsImNvbnNvbGUiLCJsb2ciLCJTZWFyY2giLCJoMSIsImNsYXNzTmFtZSIsIkxvYWQiLCJsZW5ndGgiLCJkaXYiLCJDYXJkTW92aWUiLCJkYXRhcyIsInR5cGVCdXNjYSIsInVuZGVmaW5lZCIsInByb3BzIiwibmF2ZWdhdGlvbk1vdmllIiwibW92aWVJZCIsInBhdGhuYW1lIiwiaWQiLCJjb250YWluZXJDYXJkIiwibWFwIiwibSIsIm9uQ2xpY2siLCJpbWRiSUQiLCJjYXJkIiwicG9zdGVyIiwiaW1nIiwic3JjIiwiUG9zdGVyIiwiRGV0YWlsc01vdmllIiwibmFtZSIsIlRpdGxlIiwieWVhciIsIlllYXIiLCJmYWRlIiwiY2xhc3MiLCJyb2xlIiwic3BhbiIsImRldGFpbHMiLCJoMyIsInAiLCJ1cmwiLCJyZXMiLCJmZXRjaCIsImpzb24iLCJNb3ZpZUxpbmsiLCJtb3ZpZSIsImhhbmRsZUNsaWNrIiwic3R5bGUiLCJjdXJzb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/movieTest.js\n"));

/***/ })

});