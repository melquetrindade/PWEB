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

eval(__webpack_require__.ts("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"@charset \\\"UTF-8\\\";\\r\\n\\r\\n.movieDetails_fade__xwYrG{\\r\\n    position: fixed;\\r\\n    top: 0;\\r\\n    left: 0;\\r\\n    width: 100%;\\r\\n    height: 100%;\\r\\n    background-color: rgba(0, 0, 0, 0.6);\\r\\n    display: flex;\\r\\n    align-items: center;\\r\\n    justify-content: center;\\r\\n    z-index: 10;\\r\\n}\\r\\n\\r\\n.movieDetails_card__pHWr5{\\r\\n    display: flex;\\r\\n    position: relative;\\r\\n    width: 800px;\\r\\n    height: 500px;\\r\\n    margin-top: 20px;\\r\\n    border-radius: 20px;\\r\\n    box-shadow: 0px 15px 35px rgba(0, 0, 0, 0.023);\\r\\n    overflow: hidden;\\r\\n    \\r\\n}\\r\\n\\r\\n.movieDetails_containerPoster__jI9tl {\\r\\n    border-radius: 20px;\\r\\n    width: 40%;\\r\\n    height: 100%;\\r\\n}\\r\\n\\r\\n.movieDetails_containerPoster__jI9tl img{\\r\\n    height: 100%;\\r\\n}\\r\\n\\r\\n.movieDetails_containerDetails__Su0j7{\\r\\n    position: absolute;\\r\\n    padding-left: 0px;\\r\\n    left: 120px;\\r\\n    right: 0px;\\r\\n    bottom: 0;\\r\\n    width: 90%;\\r\\n    height: 100%;\\r\\n    background: linear-gradient(to left, rgb(37, 37, 37) 50%, transparent);\\r\\n    overflow: hidden;\\r\\n    border-radius: 20px;\\r\\n}\\r\\n\\r\\n.movieDetails_card__pHWr5 p{\\r\\n    color: white;\\r\\n}\\r\\n\\r\\n.movieDetails_card__pHWr5 h1{\\r\\n    color: white;\\r\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://styles/movieDetails.module.css\"],\"names\":[],\"mappings\":\"AAAA,gBAAgB;;AAEhB;IACI,eAAe;IACf,MAAM;IACN,OAAO;IACP,WAAW;IACX,YAAY;IACZ,oCAAoC;IACpC,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,WAAW;AACf;;AAEA;IACI,aAAa;IACb,kBAAkB;IAClB,YAAY;IACZ,aAAa;IACb,gBAAgB;IAChB,mBAAmB;IACnB,8CAA8C;IAC9C,gBAAgB;;AAEpB;;AAEA;IACI,mBAAmB;IACnB,UAAU;IACV,YAAY;AAChB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,kBAAkB;IAClB,iBAAiB;IACjB,WAAW;IACX,UAAU;IACV,SAAS;IACT,UAAU;IACV,YAAY;IACZ,sEAAsE;IACtE,gBAAgB;IAChB,mBAAmB;AACvB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,YAAY;AAChB\",\"sourcesContent\":[\"@charset \\\"UTF-8\\\";\\r\\n\\r\\n.fade{\\r\\n    position: fixed;\\r\\n    top: 0;\\r\\n    left: 0;\\r\\n    width: 100%;\\r\\n    height: 100%;\\r\\n    background-color: rgba(0, 0, 0, 0.6);\\r\\n    display: flex;\\r\\n    align-items: center;\\r\\n    justify-content: center;\\r\\n    z-index: 10;\\r\\n}\\r\\n\\r\\n.card{\\r\\n    display: flex;\\r\\n    position: relative;\\r\\n    width: 800px;\\r\\n    height: 500px;\\r\\n    margin-top: 20px;\\r\\n    border-radius: 20px;\\r\\n    box-shadow: 0px 15px 35px rgba(0, 0, 0, 0.023);\\r\\n    overflow: hidden;\\r\\n    \\r\\n}\\r\\n\\r\\n.containerPoster {\\r\\n    border-radius: 20px;\\r\\n    width: 40%;\\r\\n    height: 100%;\\r\\n}\\r\\n\\r\\n.containerPoster img{\\r\\n    height: 100%;\\r\\n}\\r\\n\\r\\n.containerDetails{\\r\\n    position: absolute;\\r\\n    padding-left: 0px;\\r\\n    left: 120px;\\r\\n    right: 0px;\\r\\n    bottom: 0;\\r\\n    width: 90%;\\r\\n    height: 100%;\\r\\n    background: linear-gradient(to left, rgb(37, 37, 37) 50%, transparent);\\r\\n    overflow: hidden;\\r\\n    border-radius: 20px;\\r\\n}\\r\\n\\r\\n.card p{\\r\\n    color: white;\\r\\n}\\r\\n\\r\\n.card h1{\\r\\n    color: white;\\r\\n}\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"fade\": \"movieDetails_fade__xwYrG\",\n\t\"card\": \"movieDetails_card__pHWr5\",\n\t\"containerPoster\": \"movieDetails_containerPoster__jI9tl\",\n\t\"containerDetails\": \"movieDetails_containerDetails__Su0j7\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1sxXS5vbmVPZls4XS51c2VbMV0hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbMV0ub25lT2ZbOF0udXNlWzJdIS4vc3R5bGVzL21vdmllRGV0YWlscy5tb2R1bGUuY3NzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMsbUtBQStFO0FBQ3pIO0FBQ0E7QUFDQSw2REFBNkQsa0NBQWtDLHdCQUF3QixlQUFlLGdCQUFnQixvQkFBb0IscUJBQXFCLDZDQUE2QyxzQkFBc0IsNEJBQTRCLGdDQUFnQyxvQkFBb0IsS0FBSyxrQ0FBa0Msc0JBQXNCLDJCQUEyQixxQkFBcUIsc0JBQXNCLHlCQUF5Qiw0QkFBNEIsdURBQXVELHlCQUF5QixhQUFhLDhDQUE4Qyw0QkFBNEIsbUJBQW1CLHFCQUFxQixLQUFLLGlEQUFpRCxxQkFBcUIsS0FBSyw4Q0FBOEMsMkJBQTJCLDBCQUEwQixvQkFBb0IsbUJBQW1CLGtCQUFrQixtQkFBbUIscUJBQXFCLCtFQUErRSx5QkFBeUIsNEJBQTRCLEtBQUssb0NBQW9DLHFCQUFxQixLQUFLLHFDQUFxQyxxQkFBcUIsS0FBSyxPQUFPLHVHQUF1RyxNQUFNLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsY0FBYyxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsNkNBQTZDLGNBQWMsd0JBQXdCLGVBQWUsZ0JBQWdCLG9CQUFvQixxQkFBcUIsNkNBQTZDLHNCQUFzQiw0QkFBNEIsZ0NBQWdDLG9CQUFvQixLQUFLLGNBQWMsc0JBQXNCLDJCQUEyQixxQkFBcUIsc0JBQXNCLHlCQUF5Qiw0QkFBNEIsdURBQXVELHlCQUF5QixhQUFhLDBCQUEwQiw0QkFBNEIsbUJBQW1CLHFCQUFxQixLQUFLLDZCQUE2QixxQkFBcUIsS0FBSywwQkFBMEIsMkJBQTJCLDBCQUEwQixvQkFBb0IsbUJBQW1CLGtCQUFrQixtQkFBbUIscUJBQXFCLCtFQUErRSx5QkFBeUIsNEJBQTRCLEtBQUssZ0JBQWdCLHFCQUFxQixLQUFLLGlCQUFpQixxQkFBcUIsS0FBSyxtQkFBbUI7QUFDcjVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL21vdmllRGV0YWlscy5tb2R1bGUuY3NzPzhiYmEiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9ydW50aW1lL2FwaS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBjaGFyc2V0IFxcXCJVVEYtOFxcXCI7XFxyXFxuXFxyXFxuLm1vdmllRGV0YWlsc19mYWRlX194d1lyR3tcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIHotaW5kZXg6IDEwO1xcclxcbn1cXHJcXG5cXHJcXG4ubW92aWVEZXRhaWxzX2NhcmRfX3BIV3I1e1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIHdpZHRoOiA4MDBweDtcXHJcXG4gICAgaGVpZ2h0OiA1MDBweDtcXHJcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXHJcXG4gICAgYm94LXNoYWRvdzogMHB4IDE1cHggMzVweCByZ2JhKDAsIDAsIDAsIDAuMDIzKTtcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAgXFxyXFxufVxcclxcblxcclxcbi5tb3ZpZURldGFpbHNfY29udGFpbmVyUG9zdGVyX19qSTl0bCB7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxuICAgIHdpZHRoOiA0MCU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLm1vdmllRGV0YWlsc19jb250YWluZXJQb3N0ZXJfX2pJOXRsIGltZ3tcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4ubW92aWVEZXRhaWxzX2NvbnRhaW5lckRldGFpbHNfX1N1MGo3e1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMHB4O1xcclxcbiAgICBsZWZ0OiAxMjBweDtcXHJcXG4gICAgcmlnaHQ6IDBweDtcXHJcXG4gICAgYm90dG9tOiAwO1xcclxcbiAgICB3aWR0aDogOTAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCByZ2IoMzcsIDM3LCAzNykgNTAlLCB0cmFuc3BhcmVudCk7XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5tb3ZpZURldGFpbHNfY2FyZF9fcEhXcjUgcHtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4ubW92aWVEZXRhaWxzX2NhcmRfX3BIV3I1IGgxe1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9zdHlsZXMvbW92aWVEZXRhaWxzLm1vZHVsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsZ0JBQWdCOztBQUVoQjtJQUNJLGVBQWU7SUFDZixNQUFNO0lBQ04sT0FBTztJQUNQLFdBQVc7SUFDWCxZQUFZO0lBQ1osb0NBQW9DO0lBQ3BDLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLDhDQUE4QztJQUM5QyxnQkFBZ0I7O0FBRXBCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLFVBQVU7SUFDVixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsV0FBVztJQUNYLFVBQVU7SUFDVixTQUFTO0lBQ1QsVUFBVTtJQUNWLFlBQVk7SUFDWixzRUFBc0U7SUFDdEUsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBjaGFyc2V0IFxcXCJVVEYtOFxcXCI7XFxyXFxuXFxyXFxuLmZhZGV7XFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNik7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICB6LWluZGV4OiAxMDtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmR7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgd2lkdGg6IDgwMHB4O1xcclxcbiAgICBoZWlnaHQ6IDUwMHB4O1xcclxcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcbiAgICBib3gtc2hhZG93OiAwcHggMTVweCAzNXB4IHJnYmEoMCwgMCwgMCwgMC4wMjMpO1xcclxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgICBcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhaW5lclBvc3RlciB7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxuICAgIHdpZHRoOiA0MCU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhaW5lclBvc3RlciBpbWd7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhaW5lckRldGFpbHN7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAwcHg7XFxyXFxuICAgIGxlZnQ6IDEyMHB4O1xcclxcbiAgICByaWdodDogMHB4O1xcclxcbiAgICBib3R0b206IDA7XFxyXFxuICAgIHdpZHRoOiA5MCU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsIHJnYigzNywgMzcsIDM3KSA1MCUsIHRyYW5zcGFyZW50KTtcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmQgcHtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZCBoMXtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJmYWRlXCI6IFwibW92aWVEZXRhaWxzX2ZhZGVfX3h3WXJHXCIsXG5cdFwiY2FyZFwiOiBcIm1vdmllRGV0YWlsc19jYXJkX19wSFdyNVwiLFxuXHRcImNvbnRhaW5lclBvc3RlclwiOiBcIm1vdmllRGV0YWlsc19jb250YWluZXJQb3N0ZXJfX2pJOXRsXCIsXG5cdFwiY29udGFpbmVyRGV0YWlsc1wiOiBcIm1vdmllRGV0YWlsc19jb250YWluZXJEZXRhaWxzX19TdTBqN1wiXG59O1xubW9kdWxlLmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[1].oneOf[8].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[1].oneOf[8].use[2]!./styles/movieDetails.module.css\n"));

/***/ })

});