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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Movies2; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swr */ \"./node_modules/swr/core/dist/index.mjs\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_showMovie_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/showMovie.module.css */ \"./styles/showMovie.module.css\");\n/* harmony import */ var _styles_showMovie_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_showMovie_module_css__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\n\n\nasync function fetcher02(url) {\n    const res = await fetch(url);\n    const json = await res.json();\n    return json;\n}\nfunction Movies2() {\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const { nameMovie, yearMovie, typeSearch } = router.query;\n    const { dataInfo, errorInfo } = (0,swr__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"https://extreme-ip-lookup.com/json \", fetcher);\n    if (dataInfo) {\n        console.log(\"entrou\");\n        console.log(\"\".concat(dataInfo));\n    }\n    if (typeSearch == \"byMovie\") {\n        const { data, error } = (0,swr__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"https://www.omdbapi.com/?apikey=cc202b3f&t=\".concat(nameMovie, \"&y=\").concat(yearMovie), fetcher);\n        const array = [];\n        array.push(data);\n        if (error) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n            className: \"text-center py-2\",\n            children: \"Nenhum Resultados Encontrado\"\n        }, void 0, false, {\n            fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next4\\\\pages\\\\movieTest.js\",\n            lineNumber: 32,\n            columnNumber: 27\n        }, this);\n        if (!data) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Load, {}, void 0, false, {\n            fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next4\\\\pages\\\\movieTest.js\",\n            lineNumber: 33,\n            columnNumber: 27\n        }, this);\n        if (array.length != undefined) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-center py-2\",\n                        children: \"Resultados\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next4\\\\pages\\\\movieTest.js\",\n                        lineNumber: 37,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CardMovie, {\n                        datas: array,\n                        typeBusca: typeSearch\n                    }, void 0, false, {\n                        fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next4\\\\pages\\\\movieTest.js\",\n                        lineNumber: 38,\n                        columnNumber: 21\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next4\\\\pages\\\\movieTest.js\",\n                lineNumber: 36,\n                columnNumber: 17\n            }, this);\n        }\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n            className: \"text-center py-2\",\n            children: \"Nenhum Resultados Encontrado\"\n        }, void 0, false, {\n            fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next4\\\\pages\\\\movieTest.js\",\n            lineNumber: 42,\n            columnNumber: 16\n        }, this);\n    } else {\n        var _data;\n        const { data, error } = (0,swr__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"https://www.omdbapi.com/?apikey=cc202b3f&s=\".concat(nameMovie), fetcher);\n        if (error) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n            className: \"text-center py-2\",\n            children: \"Nenhum Resultados Encontrado\"\n        }, void 0, false, {\n            fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next4\\\\pages\\\\movieTest.js\",\n            lineNumber: 50,\n            columnNumber: 27\n        }, this);\n        if (!data) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Load, {}, void 0, false, {\n            fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next4\\\\pages\\\\movieTest.js\",\n            lineNumber: 51,\n            columnNumber: 27\n        }, this);\n        if (((_data = data) === null || _data === void 0 ? void 0 : _data.Search) != undefined) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-center py-2\",\n                        children: \"Resultados\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next4\\\\pages\\\\movieTest.js\",\n                        lineNumber: 55,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CardMovie, {\n                        datas: data,\n                        typeBusca: typeSearch\n                    }, void 0, false, {\n                        fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next4\\\\pages\\\\movieTest.js\",\n                        lineNumber: 56,\n                        columnNumber: 21\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next4\\\\pages\\\\movieTest.js\",\n                lineNumber: 54,\n                columnNumber: 17\n            }, this);\n        }\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n            className: \"text-center py-2\",\n            children: \"Nenhum Resultados Encontrado\"\n        }, void 0, false, {\n            fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next4\\\\pages\\\\movieTest.js\",\n            lineNumber: 60,\n            columnNumber: 16\n        }, this);\n    }\n}\n_s(Movies2, \"NvQiQiaF6ewnn8GNWt73q1wezRo=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter,\n        swr__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n    ];\n});\n_c = Movies2;\nfunction MovieLink(param) {\n    let { movie } = param;\n    _s1();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const naveMovie = ()=>{\n        router.push({\n            pathname: \"/movieDetails\",\n            query: {\n                id: movie.imdbID\n            }\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        onClick: naveMovie,\n        className: (_styles_showMovie_module_css__WEBPACK_IMPORTED_MODULE_4___default().card),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_showMovie_module_css__WEBPACK_IMPORTED_MODULE_4___default().poster),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: movie.Poster\n                }, void 0, false, {\n                    fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next4\\\\pages\\\\movieTest.js\",\n                    lineNumber: 78,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next4\\\\pages\\\\movieTest.js\",\n                lineNumber: 77,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(DetailsMovie, {\n                name: movie.Title,\n                year: movie.Year\n            }, void 0, false, {\n                fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next4\\\\pages\\\\movieTest.js\",\n                lineNumber: 80,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next4\\\\pages\\\\movieTest.js\",\n        lineNumber: 76,\n        columnNumber: 9\n    }, this);\n}\n_s1(MovieLink, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c1 = MovieLink;\nfunction CardMovie(props) {\n    var _datas, _datas1;\n    const { datas, typeBusca } = props;\n    return typeBusca == \"byMovie\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_showMovie_module_css__WEBPACK_IMPORTED_MODULE_4___default().containerCard),\n        children: (_datas = datas) === null || _datas === void 0 ? void 0 : _datas.map((m)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MovieLink, {\n                movie: m\n            }, void 0, false, {\n                fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next4\\\\pages\\\\movieTest.js\",\n                lineNumber: 92,\n                columnNumber: 13\n            }, this))\n    }, void 0, false, {\n        fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next4\\\\pages\\\\movieTest.js\",\n        lineNumber: 91,\n        columnNumber: 9\n    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_showMovie_module_css__WEBPACK_IMPORTED_MODULE_4___default().containerCard),\n        children: (_datas1 = datas) === null || _datas1 === void 0 ? void 0 : _datas1.Search.map((m)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MovieLink, {\n                movie: m\n            }, void 0, false, {\n                fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next4\\\\pages\\\\movieTest.js\",\n                lineNumber: 96,\n                columnNumber: 13\n            }, this))\n    }, void 0, false, {\n        fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next4\\\\pages\\\\movieTest.js\",\n        lineNumber: 95,\n        columnNumber: 9\n    }, this);\n}\n_c2 = CardMovie;\nfunction Load() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_showMovie_module_css__WEBPACK_IMPORTED_MODULE_4___default().fade),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            class: \"spinner-border text-info\",\n            role: \"status\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                class: \"visually-hidden\",\n                children: \"Loading...\"\n            }, void 0, false, {\n                fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next4\\\\pages\\\\movieTest.js\",\n                lineNumber: 105,\n                columnNumber: 17\n            }, this)\n        }, void 0, false, {\n            fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next4\\\\pages\\\\movieTest.js\",\n            lineNumber: 104,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next4\\\\pages\\\\movieTest.js\",\n        lineNumber: 103,\n        columnNumber: 9\n    }, this);\n}\n_c3 = Load;\nfunction DetailsMovie(props) {\n    const { name, year } = props;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_showMovie_module_css__WEBPACK_IMPORTED_MODULE_4___default().details),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                className: (_styles_showMovie_module_css__WEBPACK_IMPORTED_MODULE_4___default().h3),\n                children: name\n            }, void 0, false, {\n                fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next4\\\\pages\\\\movieTest.js\",\n                lineNumber: 116,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: (_styles_showMovie_module_css__WEBPACK_IMPORTED_MODULE_4___default().p),\n                children: year\n            }, void 0, false, {\n                fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next4\\\\pages\\\\movieTest.js\",\n                lineNumber: 117,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next4\\\\pages\\\\movieTest.js\",\n        lineNumber: 115,\n        columnNumber: 9\n    }, this);\n}\n_c4 = DetailsMovie;\nasync function fetcher(url) {\n    const res = await fetch(url);\n    const json = await res.json();\n    return json;\n}\nvar _c, _c1, _c2, _c3, _c4;\n$RefreshReg$(_c, \"Movies2\");\n$RefreshReg$(_c1, \"MovieLink\");\n$RefreshReg$(_c2, \"CardMovie\");\n$RefreshReg$(_c3, \"Load\");\n$RefreshReg$(_c4, \"DetailsMovie\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SUFBO0lBUjNDLE1BQU0sRUFBQ0EsS0FBSyxFQUFFQyxTQUFTLEVBQUMsR0FBR21CO0lBRTNCLE9BQ0luQixhQUFhLDBCQUNiLDhEQUFDSDtRQUFJSixXQUFXdEIsbUZBQW9CO21CQUFHNEIsU0FBQUEsbUJBQUFBLDZCQUFBQSxPQUFPc0IsR0FBRyxDQUFDLENBQUNDLGtCQUMvQyw4REFBQ3BCO2dCQUFVQyxPQUFPbUI7Ozs7Ozs7Ozs7NkJBR3RCLDhEQUFDekI7UUFBSUosV0FBV3RCLG1GQUFvQjttQkFBRzRCLFVBQUFBLG1CQUFBQSw4QkFBQUEsUUFBT0UsTUFBTSxDQUFDb0IsR0FBRyxDQUFDLENBQUNDLGtCQUN0RCw4REFBQ3BCO2dCQUFVQyxPQUFPbUI7Ozs7Ozs7Ozs7O0FBRzlCO01BZFN4QjtBQWdCVCxTQUFTSjtJQUNMLHFCQUNJLDhEQUFDRztRQUFJSixXQUFXdEIsMEVBQVc7a0JBQ3ZCLDRFQUFDMEI7WUFBSTJCLE9BQU07WUFBMkJDLE1BQUs7c0JBQ3ZDLDRFQUFDQztnQkFBS0YsT0FBTTswQkFBa0I7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJOUM7TUFSUzlCO0FBVVQsU0FBU29CLGFBQWFLLEtBQUs7SUFDdkIsTUFBTSxFQUFDSixJQUFJLEVBQUVFLElBQUksRUFBQyxHQUFHRTtJQUVyQixxQkFDSSw4REFBQ3RCO1FBQUlKLFdBQVd0Qiw2RUFBYzs7MEJBQzFCLDhEQUFDeUQ7Z0JBQUduQyxXQUFXdEIsd0VBQVM7MEJBQUc0Qzs7Ozs7OzBCQUMzQiw4REFBQ2M7Z0JBQUVwQyxXQUFXdEIsdUVBQVE7MEJBQUc4Qzs7Ozs7Ozs7Ozs7O0FBSXJDO01BVlNIO0FBWVQsZUFBZTdCLFFBQVFaLEdBQUc7SUFDdEIsTUFBTUMsTUFBTSxNQUFNQyxNQUFNRjtJQUN4QixNQUFNRyxPQUFPLE1BQU1GLElBQUlFLElBQUk7SUFDM0IsT0FBT0E7QUFDWCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9tb3ZpZVRlc3QuanM/OTk1MSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB1c2VTV1IgZnJvbSAnc3dyJztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9zaG93TW92aWUubW9kdWxlLmNzcydcclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGZldGNoZXIwMih1cmwpe1xyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2godXJsKVxyXG4gICAgY29uc3QganNvbiA9IGF3YWl0IHJlcy5qc29uKClcclxuICAgIHJldHVybiBqc29uXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1vdmllczIoKSB7XHJcblxyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgICBjb25zdCB7IG5hbWVNb3ZpZSwgeWVhck1vdmllLCB0eXBlU2VhcmNoIH0gPSByb3V0ZXIucXVlcnk7XHJcblxyXG4gICAgY29uc3Qge2RhdGFJbmZvLCBlcnJvckluZm99ID0gdXNlU1dSKGBodHRwczovL2V4dHJlbWUtaXAtbG9va3VwLmNvbS9qc29uIGAsZmV0Y2hlcilcclxuICAgIGlmKGRhdGFJbmZvKXtcclxuICAgICAgICBjb25zb2xlLmxvZygnZW50cm91JylcclxuICAgICAgICBjb25zb2xlLmxvZyhgJHtkYXRhSW5mb31gKVxyXG4gICAgfVxyXG5cclxuICAgIGlmKHR5cGVTZWFyY2ggPT0gJ2J5TW92aWUnKXtcclxuICAgICAgICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSB1c2VTV1IoXHJcbiAgICAgICAgICAgIGBodHRwczovL3d3dy5vbWRiYXBpLmNvbS8/YXBpa2V5PWNjMjAyYjNmJnQ9JHtuYW1lTW92aWV9Jnk9JHt5ZWFyTW92aWV9YCxcclxuICAgICAgICAgICAgZmV0Y2hlclxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIGNvbnN0IGFycmF5ID0gW11cclxuICAgICAgICBhcnJheS5wdXNoKGRhdGEpXHJcbiAgICBcclxuICAgICAgICBpZiAoZXJyb3IpIHJldHVybiA8aDEgY2xhc3NOYW1lPSd0ZXh0LWNlbnRlciBweS0yJz5OZW5odW0gUmVzdWx0YWRvcyBFbmNvbnRyYWRvPC9oMT5cclxuICAgICAgICBpZiAoIWRhdGEpIHJldHVybiA8TG9hZC8+XHJcbiAgICAgICAgaWYoYXJyYXkubGVuZ3RoICE9IHVuZGVmaW5lZCl7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9J3RleHQtY2VudGVyIHB5LTInPlJlc3VsdGFkb3M8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDYXJkTW92aWUgZGF0YXM9e2FycmF5fSB0eXBlQnVzY2E9e3R5cGVTZWFyY2h9Lz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gPGgxIGNsYXNzTmFtZT0ndGV4dC1jZW50ZXIgcHktMic+TmVuaHVtIFJlc3VsdGFkb3MgRW5jb250cmFkbzwvaDE+XHJcbiAgICB9XHJcbiAgICBlbHNle1xyXG4gICAgICAgIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IHVzZVNXUihcclxuICAgICAgICAgICAgYGh0dHBzOi8vd3d3Lm9tZGJhcGkuY29tLz9hcGlrZXk9Y2MyMDJiM2Ymcz0ke25hbWVNb3ZpZX1gLFxyXG4gICAgICAgICAgICBmZXRjaGVyXHJcbiAgICAgICAgKTtcclxuICAgIFxyXG4gICAgICAgIGlmIChlcnJvcikgcmV0dXJuIDxoMSBjbGFzc05hbWU9J3RleHQtY2VudGVyIHB5LTInPk5lbmh1bSBSZXN1bHRhZG9zIEVuY29udHJhZG88L2gxPlxyXG4gICAgICAgIGlmICghZGF0YSkgcmV0dXJuIDxMb2FkLz5cclxuICAgICAgICBpZihkYXRhPy5TZWFyY2ggIT0gdW5kZWZpbmVkKXtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT0ndGV4dC1jZW50ZXIgcHktMic+UmVzdWx0YWRvczwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgPENhcmRNb3ZpZSBkYXRhcz17ZGF0YX0gdHlwZUJ1c2NhPXt0eXBlU2VhcmNofS8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIDxoMSBjbGFzc05hbWU9J3RleHQtY2VudGVyIHB5LTInPk5lbmh1bSBSZXN1bHRhZG9zIEVuY29udHJhZG88L2gxPlxyXG4gICAgICAgIFxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBNb3ZpZUxpbmsoe21vdmllfSl7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG5cclxuICAgIGNvbnN0IG5hdmVNb3ZpZSA9ICgpID0+IHtcclxuICAgICAgICByb3V0ZXIucHVzaCh7XHJcbiAgICAgICAgICAgIHBhdGhuYW1lOiAnL21vdmllRGV0YWlscycsXHJcbiAgICAgICAgICAgIHF1ZXJ5OiB7aWQ6IG1vdmllLmltZGJJRH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2IG9uQ2xpY2s9e25hdmVNb3ZpZX0gY2xhc3NOYW1lPXtzdHlsZXMuY2FyZH0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucG9zdGVyfT5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPXttb3ZpZS5Qb3N0ZXJ9Lz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxEZXRhaWxzTW92aWUgbmFtZT17bW92aWUuVGl0bGV9IHllYXI9e21vdmllLlllYXJ9Lz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZnVuY3Rpb24gQ2FyZE1vdmllKHByb3BzKXtcclxuXHJcbiAgICBjb25zdCB7ZGF0YXMsIHR5cGVCdXNjYX0gPSBwcm9wc1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgdHlwZUJ1c2NhID09ICdieU1vdmllJyA/XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJDYXJkfT57ZGF0YXM/Lm1hcCgobSkgPT4gKFxyXG4gICAgICAgICAgICA8TW92aWVMaW5rIG1vdmllPXttfS8+XHJcbiAgICAgICAgKSl9PC9kaXY+XHJcbiAgICAgICAgOlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyQ2FyZH0+e2RhdGFzPy5TZWFyY2gubWFwKChtKSA9PiAoXHJcbiAgICAgICAgICAgIDxNb3ZpZUxpbmsgbW92aWU9e219Lz5cclxuICAgICAgICApKX08L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZnVuY3Rpb24gTG9hZCgpe1xyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZmFkZX0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzcGlubmVyLWJvcmRlciB0ZXh0LWluZm9cIiByb2xlPVwic3RhdHVzXCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInZpc3VhbGx5LWhpZGRlblwiPkxvYWRpbmcuLi48L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5mdW5jdGlvbiBEZXRhaWxzTW92aWUocHJvcHMpe1xyXG4gICAgY29uc3Qge25hbWUsIHllYXJ9ID0gcHJvcHM7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRldGFpbHN9PlxyXG4gICAgICAgICAgICA8aDMgY2xhc3NOYW1lPXtzdHlsZXMuaDN9PntuYW1lfTwvaDM+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnB9Pnt5ZWFyfTwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICBcclxuICAgIClcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gZmV0Y2hlcih1cmwpIHtcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKHVybCk7XHJcbiAgICBjb25zdCBqc29uID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICAgIHJldHVybiBqc29uO1xyXG59Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VTV1IiLCJ1c2VSb3V0ZXIiLCJzdHlsZXMiLCJmZXRjaGVyMDIiLCJ1cmwiLCJyZXMiLCJmZXRjaCIsImpzb24iLCJNb3ZpZXMyIiwicm91dGVyIiwibmFtZU1vdmllIiwieWVhck1vdmllIiwidHlwZVNlYXJjaCIsInF1ZXJ5IiwiZGF0YUluZm8iLCJlcnJvckluZm8iLCJmZXRjaGVyIiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJlcnJvciIsImFycmF5IiwicHVzaCIsImgxIiwiY2xhc3NOYW1lIiwiTG9hZCIsImxlbmd0aCIsInVuZGVmaW5lZCIsImRpdiIsIkNhcmRNb3ZpZSIsImRhdGFzIiwidHlwZUJ1c2NhIiwiU2VhcmNoIiwiTW92aWVMaW5rIiwibW92aWUiLCJuYXZlTW92aWUiLCJwYXRobmFtZSIsImlkIiwiaW1kYklEIiwib25DbGljayIsImNhcmQiLCJwb3N0ZXIiLCJpbWciLCJzcmMiLCJQb3N0ZXIiLCJEZXRhaWxzTW92aWUiLCJuYW1lIiwiVGl0bGUiLCJ5ZWFyIiwiWWVhciIsInByb3BzIiwiY29udGFpbmVyQ2FyZCIsIm1hcCIsIm0iLCJmYWRlIiwiY2xhc3MiLCJyb2xlIiwic3BhbiIsImRldGFpbHMiLCJoMyIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/movieTest.js\n"));

/***/ })

});