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

eval(__webpack_require__.ts("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"@charset \\\"UTF-8\\\";\\r\\n\\r\\n.movieDetails_fade__xwYrG{\\r\\n    position: fixed;\\r\\n    top: 0;\\r\\n    left: 0;\\r\\n    width: 100%;\\r\\n    height: 100%;\\r\\n    background-color: rgba(0, 0, 0, 0.6);\\r\\n    display: flex;\\r\\n    align-items: center;\\r\\n    justify-content: center;\\r\\n    z-index: 10;\\r\\n}\\r\\n\\r\\n.movieDetails_containerCard__wmxg2{\\r\\n    display: block;\\r\\n    justify-content: center;\\r\\n}\\r\\n\\r\\n.movieDetails_card__pHWr5{\\r\\n    display: flex;\\r\\n    position: relative;\\r\\n    width: 800px;\\r\\n    height: 500px;\\r\\n    margin-top: 20px;\\r\\n    border-radius: 20px;\\r\\n    box-shadow: 0px 15px 35px rgba(0, 0, 0, 0.023);\\r\\n    overflow: hidden;\\r\\n    \\r\\n}\\r\\n\\r\\n.movieDetails_containerPoster__jI9tl {\\r\\n    border-radius: 20px;\\r\\n    height: 10px;\\r\\n    width: 40%;\\r\\n    height: 100%;\\r\\n}\\r\\n\\r\\n.movieDetails_containerPoster__jI9tl img{\\r\\n    height: 100%;\\r\\n}\\r\\n\\r\\n.movieDetails_containerDetails__Su0j7{\\r\\n    position: absolute;\\r\\n    padding-left: 20px;\\r\\n    left: 40;\\r\\n    bottom: ;\\r\\n    width: 90%;\\r\\n    height: 100%;\\r\\n    background: linear-gradient(to left, rgb(42, 42, 42) 30%, rgb(28, 28, 28) 70%, transparent);\\r\\n    overflow: hidden;\\r\\n    border-radius: 20px;\\r\\n}\\r\\n\\r\\n.movieDetails_card__pHWr5 p{\\r\\n    color: white;\\r\\n}\\r\\n\\r\\n.movieDetails_card__pHWr5 h1{\\r\\n    color: white;\\r\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://styles/movieDetails.module.css\"],\"names\":[],\"mappings\":\"AAAA,gBAAgB;;AAEhB;IACI,eAAe;IACf,MAAM;IACN,OAAO;IACP,WAAW;IACX,YAAY;IACZ,oCAAoC;IACpC,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,WAAW;AACf;;AAEA;IACI,cAAc;IACd,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,kBAAkB;IAClB,YAAY;IACZ,aAAa;IACb,gBAAgB;IAChB,mBAAmB;IACnB,8CAA8C;IAC9C,gBAAgB;;AAEpB;;AAEA;IACI,mBAAmB;IACnB,YAAY;IACZ,UAAU;IACV,YAAY;AAChB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,kBAAkB;IAClB,kBAAkB;IAClB,QAAQ;IACR,QAAQ;IACR,UAAU;IACV,YAAY;IACZ,2FAA2F;IAC3F,gBAAgB;IAChB,mBAAmB;AACvB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,YAAY;AAChB\",\"sourcesContent\":[\"@charset \\\"UTF-8\\\";\\r\\n\\r\\n.fade{\\r\\n    position: fixed;\\r\\n    top: 0;\\r\\n    left: 0;\\r\\n    width: 100%;\\r\\n    height: 100%;\\r\\n    background-color: rgba(0, 0, 0, 0.6);\\r\\n    display: flex;\\r\\n    align-items: center;\\r\\n    justify-content: center;\\r\\n    z-index: 10;\\r\\n}\\r\\n\\r\\n.containerCard{\\r\\n    display: block;\\r\\n    justify-content: center;\\r\\n}\\r\\n\\r\\n.card{\\r\\n    display: flex;\\r\\n    position: relative;\\r\\n    width: 800px;\\r\\n    height: 500px;\\r\\n    margin-top: 20px;\\r\\n    border-radius: 20px;\\r\\n    box-shadow: 0px 15px 35px rgba(0, 0, 0, 0.023);\\r\\n    overflow: hidden;\\r\\n    \\r\\n}\\r\\n\\r\\n.containerPoster {\\r\\n    border-radius: 20px;\\r\\n    height: 10px;\\r\\n    width: 40%;\\r\\n    height: 100%;\\r\\n}\\r\\n\\r\\n.containerPoster img{\\r\\n    height: 100%;\\r\\n}\\r\\n\\r\\n.containerDetails{\\r\\n    position: absolute;\\r\\n    padding-left: 20px;\\r\\n    left: 40;\\r\\n    bottom: ;\\r\\n    width: 90%;\\r\\n    height: 100%;\\r\\n    background: linear-gradient(to left, rgb(42, 42, 42) 30%, rgb(28, 28, 28) 70%, transparent);\\r\\n    overflow: hidden;\\r\\n    border-radius: 20px;\\r\\n}\\r\\n\\r\\n.card p{\\r\\n    color: white;\\r\\n}\\r\\n\\r\\n.card h1{\\r\\n    color: white;\\r\\n}\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"fade\": \"movieDetails_fade__xwYrG\",\n\t\"containerCard\": \"movieDetails_containerCard__wmxg2\",\n\t\"card\": \"movieDetails_card__pHWr5\",\n\t\"containerPoster\": \"movieDetails_containerPoster__jI9tl\",\n\t\"containerDetails\": \"movieDetails_containerDetails__Su0j7\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1sxXS5vbmVPZls4XS51c2VbMV0hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbMV0ub25lT2ZbOF0udXNlWzJdIS4vc3R5bGVzL21vdmllRGV0YWlscy5tb2R1bGUuY3NzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMsbUtBQStFO0FBQ3pIO0FBQ0E7QUFDQSw2REFBNkQsa0NBQWtDLHdCQUF3QixlQUFlLGdCQUFnQixvQkFBb0IscUJBQXFCLDZDQUE2QyxzQkFBc0IsNEJBQTRCLGdDQUFnQyxvQkFBb0IsS0FBSywyQ0FBMkMsdUJBQXVCLGdDQUFnQyxLQUFLLGtDQUFrQyxzQkFBc0IsMkJBQTJCLHFCQUFxQixzQkFBc0IseUJBQXlCLDRCQUE0Qix1REFBdUQseUJBQXlCLGFBQWEsOENBQThDLDRCQUE0QixxQkFBcUIsbUJBQW1CLHFCQUFxQixLQUFLLGlEQUFpRCxxQkFBcUIsS0FBSyw4Q0FBOEMsMkJBQTJCLDJCQUEyQixpQkFBaUIsaUJBQWlCLG1CQUFtQixxQkFBcUIsb0dBQW9HLHlCQUF5Qiw0QkFBNEIsS0FBSyxvQ0FBb0MscUJBQXFCLEtBQUsscUNBQXFDLHFCQUFxQixLQUFLLE9BQU8sdUdBQXVHLE1BQU0sVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGNBQWMsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLDZDQUE2QyxjQUFjLHdCQUF3QixlQUFlLGdCQUFnQixvQkFBb0IscUJBQXFCLDZDQUE2QyxzQkFBc0IsNEJBQTRCLGdDQUFnQyxvQkFBb0IsS0FBSyx1QkFBdUIsdUJBQXVCLGdDQUFnQyxLQUFLLGNBQWMsc0JBQXNCLDJCQUEyQixxQkFBcUIsc0JBQXNCLHlCQUF5Qiw0QkFBNEIsdURBQXVELHlCQUF5QixhQUFhLDBCQUEwQiw0QkFBNEIscUJBQXFCLG1CQUFtQixxQkFBcUIsS0FBSyw2QkFBNkIscUJBQXFCLEtBQUssMEJBQTBCLDJCQUEyQiwyQkFBMkIsaUJBQWlCLGlCQUFpQixtQkFBbUIscUJBQXFCLG9HQUFvRyx5QkFBeUIsNEJBQTRCLEtBQUssZ0JBQWdCLHFCQUFxQixLQUFLLGlCQUFpQixxQkFBcUIsS0FBSyxtQkFBbUI7QUFDenBHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zdHlsZXMvbW92aWVEZXRhaWxzLm1vZHVsZS5jc3M/OGJiYSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL2Nzcy1sb2FkZXIvc3JjL3J1bnRpbWUvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGNoYXJzZXQgXFxcIlVURi04XFxcIjtcXHJcXG5cXHJcXG4ubW92aWVEZXRhaWxzX2ZhZGVfX3h3WXJHe1xcclxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgIHRvcDogMDtcXHJcXG4gICAgbGVmdDogMDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgei1pbmRleDogMTA7XFxyXFxufVxcclxcblxcclxcbi5tb3ZpZURldGFpbHNfY29udGFpbmVyQ2FyZF9fd214ZzJ7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLm1vdmllRGV0YWlsc19jYXJkX19wSFdyNXtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICB3aWR0aDogODAwcHg7XFxyXFxuICAgIGhlaWdodDogNTAwcHg7XFxyXFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxuICAgIGJveC1zaGFkb3c6IDBweCAxNXB4IDM1cHggcmdiYSgwLCAwLCAwLCAwLjAyMyk7XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICAgIFxcclxcbn1cXHJcXG5cXHJcXG4ubW92aWVEZXRhaWxzX2NvbnRhaW5lclBvc3Rlcl9fakk5dGwge1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcbiAgICBoZWlnaHQ6IDEwcHg7XFxyXFxuICAgIHdpZHRoOiA0MCU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLm1vdmllRGV0YWlsc19jb250YWluZXJQb3N0ZXJfX2pJOXRsIGltZ3tcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4ubW92aWVEZXRhaWxzX2NvbnRhaW5lckRldGFpbHNfX1N1MGo3e1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcXHJcXG4gICAgbGVmdDogNDA7XFxyXFxuICAgIGJvdHRvbTogO1xcclxcbiAgICB3aWR0aDogOTAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCByZ2IoNDIsIDQyLCA0MikgMzAlLCByZ2IoMjgsIDI4LCAyOCkgNzAlLCB0cmFuc3BhcmVudCk7XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5tb3ZpZURldGFpbHNfY2FyZF9fcEhXcjUgcHtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4ubW92aWVEZXRhaWxzX2NhcmRfX3BIV3I1IGgxe1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9zdHlsZXMvbW92aWVEZXRhaWxzLm1vZHVsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsZ0JBQWdCOztBQUVoQjtJQUNJLGVBQWU7SUFDZixNQUFNO0lBQ04sT0FBTztJQUNQLFdBQVc7SUFDWCxZQUFZO0lBQ1osb0NBQW9DO0lBQ3BDLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGNBQWM7SUFDZCx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQiw4Q0FBOEM7SUFDOUMsZ0JBQWdCOztBQUVwQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osVUFBVTtJQUNWLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsUUFBUTtJQUNSLFVBQVU7SUFDVixZQUFZO0lBQ1osMkZBQTJGO0lBQzNGLGdCQUFnQjtJQUNoQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAY2hhcnNldCBcXFwiVVRGLThcXFwiO1xcclxcblxcclxcbi5mYWRle1xcclxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgIHRvcDogMDtcXHJcXG4gICAgbGVmdDogMDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgei1pbmRleDogMTA7XFxyXFxufVxcclxcblxcclxcbi5jb250YWluZXJDYXJke1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5jYXJke1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIHdpZHRoOiA4MDBweDtcXHJcXG4gICAgaGVpZ2h0OiA1MDBweDtcXHJcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXHJcXG4gICAgYm94LXNoYWRvdzogMHB4IDE1cHggMzVweCByZ2JhKDAsIDAsIDAsIDAuMDIzKTtcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAgXFxyXFxufVxcclxcblxcclxcbi5jb250YWluZXJQb3N0ZXIge1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcbiAgICBoZWlnaHQ6IDEwcHg7XFxyXFxuICAgIHdpZHRoOiA0MCU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhaW5lclBvc3RlciBpbWd7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhaW5lckRldGFpbHN7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcclxcbiAgICBsZWZ0OiA0MDtcXHJcXG4gICAgYm90dG9tOiA7XFxyXFxuICAgIHdpZHRoOiA5MCU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsIHJnYig0MiwgNDIsIDQyKSAzMCUsIHJnYigyOCwgMjgsIDI4KSA3MCUsIHRyYW5zcGFyZW50KTtcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmQgcHtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZCBoMXtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJmYWRlXCI6IFwibW92aWVEZXRhaWxzX2ZhZGVfX3h3WXJHXCIsXG5cdFwiY29udGFpbmVyQ2FyZFwiOiBcIm1vdmllRGV0YWlsc19jb250YWluZXJDYXJkX193bXhnMlwiLFxuXHRcImNhcmRcIjogXCJtb3ZpZURldGFpbHNfY2FyZF9fcEhXcjVcIixcblx0XCJjb250YWluZXJQb3N0ZXJcIjogXCJtb3ZpZURldGFpbHNfY29udGFpbmVyUG9zdGVyX19qSTl0bFwiLFxuXHRcImNvbnRhaW5lckRldGFpbHNcIjogXCJtb3ZpZURldGFpbHNfY29udGFpbmVyRGV0YWlsc19fU3UwajdcIlxufTtcbm1vZHVsZS5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[1].oneOf[8].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[1].oneOf[8].use[2]!./styles/movieDetails.module.css\n"));

/***/ })

});