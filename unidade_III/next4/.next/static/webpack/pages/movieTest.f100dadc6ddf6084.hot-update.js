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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Movies2; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swr */ \"./node_modules/swr/core/dist/index.mjs\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\n\nfunction Movies2() {\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const { nameMovie, yearMovie, typeSearch } = router.query;\n    if (typeSearch == \"byMovie\") {\n        var _array;\n        const { data, error } = (0,swr__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"https://www.omdbapi.com/?apikey=cc202b3f&t=\".concat(nameMovie, \"&y=\").concat(yearMovie), fetcher);\n        const array = [];\n        array.push(data);\n        if (error) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"falha na requisi\\xe7\\xe3o...\"\n        }, void 0, false, {\n            fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next4\\\\pages\\\\movieTest.js\",\n            lineNumber: 19,\n            columnNumber: 27\n        }, this);\n        if (!data) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"carregando...\"\n        }, void 0, false, {\n            fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next4\\\\pages\\\\movieTest.js\",\n            lineNumber: 20,\n            columnNumber: 27\n        }, this);\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                (_array = array) === null || _array === void 0 ? void 0 : _array.map((m)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MovieLink, {\n                        movie: m\n                    }, m.imdbID, false, {\n                        fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next4\\\\pages\\\\movieTest.js\",\n                        lineNumber: 25,\n                        columnNumber: 21\n                    }, this)),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: styles.containerRes,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"text-center py-2\",\n                            children: \"Resultados\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next4\\\\pages\\\\movieTest.js\",\n                            lineNumber: 28,\n                            columnNumber: 29\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CardMovie, {\n                            datas: moviesData,\n                            typeBusca: tipoBusca\n                        }, void 0, false, {\n                            fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next4\\\\pages\\\\movieTest.js\",\n                            lineNumber: 29,\n                            columnNumber: 29\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next4\\\\pages\\\\movieTest.js\",\n                    lineNumber: 27,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next4\\\\pages\\\\movieTest.js\",\n            lineNumber: 23,\n            columnNumber: 13\n        }, this);\n    } else {\n        const { data, error } = (0,swr__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"https://www.omdbapi.com/?apikey=cc202b3f&s=\".concat(nameMovie), fetcher);\n        if (error) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"falha na requisi\\xe7\\xe3o...\"\n        }, void 0, false, {\n            fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next4\\\\pages\\\\movieTest.js\",\n            lineNumber: 41,\n            columnNumber: 27\n        }, this);\n        if (!data) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"carregando...\"\n        }, void 0, false, {\n            fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next4\\\\pages\\\\movieTest.js\",\n            lineNumber: 42,\n            columnNumber: 27\n        }, this);\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: data.Search.map((m)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MovieLink, {\n                    movie: m\n                }, m.imdbID, false, {\n                    fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next4\\\\pages\\\\movieTest.js\",\n                    lineNumber: 47,\n                    columnNumber: 21\n                }, this))\n        }, void 0, false, {\n            fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next4\\\\pages\\\\movieTest.js\",\n            lineNumber: 45,\n            columnNumber: 13\n        }, this);\n    }\n}\n_s(Movies2, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = Movies2;\nasync function fetcher(url) {\n    const res = await fetch(url);\n    const json = await res.json();\n    return json;\n}\nfunction MovieLink(param) {\n    let { movie } = param;\n    _s1();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const handleClick = ()=>{\n        router.push({\n            pathname: \"/details\",\n            query: {\n                id: movie.imdbID\n            }\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            onClick: handleClick,\n            style: {\n                cursor: \"pointer\"\n            },\n            children: [\n                movie.Title,\n                \" --- \",\n                movie.Year\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next4\\\\pages\\\\movieTest.js\",\n            lineNumber: 74,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next4\\\\pages\\\\movieTest.js\",\n        lineNumber: 73,\n        columnNumber: 9\n    }, this);\n}\n_s1(MovieLink, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c1 = MovieLink;\nvar _c, _c1;\n$RefreshReg$(_c, \"Movies2\");\n$RefreshReg$(_c1, \"MovieLink\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9tb3ZpZVRlc3QuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUF3QztBQUNmO0FBQ2U7QUFFekIsU0FBU0k7O0lBRXBCLE1BQU1DLFNBQVNGLHNEQUFTQTtJQUN4QixNQUFNLEVBQUVHLFNBQVMsRUFBRUMsU0FBUyxFQUFFQyxVQUFVLEVBQUUsR0FBR0gsT0FBT0ksS0FBSztJQUV6RCxJQUFHRCxjQUFjLFdBQVU7WUFjZEU7UUFiVCxNQUFNLEVBQUVDLElBQUksRUFBRUMsS0FBSyxFQUFFLEdBQUdWLCtDQUFNQSxDQUMxQiw4Q0FBNkRLLE9BQWZELFdBQVUsT0FBZSxPQUFWQyxZQUM3RE07UUFHSixNQUFNSCxRQUFRLEVBQUU7UUFDaEJBLE1BQU1JLElBQUksQ0FBQ0g7UUFFWCxJQUFJQyxPQUFPLHFCQUFPLDhEQUFDRztzQkFBSTs7Ozs7O1FBQ3ZCLElBQUksQ0FBQ0osTUFBTSxxQkFBTyw4REFBQ0k7c0JBQUk7Ozs7OztRQUV2QixxQkFDSSw4REFBQ0E7O2lCQUNJTCxTQUFBQSxtQkFBQUEsNkJBQUFBLE9BQU9NLEdBQUcsQ0FBQyxDQUFDQyxrQkFDVCw4REFBQ0M7d0JBQXlCQyxPQUFPRjt1QkFBakJBLEVBQUVHLE1BQU07Ozs7OzhCQUU1Qiw4REFBQ0w7b0JBQUlNLFdBQVdDLE9BQU9DLFlBQVk7O3NDQUN2Qiw4REFBQ0M7NEJBQUdILFdBQVU7c0NBQW1COzs7Ozs7c0NBQ2pDLDhEQUFDSTs0QkFBVUMsT0FBT0M7NEJBQVlDLFdBQVdDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFLakUsT0FDSTtRQUNBLE1BQU0sRUFBRWxCLElBQUksRUFBRUMsS0FBSyxFQUFFLEdBQUdWLCtDQUFNQSxDQUMxQiw4Q0FBd0QsT0FBVkksWUFDOUNPO1FBR0osSUFBSUQsT0FBTyxxQkFBTyw4REFBQ0c7c0JBQUk7Ozs7OztRQUN2QixJQUFJLENBQUNKLE1BQU0scUJBQU8sOERBQUNJO3NCQUFJOzs7Ozs7UUFFdkIscUJBQ0ksOERBQUNBO3NCQUNJSixLQUFLbUIsTUFBTSxDQUFDZCxHQUFHLENBQUMsQ0FBQ0Msa0JBQ2QsOERBQUNDO29CQUF5QkMsT0FBT0Y7bUJBQWpCQSxFQUFFRyxNQUFNOzs7Ozs7Ozs7O0lBSXhDO0FBQ0o7R0EvQ3dCaEI7O1FBRUxELGtEQUFTQTs7O0tBRkpDO0FBbUR4QixlQUFlUyxRQUFRa0IsR0FBRztJQUN0QixNQUFNQyxNQUFNLE1BQU1DLE1BQU1GO0lBQ3hCLE1BQU1HLE9BQU8sTUFBTUYsSUFBSUUsSUFBSTtJQUMzQixPQUFPQTtBQUNYO0FBRUEsU0FBU2hCLFVBQVUsS0FBUztRQUFULEVBQUVDLEtBQUssRUFBRSxHQUFUOztJQUNmLE1BQU1kLFNBQVNGLHNEQUFTQTtJQUV4QixNQUFNZ0MsY0FBYztRQUNoQjlCLE9BQU9TLElBQUksQ0FBQztZQUNSc0IsVUFBVTtZQUNWM0IsT0FBTztnQkFBRTRCLElBQUlsQixNQUFNQyxNQUFNO1lBQUM7UUFDOUI7SUFDSjtJQUVBLHFCQUNJLDhEQUFDTDtrQkFDRyw0RUFBQ0E7WUFBSXVCLFNBQVNIO1lBQWFJLE9BQU87Z0JBQUVDLFFBQVE7WUFBVTs7Z0JBQ2pEckIsTUFBTXNCLEtBQUs7Z0JBQUM7Z0JBQU10QixNQUFNdUIsSUFBSTs7Ozs7Ozs7Ozs7O0FBSTdDO0lBakJTeEI7O1FBQ1VmLGtEQUFTQTs7O01BRG5CZSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9tb3ZpZVRlc3QuanM/OTk1MSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB1c2VTV1IgZnJvbSAnc3dyJztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTW92aWVzMigpIHtcclxuXHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICAgIGNvbnN0IHsgbmFtZU1vdmllLCB5ZWFyTW92aWUsIHR5cGVTZWFyY2ggfSA9IHJvdXRlci5xdWVyeTtcclxuXHJcbiAgICBpZih0eXBlU2VhcmNoID09ICdieU1vdmllJyl7XHJcbiAgICAgICAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gdXNlU1dSKFxyXG4gICAgICAgICAgICBgaHR0cHM6Ly93d3cub21kYmFwaS5jb20vP2FwaWtleT1jYzIwMmIzZiZ0PSR7bmFtZU1vdmllfSZ5PSR7eWVhck1vdmllfWAsXHJcbiAgICAgICAgICAgIGZldGNoZXJcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICBjb25zdCBhcnJheSA9IFtdXHJcbiAgICAgICAgYXJyYXkucHVzaChkYXRhKVxyXG4gICAgXHJcbiAgICAgICAgaWYgKGVycm9yKSByZXR1cm4gPGRpdj5mYWxoYSBuYSByZXF1aXNpw6fDo28uLi48L2Rpdj47XHJcbiAgICAgICAgaWYgKCFkYXRhKSByZXR1cm4gPGRpdj5jYXJyZWdhbmRvLi4uPC9kaXY+O1xyXG4gICAgXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIHthcnJheT8ubWFwKChtKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPE1vdmllTGluayBrZXk9e20uaW1kYklEfSBtb3ZpZT17bX0gLz5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJSZXN9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT0ndGV4dC1jZW50ZXIgcHktMic+UmVzdWx0YWRvczwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZE1vdmllIGRhdGFzPXttb3ZpZXNEYXRhfSB0eXBlQnVzY2E9e3RpcG9CdXNjYX0vPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICBcclxuICAgICAgICApO1xyXG4gICAgfVxyXG4gICAgZWxzZXtcclxuICAgICAgICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSB1c2VTV1IoXHJcbiAgICAgICAgICAgIGBodHRwczovL3d3dy5vbWRiYXBpLmNvbS8/YXBpa2V5PWNjMjAyYjNmJnM9JHtuYW1lTW92aWV9YCxcclxuICAgICAgICAgICAgZmV0Y2hlclxyXG4gICAgICAgICk7XHJcbiAgICBcclxuICAgICAgICBpZiAoZXJyb3IpIHJldHVybiA8ZGl2PmZhbGhhIG5hIHJlcXVpc2nDp8Ojby4uLjwvZGl2PjtcclxuICAgICAgICBpZiAoIWRhdGEpIHJldHVybiA8ZGl2PmNhcnJlZ2FuZG8uLi48L2Rpdj47XHJcbiAgICBcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAge2RhdGEuU2VhcmNoLm1hcCgobSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxNb3ZpZUxpbmsga2V5PXttLmltZGJJRH0gbW92aWU9e219IC8+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG5hc3luYyBmdW5jdGlvbiBmZXRjaGVyKHVybCkge1xyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2godXJsKTtcclxuICAgIGNvbnN0IGpzb24gPSBhd2FpdCByZXMuanNvbigpO1xyXG4gICAgcmV0dXJuIGpzb247XHJcbn1cclxuXHJcbmZ1bmN0aW9uIE1vdmllTGluayh7IG1vdmllIH0pIHtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZUNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgIHJvdXRlci5wdXNoKHtcclxuICAgICAgICAgICAgcGF0aG5hbWU6ICcvZGV0YWlscycsXHJcbiAgICAgICAgICAgIHF1ZXJ5OiB7IGlkOiBtb3ZpZS5pbWRiSUQgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxkaXYgb25DbGljaz17aGFuZGxlQ2xpY2t9IHN0eWxlPXt7IGN1cnNvcjogJ3BvaW50ZXInIH19PlxyXG4gICAgICAgICAgICAgICAge21vdmllLlRpdGxlfSAtLS0ge21vdmllLlllYXJ9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlU1dSIiwidXNlUm91dGVyIiwiTW92aWVzMiIsInJvdXRlciIsIm5hbWVNb3ZpZSIsInllYXJNb3ZpZSIsInR5cGVTZWFyY2giLCJxdWVyeSIsImFycmF5IiwiZGF0YSIsImVycm9yIiwiZmV0Y2hlciIsInB1c2giLCJkaXYiLCJtYXAiLCJtIiwiTW92aWVMaW5rIiwibW92aWUiLCJpbWRiSUQiLCJjbGFzc05hbWUiLCJzdHlsZXMiLCJjb250YWluZXJSZXMiLCJoMSIsIkNhcmRNb3ZpZSIsImRhdGFzIiwibW92aWVzRGF0YSIsInR5cGVCdXNjYSIsInRpcG9CdXNjYSIsIlNlYXJjaCIsInVybCIsInJlcyIsImZldGNoIiwianNvbiIsImhhbmRsZUNsaWNrIiwicGF0aG5hbWUiLCJpZCIsIm9uQ2xpY2siLCJzdHlsZSIsImN1cnNvciIsIlRpdGxlIiwiWWVhciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/movieTest.js\n"));

/***/ })

});