/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `:root {\n  --light-mode-bg: rgb(240, 240, 240);\n  --light-mode-text: rgb(18, 18, 18);\n\n  --oxblood: #900;\n  --charcoal: #323232;\n  --heather-gray: #c7c9cc;\n  --dark-olive: #596D48;\n  --pastel-pink: #FDD;\n  --off-white: #f1f1f1;\n}\n\n@media (prefers-color-scheme: dark) {\n  :root {\n    --dark-mode-bg: rgb(18, 18, 18);\n    --dark-mode-text: rgb(240, 240, 240);\n  }\n}\n\n*,\n*::before,\n*::after {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  /* background: hsl(0, 100%, 50% / .1); */\n}\n\nhtml,\nbody {\n  --scrollbar-width: 0px;\n  min-height: 100vh;\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n  overflow-x: hidden;\n\n  background-color: var(--light-mode-bg);\n  color: var(--light-mode-text);\n}\n\n.content {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n\n  /* display: grid;\n  grid-template: 0.75fr 3fr 0.25fr / repeat(3, 1fr);\n  grid-gap: 10px; */\n\n  /* grid-template-rows: 1fr 2.5fr 0.5fr; */\n  /* grid-template-columns: 0.5fr 3.5fr; */\n  /* grid-template-columns: repeat(4, 1fr); */\n\n  /* OPTION: Alternative setup - reactivate 'grid-areas' below & possibly refactor this to work within both the .container below and here in .content (split this code up) */\n  /* Read up on grid-template-areas. What do the dots represent on each line below? */\n  \n  /* grid-template: 200px auto 100px / 1fr 3fr 1fr;\n  grid-template-areas: \n    \"heading heading heading\"\n    \"sidebar main .\"\n    \"footer . .\"; */\n}\n\n.content > * {\n  padding: 15px;\n  font-size: 32px;\n  font-weight: bold;\n}\n\n.search-wrapper {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n/* Search bar styling starts here (NOT the div that the search bar is in)  */\n.search #search-text {\n  display: block;\n  font-family: inherit;\n  /* font-size: 1rem; */\n  margin: 0;\n  padding: 5px;\n  box-sizing: border-box;\n  background-color: #EEE;\n  width: 80%;\n  height: 30px;\n\n  box-shadow: inset 1px 1px 3px #CCC;\n  border-radius: 28px;\n\n  appearance: none;\n}\n\n#search-text {\n  font-size: 60%;\n}\n\nbutton {\n  margin: 1.5rem;\n  padding: 0.75rem 2rem;\n  border-radius: 100vw;\n\n  background-color: goldenrod;\n  border: 1px solid goldenrod;\n}\n\n/* Potentially for the transition of all the elements on the first page. May need two of these animation frames?\ntransform: translateY(1000px);\ntransition: transform 1s ease-in-out;\ntransform: translateY(-100px); */`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://odin-weather-app/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://odin-weather-app/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://odin-weather-app/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://odin-weather-app/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://odin-weather-app/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://odin-weather-app/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://odin-weather-app/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://odin-weather-app/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://odin-weather-app/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://odin-weather-app/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _weatherAppLogic_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weatherAppLogic.js */ \"./src/weatherAppLogic.js\");\n/* harmony import */ var _weatherUI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./weatherUI.js */ \"./src/weatherUI.js\");\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n\n\n\n// import Plus from './img/plus.png';\n\n(0,_weatherAppLogic_js__WEBPACK_IMPORTED_MODULE_0__.getForecast)(\"London, UK\");\n(0,_weatherAppLogic_js__WEBPACK_IMPORTED_MODULE_0__.processData)();\n\n// Search bar functionality responsible for reading the location data in the search bar and fetching the forecast for that location via 'getForecast' function\n// TODO: Refactor this code by continuing to convert it from the GIF search version to weather search instead\n\n// function searchFilter() {\n//   // Convert text to lowercase\n//   const searchInput = document.querySelector('.search-text').value.toLowerCase();\n\n//   // TODO: Code for condition where there is no location found goes here. See searchFilter sample below except create the span in this function and append it to the appropriate HTML element.\n\n//   getForecast(searchInput);\n// };\n\nconst searchButton = document.getElementById('search-btn');\n\n// Search button logic that calls the searchFilter function on button click\nsearchButton.addEventListener('click', (e) => {\n  e.preventDefault();\n  \n  let searchInput = document.querySelector('.search-text').value;\n  (0,_weatherAppLogic_js__WEBPACK_IMPORTED_MODULE_0__.getForecast)(searchInput);\n  (0,_weatherUI_js__WEBPACK_IMPORTED_MODULE_1__.renderCurrentTemp)();\n\n  // getForecast.response.currentConditions.temp; (for current temp of location searched for)\n\n  // TODO: This is for the 7 day forecast. Currently a forEach method. The problem is the JSON hits the next 15 days including today's date\n  // Probably needs to be just a 'for' loop where i starts at 1 (i = 1) and ends at 7 (i <= 7), NOT a forEach method like we have here\n  // getForecast.response.days.forEach(result => {\n    // code goes here... })\n\n});\n\n// Random cat GIF and GIF search code template for use above\n\n// Image for random cat GIF on page load as well as GIF refresh for \"More Cats!\" button\n// const img = document.querySelector('img');\n    \n// Search DOM\n// const searchButton = document.getElementById('search-btn');\n\n// Search bar functionality\n// function searchFilter() {\n//   const searchInput = document.querySelector('.search-text').value;\n//   fetch(`https://api.giphy.com/v1/gifs/search?api_key=Pge93Q0t0NjGU4FoHUse9HbIP6TRMCtP&q=${searchInput}&limit=5`, {mode: 'cors'})\n//     .then(response => response.json())\n//     .then(response => {\n//       // Supposed to handle any scenario when GIPHY doesn't find any GIFs related to the search\n//       if (response.data.length === 0) {\n//         const searchError = document.querySelector('span');\n//         const errorText = document.createTextNode(\"No GIF related to the search was found\");\n//         searchError.appendChild(errorText);\n\n//         // When this console.log is the only code under this 'then', all data info from the search shows up in console\n//         console.log(response); \n\n//         return; // Supposed to end the function without doing anything else. Do we need it?\n//       }\n\n//       const searchResults = document.querySelector('.search-results');\n//       searchResults.replaceChildren();\n\n//       response.data.forEach(result => {\n//         const gifWrapper = document.createElement(\"div\");\n//         gifWrapper.classList.add(\"result-wrapper\");\n\n//         const resultGif = document.createElement(\"img\");\n//         resultGif.src = result.images.original.url;\n\n//         gifWrapper.appendChild(resultGif);\n//         searchResults.appendChild(gifWrapper);\n//       })\n//     })\n//     .catch(function(err) {\n//       console.error(`Error: ${err}`);\n//     });  \n// };\n\n// async function getCats() {\n//   const response = await fetch('https://api.giphy.com/v1/gifs/translate?api_key=Pge93Q0t0NjGU4FoHUse9HbIP6TRMCtP&s=cats', {mode: 'cors'})\n//   const catData = await response.json();\n//   img.src = catData.data.images.original.url;\n// }\n\n// getCats();\n\n// const catsButton = document.querySelector('#fetch');\n\n// catsButton.addEventListener('click', async () => {\n//   try {\n//     const fetchCats = await fetch('https://api.giphy.com/v1/gifs/translate?api_key=Pge93Q0t0NjGU4FoHUse9HbIP6TRMCtP&s=cats', {mode: 'cors'})\n//     const anotherCat = await fetchCats.json();\n//     img.src = anotherCat.data.images.original.url; \n//   } catch (e) {\n//     console.error(`Error: ${e}`);\n//   }\n// });\n\n\n// Possible template to use for the weather icons after the user has search for the forecast of a location\n// const headerTask = document.getElementById(\"add-task\");\n\n// const taskIcon = new Image();\n// taskIcon.src = Plus;\n// taskIcon.classList.add(\"image-button\");\n// headerTask.appendChild(taskIcon);\n\n//# sourceURL=webpack://odin-weather-app/./src/index.js?");

/***/ }),

/***/ "./src/weatherAppLogic.js":
/*!********************************!*\
  !*** ./src/weatherAppLogic.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getForecast: () => (/* binding */ getForecast),\n/* harmony export */   processData: () => (/* binding */ processData)\n/* harmony export */ });\nasync function getForecast(location) { \n  try {\n    const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=8997Y4VLTDSVA5KYY96GVK9Y4`);\n\n    const forecastData = await response.json();\n\n    console.log(forecastData);\n    return forecastData;\n  } catch (err) {\n    console.error(err);\n  }\n};\n\n// TODO: Write a function here that PROCESSES the JSON data we're getting from the getForecast() function above & return an object that has only the data we need for the app (current daily temp, 7 day temp forecast, showing temp in Fahrenheit or Celsius, etc.)\n\n// BEGIN\n\n  // INIT a \"for\" loop for the \"days\" array (represents 7 Day Forecast)\n    // INIT the counter variable for this loop and set it's value to 1 (1 representing tomorrow's forecast)\n    // WHILE the counter is smaller than 7 \n      // GET the temp high, the temp low & the current temp of that day. Increment the counter by 1\n      // REPEAT getting temperature and weather conditions for each future date after today's date at the location\n      // UNTIL the 7th day after today's date is reached (include the 7th day's future forecast)\n\n// END\n\nasync function processData() {\n  // We need the 'address', the 'temp' from 'currentConditions' and the 'tempmax' & 'tempmin' from object indexes 1-7 in the 'days' array\n  \n  // We likely also need to return one object with 2 keys, the first key representing today's temp and the second key representing all the future dates, which will show as a nested array with 15 objects. Then, we need to figure out how to only get indexes 1-7 from that array\n\n  // CALL getForecast function\n  const weather = await getForecast(\"London, UK\");\n\n  // ERROR #1 - Uncaught (in promise) TypeError: weather.json is not a function\n  // ERROR #2 - Uncaught (in promise) TypeError: Cannot read properties of undefined (reading 'json')\n  // const weatherData = await weather.response.json();\n\n  // WHEN this function receives the JSON data from getForecast\n  // SET a variable equal to the \"temp\" property under the \"currentConditions\" object\n  // Uncaught (in promise) TypeError: Cannot read properties of undefined (reading 'currentConditions') - happens even w/o async await code\n  // When there is no async/await code, this line throws an error before getForecast above finishes (probably b/c the func is synchronous)\n  // Previously weather.response.currentConditions.temp & getForecast.currentConditions.temp\n  let todaysTemp = weather.currentConditions.temp;\n  console.log(todaysTemp);\n\n  // SET a variable equal to the \"days\" array \n  let futureTemps = weather.days;\n  console.log(futureTemps);\n\n  const outlook = {\n    temperature: todaysTemp,\n    weeklyForecast: [],\n\n    // TODO: storeForecast is showing the entire 'days' array in the weeklyForecast array when we only need objects 1 thru 7. Find out why.\n    // Review 'for...of' loop docs on how to skip a 'day' variable & how to exit the loop at a certain sequence/variable. \n    storeForecast: function () {\n      // We might need a more traditional 'for' loop here instead if we can't get it to operate via the TODO just above here\n      for (const day of futureTemps) { // Possibly use 'let' over 'const' here? We shouldn't need to ('day' itself isn't reassigned in the loop)\n        // TODO: This doesn't skip the first object in the 'days' array in the API. Change the conditional?\n\n        // The issue is that 'day' is = to the value/object itself, NOT the number/property/key in the array that the object represents (0:, 1:, etc). We need to figure out what 'day' in these conditionals need to equal while still keeping this a 'for...of' loop. Get it to skip the first 'object' and end after the 8th 'object' or at the 9th 'object'. Is it relative to the index itself (day[0])? Or do we need to end up using a 'for...in' loop because it reads the property/key (0, 1, etc) & hope the objects/values still get read & added to our weeklyForecast array? Changing to a 'for...in' loop is the \"simple\" solution if it works.\n\n        // OPTION #1: Try bracket notation (day[0] or day[\"0\"] & day[7] or day[\"7\"]) in each conditional (if statement) below\n        // OPTION #2: Change to a 'for...in' loop and keep everything else the same as it is now (BEFORE option 1)\n        // OPTION #3: Try Gemini AI results on Google search (read up on 'Object.entries'?)\n        // OPTION #4: Read 'Looping code' MDN docs & go for the traditional 'for' loop\n\n        // Maybe look at 'stations' and see how those objects are set up (array?)\n\n        if (day === 0) { // Previously (day[0] || futureTemps[day] == 0), (day == 0), (day === 0), (day[0]) alone\n          continue;\n        }\n\n        // TODO: This doesn't end the function after reaching the 8th object in the 'days' array, but keeps going. Change the conditional?\n        if (day === 8) { // Previously (futureTemps[day] > 7), (day > 7), (day === 8), (day[7])\n          break;\n        }\n\n        let futureDate = day.datetime;\n        let tempHigh = day.tempmax;\n        let tempLow = day.tempmin;\n        let weatherIcon = day.icon;\n\n        const futureForecast = {\n          futureDate,\n          tempHigh,\n          tempLow,\n          weatherIcon\n        };\n        \n        this.weeklyForecast.push(futureForecast);\n      }\n    }\n  }\n\n  // PRINT a new object that only has the current daily temp, the 7 day forecast and whether or not the temp should be F or C from the JSON\n  outlook.storeForecast();\n\n  // PRINT = console.log()\n  console.log(outlook);  \n  return outlook;\n\n  // let newObject = {\n  //   todaysTemp,\n  //   forecastResults.outlook\n  // };\n\n  // Possible 'for' loop alternative\n  // OPTION: 'Filter' method on 'futureTemps' to only get the first 7 items\n  // for (let i = 1; i < futureTemps.length; i++) {\n  //   if (futureTemps[i] > 7) {\n  //     break;\n  //   }\n\n  //   // May need to use 'map' method and/or 'filter' method and create a new array with those instead of what we have below currently\n  //   let futureDate = futureTemps[i].datetime;\n  //   let tempHigh = futureTemps[i].tempmax;\n  //   let tempLow = futureTemps[i].tempmin;\n\n  //   const outlook = {\n  //     todaysTemp,\n  //     futureDate,\n  //     tempHigh,\n  //     tempLow\n  //   };\n\n  //  // Possibly try 'Array.from' method to change each object to an array and do something with those new arrays?\n  //  // let arr = Array.from(outlook);\n  //  // alert(arr);\n\n  //   // TODO: outlook[i] object with all keys and values shows up in DevTools but \"undefined\" in console\n  //   // TODO: Loops through once but never again after 'return'. If we put 'return' on the outside, how do we get the function to return 7 objects for each future date. Or do we need one object with 2 keys, the first key representing today's temp and the second key representing all the future dates (it would be a nested object or nested array followed by nested objects for each array index)\n  //   console.log(outlook[i]);\n  //   return outlook[i]; // May need this inside { } for closure reasons?\n  // }\n  \n  // OPTION: Using 'map' or 'filter' on the original 'days' array is another approach\n};\n\n// Preslaw example of step 3 function\n\n// function getWeatherDataLocation(weatherData) {\n//   // Preslaw note: with city name for example putting here, is that i am supposed to do ?\n//   const createObject = {}\n//   return createObject\n// }\n\n// Cake's take on Preslaw's getUserWeatherLocation() function (Cake: \"maybe make this more useable\")\n\n// async function getUserWeatherLocation() {\n//   try {\n//     const response = await fetch(\n//       `https://api.weatherapi.com/v1/forecast.json?key=e5de975d30ff49eeb9a70436231107&q=${searchingLocation.value}&days=7`,\n//       { mode: 'cors' }\n//     );\n//     const weatherData = await response.json();\n//     showCurrentWeatherData(weatherData);\n//     sevenDaysForecast(weatherData);\n//   } catch (error) {\n//     console.log(error);\n//   }\n// }\n\n// xCheet initial getLocation function (Cake said this was a good start)\n\n// function getLocation(data) {\n//   let location = data.location;\n\n//   console.log(location);\n//   return location;\n// }\n\n// xCheet making their own object as an example  (Cake says this is good & just add remaining values)\n\n// let myLocation = {\n//   country: data.location.country,\n//   name: data.location.name\n// }\n\n// TODO: Write a function that fetches the GIF that matches the day's forecast (linked to getForecast fetching the Weather Crossing API?). We will need to utilize 'getForecast.response.currentConditions.conditions' to read the weather description & possibly chain the (.then) promises as well (fetch(Weather Crossing), .then(result => fetch(GIPHY)))\n\n\n\n//# sourceURL=webpack://odin-weather-app/./src/weatherAppLogic.js?");

/***/ }),

/***/ "./src/weatherUI.js":
/*!**************************!*\
  !*** ./src/weatherUI.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderCurrentTemp: () => (/* binding */ renderCurrentTemp)\n/* harmony export */ });\n/* harmony import */ var _weatherAppLogic_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weatherAppLogic.js */ \"./src/weatherAppLogic.js\");\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _img_update_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/update.png */ \"./src/img/update.png\");\n\n\n\n// import Delete from './img/trash-bin.png';\n\n// getForecast.response.currentConditions.temp; (for current temp of location searched for)\n\n// TODO: This is for the 7 day forecast. Currently a forEach method. The problem is the JSON hits the next 15 days including today's date.\n// Probably needs to be just a 'for' loop where i starts at 1 (i = 1) and ends at 7 (i <= 7), NOT a forEach method like we have here\n// getForecast.response.days.forEach(result => {\n  // code goes here... })\n\n// Template for rendering the forecast\nfunction renderCurrentTemp() {\n  let searchText = document.getElementById('search-text').value.trim();\n\n  if (searchText) { \n    // DOM for \"Weather Results\" section of the page\n    const forecastDisplay = document.querySelector('.search-results');\n\n    forecastDisplay.replaceChildren(); // Erases previous weather results if necessary (may not keep this [here])\n\n    // Generate \"Weather\" wrapper to be added to the weather results area (div container)\n    const weatherWrapper = document.createElement('div');\n    weatherWrapper.classList.add('weather-wrapper');\n  \n    // Temperature in Fahrenheit or Celsius\n    let weatherTemp = document.createElement('h4');\n    weatherTemp.classList.add('weather-temp');\n\n    // TODO: Test this line of code. If the text isn't correct, figure out how to get the temp results from the fetch request to show here\n    // Put this under button logic in index module if necessary\n    weatherTemp.innerText = _weatherAppLogic_js__WEBPACK_IMPORTED_MODULE_0__.getForecast.response.currentConditions.temp; \n\n    // TODO: We need a wrapper/container for both the location icon and the text for the actual location. Place the next 2 elements under it.\n\n    // Name of location from the search bar, icon included \n    //TODO: this is a sample. Need to change 'Update' image link above after getting location/map icon from the internet (see Excalidraw)\n    const weatherIcon = new Image();\n    weatherIcon.src = _img_update_png__WEBPACK_IMPORTED_MODULE_2__;\n    weatherIcon.classList.add(\"image-button\");\n\n    let weatherLocation = document.createElement('p');\n    weatherLocation.classList.add('weather-location');\n    weatherLocation.innerText = searchText;\n    \n    // Append everything where it needs to be\n    weatherWrapper.appendChild(weatherTemp);\n    weatherWrapper.appendChild(weatherIcon);\n    weatherWrapper.appendChild(weatherLocation);\n\n    forecastDisplay.appendChild(weatherWrapper);\n  }\n}\n\n// TODO: Need another function responsible for rendering the 7 Day Forecast\n\n// TODO: Write a function that renders the background matching the weather condition for the day. Try to separate the fetch request by placing it in another function in the app logic module and have this function call that one.\n\n\n\n//# sourceURL=webpack://odin-weather-app/./src/weatherUI.js?");

/***/ }),

/***/ "./src/img/update.png":
/*!****************************!*\
  !*** ./src/img/update.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"2eeafec0e15a8b26f6de.png\";\n\n//# sourceURL=webpack://odin-weather-app/./src/img/update.png?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;