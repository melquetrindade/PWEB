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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Movies2; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swr */ \"./node_modules/swr/core/dist/index.mjs\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_showMovie_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/showMovie.module.css */ \"./styles/showMovie.module.css\");\n/* harmony import */ var _styles_showMovie_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_showMovie_module_css__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$(), _s2 = $RefreshSig$();\n\n\n\n\nfunction Movies2() {\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const { nameMovie, yearMovie, typeSearch } = router.query;\n    if (typeSearch == \"byMovie\") {\n        const { data, error } = (0,swr__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"https://www.omdbapi.com/?apikey=cc202b3f&t=\".concat(nameMovie, \"&y=\").concat(yearMovie), fetcher);\n        const array = [];\n        array.push(data);\n        if (error) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"falha na requisi\\xe7\\xe3o...\"\n        }, void 0, false, {\n            fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next4\\\\pages\\\\movieTest.js\",\n            lineNumber: 20,\n            columnNumber: 27\n        }, this);\n        if (!data) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"carregando...\"\n        }, void 0, false, {\n            fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next4\\\\pages\\\\movieTest.js\",\n            lineNumber: 21,\n            columnNumber: 27\n        }, this);\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"text-center py-2\",\n                    children: \"Resultados\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next4\\\\pages\\\\movieTest.js\",\n                    lineNumber: 25,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CardMovie, {\n                    datas: data,\n                    typeBusca: typeSearch\n                }, void 0, false, {\n                    fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next4\\\\pages\\\\movieTest.js\",\n                    lineNumber: 26,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next4\\\\pages\\\\movieTest.js\",\n            lineNumber: 24,\n            columnNumber: 13\n        }, this);\n    } else {\n        const { data, error } = (0,swr__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"https://www.omdbapi.com/?apikey=cc202b3f&s=\".concat(nameMovie), fetcher);\n        if (error) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"falha na requisi\\xe7\\xe3o...\"\n        }, void 0, false, {\n            fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next4\\\\pages\\\\movieTest.js\",\n            lineNumber: 37,\n            columnNumber: 27\n        }, this);\n        if (!data) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"carregando...\"\n        }, void 0, false, {\n            fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next4\\\\pages\\\\movieTest.js\",\n            lineNumber: 38,\n            columnNumber: 27\n        }, this);\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"text-center py-2\",\n                    children: \"Resultados\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next4\\\\pages\\\\movieTest.js\",\n                    lineNumber: 42,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CardMovie, {\n                    datas: data,\n                    typeBusca: typeSearch\n                }, void 0, false, {\n                    fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next4\\\\pages\\\\movieTest.js\",\n                    lineNumber: 43,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next4\\\\pages\\\\movieTest.js\",\n            lineNumber: 41,\n            columnNumber: 13\n        }, this);\n    }\n}\n_s(Movies2, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = Movies2;\nfunction CardMovie(props) {\n    var _datas, _datas1;\n    _s1();\n    const { datas, typeBusca } = props;\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const navegationMovie = (props)=>{\n        const { movieId } = props;\n        router.push({\n            pathname: \"movieDetails\",\n            query: {\n                id: movieId\n            }\n        });\n    };\n    return typeBusca == \"byMovie\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_showMovie_module_css__WEBPACK_IMPORTED_MODULE_4___default().containerCard),\n        children: (_datas = datas) === null || _datas === void 0 ? void 0 : _datas.map((m)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                onClick: navegationMovie,\n                className: (_styles_showMovie_module_css__WEBPACK_IMPORTED_MODULE_4___default().card),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_showMovie_module_css__WEBPACK_IMPORTED_MODULE_4___default().poster),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: m.Poster\n                        }, void 0, false, {\n                            fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next4\\\\pages\\\\movieTest.js\",\n                            lineNumber: 68,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next4\\\\pages\\\\movieTest.js\",\n                        lineNumber: 67,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(DetailsMovie, {\n                        name: m.Title,\n                        year: m.Year\n                    }, void 0, false, {\n                        fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next4\\\\pages\\\\movieTest.js\",\n                        lineNumber: 70,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next4\\\\pages\\\\movieTest.js\",\n                lineNumber: 66,\n                columnNumber: 13\n            }, this))\n    }, void 0, false, {\n        fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next4\\\\pages\\\\movieTest.js\",\n        lineNumber: 65,\n        columnNumber: 9\n    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_showMovie_module_css__WEBPACK_IMPORTED_MODULE_4___default().containerCard),\n        children: (_datas1 = datas) === null || _datas1 === void 0 ? void 0 : _datas1.Search.map((m)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                onClick: navegationMovie({\n                    movieId: m.imdbID\n                }),\n                className: (_styles_showMovie_module_css__WEBPACK_IMPORTED_MODULE_4___default().card),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_showMovie_module_css__WEBPACK_IMPORTED_MODULE_4___default().poster),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: m.Poster\n                        }, void 0, false, {\n                            fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next4\\\\pages\\\\movieTest.js\",\n                            lineNumber: 77,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next4\\\\pages\\\\movieTest.js\",\n                        lineNumber: 76,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(DetailsMovie, {\n                        name: m.Title,\n                        year: m.Year\n                    }, void 0, false, {\n                        fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next4\\\\pages\\\\movieTest.js\",\n                        lineNumber: 79,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next4\\\\pages\\\\movieTest.js\",\n                lineNumber: 75,\n                columnNumber: 13\n            }, this))\n    }, void 0, false, {\n        fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next4\\\\pages\\\\movieTest.js\",\n        lineNumber: 74,\n        columnNumber: 9\n    }, this);\n}\n_s1(CardMovie, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c1 = CardMovie;\nfunction Load() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_showMovie_module_css__WEBPACK_IMPORTED_MODULE_4___default().fade),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            class: \"spinner-border text-info\",\n            role: \"status\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                class: \"visually-hidden\",\n                children: \"Loading...\"\n            }, void 0, false, {\n                fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next4\\\\pages\\\\movieTest.js\",\n                lineNumber: 89,\n                columnNumber: 17\n            }, this)\n        }, void 0, false, {\n            fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next4\\\\pages\\\\movieTest.js\",\n            lineNumber: 88,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next4\\\\pages\\\\movieTest.js\",\n        lineNumber: 87,\n        columnNumber: 9\n    }, this);\n}\n_c2 = Load;\nfunction DetailsMovie(props) {\n    const { name, year } = props;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_showMovie_module_css__WEBPACK_IMPORTED_MODULE_4___default().details),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                className: (_styles_showMovie_module_css__WEBPACK_IMPORTED_MODULE_4___default().h3),\n                children: name\n            }, void 0, false, {\n                fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next4\\\\pages\\\\movieTest.js\",\n                lineNumber: 101,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: (_styles_showMovie_module_css__WEBPACK_IMPORTED_MODULE_4___default().p),\n                children: year\n            }, void 0, false, {\n                fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next4\\\\pages\\\\movieTest.js\",\n                lineNumber: 102,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next4\\\\pages\\\\movieTest.js\",\n        lineNumber: 100,\n        columnNumber: 9\n    }, this);\n}\n_c3 = DetailsMovie;\nasync function fetcher(url) {\n    const res = await fetch(url);\n    const json = await res.json();\n    return json;\n}\nfunction MovieLink(param) {\n    let { movie } = param;\n    _s2();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const handleClick = ()=>{\n        router.push({\n            pathname: \"/details\",\n            query: {\n                id: movie.imdbID\n            }\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            onClick: handleClick,\n            style: {\n                cursor: \"pointer\"\n            },\n            children: [\n                movie.Title,\n                \" --- \",\n                movie.Year\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next4\\\\pages\\\\movieTest.js\",\n            lineNumber: 126,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next4\\\\pages\\\\movieTest.js\",\n        lineNumber: 125,\n        columnNumber: 9\n    }, this);\n}\n_s2(MovieLink, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c4 = MovieLink;\nvar _c, _c1, _c2, _c3, _c4;\n$RefreshReg$(_c, \"Movies2\");\n$RefreshReg$(_c1, \"CardMovie\");\n$RefreshReg$(_c2, \"Load\");\n$RefreshReg$(_c3, \"DetailsMovie\");\n$RefreshReg$(_c4, \"MovieLink\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QjtBQW9DVCxTQUFTd0I7SUFDTCxxQkFDSSw4REFBQzNCO1FBQUlFLFdBQVdkLDBFQUFXO2tCQUN2Qiw0RUFBQ1k7WUFBSTZCLE9BQU07WUFBMkJDLE1BQUs7c0JBQ3ZDLDRFQUFDQztnQkFBS0YsT0FBTTswQkFBa0I7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLOUM7TUFUU0Y7QUFXVCxTQUFTUCxhQUFhZCxLQUFLO0lBQ3ZCLE1BQU0sRUFBQ2UsSUFBSSxFQUFFRSxJQUFJLEVBQUMsR0FBR2pCO0lBRXJCLHFCQUNJLDhEQUFDTjtRQUFJRSxXQUFXZCw2RUFBYzs7MEJBQzFCLDhEQUFDNkM7Z0JBQUcvQixXQUFXZCx3RUFBUzswQkFBR2lDOzs7Ozs7MEJBQzNCLDhEQUFDYTtnQkFBRWhDLFdBQVdkLHVFQUFROzBCQUFHbUM7Ozs7Ozs7Ozs7OztBQUlyQztNQVZTSDtBQVlULGVBQWV2QixRQUFRc0MsR0FBRztJQUN0QixNQUFNQyxNQUFNLE1BQU1DLE1BQU1GO0lBQ3hCLE1BQU1HLE9BQU8sTUFBTUYsSUFBSUUsSUFBSTtJQUMzQixPQUFPQTtBQUNYO0FBRUEsU0FBU0MsVUFBVSxLQUFTO1FBQVQsRUFBRUMsS0FBSyxFQUFFLEdBQVQ7O0lBQ2YsTUFBTWxELFNBQVNILHNEQUFTQTtJQUV4QixNQUFNc0QsY0FBYztRQUNoQm5ELE9BQU9TLElBQUksQ0FBQztZQUNSVSxVQUFVO1lBQ1ZmLE9BQU87Z0JBQUVnQixJQUFJOEIsTUFBTWQsTUFBTTtZQUFDO1FBQzlCO0lBQ0o7SUFFQSxxQkFDSSw4REFBQzFCO2tCQUNHLDRFQUFDQTtZQUFJYyxTQUFTMkI7WUFBYUMsT0FBTztnQkFBRUMsUUFBUTtZQUFVOztnQkFDakRILE1BQU1sQixLQUFLO2dCQUFDO2dCQUFNa0IsTUFBTWhCLElBQUk7Ozs7Ozs7Ozs7OztBQUk3QztJQWpCU2U7O1FBQ1VwRCxrREFBU0E7OztNQURuQm9EIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL21vdmllVGVzdC5qcz85OTUxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHVzZVNXUiBmcm9tICdzd3InO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL3Nob3dNb3ZpZS5tb2R1bGUuY3NzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTW92aWVzMigpIHtcclxuXHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICAgIGNvbnN0IHsgbmFtZU1vdmllLCB5ZWFyTW92aWUsIHR5cGVTZWFyY2ggfSA9IHJvdXRlci5xdWVyeTtcclxuXHJcbiAgICBpZih0eXBlU2VhcmNoID09ICdieU1vdmllJyl7XHJcbiAgICAgICAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gdXNlU1dSKFxyXG4gICAgICAgICAgICBgaHR0cHM6Ly93d3cub21kYmFwaS5jb20vP2FwaWtleT1jYzIwMmIzZiZ0PSR7bmFtZU1vdmllfSZ5PSR7eWVhck1vdmllfWAsXHJcbiAgICAgICAgICAgIGZldGNoZXJcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICBjb25zdCBhcnJheSA9IFtdXHJcbiAgICAgICAgYXJyYXkucHVzaChkYXRhKVxyXG4gICAgXHJcbiAgICAgICAgaWYgKGVycm9yKSByZXR1cm4gPGRpdj5mYWxoYSBuYSByZXF1aXNpw6fDo28uLi48L2Rpdj47XHJcbiAgICAgICAgaWYgKCFkYXRhKSByZXR1cm4gPGRpdj5jYXJyZWdhbmRvLi4uPC9kaXY+O1xyXG4gICAgXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9J3RleHQtY2VudGVyIHB5LTInPlJlc3VsdGFkb3M8L2gxPlxyXG4gICAgICAgICAgICAgICAgPENhcmRNb3ZpZSBkYXRhcz17ZGF0YX0gdHlwZUJ1c2NhPXt0eXBlU2VhcmNofS8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICBcclxuICAgICAgICApO1xyXG4gICAgfVxyXG4gICAgZWxzZXtcclxuICAgICAgICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSB1c2VTV1IoXHJcbiAgICAgICAgICAgIGBodHRwczovL3d3dy5vbWRiYXBpLmNvbS8/YXBpa2V5PWNjMjAyYjNmJnM9JHtuYW1lTW92aWV9YCxcclxuICAgICAgICAgICAgZmV0Y2hlclxyXG4gICAgICAgICk7XHJcbiAgICBcclxuICAgICAgICBpZiAoZXJyb3IpIHJldHVybiA8ZGl2PmZhbGhhIG5hIHJlcXVpc2nDp8Ojby4uLjwvZGl2PjtcclxuICAgICAgICBpZiAoIWRhdGEpIHJldHVybiA8ZGl2PmNhcnJlZ2FuZG8uLi48L2Rpdj47XHJcbiAgICBcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT0ndGV4dC1jZW50ZXIgcHktMic+UmVzdWx0YWRvczwvaDE+XHJcbiAgICAgICAgICAgICAgICA8Q2FyZE1vdmllIGRhdGFzPXtkYXRhfSB0eXBlQnVzY2E9e3R5cGVTZWFyY2h9Lz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gQ2FyZE1vdmllKHByb3BzKXtcclxuXHJcbiAgICBjb25zdCB7ZGF0YXMsIHR5cGVCdXNjYX0gPSBwcm9wc1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuXHJcbiAgICBjb25zdCBuYXZlZ2F0aW9uTW92aWUgPSAocHJvcHMpID0+IHtcclxuICAgICAgICBjb25zdCB7bW92aWVJZH0gPSBwcm9wc1xyXG5cclxuICAgICAgICByb3V0ZXIucHVzaCh7XHJcbiAgICAgICAgICAgIHBhdGhuYW1lOiAnbW92aWVEZXRhaWxzJyxcclxuICAgICAgICAgICAgcXVlcnk6IHtpZDogbW92aWVJZH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgdHlwZUJ1c2NhID09ICdieU1vdmllJyA/XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJDYXJkfT57ZGF0YXM/Lm1hcCgobSkgPT4gKFxyXG4gICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9e25hdmVnYXRpb25Nb3ZpZX0gY2xhc3NOYW1lPXtzdHlsZXMuY2FyZH0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBvc3Rlcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e20uUG9zdGVyfS8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxEZXRhaWxzTW92aWUgbmFtZT17bS5UaXRsZX0geWVhcj17bS5ZZWFyfS8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICkpfTwvZGl2PlxyXG4gICAgICAgIDpcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lckNhcmR9PntkYXRhcz8uU2VhcmNoLm1hcCgobSkgPT4gKFxyXG4gICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9e25hdmVnYXRpb25Nb3ZpZSh7bW92aWVJZDogbS5pbWRiSUR9KX0gY2xhc3NOYW1lPXtzdHlsZXMuY2FyZH0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBvc3Rlcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e20uUG9zdGVyfS8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxEZXRhaWxzTW92aWUgbmFtZT17bS5UaXRsZX0geWVhcj17bS5ZZWFyfS8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICkpfTwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5mdW5jdGlvbiBMb2FkKCl7XHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mYWRlfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNwaW5uZXItYm9yZGVyIHRleHQtaW5mb1wiIHJvbGU9XCJzdGF0dXNcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidmlzdWFsbHktaGlkZGVuXCI+TG9hZGluZy4uLjwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgICBcclxufVxyXG5cclxuZnVuY3Rpb24gRGV0YWlsc01vdmllKHByb3BzKXtcclxuICAgIGNvbnN0IHtuYW1lLCB5ZWFyfSA9IHByb3BzO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kZXRhaWxzfT5cclxuICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT17c3R5bGVzLmgzfT57bmFtZX08L2gzPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5wfT57eWVhcn08L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICApXHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGZldGNoZXIodXJsKSB7XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCh1cmwpO1xyXG4gICAgY29uc3QganNvbiA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgICByZXR1cm4ganNvbjtcclxufVxyXG5cclxuZnVuY3Rpb24gTW92aWVMaW5rKHsgbW92aWUgfSkge1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgcm91dGVyLnB1c2goe1xyXG4gICAgICAgICAgICBwYXRobmFtZTogJy9kZXRhaWxzJyxcclxuICAgICAgICAgICAgcXVlcnk6IHsgaWQ6IG1vdmllLmltZGJJRCB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXtoYW5kbGVDbGlja30gc3R5bGU9e3sgY3Vyc29yOiAncG9pbnRlcicgfX0+XHJcbiAgICAgICAgICAgICAgICB7bW92aWUuVGl0bGV9IC0tLSB7bW92aWUuWWVhcn1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VTV1IiLCJ1c2VSb3V0ZXIiLCJzdHlsZXMiLCJNb3ZpZXMyIiwicm91dGVyIiwibmFtZU1vdmllIiwieWVhck1vdmllIiwidHlwZVNlYXJjaCIsInF1ZXJ5IiwiZGF0YSIsImVycm9yIiwiZmV0Y2hlciIsImFycmF5IiwicHVzaCIsImRpdiIsImgxIiwiY2xhc3NOYW1lIiwiQ2FyZE1vdmllIiwiZGF0YXMiLCJ0eXBlQnVzY2EiLCJwcm9wcyIsIm5hdmVnYXRpb25Nb3ZpZSIsIm1vdmllSWQiLCJwYXRobmFtZSIsImlkIiwiY29udGFpbmVyQ2FyZCIsIm1hcCIsIm0iLCJvbkNsaWNrIiwiY2FyZCIsInBvc3RlciIsImltZyIsInNyYyIsIlBvc3RlciIsIkRldGFpbHNNb3ZpZSIsIm5hbWUiLCJUaXRsZSIsInllYXIiLCJZZWFyIiwiU2VhcmNoIiwiaW1kYklEIiwiTG9hZCIsImZhZGUiLCJjbGFzcyIsInJvbGUiLCJzcGFuIiwiZGV0YWlscyIsImgzIiwicCIsInVybCIsInJlcyIsImZldGNoIiwianNvbiIsIk1vdmllTGluayIsIm1vdmllIiwiaGFuZGxlQ2xpY2siLCJzdHlsZSIsImN1cnNvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/movieTest.js\n"));

/***/ })

});