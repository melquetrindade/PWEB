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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Movies2; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swr */ \"./node_modules/swr/core/dist/index.mjs\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\n\nfunction Movies2() {\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const { nameMovie, yearMovie, typeSearch } = router.query;\n    if (typeSearch == \"byMovie\") {\n        const { data, error } = (0,swr__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"https://www.omdbapi.com/?apikey=cc202b3f&t=\".concat(nameMovie, \"&y=\").concat(yearMovie), fetcher);\n        const array = [];\n        array.push(resJson);\n        if (error) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"falha na requisi\\xe7\\xe3o...\"\n        }, void 0, false, {\n            fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next4\\\\pages\\\\movieTest.js\",\n            lineNumber: 19,\n            columnNumber: 27\n        }, this);\n        if (!data) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"carregando...\"\n        }, void 0, false, {\n            fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next4\\\\pages\\\\movieTest.js\",\n            lineNumber: 20,\n            columnNumber: 27\n        }, this);\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: data.Search.map((m)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MovieLink, {\n                    movie: m\n                }, m.imdbID, false, {\n                    fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next4\\\\pages\\\\movieTest.js\",\n                    lineNumber: 25,\n                    columnNumber: 21\n                }, this))\n        }, void 0, false, {\n            fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next4\\\\pages\\\\movieTest.js\",\n            lineNumber: 23,\n            columnNumber: 13\n        }, this);\n    } else {\n        const { data, error } = (0,swr__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"https://www.omdbapi.com/?apikey=cc202b3f&s=\".concat(nameMovie), fetcher);\n        if (error) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"falha na requisi\\xe7\\xe3o...\"\n        }, void 0, false, {\n            fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next4\\\\pages\\\\movieTest.js\",\n            lineNumber: 36,\n            columnNumber: 27\n        }, this);\n        if (!data) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"carregando...\"\n        }, void 0, false, {\n            fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next4\\\\pages\\\\movieTest.js\",\n            lineNumber: 37,\n            columnNumber: 27\n        }, this);\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: data.Search.map((m)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MovieLink, {\n                    movie: m\n                }, m.imdbID, false, {\n                    fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next4\\\\pages\\\\movieTest.js\",\n                    lineNumber: 42,\n                    columnNumber: 21\n                }, this))\n        }, void 0, false, {\n            fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next4\\\\pages\\\\movieTest.js\",\n            lineNumber: 40,\n            columnNumber: 13\n        }, this);\n    }\n}\n_s(Movies2, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = Movies2;\nasync function fetcher(url) {\n    const res = await fetch(url);\n    const json = await res.json();\n    return json;\n}\nfunction MovieLink(param) {\n    let { movie } = param;\n    _s1();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const handleClick = ()=>{\n        router.push({\n            pathname: \"/details\",\n            query: {\n                id: movie.imdbID\n            }\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            onClick: handleClick,\n            style: {\n                cursor: \"pointer\"\n            },\n            children: [\n                movie.Title,\n                \" --- \",\n                movie.Year\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next4\\\\pages\\\\movieTest.js\",\n            lineNumber: 69,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next4\\\\pages\\\\movieTest.js\",\n        lineNumber: 68,\n        columnNumber: 9\n    }, this);\n}\n_s1(MovieLink, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c1 = MovieLink;\nvar _c, _c1;\n$RefreshReg$(_c, \"Movies2\");\n$RefreshReg$(_c1, \"MovieLink\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9tb3ZpZVRlc3QuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUF3QztBQUNmO0FBQ2U7QUFFekIsU0FBU0k7O0lBRXBCLE1BQU1DLFNBQVNGLHNEQUFTQTtJQUN4QixNQUFNLEVBQUVHLFNBQVMsRUFBRUMsU0FBUyxFQUFFQyxVQUFVLEVBQUUsR0FBR0gsT0FBT0ksS0FBSztJQUV6RCxJQUFHRCxjQUFjLFdBQVU7UUFDdkIsTUFBTSxFQUFFRSxJQUFJLEVBQUVDLEtBQUssRUFBRSxHQUFHVCwrQ0FBTUEsQ0FDMUIsOENBQTZESyxPQUFmRCxXQUFVLE9BQWUsT0FBVkMsWUFDN0RLO1FBR0osTUFBTUMsUUFBUSxFQUFFO1FBQ2hCQSxNQUFNQyxJQUFJLENBQUNDO1FBRVgsSUFBSUosT0FBTyxxQkFBTyw4REFBQ0s7c0JBQUk7Ozs7OztRQUN2QixJQUFJLENBQUNOLE1BQU0scUJBQU8sOERBQUNNO3NCQUFJOzs7Ozs7UUFFdkIscUJBQ0ksOERBQUNBO3NCQUNJTixLQUFLTyxNQUFNLENBQUNDLEdBQUcsQ0FBQyxDQUFDQyxrQkFDZCw4REFBQ0M7b0JBQXlCQyxPQUFPRjttQkFBakJBLEVBQUVHLE1BQU07Ozs7Ozs7Ozs7SUFJeEMsT0FDSTtRQUNBLE1BQU0sRUFBRVosSUFBSSxFQUFFQyxLQUFLLEVBQUUsR0FBR1QsK0NBQU1BLENBQzFCLDhDQUF3RCxPQUFWSSxZQUM5Q007UUFHSixJQUFJRCxPQUFPLHFCQUFPLDhEQUFDSztzQkFBSTs7Ozs7O1FBQ3ZCLElBQUksQ0FBQ04sTUFBTSxxQkFBTyw4REFBQ007c0JBQUk7Ozs7OztRQUV2QixxQkFDSSw4REFBQ0E7c0JBQ0lOLEtBQUtPLE1BQU0sQ0FBQ0MsR0FBRyxDQUFDLENBQUNDLGtCQUNkLDhEQUFDQztvQkFBeUJDLE9BQU9GO21CQUFqQkEsRUFBRUcsTUFBTTs7Ozs7Ozs7OztJQUl4QztBQUNKO0dBMUN3QmxCOztRQUVMRCxrREFBU0E7OztLQUZKQztBQThDeEIsZUFBZVEsUUFBUVcsR0FBRztJQUN0QixNQUFNQyxNQUFNLE1BQU1DLE1BQU1GO0lBQ3hCLE1BQU1HLE9BQU8sTUFBTUYsSUFBSUUsSUFBSTtJQUMzQixPQUFPQTtBQUNYO0FBRUEsU0FBU04sVUFBVSxLQUFTO1FBQVQsRUFBRUMsS0FBSyxFQUFFLEdBQVQ7O0lBQ2YsTUFBTWhCLFNBQVNGLHNEQUFTQTtJQUV4QixNQUFNd0IsY0FBYztRQUNoQnRCLE9BQU9TLElBQUksQ0FBQztZQUNSYyxVQUFVO1lBQ1ZuQixPQUFPO2dCQUFFb0IsSUFBSVIsTUFBTUMsTUFBTTtZQUFDO1FBQzlCO0lBQ0o7SUFFQSxxQkFDSSw4REFBQ047a0JBQ0csNEVBQUNBO1lBQUljLFNBQVNIO1lBQWFJLE9BQU87Z0JBQUVDLFFBQVE7WUFBVTs7Z0JBQ2pEWCxNQUFNWSxLQUFLO2dCQUFDO2dCQUFNWixNQUFNYSxJQUFJOzs7Ozs7Ozs7Ozs7QUFJN0M7SUFqQlNkOztRQUNVakIsa0RBQVNBOzs7TUFEbkJpQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9tb3ZpZVRlc3QuanM/OTk1MSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB1c2VTV1IgZnJvbSAnc3dyJztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTW92aWVzMigpIHtcclxuXHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICAgIGNvbnN0IHsgbmFtZU1vdmllLCB5ZWFyTW92aWUsIHR5cGVTZWFyY2ggfSA9IHJvdXRlci5xdWVyeTtcclxuXHJcbiAgICBpZih0eXBlU2VhcmNoID09ICdieU1vdmllJyl7XHJcbiAgICAgICAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gdXNlU1dSKFxyXG4gICAgICAgICAgICBgaHR0cHM6Ly93d3cub21kYmFwaS5jb20vP2FwaWtleT1jYzIwMmIzZiZ0PSR7bmFtZU1vdmllfSZ5PSR7eWVhck1vdmllfWAsXHJcbiAgICAgICAgICAgIGZldGNoZXJcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICBjb25zdCBhcnJheSA9IFtdXHJcbiAgICAgICAgYXJyYXkucHVzaChyZXNKc29uKVxyXG4gICAgXHJcbiAgICAgICAgaWYgKGVycm9yKSByZXR1cm4gPGRpdj5mYWxoYSBuYSByZXF1aXNpw6fDo28uLi48L2Rpdj47XHJcbiAgICAgICAgaWYgKCFkYXRhKSByZXR1cm4gPGRpdj5jYXJyZWdhbmRvLi4uPC9kaXY+O1xyXG4gICAgXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIHtkYXRhLlNlYXJjaC5tYXAoKG0pID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8TW92aWVMaW5rIGtleT17bS5pbWRiSUR9IG1vdmllPXttfSAvPlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbiAgICBlbHNle1xyXG4gICAgICAgIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IHVzZVNXUihcclxuICAgICAgICAgICAgYGh0dHBzOi8vd3d3Lm9tZGJhcGkuY29tLz9hcGlrZXk9Y2MyMDJiM2Ymcz0ke25hbWVNb3ZpZX1gLFxyXG4gICAgICAgICAgICBmZXRjaGVyXHJcbiAgICAgICAgKTtcclxuICAgIFxyXG4gICAgICAgIGlmIChlcnJvcikgcmV0dXJuIDxkaXY+ZmFsaGEgbmEgcmVxdWlzacOnw6NvLi4uPC9kaXY+O1xyXG4gICAgICAgIGlmICghZGF0YSkgcmV0dXJuIDxkaXY+Y2FycmVnYW5kby4uLjwvZGl2PjtcclxuICAgIFxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICB7ZGF0YS5TZWFyY2gubWFwKChtKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPE1vdmllTGluayBrZXk9e20uaW1kYklEfSBtb3ZpZT17bX0gLz5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGZldGNoZXIodXJsKSB7XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCh1cmwpO1xyXG4gICAgY29uc3QganNvbiA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgICByZXR1cm4ganNvbjtcclxufVxyXG5cclxuZnVuY3Rpb24gTW92aWVMaW5rKHsgbW92aWUgfSkge1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgcm91dGVyLnB1c2goe1xyXG4gICAgICAgICAgICBwYXRobmFtZTogJy9kZXRhaWxzJyxcclxuICAgICAgICAgICAgcXVlcnk6IHsgaWQ6IG1vdmllLmltZGJJRCB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXtoYW5kbGVDbGlja30gc3R5bGU9e3sgY3Vyc29yOiAncG9pbnRlcicgfX0+XHJcbiAgICAgICAgICAgICAgICB7bW92aWUuVGl0bGV9IC0tLSB7bW92aWUuWWVhcn1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VTV1IiLCJ1c2VSb3V0ZXIiLCJNb3ZpZXMyIiwicm91dGVyIiwibmFtZU1vdmllIiwieWVhck1vdmllIiwidHlwZVNlYXJjaCIsInF1ZXJ5IiwiZGF0YSIsImVycm9yIiwiZmV0Y2hlciIsImFycmF5IiwicHVzaCIsInJlc0pzb24iLCJkaXYiLCJTZWFyY2giLCJtYXAiLCJtIiwiTW92aWVMaW5rIiwibW92aWUiLCJpbWRiSUQiLCJ1cmwiLCJyZXMiLCJmZXRjaCIsImpzb24iLCJoYW5kbGVDbGljayIsInBhdGhuYW1lIiwiaWQiLCJvbkNsaWNrIiwic3R5bGUiLCJjdXJzb3IiLCJUaXRsZSIsIlllYXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/movieTest.js\n"));

/***/ })

});