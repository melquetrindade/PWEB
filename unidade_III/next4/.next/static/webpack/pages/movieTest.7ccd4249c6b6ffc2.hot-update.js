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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Movies2; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swr */ \"./node_modules/swr/core/dist/index.mjs\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\n\nfunction Movies2() {\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const { nameMovie, yearMovie, typeSearch } = router.query;\n    if (typeSearch == \"byMovie\") {\n        var _array;\n        const { data, error } = (0,swr__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"https://www.omdbapi.com/?apikey=cc202b3f&t=\".concat(nameMovie, \"&y=\").concat(yearMovie), fetcher);\n        const array = [];\n        array.push(data);\n        if (error) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"falha na requisi\\xe7\\xe3o...\"\n        }, void 0, false, {\n            fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next4\\\\pages\\\\movieTest.js\",\n            lineNumber: 19,\n            columnNumber: 27\n        }, this);\n        if (!data) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"carregando...\"\n        }, void 0, false, {\n            fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next4\\\\pages\\\\movieTest.js\",\n            lineNumber: 20,\n            columnNumber: 27\n        }, this);\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                (_array = array) === null || _array === void 0 ? void 0 : _array.map((m)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MovieLink, {\n                        movie: m\n                    }, m.imdbID, false, {\n                        fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next4\\\\pages\\\\movieTest.js\",\n                        lineNumber: 25,\n                        columnNumber: 21\n                    }, this)),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: styles.containerRes,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"text-center py-2\",\n                            children: \"Resultados\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next4\\\\pages\\\\movieTest.js\",\n                            lineNumber: 28,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CardMovie, {\n                            datas: data,\n                            typeBusca: typeSearch\n                        }, void 0, false, {\n                            fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next4\\\\pages\\\\movieTest.js\",\n                            lineNumber: 29,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next4\\\\pages\\\\movieTest.js\",\n                    lineNumber: 27,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next4\\\\pages\\\\movieTest.js\",\n            lineNumber: 23,\n            columnNumber: 13\n        }, this);\n    } else {\n        const { data, error } = (0,swr__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"https://www.omdbapi.com/?apikey=cc202b3f&s=\".concat(nameMovie), fetcher);\n        if (error) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"falha na requisi\\xe7\\xe3o...\"\n        }, void 0, false, {\n            fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next4\\\\pages\\\\movieTest.js\",\n            lineNumber: 41,\n            columnNumber: 27\n        }, this);\n        if (!data) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"carregando...\"\n        }, void 0, false, {\n            fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next4\\\\pages\\\\movieTest.js\",\n            lineNumber: 42,\n            columnNumber: 27\n        }, this);\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: data.Search.map((m)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MovieLink, {\n                    movie: m\n                }, m.imdbID, false, {\n                    fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next4\\\\pages\\\\movieTest.js\",\n                    lineNumber: 47,\n                    columnNumber: 21\n                }, this))\n        }, void 0, false, {\n            fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next4\\\\pages\\\\movieTest.js\",\n            lineNumber: 45,\n            columnNumber: 13\n        }, this);\n    }\n}\n_s(Movies2, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = Movies2;\nfunction CardMovie(props) {\n    var _datas, _datas1;\n    const { datas, typeBusca } = props;\n    return typeBusca == \"byMovie\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: styles.containerCard,\n        children: (_datas = datas) === null || _datas === void 0 ? void 0 : _datas.map((m)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: styles.card,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: styles.poster,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: m.Poster\n                        }, void 0, false, {\n                            fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next4\\\\pages\\\\movieTest.js\",\n                            lineNumber: 63,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next4\\\\pages\\\\movieTest.js\",\n                        lineNumber: 62,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(DetailsMovie, {\n                        name: m.Title,\n                        year: m.Year\n                    }, void 0, false, {\n                        fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next4\\\\pages\\\\movieTest.js\",\n                        lineNumber: 65,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next4\\\\pages\\\\movieTest.js\",\n                lineNumber: 61,\n                columnNumber: 13\n            }, this))\n    }, void 0, false, {\n        fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next4\\\\pages\\\\movieTest.js\",\n        lineNumber: 60,\n        columnNumber: 9\n    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: styles.containerCard,\n        children: (_datas1 = datas) === null || _datas1 === void 0 ? void 0 : _datas1.Search.map((m)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: styles.card,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: styles.poster,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: m.Poster\n                        }, void 0, false, {\n                            fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next4\\\\pages\\\\movieTest.js\",\n                            lineNumber: 72,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next4\\\\pages\\\\movieTest.js\",\n                        lineNumber: 71,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(DetailsMovie, {\n                        name: m.Title,\n                        year: m.Year\n                    }, void 0, false, {\n                        fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next4\\\\pages\\\\movieTest.js\",\n                        lineNumber: 74,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next4\\\\pages\\\\movieTest.js\",\n                lineNumber: 70,\n                columnNumber: 13\n            }, this))\n    }, void 0, false, {\n        fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next4\\\\pages\\\\movieTest.js\",\n        lineNumber: 69,\n        columnNumber: 9\n    }, this);\n}\n_c1 = CardMovie;\nfunction Load() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: styles.fade,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            class: \"spinner-border text-info\",\n            role: \"status\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                class: \"visually-hidden\",\n                children: \"Loading...\"\n            }, void 0, false, {\n                fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next4\\\\pages\\\\movieTest.js\",\n                lineNumber: 84,\n                columnNumber: 17\n            }, this)\n        }, void 0, false, {\n            fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next4\\\\pages\\\\movieTest.js\",\n            lineNumber: 83,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next4\\\\pages\\\\movieTest.js\",\n        lineNumber: 82,\n        columnNumber: 9\n    }, this);\n}\n_c2 = Load;\nfunction DetailsMovie(props) {\n    const { name, year } = props;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: styles.details,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                className: styles.h3,\n                children: name\n            }, void 0, false, {\n                fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next4\\\\pages\\\\movieTest.js\",\n                lineNumber: 96,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: styles.p,\n                children: year\n            }, void 0, false, {\n                fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next4\\\\pages\\\\movieTest.js\",\n                lineNumber: 97,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next4\\\\pages\\\\movieTest.js\",\n        lineNumber: 95,\n        columnNumber: 9\n    }, this);\n}\n_c3 = DetailsMovie;\nasync function fetcher(url) {\n    const res = await fetch(url);\n    const json = await res.json();\n    return json;\n}\nfunction MovieLink(param) {\n    let { movie } = param;\n    _s1();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const handleClick = ()=>{\n        router.push({\n            pathname: \"/details\",\n            query: {\n                id: movie.imdbID\n            }\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            onClick: handleClick,\n            style: {\n                cursor: \"pointer\"\n            },\n            children: [\n                movie.Title,\n                \" --- \",\n                movie.Year\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next4\\\\pages\\\\movieTest.js\",\n            lineNumber: 121,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next4\\\\pages\\\\movieTest.js\",\n        lineNumber: 120,\n        columnNumber: 9\n    }, this);\n}\n_s1(MovieLink, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c4 = MovieLink;\nvar _c, _c1, _c2, _c3, _c4;\n$RefreshReg$(_c, \"Movies2\");\n$RefreshReg$(_c1, \"CardMovie\");\n$RefreshReg$(_c2, \"Load\");\n$RefreshReg$(_c3, \"DetailsMovie\");\n$RefreshReg$(_c4, \"MovieLink\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Qiw0RUFBQzNCO1lBQUk0QixPQUFNO1lBQTJCQyxNQUFLO3NCQUN2Qyw0RUFBQ0M7Z0JBQUtGLE9BQU07MEJBQWtCOzs7Ozs7Ozs7Ozs7Ozs7O0FBSzlDO01BVFNGO0FBV1QsU0FBU0wsYUFBYVAsS0FBSztJQUN2QixNQUFNLEVBQUNRLElBQUksRUFBRUUsSUFBSSxFQUFDLEdBQUdWO0lBRXJCLHFCQUNJLDhEQUFDZDtRQUFJTSxXQUFXQyxPQUFPd0IsT0FBTzs7MEJBQzFCLDhEQUFDQztnQkFBRzFCLFdBQVdDLE9BQU95QixFQUFFOzBCQUFHVjs7Ozs7OzBCQUMzQiw4REFBQ1c7Z0JBQUUzQixXQUFXQyxPQUFPMEIsQ0FBQzswQkFBR1Q7Ozs7Ozs7Ozs7OztBQUlyQztNQVZTSDtBQVlULGVBQWV2QixRQUFRb0MsR0FBRztJQUN0QixNQUFNQyxNQUFNLE1BQU1DLE1BQU1GO0lBQ3hCLE1BQU1HLE9BQU8sTUFBTUYsSUFBSUUsSUFBSTtJQUMzQixPQUFPQTtBQUNYO0FBRUEsU0FBU2xDLFVBQVUsS0FBUztRQUFULEVBQUVDLEtBQUssRUFBRSxHQUFUOztJQUNmLE1BQU1kLFNBQVNGLHNEQUFTQTtJQUV4QixNQUFNa0QsY0FBYztRQUNoQmhELE9BQU9TLElBQUksQ0FBQztZQUNSd0MsVUFBVTtZQUNWN0MsT0FBTztnQkFBRThDLElBQUlwQyxNQUFNQyxNQUFNO1lBQUM7UUFDOUI7SUFDSjtJQUVBLHFCQUNJLDhEQUFDTDtrQkFDRyw0RUFBQ0E7WUFBSXlDLFNBQVNIO1lBQWFJLE9BQU87Z0JBQUVDLFFBQVE7WUFBVTs7Z0JBQ2pEdkMsTUFBTW1CLEtBQUs7Z0JBQUM7Z0JBQU1uQixNQUFNcUIsSUFBSTs7Ozs7Ozs7Ozs7O0FBSTdDO0lBakJTdEI7O1FBQ1VmLGtEQUFTQTs7O01BRG5CZSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9tb3ZpZVRlc3QuanM/OTk1MSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB1c2VTV1IgZnJvbSAnc3dyJztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTW92aWVzMigpIHtcclxuXHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICAgIGNvbnN0IHsgbmFtZU1vdmllLCB5ZWFyTW92aWUsIHR5cGVTZWFyY2ggfSA9IHJvdXRlci5xdWVyeTtcclxuXHJcbiAgICBpZih0eXBlU2VhcmNoID09ICdieU1vdmllJyl7XHJcbiAgICAgICAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gdXNlU1dSKFxyXG4gICAgICAgICAgICBgaHR0cHM6Ly93d3cub21kYmFwaS5jb20vP2FwaWtleT1jYzIwMmIzZiZ0PSR7bmFtZU1vdmllfSZ5PSR7eWVhck1vdmllfWAsXHJcbiAgICAgICAgICAgIGZldGNoZXJcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICBjb25zdCBhcnJheSA9IFtdXHJcbiAgICAgICAgYXJyYXkucHVzaChkYXRhKVxyXG4gICAgXHJcbiAgICAgICAgaWYgKGVycm9yKSByZXR1cm4gPGRpdj5mYWxoYSBuYSByZXF1aXNpw6fDo28uLi48L2Rpdj47XHJcbiAgICAgICAgaWYgKCFkYXRhKSByZXR1cm4gPGRpdj5jYXJyZWdhbmRvLi4uPC9kaXY+O1xyXG4gICAgXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIHthcnJheT8ubWFwKChtKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPE1vdmllTGluayBrZXk9e20uaW1kYklEfSBtb3ZpZT17bX0gLz5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJSZXN9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9J3RleHQtY2VudGVyIHB5LTInPlJlc3VsdGFkb3M8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDYXJkTW92aWUgZGF0YXM9e2RhdGF9IHR5cGVCdXNjYT17dHlwZVNlYXJjaH0vPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICBcclxuICAgICAgICApO1xyXG4gICAgfVxyXG4gICAgZWxzZXtcclxuICAgICAgICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSB1c2VTV1IoXHJcbiAgICAgICAgICAgIGBodHRwczovL3d3dy5vbWRiYXBpLmNvbS8/YXBpa2V5PWNjMjAyYjNmJnM9JHtuYW1lTW92aWV9YCxcclxuICAgICAgICAgICAgZmV0Y2hlclxyXG4gICAgICAgICk7XHJcbiAgICBcclxuICAgICAgICBpZiAoZXJyb3IpIHJldHVybiA8ZGl2PmZhbGhhIG5hIHJlcXVpc2nDp8Ojby4uLjwvZGl2PjtcclxuICAgICAgICBpZiAoIWRhdGEpIHJldHVybiA8ZGl2PmNhcnJlZ2FuZG8uLi48L2Rpdj47XHJcbiAgICBcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAge2RhdGEuU2VhcmNoLm1hcCgobSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxNb3ZpZUxpbmsga2V5PXttLmltZGJJRH0gbW92aWU9e219IC8+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gQ2FyZE1vdmllKHByb3BzKXtcclxuXHJcbiAgICBjb25zdCB7ZGF0YXMsIHR5cGVCdXNjYX0gPSBwcm9wc1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgdHlwZUJ1c2NhID09ICdieU1vdmllJyA/XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJDYXJkfT57ZGF0YXM/Lm1hcCgobSkgPT4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhcmR9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wb3N0ZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXttLlBvc3Rlcn0vPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8RGV0YWlsc01vdmllIG5hbWU9e20uVGl0bGV9IHllYXI9e20uWWVhcn0vPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApKX08L2Rpdj5cclxuICAgICAgICA6XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJDYXJkfT57ZGF0YXM/LlNlYXJjaC5tYXAoKG0pID0+IChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jYXJkfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucG9zdGVyfT5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17bS5Qb3N0ZXJ9Lz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPERldGFpbHNNb3ZpZSBuYW1lPXttLlRpdGxlfSB5ZWFyPXttLlllYXJ9Lz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKSl9PC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmZ1bmN0aW9uIExvYWQoKXtcclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZhZGV9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3Bpbm5lci1ib3JkZXIgdGV4dC1pbmZvXCIgcm9sZT1cInN0YXR1c1wiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ2aXN1YWxseS1oaWRkZW5cIj5Mb2FkaW5nLi4uPC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxuICAgIFxyXG59XHJcblxyXG5mdW5jdGlvbiBEZXRhaWxzTW92aWUocHJvcHMpe1xyXG4gICAgY29uc3Qge25hbWUsIHllYXJ9ID0gcHJvcHM7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRldGFpbHN9PlxyXG4gICAgICAgICAgICA8aDMgY2xhc3NOYW1lPXtzdHlsZXMuaDN9PntuYW1lfTwvaDM+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnB9Pnt5ZWFyfTwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICBcclxuICAgIClcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gZmV0Y2hlcih1cmwpIHtcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKHVybCk7XHJcbiAgICBjb25zdCBqc29uID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICAgIHJldHVybiBqc29uO1xyXG59XHJcblxyXG5mdW5jdGlvbiBNb3ZpZUxpbmsoeyBtb3ZpZSB9KSB7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVDbGljayA9ICgpID0+IHtcclxuICAgICAgICByb3V0ZXIucHVzaCh7XHJcbiAgICAgICAgICAgIHBhdGhuYW1lOiAnL2RldGFpbHMnLFxyXG4gICAgICAgICAgICBxdWVyeTogeyBpZDogbW92aWUuaW1kYklEIH1cclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9e2hhbmRsZUNsaWNrfSBzdHlsZT17eyBjdXJzb3I6ICdwb2ludGVyJyB9fT5cclxuICAgICAgICAgICAgICAgIHttb3ZpZS5UaXRsZX0gLS0tIHttb3ZpZS5ZZWFyfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn0iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZVNXUiIsInVzZVJvdXRlciIsIk1vdmllczIiLCJyb3V0ZXIiLCJuYW1lTW92aWUiLCJ5ZWFyTW92aWUiLCJ0eXBlU2VhcmNoIiwicXVlcnkiLCJhcnJheSIsImRhdGEiLCJlcnJvciIsImZldGNoZXIiLCJwdXNoIiwiZGl2IiwibWFwIiwibSIsIk1vdmllTGluayIsIm1vdmllIiwiaW1kYklEIiwiY2xhc3NOYW1lIiwic3R5bGVzIiwiY29udGFpbmVyUmVzIiwiaDEiLCJDYXJkTW92aWUiLCJkYXRhcyIsInR5cGVCdXNjYSIsIlNlYXJjaCIsInByb3BzIiwiY29udGFpbmVyQ2FyZCIsImNhcmQiLCJwb3N0ZXIiLCJpbWciLCJzcmMiLCJQb3N0ZXIiLCJEZXRhaWxzTW92aWUiLCJuYW1lIiwiVGl0bGUiLCJ5ZWFyIiwiWWVhciIsIkxvYWQiLCJmYWRlIiwiY2xhc3MiLCJyb2xlIiwic3BhbiIsImRldGFpbHMiLCJoMyIsInAiLCJ1cmwiLCJyZXMiLCJmZXRjaCIsImpzb24iLCJoYW5kbGVDbGljayIsInBhdGhuYW1lIiwiaWQiLCJvbkNsaWNrIiwic3R5bGUiLCJjdXJzb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/movieTest.js\n"));

/***/ })

});