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

eval(__webpack_require__.ts("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"@charset \\\"UTF-8\\\";\\r\\n\\r\\n.movieDetails_fade__xwYrG{\\r\\n    position: fixed;\\r\\n    top: 0;\\r\\n    left: 0;\\r\\n    width: 100%;\\r\\n    height: 100%;\\r\\n    background-color: rgba(0, 0, 0, 0.6);\\r\\n    display: flex;\\r\\n    align-items: center;\\r\\n    justify-content: center;\\r\\n    z-index: 10;\\r\\n}\\r\\n\\r\\n.movieDetails_containerCard__wmxg2{\\r\\n    display: block;\\r\\n    justify-content: center;\\r\\n}\\r\\n\\r\\n.movieDetails_card__pHWr5{\\r\\n    display: flex;\\r\\n    position: relative;\\r\\n    width: 800px;\\r\\n    height: 500px;\\r\\n    margin-top: 20px;\\r\\n    border-radius: 20px;\\r\\n    box-shadow: 0px 15px 35px rgba(0, 0, 0, 0.023);\\r\\n    overflow: hidden;\\r\\n    \\r\\n}\\r\\n\\r\\n.movieDetails_containerPoster__jI9tl {\\r\\n    border-radius: 20px;\\r\\n    height: 10px;\\r\\n    margin-right: 40px;\\r\\n    width: 40%;\\r\\n    height: 100%;\\r\\n}\\r\\n\\r\\n.movieDetails_containerPoster__jI9tl img{\\r\\n    height: 100%;\\r\\n}\\r\\n\\r\\n.movieDetails_containerDetails__Su0j7{\\r\\n    width: 60%;\\r\\n    height: 100%;\\r\\n}\\r\\n\\r\\n.movieDetails_card__pHWr5 p{\\r\\n    color: white;\\r\\n}\\r\\n\\r\\n.movieDetails_card__pHWr5 h1{\\r\\n    color: white;\\r\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://styles/movieDetails.module.css\"],\"names\":[],\"mappings\":\"AAAA,gBAAgB;;AAEhB;IACI,eAAe;IACf,MAAM;IACN,OAAO;IACP,WAAW;IACX,YAAY;IACZ,oCAAoC;IACpC,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,WAAW;AACf;;AAEA;IACI,cAAc;IACd,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,kBAAkB;IAClB,YAAY;IACZ,aAAa;IACb,gBAAgB;IAChB,mBAAmB;IACnB,8CAA8C;IAC9C,gBAAgB;;AAEpB;;AAEA;IACI,mBAAmB;IACnB,YAAY;IACZ,kBAAkB;IAClB,UAAU;IACV,YAAY;AAChB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,UAAU;IACV,YAAY;AAChB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,YAAY;AAChB\",\"sourcesContent\":[\"@charset \\\"UTF-8\\\";\\r\\n\\r\\n.fade{\\r\\n    position: fixed;\\r\\n    top: 0;\\r\\n    left: 0;\\r\\n    width: 100%;\\r\\n    height: 100%;\\r\\n    background-color: rgba(0, 0, 0, 0.6);\\r\\n    display: flex;\\r\\n    align-items: center;\\r\\n    justify-content: center;\\r\\n    z-index: 10;\\r\\n}\\r\\n\\r\\n.containerCard{\\r\\n    display: block;\\r\\n    justify-content: center;\\r\\n}\\r\\n\\r\\n.card{\\r\\n    display: flex;\\r\\n    position: relative;\\r\\n    width: 800px;\\r\\n    height: 500px;\\r\\n    margin-top: 20px;\\r\\n    border-radius: 20px;\\r\\n    box-shadow: 0px 15px 35px rgba(0, 0, 0, 0.023);\\r\\n    overflow: hidden;\\r\\n    \\r\\n}\\r\\n\\r\\n.containerPoster {\\r\\n    border-radius: 20px;\\r\\n    height: 10px;\\r\\n    margin-right: 40px;\\r\\n    width: 40%;\\r\\n    height: 100%;\\r\\n}\\r\\n\\r\\n.containerPoster img{\\r\\n    height: 100%;\\r\\n}\\r\\n\\r\\n.containerDetails{\\r\\n    width: 60%;\\r\\n    height: 100%;\\r\\n}\\r\\n\\r\\n.card p{\\r\\n    color: white;\\r\\n}\\r\\n\\r\\n.card h1{\\r\\n    color: white;\\r\\n}\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"fade\": \"movieDetails_fade__xwYrG\",\n\t\"containerCard\": \"movieDetails_containerCard__wmxg2\",\n\t\"card\": \"movieDetails_card__pHWr5\",\n\t\"containerPoster\": \"movieDetails_containerPoster__jI9tl\",\n\t\"containerDetails\": \"movieDetails_containerDetails__Su0j7\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1sxXS5vbmVPZls4XS51c2VbMV0hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbMV0ub25lT2ZbOF0udXNlWzJdIS4vc3R5bGVzL21vdmllRGV0YWlscy5tb2R1bGUuY3NzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMsbUtBQStFO0FBQ3pIO0FBQ0E7QUFDQSw2REFBNkQsa0NBQWtDLHdCQUF3QixlQUFlLGdCQUFnQixvQkFBb0IscUJBQXFCLDZDQUE2QyxzQkFBc0IsNEJBQTRCLGdDQUFnQyxvQkFBb0IsS0FBSywyQ0FBMkMsdUJBQXVCLGdDQUFnQyxLQUFLLGtDQUFrQyxzQkFBc0IsMkJBQTJCLHFCQUFxQixzQkFBc0IseUJBQXlCLDRCQUE0Qix1REFBdUQseUJBQXlCLGFBQWEsOENBQThDLDRCQUE0QixxQkFBcUIsMkJBQTJCLG1CQUFtQixxQkFBcUIsS0FBSyxpREFBaUQscUJBQXFCLEtBQUssOENBQThDLG1CQUFtQixxQkFBcUIsS0FBSyxvQ0FBb0MscUJBQXFCLEtBQUsscUNBQXFDLHFCQUFxQixLQUFLLE9BQU8sdUdBQXVHLE1BQU0sVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGNBQWMsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLDZDQUE2QyxjQUFjLHdCQUF3QixlQUFlLGdCQUFnQixvQkFBb0IscUJBQXFCLDZDQUE2QyxzQkFBc0IsNEJBQTRCLGdDQUFnQyxvQkFBb0IsS0FBSyx1QkFBdUIsdUJBQXVCLGdDQUFnQyxLQUFLLGNBQWMsc0JBQXNCLDJCQUEyQixxQkFBcUIsc0JBQXNCLHlCQUF5Qiw0QkFBNEIsdURBQXVELHlCQUF5QixhQUFhLDBCQUEwQiw0QkFBNEIscUJBQXFCLDJCQUEyQixtQkFBbUIscUJBQXFCLEtBQUssNkJBQTZCLHFCQUFxQixLQUFLLDBCQUEwQixtQkFBbUIscUJBQXFCLEtBQUssZ0JBQWdCLHFCQUFxQixLQUFLLGlCQUFpQixxQkFBcUIsS0FBSyxtQkFBbUI7QUFDdHFGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zdHlsZXMvbW92aWVEZXRhaWxzLm1vZHVsZS5jc3M/OGJiYSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL2Nzcy1sb2FkZXIvc3JjL3J1bnRpbWUvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGNoYXJzZXQgXFxcIlVURi04XFxcIjtcXHJcXG5cXHJcXG4ubW92aWVEZXRhaWxzX2ZhZGVfX3h3WXJHe1xcclxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgIHRvcDogMDtcXHJcXG4gICAgbGVmdDogMDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgei1pbmRleDogMTA7XFxyXFxufVxcclxcblxcclxcbi5tb3ZpZURldGFpbHNfY29udGFpbmVyQ2FyZF9fd214ZzJ7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLm1vdmllRGV0YWlsc19jYXJkX19wSFdyNXtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICB3aWR0aDogODAwcHg7XFxyXFxuICAgIGhlaWdodDogNTAwcHg7XFxyXFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxuICAgIGJveC1zaGFkb3c6IDBweCAxNXB4IDM1cHggcmdiYSgwLCAwLCAwLCAwLjAyMyk7XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICAgIFxcclxcbn1cXHJcXG5cXHJcXG4ubW92aWVEZXRhaWxzX2NvbnRhaW5lclBvc3Rlcl9fakk5dGwge1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcbiAgICBoZWlnaHQ6IDEwcHg7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogNDBweDtcXHJcXG4gICAgd2lkdGg6IDQwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4ubW92aWVEZXRhaWxzX2NvbnRhaW5lclBvc3Rlcl9fakk5dGwgaW1ne1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5tb3ZpZURldGFpbHNfY29udGFpbmVyRGV0YWlsc19fU3Uwajd7XFxyXFxuICAgIHdpZHRoOiA2MCU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLm1vdmllRGV0YWlsc19jYXJkX19wSFdyNSBwe1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbi5tb3ZpZURldGFpbHNfY2FyZF9fcEhXcjUgaDF7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL3N0eWxlcy9tb3ZpZURldGFpbHMubW9kdWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxnQkFBZ0I7O0FBRWhCO0lBQ0ksZUFBZTtJQUNmLE1BQU07SUFDTixPQUFPO0lBQ1AsV0FBVztJQUNYLFlBQVk7SUFDWixvQ0FBb0M7SUFDcEMsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsV0FBVztBQUNmOztBQUVBO0lBQ0ksY0FBYztJQUNkLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLDhDQUE4QztJQUM5QyxnQkFBZ0I7O0FBRXBCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAY2hhcnNldCBcXFwiVVRGLThcXFwiO1xcclxcblxcclxcbi5mYWRle1xcclxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgIHRvcDogMDtcXHJcXG4gICAgbGVmdDogMDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgei1pbmRleDogMTA7XFxyXFxufVxcclxcblxcclxcbi5jb250YWluZXJDYXJke1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5jYXJke1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIHdpZHRoOiA4MDBweDtcXHJcXG4gICAgaGVpZ2h0OiA1MDBweDtcXHJcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXHJcXG4gICAgYm94LXNoYWRvdzogMHB4IDE1cHggMzVweCByZ2JhKDAsIDAsIDAsIDAuMDIzKTtcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAgXFxyXFxufVxcclxcblxcclxcbi5jb250YWluZXJQb3N0ZXIge1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcbiAgICBoZWlnaHQ6IDEwcHg7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogNDBweDtcXHJcXG4gICAgd2lkdGg6IDQwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFpbmVyUG9zdGVyIGltZ3tcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFpbmVyRGV0YWlsc3tcXHJcXG4gICAgd2lkdGg6IDYwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZCBwe1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbi5jYXJkIGgxe1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcImZhZGVcIjogXCJtb3ZpZURldGFpbHNfZmFkZV9feHdZckdcIixcblx0XCJjb250YWluZXJDYXJkXCI6IFwibW92aWVEZXRhaWxzX2NvbnRhaW5lckNhcmRfX3dteGcyXCIsXG5cdFwiY2FyZFwiOiBcIm1vdmllRGV0YWlsc19jYXJkX19wSFdyNVwiLFxuXHRcImNvbnRhaW5lclBvc3RlclwiOiBcIm1vdmllRGV0YWlsc19jb250YWluZXJQb3N0ZXJfX2pJOXRsXCIsXG5cdFwiY29udGFpbmVyRGV0YWlsc1wiOiBcIm1vdmllRGV0YWlsc19jb250YWluZXJEZXRhaWxzX19TdTBqN1wiXG59O1xubW9kdWxlLmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[1].oneOf[8].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[1].oneOf[8].use[2]!./styles/movieDetails.module.css\n"));

/***/ })

});