/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/movieDetails",{

/***/ "./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[1].oneOf[8].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[1].oneOf[8].use[2]!./styles/movieDetails.module.css":
/*!********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[1].oneOf[8].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[1].oneOf[8].use[2]!./styles/movieDetails.module.css ***!
  \********************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"@charset \\\"UTF-8\\\";\\r\\n\\r\\n.movieDetails_fade__xwYrG{\\r\\n    position: fixed;\\r\\n    top: 0;\\r\\n    left: 0;\\r\\n    width: 100%;\\r\\n    height: 100%;\\r\\n    background-color: rgba(0, 0, 0, 0.6);\\r\\n    display: flex;\\r\\n    align-items: center;\\r\\n    justify-content: center;\\r\\n    z-index: 10;\\r\\n}\\r\\n\\r\\n.movieDetails_card__pHWr5{\\r\\n    display: flex;\\r\\n    position: relative;\\r\\n    width: 800px;\\r\\n    height: 500px;\\r\\n    margin-top: 20px;\\r\\n    border-radius: 20px;\\r\\n    box-shadow: 0px 15px 35px rgba(0, 0, 0, 0.023);\\r\\n    overflow: hidden;\\r\\n    \\r\\n}\\r\\n\\r\\n.movieDetails_containerPoster__jI9tl {\\r\\n    border-radius: 20px;\\r\\n    width: 40%;\\r\\n    height: 100%;\\r\\n}\\r\\n\\r\\n.movieDetails_containerPoster__jI9tl img{\\r\\n    height: 100%;\\r\\n    box-shadow: 0px 3px 5px black;\\r\\n}\\r\\n\\r\\n.movieDetails_containerDetails__Su0j7{\\r\\n    position: absolute;\\r\\n    padding-left: 20px;\\r\\n    left: 100px;\\r\\n    right: 0px;\\r\\n    bottom: 0;\\r\\n    width: 90%;\\r\\n    height: 100%;\\r\\n    background: linear-gradient(to left, rgb(42, 42, 42) 30%, rgba(28, 28, 28, 0.89) 68%, transparent);\\r\\n    overflow: hidden;\\r\\n    border-radius: 20px;\\r\\n}\\r\\n\\r\\n.movieDetails_card__pHWr5 p{\\r\\n    color: white;\\r\\n}\\r\\n\\r\\n.movieDetails_card__pHWr5 h1{\\r\\n    color: white;\\r\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://styles/movieDetails.module.css\"],\"names\":[],\"mappings\":\"AAAA,gBAAgB;;AAEhB;IACI,eAAe;IACf,MAAM;IACN,OAAO;IACP,WAAW;IACX,YAAY;IACZ,oCAAoC;IACpC,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,WAAW;AACf;;AAEA;IACI,aAAa;IACb,kBAAkB;IAClB,YAAY;IACZ,aAAa;IACb,gBAAgB;IAChB,mBAAmB;IACnB,8CAA8C;IAC9C,gBAAgB;;AAEpB;;AAEA;IACI,mBAAmB;IACnB,UAAU;IACV,YAAY;AAChB;;AAEA;IACI,YAAY;IACZ,6BAA6B;AACjC;;AAEA;IACI,kBAAkB;IAClB,kBAAkB;IAClB,WAAW;IACX,UAAU;IACV,SAAS;IACT,UAAU;IACV,YAAY;IACZ,kGAAkG;IAClG,gBAAgB;IAChB,mBAAmB;AACvB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,YAAY;AAChB\",\"sourcesContent\":[\"@charset \\\"UTF-8\\\";\\r\\n\\r\\n.fade{\\r\\n    position: fixed;\\r\\n    top: 0;\\r\\n    left: 0;\\r\\n    width: 100%;\\r\\n    height: 100%;\\r\\n    background-color: rgba(0, 0, 0, 0.6);\\r\\n    display: flex;\\r\\n    align-items: center;\\r\\n    justify-content: center;\\r\\n    z-index: 10;\\r\\n}\\r\\n\\r\\n.card{\\r\\n    display: flex;\\r\\n    position: relative;\\r\\n    width: 800px;\\r\\n    height: 500px;\\r\\n    margin-top: 20px;\\r\\n    border-radius: 20px;\\r\\n    box-shadow: 0px 15px 35px rgba(0, 0, 0, 0.023);\\r\\n    overflow: hidden;\\r\\n    \\r\\n}\\r\\n\\r\\n.containerPoster {\\r\\n    border-radius: 20px;\\r\\n    width: 40%;\\r\\n    height: 100%;\\r\\n}\\r\\n\\r\\n.containerPoster img{\\r\\n    height: 100%;\\r\\n    box-shadow: 0px 3px 5px black;\\r\\n}\\r\\n\\r\\n.containerDetails{\\r\\n    position: absolute;\\r\\n    padding-left: 20px;\\r\\n    left: 100px;\\r\\n    right: 0px;\\r\\n    bottom: 0;\\r\\n    width: 90%;\\r\\n    height: 100%;\\r\\n    background: linear-gradient(to left, rgb(42, 42, 42) 30%, rgba(28, 28, 28, 0.89) 68%, transparent);\\r\\n    overflow: hidden;\\r\\n    border-radius: 20px;\\r\\n}\\r\\n\\r\\n.card p{\\r\\n    color: white;\\r\\n}\\r\\n\\r\\n.card h1{\\r\\n    color: white;\\r\\n}\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"fade\": \"movieDetails_fade__xwYrG\",\n\t\"card\": \"movieDetails_card__pHWr5\",\n\t\"containerPoster\": \"movieDetails_containerPoster__jI9tl\",\n\t\"containerDetails\": \"movieDetails_containerDetails__Su0j7\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1sxXS5vbmVPZls4XS51c2VbMV0hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbMV0ub25lT2ZbOF0udXNlWzJdIS4vc3R5bGVzL21vdmllRGV0YWlscy5tb2R1bGUuY3NzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMsbUtBQStFO0FBQ3pIO0FBQ0E7QUFDQSw2REFBNkQsa0NBQWtDLHdCQUF3QixlQUFlLGdCQUFnQixvQkFBb0IscUJBQXFCLDZDQUE2QyxzQkFBc0IsNEJBQTRCLGdDQUFnQyxvQkFBb0IsS0FBSyxrQ0FBa0Msc0JBQXNCLDJCQUEyQixxQkFBcUIsc0JBQXNCLHlCQUF5Qiw0QkFBNEIsdURBQXVELHlCQUF5QixhQUFhLDhDQUE4Qyw0QkFBNEIsbUJBQW1CLHFCQUFxQixLQUFLLGlEQUFpRCxxQkFBcUIsc0NBQXNDLEtBQUssOENBQThDLDJCQUEyQiwyQkFBMkIsb0JBQW9CLG1CQUFtQixrQkFBa0IsbUJBQW1CLHFCQUFxQiwyR0FBMkcseUJBQXlCLDRCQUE0QixLQUFLLG9DQUFvQyxxQkFBcUIsS0FBSyxxQ0FBcUMscUJBQXFCLEtBQUssT0FBTyx1R0FBdUcsTUFBTSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGNBQWMsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsNkNBQTZDLGNBQWMsd0JBQXdCLGVBQWUsZ0JBQWdCLG9CQUFvQixxQkFBcUIsNkNBQTZDLHNCQUFzQiw0QkFBNEIsZ0NBQWdDLG9CQUFvQixLQUFLLGNBQWMsc0JBQXNCLDJCQUEyQixxQkFBcUIsc0JBQXNCLHlCQUF5Qiw0QkFBNEIsdURBQXVELHlCQUF5QixhQUFhLDBCQUEwQiw0QkFBNEIsbUJBQW1CLHFCQUFxQixLQUFLLDZCQUE2QixxQkFBcUIsc0NBQXNDLEtBQUssMEJBQTBCLDJCQUEyQiwyQkFBMkIsb0JBQW9CLG1CQUFtQixrQkFBa0IsbUJBQW1CLHFCQUFxQiwyR0FBMkcseUJBQXlCLDRCQUE0QixLQUFLLGdCQUFnQixxQkFBcUIsS0FBSyxpQkFBaUIscUJBQXFCLEtBQUssbUJBQW1CO0FBQ3ZpRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3N0eWxlcy9tb3ZpZURldGFpbHMubW9kdWxlLmNzcz84YmJhIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvY3NzLWxvYWRlci9zcmMvcnVudGltZS9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAY2hhcnNldCBcXFwiVVRGLThcXFwiO1xcclxcblxcclxcbi5tb3ZpZURldGFpbHNfZmFkZV9feHdZckd7XFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNik7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICB6LWluZGV4OiAxMDtcXHJcXG59XFxyXFxuXFxyXFxuLm1vdmllRGV0YWlsc19jYXJkX19wSFdyNXtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICB3aWR0aDogODAwcHg7XFxyXFxuICAgIGhlaWdodDogNTAwcHg7XFxyXFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxuICAgIGJveC1zaGFkb3c6IDBweCAxNXB4IDM1cHggcmdiYSgwLCAwLCAwLCAwLjAyMyk7XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICAgIFxcclxcbn1cXHJcXG5cXHJcXG4ubW92aWVEZXRhaWxzX2NvbnRhaW5lclBvc3Rlcl9fakk5dGwge1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcbiAgICB3aWR0aDogNDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5tb3ZpZURldGFpbHNfY29udGFpbmVyUG9zdGVyX19qSTl0bCBpbWd7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgYm94LXNoYWRvdzogMHB4IDNweCA1cHggYmxhY2s7XFxyXFxufVxcclxcblxcclxcbi5tb3ZpZURldGFpbHNfY29udGFpbmVyRGV0YWlsc19fU3Uwajd7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcclxcbiAgICBsZWZ0OiAxMDBweDtcXHJcXG4gICAgcmlnaHQ6IDBweDtcXHJcXG4gICAgYm90dG9tOiAwO1xcclxcbiAgICB3aWR0aDogOTAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCByZ2IoNDIsIDQyLCA0MikgMzAlLCByZ2JhKDI4LCAyOCwgMjgsIDAuODkpIDY4JSwgdHJhbnNwYXJlbnQpO1xcclxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubW92aWVEZXRhaWxzX2NhcmRfX3BIV3I1IHB7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLm1vdmllRGV0YWlsc19jYXJkX19wSFdyNSBoMXtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vc3R5bGVzL21vdmllRGV0YWlscy5tb2R1bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLGdCQUFnQjs7QUFFaEI7SUFDSSxlQUFlO0lBQ2YsTUFBTTtJQUNOLE9BQU87SUFDUCxXQUFXO0lBQ1gsWUFBWTtJQUNaLG9DQUFvQztJQUNwQyxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQiw4Q0FBOEM7SUFDOUMsZ0JBQWdCOztBQUVwQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixVQUFVO0lBQ1YsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFlBQVk7SUFDWiw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxVQUFVO0lBQ1YsU0FBUztJQUNULFVBQVU7SUFDVixZQUFZO0lBQ1osa0dBQWtHO0lBQ2xHLGdCQUFnQjtJQUNoQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAY2hhcnNldCBcXFwiVVRGLThcXFwiO1xcclxcblxcclxcbi5mYWRle1xcclxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgIHRvcDogMDtcXHJcXG4gICAgbGVmdDogMDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgei1pbmRleDogMTA7XFxyXFxufVxcclxcblxcclxcbi5jYXJke1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIHdpZHRoOiA4MDBweDtcXHJcXG4gICAgaGVpZ2h0OiA1MDBweDtcXHJcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXHJcXG4gICAgYm94LXNoYWRvdzogMHB4IDE1cHggMzVweCByZ2JhKDAsIDAsIDAsIDAuMDIzKTtcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAgXFxyXFxufVxcclxcblxcclxcbi5jb250YWluZXJQb3N0ZXIge1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcbiAgICB3aWR0aDogNDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5jb250YWluZXJQb3N0ZXIgaW1ne1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIGJveC1zaGFkb3c6IDBweCAzcHggNXB4IGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFpbmVyRGV0YWlsc3tcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XFxyXFxuICAgIGxlZnQ6IDEwMHB4O1xcclxcbiAgICByaWdodDogMHB4O1xcclxcbiAgICBib3R0b206IDA7XFxyXFxuICAgIHdpZHRoOiA5MCU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsIHJnYig0MiwgNDIsIDQyKSAzMCUsIHJnYmEoMjgsIDI4LCAyOCwgMC44OSkgNjglLCB0cmFuc3BhcmVudCk7XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5jYXJkIHB7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmQgaDF7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwiZmFkZVwiOiBcIm1vdmllRGV0YWlsc19mYWRlX194d1lyR1wiLFxuXHRcImNhcmRcIjogXCJtb3ZpZURldGFpbHNfY2FyZF9fcEhXcjVcIixcblx0XCJjb250YWluZXJQb3N0ZXJcIjogXCJtb3ZpZURldGFpbHNfY29udGFpbmVyUG9zdGVyX19qSTl0bFwiLFxuXHRcImNvbnRhaW5lckRldGFpbHNcIjogXCJtb3ZpZURldGFpbHNfY29udGFpbmVyRGV0YWlsc19fU3UwajdcIlxufTtcbm1vZHVsZS5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[1].oneOf[8].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[1].oneOf[8].use[2]!./styles/movieDetails.module.css\n"));

/***/ })

});