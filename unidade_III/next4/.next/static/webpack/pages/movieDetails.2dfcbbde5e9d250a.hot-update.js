"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/movieDetails",{

/***/ "./pages/movieDetails.js":
/*!*******************************!*\
  !*** ./pages/movieDetails.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ MovieDetails; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swr */ \"./node_modules/swr/core/dist/index.mjs\");\n/* harmony import */ var _styles_movieDetails_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/movieDetails.module.css */ \"./styles/movieDetails.module.css\");\n/* harmony import */ var _styles_movieDetails_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_movieDetails_module_css__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction MovieDetails() {\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const { id } = router.query;\n    const { data, error } = (0,swr__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\"https://www.omdbapi.com/?apikey=cc202b3f&i=\".concat(id), fetcher);\n    if (error) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n        className: \"text-center py-2\",\n        children: \"Nenhum Resultados Encontrado\"\n    }, void 0, false, {\n        fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next4\\\\pages\\\\movieDetails.js\",\n        lineNumber: 13,\n        columnNumber: 22\n    }, this);\n    if (!data) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Load, {}, void 0, false, {\n        fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next4\\\\pages\\\\movieDetails.js\",\n        lineNumber: 14,\n        columnNumber: 22\n    }, this);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            data.Title,\n            \" -- \",\n            id\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next4\\\\pages\\\\movieDetails.js\",\n        lineNumber: 17,\n        columnNumber: 9\n    }, this);\n}\n_s(MovieDetails, \"mZuyhWoEayG5q+fyCgnn11lj9Sg=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter,\n        swr__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n    ];\n});\n_c = MovieDetails;\nfunction MovieCard(props) {\n    const { movie } = props;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: movie.Poster\n                }, void 0, false, {\n                    fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next4\\\\pages\\\\movieDetails.js\",\n                    lineNumber: 28,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next4\\\\pages\\\\movieDetails.js\",\n                lineNumber: 27,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: movie\n            }, void 0, false, {\n                fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next4\\\\pages\\\\movieDetails.js\",\n                lineNumber: 30,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next4\\\\pages\\\\movieDetails.js\",\n                lineNumber: 31,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next4\\\\pages\\\\movieDetails.js\",\n        lineNumber: 26,\n        columnNumber: 9\n    }, this);\n}\n_c1 = MovieCard;\nasync function fetcher(url) {\n    const res = await fetch(url);\n    const json = await res.json();\n    return json;\n}\nfunction Load() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_movieDetails_module_css__WEBPACK_IMPORTED_MODULE_4___default().fade),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            class: \"spinner-border text-info\",\n            role: \"status\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                class: \"visually-hidden\",\n                children: \"Loading...\"\n            }, void 0, false, {\n                fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next4\\\\pages\\\\movieDetails.js\",\n                lineNumber: 48,\n                columnNumber: 17\n            }, this)\n        }, void 0, false, {\n            fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next4\\\\pages\\\\movieDetails.js\",\n            lineNumber: 47,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next4\\\\pages\\\\movieDetails.js\",\n        lineNumber: 46,\n        columnNumber: 9\n    }, this);\n}\n_c2 = Load;\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"MovieDetails\");\n$RefreshReg$(_c1, \"MovieCard\");\n$RefreshReg$(_c2, \"Load\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9tb3ZpZURldGFpbHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQXdDO0FBQ0E7QUFDZjtBQUM2QjtBQUV2QyxTQUFTSzs7SUFFcEIsTUFBTUMsU0FBU0osc0RBQVNBO0lBQ3hCLE1BQU0sRUFBRUssRUFBRSxFQUFFLEdBQUdELE9BQU9FLEtBQUs7SUFFM0IsTUFBTSxFQUFDQyxJQUFJLEVBQUVDLEtBQUssRUFBQyxHQUFHUCwrQ0FBTUEsQ0FBQyw4Q0FBaUQsT0FBSEksS0FBTUk7SUFFakYsSUFBR0QsT0FBTyxxQkFBTyw4REFBQ0U7UUFBR0MsV0FBVTtrQkFBbUI7Ozs7OztJQUNsRCxJQUFHLENBQUNKLE1BQU0scUJBQU8sOERBQUNLOzs7OztJQUVsQixxQkFDSSw4REFBQ0M7O1lBQUtOLEtBQUtPLEtBQUs7WUFBQztZQUFLVDs7Ozs7OztBQUU5QjtHQWJ3QkY7O1FBRUxILGtEQUFTQTtRQUdGQywyQ0FBTUE7OztLQUxSRTtBQWV4QixTQUFTWSxVQUFVQyxLQUFLO0lBRXBCLE1BQU0sRUFBQ0MsS0FBSyxFQUFDLEdBQUdEO0lBRWhCLHFCQUNJLDhEQUFDSDs7MEJBQ0csOERBQUNBOzBCQUNHLDRFQUFDSztvQkFBSUMsS0FBS0YsTUFBTUcsTUFBTTs7Ozs7Ozs7Ozs7MEJBRTFCLDhEQUFDVjswQkFBSU87Ozs7OzswQkFDTCw4REFBQ0o7Ozs7Ozs7Ozs7O0FBS2I7TUFmU0U7QUFpQlQsZUFBZU4sUUFBUVksR0FBRztJQUN0QixNQUFNQyxNQUFNLE1BQU1DLE1BQU1GO0lBQ3hCLE1BQU1HLE9BQU8sTUFBTUYsSUFBSUUsSUFBSTtJQUMzQixPQUFPQTtBQUNYO0FBRUEsU0FBU1o7SUFDTCxxQkFDSSw4REFBQ0M7UUFBSUYsV0FBV1QsNkVBQVc7a0JBQ3ZCLDRFQUFDVztZQUFJYSxPQUFNO1lBQTJCQyxNQUFLO3NCQUN2Qyw0RUFBQ0M7Z0JBQUtGLE9BQU07MEJBQWtCOzs7Ozs7Ozs7Ozs7Ozs7O0FBSTlDO01BUlNkIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL21vdmllRGV0YWlscy5qcz9kNDcxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgdXNlU1dSIGZyb20gJ3N3cic7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL21vdmllRGV0YWlscy5tb2R1bGUuY3NzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTW92aWVEZXRhaWxzKCl7XHJcblxyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgICBjb25zdCB7IGlkIH0gPSByb3V0ZXIucXVlcnk7XHJcblxyXG4gICAgY29uc3Qge2RhdGEsIGVycm9yfSA9IHVzZVNXUihgaHR0cHM6Ly93d3cub21kYmFwaS5jb20vP2FwaWtleT1jYzIwMmIzZiZpPSR7aWR9YCwgZmV0Y2hlcilcclxuXHJcbiAgICBpZihlcnJvcikgcmV0dXJuIDxoMSBjbGFzc05hbWU9J3RleHQtY2VudGVyIHB5LTInPk5lbmh1bSBSZXN1bHRhZG9zIEVuY29udHJhZG88L2gxPlxyXG4gICAgaWYoIWRhdGEpIHJldHVybiA8TG9hZC8+XHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXY+e2RhdGEuVGl0bGV9IC0tIHtpZH08L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZnVuY3Rpb24gTW92aWVDYXJkKHByb3BzKXtcclxuXHJcbiAgICBjb25zdCB7bW92aWV9ID0gcHJvcHNcclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPXttb3ZpZS5Qb3N0ZXJ9PjwvaW1nPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGgxPnttb3ZpZX08L2gxPlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGZldGNoZXIodXJsKXtcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKHVybClcclxuICAgIGNvbnN0IGpzb24gPSBhd2FpdCByZXMuanNvbigpXHJcbiAgICByZXR1cm4ganNvblxyXG59XHJcblxyXG5mdW5jdGlvbiBMb2FkKCl7XHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mYWRlfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNwaW5uZXItYm9yZGVyIHRleHQtaW5mb1wiIHJvbGU9XCJzdGF0dXNcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidmlzdWFsbHktaGlkZGVuXCI+TG9hZGluZy4uLjwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn0iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZVJvdXRlciIsInVzZVNXUiIsInN0eWxlcyIsIk1vdmllRGV0YWlscyIsInJvdXRlciIsImlkIiwicXVlcnkiLCJkYXRhIiwiZXJyb3IiLCJmZXRjaGVyIiwiaDEiLCJjbGFzc05hbWUiLCJMb2FkIiwiZGl2IiwiVGl0bGUiLCJNb3ZpZUNhcmQiLCJwcm9wcyIsIm1vdmllIiwiaW1nIiwic3JjIiwiUG9zdGVyIiwidXJsIiwicmVzIiwiZmV0Y2giLCJqc29uIiwiZmFkZSIsImNsYXNzIiwicm9sZSIsInNwYW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/movieDetails.js\n"));

/***/ })

});