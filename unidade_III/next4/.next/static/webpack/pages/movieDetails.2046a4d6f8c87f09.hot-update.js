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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ MovieDetails; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swr */ \"./node_modules/swr/core/dist/index.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction MovieDetails() {\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const { id } = router.query;\n    const { data, error } = (0,swr__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\"https://www.omdbapi.com/?apikey=cc202b3f&i=\".concat(id), fetcher);\n    console.log(data.Title);\n    if (error) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n        className: \"text-center py-2\",\n        children: \"Nenhum Resultados Encontrado\"\n    }, void 0, false, {\n        fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next4\\\\pages\\\\movieDetails.js\",\n        lineNumber: 14,\n        columnNumber: 22\n    }, this);\n    if (!data) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Load, {}, void 0, false, {\n        fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next4\\\\pages\\\\movieDetails.js\",\n        lineNumber: 15,\n        columnNumber: 22\n    }, this);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: id\n    }, void 0, false, {\n        fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next4\\\\pages\\\\movieDetails.js\",\n        lineNumber: 18,\n        columnNumber: 9\n    }, this);\n}\n_s(MovieDetails, \"mZuyhWoEayG5q+fyCgnn11lj9Sg=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter,\n        swr__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n    ];\n});\n_c = MovieDetails;\nasync function fetcher(url) {\n    const res = await fetch(url);\n    const json = await res.json();\n    return json;\n}\nfunction Load() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: styles.fade,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            class: \"spinner-border text-info\",\n            role: \"status\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                class: \"visually-hidden\",\n                children: \"Loading...\"\n            }, void 0, false, {\n                fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next4\\\\pages\\\\movieDetails.js\",\n                lineNumber: 32,\n                columnNumber: 17\n            }, this)\n        }, void 0, false, {\n            fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next4\\\\pages\\\\movieDetails.js\",\n            lineNumber: 31,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\prog_web\\\\programacao_web\\\\unidade_III\\\\next4\\\\pages\\\\movieDetails.js\",\n        lineNumber: 30,\n        columnNumber: 9\n    }, this);\n}\n_c1 = Load;\nvar _c, _c1;\n$RefreshReg$(_c, \"MovieDetails\");\n$RefreshReg$(_c1, \"Load\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9tb3ZpZURldGFpbHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUF3QztBQUNBO0FBQ2Y7QUFFVixTQUFTSTs7SUFFcEIsTUFBTUMsU0FBU0gsc0RBQVNBO0lBQ3hCLE1BQU0sRUFBRUksRUFBRSxFQUFFLEdBQUdELE9BQU9FLEtBQUs7SUFFM0IsTUFBTSxFQUFDQyxJQUFJLEVBQUVDLEtBQUssRUFBQyxHQUFHTiwrQ0FBTUEsQ0FBQyw4Q0FBaUQsT0FBSEcsS0FBTUk7SUFFakZDLFFBQVFDLEdBQUcsQ0FBQ0osS0FBS0ssS0FBSztJQUV0QixJQUFHSixPQUFPLHFCQUFPLDhEQUFDSztRQUFHQyxXQUFVO2tCQUFtQjs7Ozs7O0lBQ2xELElBQUcsQ0FBQ1AsTUFBTSxxQkFBTyw4REFBQ1E7Ozs7O0lBRWxCLHFCQUNJLDhEQUFDQztrQkFBS1g7Ozs7OztBQUVkO0dBZndCRjs7UUFFTEYsa0RBQVNBO1FBR0ZDLDJDQUFNQTs7O0tBTFJDO0FBaUJ4QixlQUFlTSxRQUFRUSxHQUFHO0lBQ3RCLE1BQU1DLE1BQU0sTUFBTUMsTUFBTUY7SUFDeEIsTUFBTUcsT0FBTyxNQUFNRixJQUFJRSxJQUFJO0lBQzNCLE9BQU9BO0FBQ1g7QUFFQSxTQUFTTDtJQUNMLHFCQUNJLDhEQUFDQztRQUFJRixXQUFXTyxPQUFPQyxJQUFJO2tCQUN2Qiw0RUFBQ047WUFBSU8sT0FBTTtZQUEyQkMsTUFBSztzQkFDdkMsNEVBQUNDO2dCQUFLRixPQUFNOzBCQUFrQjs7Ozs7Ozs7Ozs7Ozs7OztBQUk5QztNQVJTUiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9tb3ZpZURldGFpbHMuanM/ZDQ3MSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHVzZVNXUiBmcm9tICdzd3InO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTW92aWVEZXRhaWxzKCl7XHJcblxyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgICBjb25zdCB7IGlkIH0gPSByb3V0ZXIucXVlcnk7XHJcblxyXG4gICAgY29uc3Qge2RhdGEsIGVycm9yfSA9IHVzZVNXUihgaHR0cHM6Ly93d3cub21kYmFwaS5jb20vP2FwaWtleT1jYzIwMmIzZiZpPSR7aWR9YCwgZmV0Y2hlcilcclxuXHJcbiAgICBjb25zb2xlLmxvZyhkYXRhLlRpdGxlKVxyXG5cclxuICAgIGlmKGVycm9yKSByZXR1cm4gPGgxIGNsYXNzTmFtZT0ndGV4dC1jZW50ZXIgcHktMic+TmVuaHVtIFJlc3VsdGFkb3MgRW5jb250cmFkbzwvaDE+XHJcbiAgICBpZighZGF0YSkgcmV0dXJuIDxMb2FkLz5cclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdj57aWR9PC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGZldGNoZXIodXJsKXtcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKHVybClcclxuICAgIGNvbnN0IGpzb24gPSBhd2FpdCByZXMuanNvbigpXHJcbiAgICByZXR1cm4ganNvblxyXG59XHJcblxyXG5mdW5jdGlvbiBMb2FkKCl7XHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mYWRlfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNwaW5uZXItYm9yZGVyIHRleHQtaW5mb1wiIHJvbGU9XCJzdGF0dXNcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidmlzdWFsbHktaGlkZGVuXCI+TG9hZGluZy4uLjwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn0iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZVJvdXRlciIsInVzZVNXUiIsIk1vdmllRGV0YWlscyIsInJvdXRlciIsImlkIiwicXVlcnkiLCJkYXRhIiwiZXJyb3IiLCJmZXRjaGVyIiwiY29uc29sZSIsImxvZyIsIlRpdGxlIiwiaDEiLCJjbGFzc05hbWUiLCJMb2FkIiwiZGl2IiwidXJsIiwicmVzIiwiZmV0Y2giLCJqc29uIiwic3R5bGVzIiwiZmFkZSIsImNsYXNzIiwicm9sZSIsInNwYW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/movieDetails.js\n"));

/***/ })

});