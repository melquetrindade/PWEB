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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Movies2; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swr */ \"./node_modules/swr/core/dist/index.mjs\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_showMovie_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/showMovie.module.css */ \"./styles/showMovie.module.css\");\n/* harmony import */ var _styles_showMovie_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_showMovie_module_css__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$(), _s2 = $RefreshSig$();\n\n\n\n\nfunction Movies2() {\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const { nameMovie, yearMovie, typeSearch } = router.query;\n    if (typeSearch == \"byMovie\") {\n        const { data, error } = (0,swr__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"https://www.omdbapi.com/?apikey=cc202b3f&t=\".concat(nameMovie, \"&y=\").concat(yearMovie), fetcher);\n        const array = [];\n        array.push(data);\n        if (error || data == undefined) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n            className: \"text-center py-2\",\n            children: \"Nenhum Resultados Encontrado\"\n        }, void 0, false, {\n            fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next4\\\\pages\\\\movieTest.js\",\n            lineNumber: 20,\n            columnNumber: 48\n        }, this);\n        if (!data) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Load, {}, void 0, false, {\n            fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next4\\\\pages\\\\movieTest.js\",\n            lineNumber: 21,\n            columnNumber: 27\n        }, this);\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"text-center py-2\",\n                    children: \"Resultados\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next4\\\\pages\\\\movieTest.js\",\n                    lineNumber: 25,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CardMovie, {\n                    datas: data,\n                    typeBusca: typeSearch\n                }, void 0, false, {\n                    fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next4\\\\pages\\\\movieTest.js\",\n                    lineNumber: 26,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next4\\\\pages\\\\movieTest.js\",\n            lineNumber: 24,\n            columnNumber: 13\n        }, this);\n    } else {\n        const { data, error } = (0,swr__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"https://www.omdbapi.com/?apikey=cc202b3f&s=\".concat(nameMovie), fetcher);\n        console.log(\"aqui: \".concat(data));\n        if (error || data == undefined) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n            className: \"text-center py-2\",\n            children: \"Nenhum Resultados Encontrado\"\n        }, void 0, false, {\n            fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next4\\\\pages\\\\movieTest.js\",\n            lineNumber: 39,\n            columnNumber: 48\n        }, this);\n        if (!data) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Load, {}, void 0, false, {\n            fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next4\\\\pages\\\\movieTest.js\",\n            lineNumber: 40,\n            columnNumber: 27\n        }, this);\n        if (data) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-center py-2\",\n                        children: \"Resultados\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next4\\\\pages\\\\movieTest.js\",\n                        lineNumber: 44,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CardMovie, {\n                        datas: data,\n                        typeBusca: typeSearch\n                    }, void 0, false, {\n                        fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next4\\\\pages\\\\movieTest.js\",\n                        lineNumber: 45,\n                        columnNumber: 21\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next4\\\\pages\\\\movieTest.js\",\n                lineNumber: 43,\n                columnNumber: 17\n            }, this);\n        }\n    }\n}\n_s(Movies2, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = Movies2;\nfunction CardMovie(props) {\n    var _datas, _datas1;\n    _s1();\n    const { datas, typeBusca } = props;\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    function navegationMovie(props) {\n        const { movieId } = props;\n        router.push({\n            pathname: \"/movieDetails\",\n            query: {\n                id: movieId\n            }\n        });\n    }\n    return typeBusca == \"byMovie\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_showMovie_module_css__WEBPACK_IMPORTED_MODULE_4___default().containerCard),\n        children: (_datas = datas) === null || _datas === void 0 ? void 0 : _datas.map((m)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                onClick: navegationMovie({\n                    movieId: m.imdbID\n                }),\n                className: (_styles_showMovie_module_css__WEBPACK_IMPORTED_MODULE_4___default().card),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_showMovie_module_css__WEBPACK_IMPORTED_MODULE_4___default().poster),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: m.Poster\n                        }, void 0, false, {\n                            fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next4\\\\pages\\\\movieTest.js\",\n                            lineNumber: 72,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next4\\\\pages\\\\movieTest.js\",\n                        lineNumber: 71,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(DetailsMovie, {\n                        name: m.Title,\n                        year: m.Year\n                    }, void 0, false, {\n                        fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next4\\\\pages\\\\movieTest.js\",\n                        lineNumber: 74,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next4\\\\pages\\\\movieTest.js\",\n                lineNumber: 70,\n                columnNumber: 13\n            }, this))\n    }, void 0, false, {\n        fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next4\\\\pages\\\\movieTest.js\",\n        lineNumber: 69,\n        columnNumber: 9\n    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_showMovie_module_css__WEBPACK_IMPORTED_MODULE_4___default().containerCard),\n        children: (_datas1 = datas) === null || _datas1 === void 0 ? void 0 : _datas1.Search.map((m)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                onClick: navegationMovie,\n                className: (_styles_showMovie_module_css__WEBPACK_IMPORTED_MODULE_4___default().card),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_showMovie_module_css__WEBPACK_IMPORTED_MODULE_4___default().poster),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: m.Poster\n                        }, void 0, false, {\n                            fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next4\\\\pages\\\\movieTest.js\",\n                            lineNumber: 81,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next4\\\\pages\\\\movieTest.js\",\n                        lineNumber: 80,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(DetailsMovie, {\n                        name: m.Title,\n                        year: m.Year\n                    }, void 0, false, {\n                        fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next4\\\\pages\\\\movieTest.js\",\n                        lineNumber: 83,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next4\\\\pages\\\\movieTest.js\",\n                lineNumber: 79,\n                columnNumber: 13\n            }, this))\n    }, void 0, false, {\n        fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next4\\\\pages\\\\movieTest.js\",\n        lineNumber: 78,\n        columnNumber: 9\n    }, this);\n}\n_s1(CardMovie, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c1 = CardMovie;\nfunction Load() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_showMovie_module_css__WEBPACK_IMPORTED_MODULE_4___default().fade),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            class: \"spinner-border text-info\",\n            role: \"status\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                class: \"visually-hidden\",\n                children: \"Loading...\"\n            }, void 0, false, {\n                fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next4\\\\pages\\\\movieTest.js\",\n                lineNumber: 93,\n                columnNumber: 17\n            }, this)\n        }, void 0, false, {\n            fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next4\\\\pages\\\\movieTest.js\",\n            lineNumber: 92,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next4\\\\pages\\\\movieTest.js\",\n        lineNumber: 91,\n        columnNumber: 9\n    }, this);\n}\n_c2 = Load;\nfunction DetailsMovie(props) {\n    const { name, year } = props;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_showMovie_module_css__WEBPACK_IMPORTED_MODULE_4___default().details),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                className: (_styles_showMovie_module_css__WEBPACK_IMPORTED_MODULE_4___default().h3),\n                children: name\n            }, void 0, false, {\n                fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next4\\\\pages\\\\movieTest.js\",\n                lineNumber: 105,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: (_styles_showMovie_module_css__WEBPACK_IMPORTED_MODULE_4___default().p),\n                children: year\n            }, void 0, false, {\n                fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next4\\\\pages\\\\movieTest.js\",\n                lineNumber: 106,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next4\\\\pages\\\\movieTest.js\",\n        lineNumber: 104,\n        columnNumber: 9\n    }, this);\n}\n_c3 = DetailsMovie;\nasync function fetcher(url) {\n    const res = await fetch(url);\n    const json = await res.json();\n    return json;\n}\nfunction MovieLink(param) {\n    let { movie } = param;\n    _s2();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const handleClick = ()=>{\n        router.push({\n            pathname: \"/details\",\n            query: {\n                id: movie.imdbID\n            }\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            onClick: handleClick,\n            style: {\n                cursor: \"pointer\"\n            },\n            children: [\n                movie.Title,\n                \" --- \",\n                movie.Year\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next4\\\\pages\\\\movieTest.js\",\n            lineNumber: 130,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next4\\\\pages\\\\movieTest.js\",\n        lineNumber: 129,\n        columnNumber: 9\n    }, this);\n}\n_s2(MovieLink, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c4 = MovieLink;\nvar _c, _c1, _c2, _c3, _c4;\n$RefreshReg$(_c, \"Movies2\");\n$RefreshReg$(_c1, \"CardMovie\");\n$RefreshReg$(_c2, \"Load\");\n$RefreshReg$(_c3, \"DetailsMovie\");\n$RefreshReg$(_c4, \"MovieLink\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9tb3ZpZVRlc3QuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQXdDO0FBQ2Y7QUFDZTtBQUNXO0FBRXBDLFNBQVNLOztJQUVwQixNQUFNQyxTQUFTSCxzREFBU0E7SUFDeEIsTUFBTSxFQUFFSSxTQUFTLEVBQUVDLFNBQVMsRUFBRUMsVUFBVSxFQUFFLEdBQUdILE9BQU9JLEtBQUs7SUFFekQsSUFBR0QsY0FBYyxXQUFVO1FBQ3ZCLE1BQU0sRUFBRUUsSUFBSSxFQUFFQyxLQUFLLEVBQUUsR0FBR1YsK0NBQU1BLENBQzFCLDhDQUE2RE0sT0FBZkQsV0FBVSxPQUFlLE9BQVZDLFlBQzdESztRQUdKLE1BQU1DLFFBQVEsRUFBRTtRQUNoQkEsTUFBTUMsSUFBSSxDQUFDSjtRQUVYLElBQUlDLFNBQVNELFFBQVFLLFdBQVcscUJBQU8sOERBQUNDO1lBQUdDLFdBQVU7c0JBQW1COzs7Ozs7UUFDeEUsSUFBSSxDQUFDUCxNQUFNLHFCQUFPLDhEQUFDUTs7Ozs7UUFFbkIscUJBQ0ksOERBQUNDOzs4QkFDRyw4REFBQ0g7b0JBQUdDLFdBQVU7OEJBQW1COzs7Ozs7OEJBQ2pDLDhEQUFDRztvQkFBVUMsT0FBT1g7b0JBQU1ZLFdBQVdkOzs7Ozs7Ozs7Ozs7SUFJL0MsT0FDSTtRQUNBLE1BQU0sRUFBRUUsSUFBSSxFQUFFQyxLQUFLLEVBQUUsR0FBR1YsK0NBQU1BLENBQzFCLDhDQUF3RCxPQUFWSyxZQUM5Q007UUFHSlcsUUFBUUMsR0FBRyxDQUFDLFNBQWMsT0FBTGQ7UUFFckIsSUFBSUMsU0FBU0QsUUFBUUssV0FBVyxxQkFBTyw4REFBQ0M7WUFBR0MsV0FBVTtzQkFBbUI7Ozs7OztRQUN4RSxJQUFJLENBQUNQLE1BQU0scUJBQU8sOERBQUNROzs7OztRQUNuQixJQUFHUixNQUFLO1lBQ0oscUJBQ0ksOERBQUNTOztrQ0FDRyw4REFBQ0g7d0JBQUdDLFdBQVU7a0NBQW1COzs7Ozs7a0NBQ2pDLDhEQUFDRzt3QkFBVUMsT0FBT1g7d0JBQU1ZLFdBQVdkOzs7Ozs7Ozs7Ozs7UUFHL0M7SUFFSjtBQUNKO0dBN0N3Qko7O1FBRUxGLGtEQUFTQTs7O0tBRkpFO0FBK0N4QixTQUFTZ0IsVUFBVUssS0FBSztRQWdCdUJKLFFBU0FBOztJQXZCM0MsTUFBTSxFQUFDQSxLQUFLLEVBQUVDLFNBQVMsRUFBQyxHQUFHRztJQUMzQixNQUFNcEIsU0FBU0gsc0RBQVNBO0lBRXhCLFNBQVN3QixnQkFBZ0JELEtBQUs7UUFDMUIsTUFBTSxFQUFDRSxPQUFPLEVBQUMsR0FBR0Y7UUFFbEJwQixPQUFPUyxJQUFJLENBQUM7WUFDUmMsVUFBVTtZQUNWbkIsT0FBTztnQkFBQ29CLElBQUlGO1lBQU87UUFDdkI7SUFDSjtJQUVBLE9BQ0lMLGFBQWEsMEJBQ2IsOERBQUNIO1FBQUlGLFdBQVdkLG1GQUFvQjttQkFBR2tCLFNBQUFBLG1CQUFBQSw2QkFBQUEsT0FBT1UsR0FBRyxDQUFDLENBQUNDLGtCQUMvQyw4REFBQ2I7Z0JBQUljLFNBQVNQLGdCQUFnQjtvQkFBQ0MsU0FBU0ssRUFBRUUsTUFBTTtnQkFBQTtnQkFBSWpCLFdBQVdkLDBFQUFXOztrQ0FDdEUsOERBQUNnQjt3QkFBSUYsV0FBV2QsNEVBQWE7a0NBQ3pCLDRFQUFDa0M7NEJBQUlDLEtBQUtOLEVBQUVPLE1BQU07Ozs7Ozs7Ozs7O2tDQUV0Qiw4REFBQ0M7d0JBQWFDLE1BQU1ULEVBQUVVLEtBQUs7d0JBQUVDLE1BQU1YLEVBQUVZLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7NkJBSWpELDhEQUFDekI7UUFBSUYsV0FBV2QsbUZBQW9CO21CQUFHa0IsVUFBQUEsbUJBQUFBLDhCQUFBQSxRQUFPd0IsTUFBTSxDQUFDZCxHQUFHLENBQUMsQ0FBQ0Msa0JBQ3RELDhEQUFDYjtnQkFBSWMsU0FBU1A7Z0JBQWlCVCxXQUFXZCwwRUFBVzs7a0NBQ2pELDhEQUFDZ0I7d0JBQUlGLFdBQVdkLDRFQUFhO2tDQUN6Qiw0RUFBQ2tDOzRCQUFJQyxLQUFLTixFQUFFTyxNQUFNOzs7Ozs7Ozs7OztrQ0FFdEIsOERBQUNDO3dCQUFhQyxNQUFNVCxFQUFFVSxLQUFLO3dCQUFFQyxNQUFNWCxFQUFFWSxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7OztBQUl6RDtJQWxDU3hCOztRQUdVbEIsa0RBQVNBOzs7TUFIbkJrQjtBQW9DVCxTQUFTRjtJQUNMLHFCQUNJLDhEQUFDQztRQUFJRixXQUFXZCwwRUFBVztrQkFDdkIsNEVBQUNnQjtZQUFJNEIsT0FBTTtZQUEyQkMsTUFBSztzQkFDdkMsNEVBQUNDO2dCQUFLRixPQUFNOzBCQUFrQjs7Ozs7Ozs7Ozs7Ozs7OztBQUs5QztNQVRTN0I7QUFXVCxTQUFTc0IsYUFBYWYsS0FBSztJQUN2QixNQUFNLEVBQUNnQixJQUFJLEVBQUVFLElBQUksRUFBQyxHQUFHbEI7SUFFckIscUJBQ0ksOERBQUNOO1FBQUlGLFdBQVdkLDZFQUFjOzswQkFDMUIsOERBQUNnRDtnQkFBR2xDLFdBQVdkLHdFQUFTOzBCQUFHc0M7Ozs7OzswQkFDM0IsOERBQUNXO2dCQUFFbkMsV0FBV2QsdUVBQVE7MEJBQUd3Qzs7Ozs7Ozs7Ozs7O0FBSXJDO01BVlNIO0FBWVQsZUFBZTVCLFFBQVF5QyxHQUFHO0lBQ3RCLE1BQU1DLE1BQU0sTUFBTUMsTUFBTUY7SUFDeEIsTUFBTUcsT0FBTyxNQUFNRixJQUFJRSxJQUFJO0lBQzNCLE9BQU9BO0FBQ1g7QUFFQSxTQUFTQyxVQUFVLEtBQVM7UUFBVCxFQUFFQyxLQUFLLEVBQUUsR0FBVDs7SUFDZixNQUFNckQsU0FBU0gsc0RBQVNBO0lBRXhCLE1BQU15RCxjQUFjO1FBQ2hCdEQsT0FBT1MsSUFBSSxDQUFDO1lBQ1JjLFVBQVU7WUFDVm5CLE9BQU87Z0JBQUVvQixJQUFJNkIsTUFBTXhCLE1BQU07WUFBQztRQUM5QjtJQUNKO0lBRUEscUJBQ0ksOERBQUNmO2tCQUNHLDRFQUFDQTtZQUFJYyxTQUFTMEI7WUFBYUMsT0FBTztnQkFBRUMsUUFBUTtZQUFVOztnQkFDakRILE1BQU1oQixLQUFLO2dCQUFDO2dCQUFNZ0IsTUFBTWQsSUFBSTs7Ozs7Ozs7Ozs7O0FBSTdDO0lBakJTYTs7UUFDVXZELGtEQUFTQTs7O01BRG5CdUQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbW92aWVUZXN0LmpzPzk5NTEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgdXNlU1dSIGZyb20gJ3N3cic7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvc2hvd01vdmllLm1vZHVsZS5jc3MnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNb3ZpZXMyKCkge1xyXG5cclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gICAgY29uc3QgeyBuYW1lTW92aWUsIHllYXJNb3ZpZSwgdHlwZVNlYXJjaCB9ID0gcm91dGVyLnF1ZXJ5O1xyXG5cclxuICAgIGlmKHR5cGVTZWFyY2ggPT0gJ2J5TW92aWUnKXtcclxuICAgICAgICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSB1c2VTV1IoXHJcbiAgICAgICAgICAgIGBodHRwczovL3d3dy5vbWRiYXBpLmNvbS8/YXBpa2V5PWNjMjAyYjNmJnQ9JHtuYW1lTW92aWV9Jnk9JHt5ZWFyTW92aWV9YCxcclxuICAgICAgICAgICAgZmV0Y2hlclxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIGNvbnN0IGFycmF5ID0gW11cclxuICAgICAgICBhcnJheS5wdXNoKGRhdGEpXHJcbiAgICBcclxuICAgICAgICBpZiAoZXJyb3IgfHwgZGF0YSA9PSB1bmRlZmluZWQpIHJldHVybiA8aDEgY2xhc3NOYW1lPSd0ZXh0LWNlbnRlciBweS0yJz5OZW5odW0gUmVzdWx0YWRvcyBFbmNvbnRyYWRvPC9oMT5cclxuICAgICAgICBpZiAoIWRhdGEpIHJldHVybiA8TG9hZC8+XHJcbiAgICBcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT0ndGV4dC1jZW50ZXIgcHktMic+UmVzdWx0YWRvczwvaDE+XHJcbiAgICAgICAgICAgICAgICA8Q2FyZE1vdmllIGRhdGFzPXtkYXRhfSB0eXBlQnVzY2E9e3R5cGVTZWFyY2h9Lz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbiAgICBlbHNle1xyXG4gICAgICAgIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IHVzZVNXUihcclxuICAgICAgICAgICAgYGh0dHBzOi8vd3d3Lm9tZGJhcGkuY29tLz9hcGlrZXk9Y2MyMDJiM2Ymcz0ke25hbWVNb3ZpZX1gLFxyXG4gICAgICAgICAgICBmZXRjaGVyXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coYGFxdWk6ICR7ZGF0YX1gKVxyXG4gICAgXHJcbiAgICAgICAgaWYgKGVycm9yIHx8IGRhdGEgPT0gdW5kZWZpbmVkKSByZXR1cm4gPGgxIGNsYXNzTmFtZT0ndGV4dC1jZW50ZXIgcHktMic+TmVuaHVtIFJlc3VsdGFkb3MgRW5jb250cmFkbzwvaDE+XHJcbiAgICAgICAgaWYgKCFkYXRhKSByZXR1cm4gPExvYWQvPlxyXG4gICAgICAgIGlmKGRhdGEpe1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPSd0ZXh0LWNlbnRlciBweS0yJz5SZXN1bHRhZG9zPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICA8Q2FyZE1vdmllIGRhdGFzPXtkYXRhfSB0eXBlQnVzY2E9e3R5cGVTZWFyY2h9Lz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gQ2FyZE1vdmllKHByb3BzKXtcclxuXHJcbiAgICBjb25zdCB7ZGF0YXMsIHR5cGVCdXNjYX0gPSBwcm9wc1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuXHJcbiAgICBmdW5jdGlvbiBuYXZlZ2F0aW9uTW92aWUocHJvcHMpIHtcclxuICAgICAgICBjb25zdCB7bW92aWVJZH0gPSBwcm9wc1xyXG5cclxuICAgICAgICByb3V0ZXIucHVzaCh7XHJcbiAgICAgICAgICAgIHBhdGhuYW1lOiAnL21vdmllRGV0YWlscycsXHJcbiAgICAgICAgICAgIHF1ZXJ5OiB7aWQ6IG1vdmllSWR9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIHR5cGVCdXNjYSA9PSAnYnlNb3ZpZScgP1xyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyQ2FyZH0+e2RhdGFzPy5tYXAoKG0pID0+IChcclxuICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXtuYXZlZ2F0aW9uTW92aWUoe21vdmllSWQ6IG0uaW1kYklEfSl9IGNsYXNzTmFtZT17c3R5bGVzLmNhcmR9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wb3N0ZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXttLlBvc3Rlcn0vPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8RGV0YWlsc01vdmllIG5hbWU9e20uVGl0bGV9IHllYXI9e20uWWVhcn0vPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApKX08L2Rpdj5cclxuICAgICAgICA6XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJDYXJkfT57ZGF0YXM/LlNlYXJjaC5tYXAoKG0pID0+IChcclxuICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXtuYXZlZ2F0aW9uTW92aWV9IGNsYXNzTmFtZT17c3R5bGVzLmNhcmR9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wb3N0ZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXttLlBvc3Rlcn0vPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8RGV0YWlsc01vdmllIG5hbWU9e20uVGl0bGV9IHllYXI9e20uWWVhcn0vPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApKX08L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZnVuY3Rpb24gTG9hZCgpe1xyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZmFkZX0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzcGlubmVyLWJvcmRlciB0ZXh0LWluZm9cIiByb2xlPVwic3RhdHVzXCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInZpc3VhbGx5LWhpZGRlblwiPkxvYWRpbmcuLi48L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gICAgXHJcbn1cclxuXHJcbmZ1bmN0aW9uIERldGFpbHNNb3ZpZShwcm9wcyl7XHJcbiAgICBjb25zdCB7bmFtZSwgeWVhcn0gPSBwcm9wcztcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZGV0YWlsc30+XHJcbiAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9e3N0eWxlcy5oM30+e25hbWV9PC9oMz5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMucH0+e3llYXJ9PC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIFxyXG4gICAgKVxyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBmZXRjaGVyKHVybCkge1xyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2godXJsKTtcclxuICAgIGNvbnN0IGpzb24gPSBhd2FpdCByZXMuanNvbigpO1xyXG4gICAgcmV0dXJuIGpzb247XHJcbn1cclxuXHJcbmZ1bmN0aW9uIE1vdmllTGluayh7IG1vdmllIH0pIHtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZUNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgIHJvdXRlci5wdXNoKHtcclxuICAgICAgICAgICAgcGF0aG5hbWU6ICcvZGV0YWlscycsXHJcbiAgICAgICAgICAgIHF1ZXJ5OiB7IGlkOiBtb3ZpZS5pbWRiSUQgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxkaXYgb25DbGljaz17aGFuZGxlQ2xpY2t9IHN0eWxlPXt7IGN1cnNvcjogJ3BvaW50ZXInIH19PlxyXG4gICAgICAgICAgICAgICAge21vdmllLlRpdGxlfSAtLS0ge21vdmllLlllYXJ9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlU1dSIiwidXNlUm91dGVyIiwic3R5bGVzIiwiTW92aWVzMiIsInJvdXRlciIsIm5hbWVNb3ZpZSIsInllYXJNb3ZpZSIsInR5cGVTZWFyY2giLCJxdWVyeSIsImRhdGEiLCJlcnJvciIsImZldGNoZXIiLCJhcnJheSIsInB1c2giLCJ1bmRlZmluZWQiLCJoMSIsImNsYXNzTmFtZSIsIkxvYWQiLCJkaXYiLCJDYXJkTW92aWUiLCJkYXRhcyIsInR5cGVCdXNjYSIsImNvbnNvbGUiLCJsb2ciLCJwcm9wcyIsIm5hdmVnYXRpb25Nb3ZpZSIsIm1vdmllSWQiLCJwYXRobmFtZSIsImlkIiwiY29udGFpbmVyQ2FyZCIsIm1hcCIsIm0iLCJvbkNsaWNrIiwiaW1kYklEIiwiY2FyZCIsInBvc3RlciIsImltZyIsInNyYyIsIlBvc3RlciIsIkRldGFpbHNNb3ZpZSIsIm5hbWUiLCJUaXRsZSIsInllYXIiLCJZZWFyIiwiU2VhcmNoIiwiZmFkZSIsImNsYXNzIiwicm9sZSIsInNwYW4iLCJkZXRhaWxzIiwiaDMiLCJwIiwidXJsIiwicmVzIiwiZmV0Y2giLCJqc29uIiwiTW92aWVMaW5rIiwibW92aWUiLCJoYW5kbGVDbGljayIsInN0eWxlIiwiY3Vyc29yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/movieTest.js\n"));

/***/ })

});