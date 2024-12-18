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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _weatherAppLogic_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weatherAppLogic.js */ \"./src/weatherAppLogic.js\");\n/* harmony import */ var _weatherUI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./weatherUI.js */ \"./src/weatherUI.js\");\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n\n\n\n// import Plus from './img/plus.png';\n\n(0,_weatherAppLogic_js__WEBPACK_IMPORTED_MODULE_0__.getForecast)(\"London, UK\");\n(0,_weatherAppLogic_js__WEBPACK_IMPORTED_MODULE_0__.processData)();\n\n// Search bar functionality responsible for reading the location data in the search bar and fetching the forecast for that location\nfunction searchFilter() {\n  // OBTAIN the text inside the search bar of the UI and convert that text to lowercase\n  const searchInput = document.querySelector('.search-text').value.toLowerCase();\n\n  // CALL getForecast with searchInput as the parameter representing the location to get the weather from\n  const myWeather = (0,_weatherAppLogic_js__WEBPACK_IMPORTED_MODULE_0__.getForecast)(searchInput);\n  \n  myWeather.then(() => {\n    // IF the location that the user inputs can't be found by the weather API THEN\n    if (!_weatherAppLogic_js__WEBPACK_IMPORTED_MODULE_0__.getForecast) {\n      // CREATE a <span> element inside the 'search-results' div with an error message as text\n      const searchResults = document.querySelector('.search-results');\n      const searchError = document.createElement('span');\n      const errorText = document.createTextNode(\"No GIF related to the search was found\");\n  \n      // APPEND the error message to its <span> element & the <span> element to the 'search-results' div\n      searchError.appendChild(errorText);\n      searchResults.replaceChildren();\n      searchResults.appendChild(searchError);\n  \n      // SHOW the <span> element with its error message in the UI\n      return; // Supposed to end the function without doing anything else. Do we need it?\n    // ELSE log the weather location result from the search bar in the console\n    } else {\n      (0,_weatherAppLogic_js__WEBPACK_IMPORTED_MODULE_0__.processData)();\n    }\n    // ENDIF\n  })\n  .catch(function(err) {\n    console.error(`Error: ${err}`);\n  });\n};\n\nconst searchButton = document.getElementById('search-btn');\n\n// Search button logic that calls the searchFilter function on button click\n// WHEN the user inputs a location in the Search bar & clicks the Search button\nsearchButton.addEventListener('click', (e) => { // CALL the searchButton event listener\n  e.preventDefault();\n  \n  searchFilter();\n\n  // REMOVE (HIDE) the Heading element\n\n  // SET the remaining elements to the top of the webpage\n\n  // CALL the render forecast functions under those elements that will:\n\n  // SHOW the forecast for that location for that day\n  (0,_weatherUI_js__WEBPACK_IMPORTED_MODULE_1__.renderCurrentTemp)(); \n\n  // SHOW the forecast for that location during the next 7 days\n  // renderWeeklyTemps();\n\n  // DISPLAY the GIF for the related weather condition as a background image\n  (0,_weatherUI_js__WEBPACK_IMPORTED_MODULE_1__.getWeatherGIF)();\n\n  // getForecast.response.currentConditions.temp; (for current temp of location searched for)\n});\n\n// Random cat GIF and GIF search code template for use above\n\n// Image for random cat GIF on page load as well as GIF refresh for \"More Cats!\" button\n// const img = document.querySelector('img');\n    \n// Search DOM\n// const searchButton = document.getElementById('search-btn');\n\n// Search bar functionality\n// function searchFilter() {\n//   const searchInput = document.querySelector('.search-text').value;\n//   fetch(`https://api.giphy.com/v1/gifs/search?api_key=Pge93Q0t0NjGU4FoHUse9HbIP6TRMCtP&q=${searchInput}&limit=5`, {mode: 'cors'})\n//     .then(response => response.json())\n//     .then(response => {\n//       // Supposed to handle any scenario when GIPHY doesn't find any GIFs related to the search\n//       if (response.data.length === 0) {\n//         const searchError = document.querySelector('span');\n//         const errorText = document.createTextNode(\"No GIF related to the search was found\");\n//         searchError.appendChild(errorText);\n\n//         // When this console.log is the only code under this 'then', all data info from the search shows up in console\n//         console.log(response); \n\n//         return; // Supposed to end the function without doing anything else. Do we need it?\n//       }\n\n//       const searchResults = document.querySelector('.search-results');\n//       searchResults.replaceChildren();\n\n//       response.data.forEach(result => {\n//         const gifWrapper = document.createElement(\"div\");\n//         gifWrapper.classList.add(\"result-wrapper\");\n\n//         const resultGif = document.createElement(\"img\");\n//         resultGif.src = result.images.original.url;\n\n//         gifWrapper.appendChild(resultGif);\n//         searchResults.appendChild(gifWrapper);\n//       })\n//     })\n//     .catch(function(err) {\n//       console.error(`Error: ${err}`);\n//     });  \n// };\n\n// async function getCats() {\n//   const response = await fetch('https://api.giphy.com/v1/gifs/translate?api_key=Pge93Q0t0NjGU4FoHUse9HbIP6TRMCtP&s=cats', {mode: 'cors'})\n//   const catData = await response.json();\n//   img.src = catData.data.images.original.url;\n// }\n\n// getCats();\n\n// const catsButton = document.querySelector('#fetch');\n\n// catsButton.addEventListener('click', async () => {\n//   try {\n//     const fetchCats = await fetch('https://api.giphy.com/v1/gifs/translate?api_key=Pge93Q0t0NjGU4FoHUse9HbIP6TRMCtP&s=cats', {mode: 'cors'})\n//     const anotherCat = await fetchCats.json();\n//     img.src = anotherCat.data.images.original.url; \n//   } catch (e) {\n//     console.error(`Error: ${e}`);\n//   }\n// });\n\n\n// Possible template to use for the weather icons after the user has search for the forecast of a location\n// const headerTask = document.getElementById(\"add-task\");\n\n// const taskIcon = new Image();\n// taskIcon.src = Plus;\n// taskIcon.classList.add(\"image-button\");\n// headerTask.appendChild(taskIcon);\n\n//# sourceURL=webpack://odin-weather-app/./src/index.js?");

/***/ }),

/***/ "./src/weatherAppLogic.js":
/*!********************************!*\
  !*** ./src/weatherAppLogic.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getForecast: () => (/* binding */ getForecast),\n/* harmony export */   processData: () => (/* binding */ processData)\n/* harmony export */ });\n// Variable that allows both functions below to declare the same user input location via global scope\nlet myLocation;\n\n// Possibly need this empty array to add the outlooks from processData into\n// let outlooks = [];\n\n// Hits the API and returns all the weather data for a location\n// OPTION: Refactor this to the MDN example we have in Obsidian notes (under 'Divide & Conquer')\nasync function getForecast(location) { \n  try {\n    const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=8997Y4VLTDSVA5KYY96GVK9Y4`);\n\n    myLocation = location;\n    const forecastData = await response.json();\n\n    console.log(forecastData);\n    return forecastData;\n  } catch (err) {\n    console.error(err);\n  }\n};\n\n// PROCESSES the JSON data we're getting from getForecast() & returns an object that has only the data we need for the app\nasync function processData() {\n  try {\n    // CALL getForecast function\n    const weather = await getForecast(myLocation);\n\n    // WHEN this function receives the JSON data from getForecast\n\n    // SET a variable equal to either the \"resolvedAddress\" property \n    let address = weather.resolvedAddress;\n    console.log(address);\n\n    // SET a variable equal to the \"temp\" property under the \"currentConditions\" object\n    let todaysTemp = weather.currentConditions.temp;\n    console.log(todaysTemp);\n\n    // SET a variable equal to the \"icon\" property (high level weather summary) under the \"currentConditions\" object\n    let currentSummary = weather.currentConditions.icon;\n    console.log(currentSummary);\n\n    // SET a variable equal to the \"days\" array \n    let futureTemps = weather.days;\n    console.log(futureTemps);\n\n    const outlook = {\n      location: address,\n      temperature: todaysTemp,\n      summary: currentSummary,\n      weeklyForecast: [],\n      storeForecast: function () {\n        // INIT a \"for\" loop for the \"days\" array (represents 7 Day Forecast)\n        for (const day of futureTemps) { \n          // INIT the counter variable for this loop and set it's value to 1 (1 representing tomorrow's forecast)\n          if (day === futureTemps[0]) { \n            continue;\n          }\n\n          // WHILE the counter is smaller than 7 \n            // GET the temp high, the temp low & the current temp of that day. Increment the counter by 1\n            // REPEAT getting temperature and weather conditions for each future date after today's date at the location\n            // UNTIL the 7th day after today's date is reached (include the 7th day's future forecast)\n          if (day === futureTemps[8]) {\n            break;\n          }\n\n          let futureForecast = {\n            futureDate: day.datetime,\n            tempHigh: day.tempmax,\n            tempLow: day.tempmin,\n            weatherIcon: day.icon\n          };\n          \n          this.weeklyForecast.push(futureForecast);\n        }\n      }\n    }\n\n    // PRINT a new object that only has the current daily temp, the 7 day forecast and whether or not the temp should be F or C from the JSON\n    outlook.storeForecast();\n\n    // PRINT = console.log()\n    console.log(outlook);  \n    return outlook; // OPTION: Return this like a closure/factory function via 'return { outlook }' so the GIF fetching function has access to the outlook OR push it to the empty array above (outlooks.push(outlook);)? See if simply using 'processData.outlook' in other modules will work first.\n  } catch (err) {\n    console.error(err);\n  }\n};\n\n\n\n//# sourceURL=webpack://odin-weather-app/./src/weatherAppLogic.js?");

/***/ }),

/***/ "./src/weatherUI.js":
/*!**************************!*\
  !*** ./src/weatherUI.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getWeatherGIF: () => (/* binding */ getWeatherGIF),\n/* harmony export */   renderCurrentTemp: () => (/* binding */ renderCurrentTemp)\n/* harmony export */ });\n/* harmony import */ var _weatherAppLogic_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weatherAppLogic.js */ \"./src/weatherAppLogic.js\");\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _img_update_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/update.png */ \"./src/img/update.png\");\n\n\n\n// import Delete from './img/trash-bin.png';\n\n// DOM for \"Weather Results\" section of the page\nconst forecastDisplay = document.querySelector('.search-results');\n\n// Template for rendering the forecast\nfunction renderCurrentTemp() {\n  let searchText = document.getElementById('search-text').value.trim();\n\n  if (searchText) { \n    forecastDisplay.replaceChildren(); // Erases previous weather results if necessary (may not keep this [here])\n\n    // Generate \"Weather\" wrapper to be added to the weather results area (div container)\n    const weatherWrapper = document.createElement('div');\n    weatherWrapper.classList.add('weather-wrapper');\n  \n    // Temperature in Fahrenheit or Celsius\n    let weatherTemp = document.createElement('h4');\n    weatherTemp.classList.add('weather-temp');\n\n    // TODO: Test this line of code. If the text isn't correct, figure out how to get the temp results from the fetch request to show here\n    // Put this under button logic in index module if necessary\n    weatherTemp.innerText = _weatherAppLogic_js__WEBPACK_IMPORTED_MODULE_0__.getForecast.response.currentConditions.temp; \n\n    // TODO: We need a wrapper/container for both the location icon and the text for the actual location. Place the next 2 elements under it.\n\n    // Name of location from the search bar, icon included \n    //TODO: this is a sample. Need to change 'Update' image link above after getting location/map icon from the internet (see Excalidraw)\n    const weatherIcon = new Image();\n    weatherIcon.src = _img_update_png__WEBPACK_IMPORTED_MODULE_2__;\n    weatherIcon.classList.add(\"image-button\");\n\n    let weatherLocation = document.createElement('p');\n    weatherLocation.classList.add('weather-location');\n    weatherLocation.innerText = searchText;\n    \n    // Append everything where it needs to be\n    weatherWrapper.appendChild(weatherTemp);\n    weatherWrapper.appendChild(weatherIcon);\n    weatherWrapper.appendChild(weatherLocation);\n\n    forecastDisplay.appendChild(weatherWrapper);\n  }\n}\n\n// TODO: Need another function responsible for rendering the 7 Day Forecast called 'renderWeeklyTemps()'\n\n\n// OPTION: Possibly need to chain the (.then) promises as well (fetch(Weather Crossing), .then(result => fetch(GIPHY))). \n\n// See if simply using 'processData.outlook(.summary)' will work first. The function should also render the background matching the weather condition for the day.\n\n// CALL processData function (by declaring a variable equal to it? as a parameter of the function itself? Do we call it at all?)\nfunction getWeatherGIF() {\n  // READ the Weather Crossing API's 'icon set parameter' from the returned 'outlook' object (for today's temperature) in processData \n  // SET a variable equal to that 'icon set parameter'\n  let weatherSummary = _weatherAppLogic_js__WEBPACK_IMPORTED_MODULE_0__.processData.outlook.summary;\n\n  // CREATE an empty <img> element\n  const img = document.createElement('img');\n  img.src = \"#\";\n\n  // Temporary placeholder for appending the <img> element for the GIFs to be appended to for now (intended to be used as a background image)\n  forecastDisplay.appendChild(img);\n\n  // OBTAIN the GIFs from the GIPHY API related to that variable representing the weather text in the 'icon set parameter'\n  let summonClip = async () => {\n    const fetchClip = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=Pge93Q0t0NjGU4FoHUse9HbIP6TRMCtP&q=${weatherSummary}`, \n      {mode: 'cors'})\n    \n    const resultClip = await fetchClip.json();\n\n    // CASE weather summary (icon set parameter) OF\n    switch (true) {\n      case // fetch() a random weather GIF from the GIPHY API for any of these 'icon1' conditions\n      (weatherSummary === \"snow\") || (weatherSummary === \"rain\") || (weatherSummary === \"fog\") || \n      (weatherSummary === \"wind\") || (weatherSummary === \"cloudy\"): \n        // APPEND the GIF from the API to that <img> element as a background image\n        // SHOW the GIF as a background image for the weather results in the UI\n\n        // OPTION: Potentially need a 'replaceChildren()' of some kind here if we change the <img> placeholder above\n        img.src = resultClip.data.images.original.url;\n        img.style.backgroundImage = img.src;\n        break; // OPTION: May need to be 'return true' instead\n\n      case // fetch() a random weather GIF from the GIPHY API for these 'icon2' conditions\n      (weatherSummary.startsWith(\"partly-\")) || (weatherSummary.startsWith(\"clear-\")) || (weatherSummary.startsWith(\"thunder-\")):\n        // APPEND the GIF from the API to that <img> element as a background image\n        // SHOW the GIF as a background image for the weather results in the UI\n\n        // OPTION: Potentially need a 'replaceChildren()' of some kind here if we change the <img> placeholder above\n        img.src = resultClip.data.images.original.url;\n        img.style.backgroundImage = img.src;\n        break; // OPTION: May need to be 'return true' instead\n    }\n\n    // IF there is no 'icon set parameter' OR there is no weather-related GIF that the GIPHY API can find\n    if (!weatherSummary || !fetchClip) {\n      // CREATE a <span> or <img> element showing some type of error message as text or an image (browser may show broken image as default)\n      const summaryError = document.createElement('span');\n      const errorMessage = document.createTextNode(\"We couldn't find a matching weather GIF :(\");\n\n      // APPEND the error message (if needed) to the <span> or <img> element & then that element to the 'search-results' div\n      summaryError.appendChild(errorMessage);\n\n      // SHOW that element along with any error message in the UI\n      // TODO: Figure out how to display the error message as the background image itself (where the GIF would normally be). CSS 'background-image' property with 'url(link)' as the key? Create another container to use as the background and append the error to that?\n\n      // 'return' nothing goes here?\n    }\n  }\n\n  summonClip();\n}\n\n\n\n//# sourceURL=webpack://odin-weather-app/./src/weatherUI.js?");

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