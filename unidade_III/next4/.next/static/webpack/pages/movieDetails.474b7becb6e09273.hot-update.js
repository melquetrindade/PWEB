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

eval(__webpack_require__.ts("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"@charset \\\"UTF-8\\\";\\r\\n\\r\\n.movieDetails_fade__xwYrG{\\r\\n    position: fixed;\\r\\n    top: 0;\\r\\n    left: 0;\\r\\n    width: 100%;\\r\\n    height: 100%;\\r\\n    background-color: rgba(0, 0, 0, 0.6);\\r\\n    display: flex;\\r\\n    align-items: center;\\r\\n    justify-content: center;\\r\\n    z-index: 10;\\r\\n}\\r\\n\\r\\n.movieDetails_card__pHWr5{\\r\\n    display: flex;\\r\\n    position: relative;\\r\\n    width: 800px;\\r\\n    height: 500px;\\r\\n    margin-top: 20px;\\r\\n    border-radius: 20px;\\r\\n    box-shadow: 0px 15px 35px rgba(0, 0, 0, 0.023);\\r\\n    overflow: hidden;\\r\\n    \\r\\n}\\r\\n\\r\\n.movieDetails_containerPoster__jI9tl {\\r\\n    border-radius: 20px;\\r\\n    width: 40%;\\r\\n    height: 100%;\\r\\n}\\r\\n\\r\\n.movieDetails_containerPoster__jI9tl img{\\r\\n    height: 100%;\\r\\n    box-shadow: 0px 30px 20px rgb(165, 165, 165);\\r\\n}\\r\\n\\r\\n.movieDetails_containerDetails__Su0j7{\\r\\n    position: absolute;\\r\\n    padding-left: 20px;\\r\\n    left: 200px;\\r\\n    right: 0px;\\r\\n    bottom: 0;\\r\\n    width: 90%;\\r\\n    height: 100%;\\r\\n    background: linear-gradient(to left, rgb(42, 42, 42) 30%, rgba(28, 28, 28, 0.904) 87%, transparent);\\r\\n    overflow: hidden;\\r\\n    border-radius: 20px;\\r\\n}\\r\\n\\r\\n.movieDetails_card__pHWr5 p{\\r\\n    color: white;\\r\\n}\\r\\n\\r\\n.movieDetails_card__pHWr5 h1{\\r\\n    color: white;\\r\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://styles/movieDetails.module.css\"],\"names\":[],\"mappings\":\"AAAA,gBAAgB;;AAEhB;IACI,eAAe;IACf,MAAM;IACN,OAAO;IACP,WAAW;IACX,YAAY;IACZ,oCAAoC;IACpC,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,WAAW;AACf;;AAEA;IACI,aAAa;IACb,kBAAkB;IAClB,YAAY;IACZ,aAAa;IACb,gBAAgB;IAChB,mBAAmB;IACnB,8CAA8C;IAC9C,gBAAgB;;AAEpB;;AAEA;IACI,mBAAmB;IACnB,UAAU;IACV,YAAY;AAChB;;AAEA;IACI,YAAY;IACZ,4CAA4C;AAChD;;AAEA;IACI,kBAAkB;IAClB,kBAAkB;IAClB,WAAW;IACX,UAAU;IACV,SAAS;IACT,UAAU;IACV,YAAY;IACZ,mGAAmG;IACnG,gBAAgB;IAChB,mBAAmB;AACvB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,YAAY;AAChB\",\"sourcesContent\":[\"@charset \\\"UTF-8\\\";\\r\\n\\r\\n.fade{\\r\\n    position: fixed;\\r\\n    top: 0;\\r\\n    left: 0;\\r\\n    width: 100%;\\r\\n    height: 100%;\\r\\n    background-color: rgba(0, 0, 0, 0.6);\\r\\n    display: flex;\\r\\n    align-items: center;\\r\\n    justify-content: center;\\r\\n    z-index: 10;\\r\\n}\\r\\n\\r\\n.card{\\r\\n    display: flex;\\r\\n    position: relative;\\r\\n    width: 800px;\\r\\n    height: 500px;\\r\\n    margin-top: 20px;\\r\\n    border-radius: 20px;\\r\\n    box-shadow: 0px 15px 35px rgba(0, 0, 0, 0.023);\\r\\n    overflow: hidden;\\r\\n    \\r\\n}\\r\\n\\r\\n.containerPoster {\\r\\n    border-radius: 20px;\\r\\n    width: 40%;\\r\\n    height: 100%;\\r\\n}\\r\\n\\r\\n.containerPoster img{\\r\\n    height: 100%;\\r\\n    box-shadow: 0px 30px 20px rgb(165, 165, 165);\\r\\n}\\r\\n\\r\\n.containerDetails{\\r\\n    position: absolute;\\r\\n    padding-left: 20px;\\r\\n    left: 200px;\\r\\n    right: 0px;\\r\\n    bottom: 0;\\r\\n    width: 90%;\\r\\n    height: 100%;\\r\\n    background: linear-gradient(to left, rgb(42, 42, 42) 30%, rgba(28, 28, 28, 0.904) 87%, transparent);\\r\\n    overflow: hidden;\\r\\n    border-radius: 20px;\\r\\n}\\r\\n\\r\\n.card p{\\r\\n    color: white;\\r\\n}\\r\\n\\r\\n.card h1{\\r\\n    color: white;\\r\\n}\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"fade\": \"movieDetails_fade__xwYrG\",\n\t\"card\": \"movieDetails_card__pHWr5\",\n\t\"containerPoster\": \"movieDetails_containerPoster__jI9tl\",\n\t\"containerDetails\": \"movieDetails_containerDetails__Su0j7\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1sxXS5vbmVPZls4XS51c2VbMV0hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbMV0ub25lT2ZbOF0udXNlWzJdIS4vc3R5bGVzL21vdmllRGV0YWlscy5tb2R1bGUuY3NzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMsbUtBQStFO0FBQ3pIO0FBQ0E7QUFDQSw2REFBNkQsa0NBQWtDLHdCQUF3QixlQUFlLGdCQUFnQixvQkFBb0IscUJBQXFCLDZDQUE2QyxzQkFBc0IsNEJBQTRCLGdDQUFnQyxvQkFBb0IsS0FBSyxrQ0FBa0Msc0JBQXNCLDJCQUEyQixxQkFBcUIsc0JBQXNCLHlCQUF5Qiw0QkFBNEIsdURBQXVELHlCQUF5QixhQUFhLDhDQUE4Qyw0QkFBNEIsbUJBQW1CLHFCQUFxQixLQUFLLGlEQUFpRCxxQkFBcUIscURBQXFELEtBQUssOENBQThDLDJCQUEyQiwyQkFBMkIsb0JBQW9CLG1CQUFtQixrQkFBa0IsbUJBQW1CLHFCQUFxQiw0R0FBNEcseUJBQXlCLDRCQUE0QixLQUFLLG9DQUFvQyxxQkFBcUIsS0FBSyxxQ0FBcUMscUJBQXFCLEtBQUssT0FBTyx1R0FBdUcsTUFBTSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGNBQWMsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsNkNBQTZDLGNBQWMsd0JBQXdCLGVBQWUsZ0JBQWdCLG9CQUFvQixxQkFBcUIsNkNBQTZDLHNCQUFzQiw0QkFBNEIsZ0NBQWdDLG9CQUFvQixLQUFLLGNBQWMsc0JBQXNCLDJCQUEyQixxQkFBcUIsc0JBQXNCLHlCQUF5Qiw0QkFBNEIsdURBQXVELHlCQUF5QixhQUFhLDBCQUEwQiw0QkFBNEIsbUJBQW1CLHFCQUFxQixLQUFLLDZCQUE2QixxQkFBcUIscURBQXFELEtBQUssMEJBQTBCLDJCQUEyQiwyQkFBMkIsb0JBQW9CLG1CQUFtQixrQkFBa0IsbUJBQW1CLHFCQUFxQiw0R0FBNEcseUJBQXlCLDRCQUE0QixLQUFLLGdCQUFnQixxQkFBcUIsS0FBSyxpQkFBaUIscUJBQXFCLEtBQUssbUJBQW1CO0FBQ3ZrRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3N0eWxlcy9tb3ZpZURldGFpbHMubW9kdWxlLmNzcz84YmJhIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvY3NzLWxvYWRlci9zcmMvcnVudGltZS9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAY2hhcnNldCBcXFwiVVRGLThcXFwiO1xcclxcblxcclxcbi5tb3ZpZURldGFpbHNfZmFkZV9feHdZckd7XFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNik7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICB6LWluZGV4OiAxMDtcXHJcXG59XFxyXFxuXFxyXFxuLm1vdmllRGV0YWlsc19jYXJkX19wSFdyNXtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICB3aWR0aDogODAwcHg7XFxyXFxuICAgIGhlaWdodDogNTAwcHg7XFxyXFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxuICAgIGJveC1zaGFkb3c6IDBweCAxNXB4IDM1cHggcmdiYSgwLCAwLCAwLCAwLjAyMyk7XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICAgIFxcclxcbn1cXHJcXG5cXHJcXG4ubW92aWVEZXRhaWxzX2NvbnRhaW5lclBvc3Rlcl9fakk5dGwge1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcbiAgICB3aWR0aDogNDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5tb3ZpZURldGFpbHNfY29udGFpbmVyUG9zdGVyX19qSTl0bCBpbWd7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgYm94LXNoYWRvdzogMHB4IDMwcHggMjBweCByZ2IoMTY1LCAxNjUsIDE2NSk7XFxyXFxufVxcclxcblxcclxcbi5tb3ZpZURldGFpbHNfY29udGFpbmVyRGV0YWlsc19fU3Uwajd7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcclxcbiAgICBsZWZ0OiAyMDBweDtcXHJcXG4gICAgcmlnaHQ6IDBweDtcXHJcXG4gICAgYm90dG9tOiAwO1xcclxcbiAgICB3aWR0aDogOTAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCByZ2IoNDIsIDQyLCA0MikgMzAlLCByZ2JhKDI4LCAyOCwgMjgsIDAuOTA0KSA4NyUsIHRyYW5zcGFyZW50KTtcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1vdmllRGV0YWlsc19jYXJkX19wSFdyNSBwe1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbi5tb3ZpZURldGFpbHNfY2FyZF9fcEhXcjUgaDF7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL3N0eWxlcy9tb3ZpZURldGFpbHMubW9kdWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxnQkFBZ0I7O0FBRWhCO0lBQ0ksZUFBZTtJQUNmLE1BQU07SUFDTixPQUFPO0lBQ1AsV0FBVztJQUNYLFlBQVk7SUFDWixvQ0FBb0M7SUFDcEMsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsV0FBVztBQUNmOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsOENBQThDO0lBQzlDLGdCQUFnQjs7QUFFcEI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsVUFBVTtJQUNWLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osNENBQTRDO0FBQ2hEOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsVUFBVTtJQUNWLFNBQVM7SUFDVCxVQUFVO0lBQ1YsWUFBWTtJQUNaLG1HQUFtRztJQUNuRyxnQkFBZ0I7SUFDaEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGNoYXJzZXQgXFxcIlVURi04XFxcIjtcXHJcXG5cXHJcXG4uZmFkZXtcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIHotaW5kZXg6IDEwO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICB3aWR0aDogODAwcHg7XFxyXFxuICAgIGhlaWdodDogNTAwcHg7XFxyXFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxuICAgIGJveC1zaGFkb3c6IDBweCAxNXB4IDM1cHggcmdiYSgwLCAwLCAwLCAwLjAyMyk7XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICAgIFxcclxcbn1cXHJcXG5cXHJcXG4uY29udGFpbmVyUG9zdGVyIHtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXHJcXG4gICAgd2lkdGg6IDQwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFpbmVyUG9zdGVyIGltZ3tcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBib3gtc2hhZG93OiAwcHggMzBweCAyMHB4IHJnYigxNjUsIDE2NSwgMTY1KTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhaW5lckRldGFpbHN7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcclxcbiAgICBsZWZ0OiAyMDBweDtcXHJcXG4gICAgcmlnaHQ6IDBweDtcXHJcXG4gICAgYm90dG9tOiAwO1xcclxcbiAgICB3aWR0aDogOTAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCByZ2IoNDIsIDQyLCA0MikgMzAlLCByZ2JhKDI4LCAyOCwgMjgsIDAuOTA0KSA4NyUsIHRyYW5zcGFyZW50KTtcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmQgcHtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZCBoMXtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJmYWRlXCI6IFwibW92aWVEZXRhaWxzX2ZhZGVfX3h3WXJHXCIsXG5cdFwiY2FyZFwiOiBcIm1vdmllRGV0YWlsc19jYXJkX19wSFdyNVwiLFxuXHRcImNvbnRhaW5lclBvc3RlclwiOiBcIm1vdmllRGV0YWlsc19jb250YWluZXJQb3N0ZXJfX2pJOXRsXCIsXG5cdFwiY29udGFpbmVyRGV0YWlsc1wiOiBcIm1vdmllRGV0YWlsc19jb250YWluZXJEZXRhaWxzX19TdTBqN1wiXG59O1xubW9kdWxlLmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[1].oneOf[8].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[1].oneOf[8].use[2]!./styles/movieDetails.module.css\n"));

/***/ })

});