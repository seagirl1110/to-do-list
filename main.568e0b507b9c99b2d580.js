/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/renderTodoList.js":
/*!*******************************!*\
  !*** ./src/renderTodoList.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./store */ "./src/store.js");


function renderTodoList(coll, container) {
  const list = container;
  list.innerHTML = '';
  coll.forEach((element, index) => {
    const item = document.createElement('li');
    item.classList.add('todo-list__item', 'todo-item', `todo-item--${element.status}`, `todo-item--${element.priority}`);
    item.innerHTML = `<span class="todo-item__name">${element.name}</span>`;
    const btnDone = document.createElement('button');
    btnDone.classList.add('todo-item__btn-done');
    btnDone.addEventListener('click', () => {
      (0,_store__WEBPACK_IMPORTED_MODULE_0__.doneTodoItem)(index);
      renderTodoList(coll, list);
    });
    item.prepend(btnDone);
    const btnDel = document.createElement('button');
    btnDel.classList.add('todo-item__btn-del');
    btnDel.addEventListener('click', () => {
      (0,_store__WEBPACK_IMPORTED_MODULE_0__.delTodoItem)(index);
      renderTodoList(coll, list);
    });
    item.append(btnDel);
    list.append(item);
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderTodoList);

/***/ }),

/***/ "./src/store.js":
/*!**********************!*\
  !*** ./src/store.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addTodoItem": () => (/* binding */ addTodoItem),
/* harmony export */   "delTodoItem": () => (/* binding */ delTodoItem),
/* harmony export */   "doneTodoItem": () => (/* binding */ doneTodoItem),
/* harmony export */   "todoColl": () => (/* binding */ todoColl)
/* harmony export */ });
const todoColl = JSON.parse(localStorage.getItem('todo')) || [];

const sortTodoColl = () => {
  todoColl.sort((a, b) => {
    if (a.priority === 'important' && b.priority === 'common') {
      return -1;
    }

    return 0;
  });
  todoColl.sort((a, b) => {
    if (a.status === 'active' && b.status === 'done') {
      return -1;
    }

    return 0;
  });
};

const addTodoItem = item => {
  todoColl.push(item);
  sortTodoColl();
  localStorage.setItem('todo', JSON.stringify(todoColl));
};

const doneTodoItem = index => {
  if (todoColl[index].status === 'active') {
    todoColl[index].status = 'done';
  } else {
    todoColl[index].status = 'active';
  }

  sortTodoColl();
  localStorage.setItem('todo', JSON.stringify(todoColl));
};

const delTodoItem = index => {
  todoColl.splice(index, 1);
  localStorage.setItem('todo', JSON.stringify(todoColl));
};



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/style.scss":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/style.scss ***!
  \***************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./image/btn-done.png */ "./src/image/btn-done.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./image/btn-del.svg */ "./src/image/btn-del.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  width: 100vw;\n  min-height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-family: \"Open Sans\", sans-serif;\n  font-size: 16px;\n  font-weight: normal;\n  font-style: italic;\n  background: linear-gradient(0, rgb(2, 0, 36) 0%, rgb(120, 120, 230) 0%, rgb(5, 198, 237) 45%);\n  background-repeat: no-repeat;\n  background-size: 100%;\n  color: #23092c;\n}\n\n.todo {\n  width: 100%;\n  max-width: 400px;\n  padding: 20px 30px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background-color: #ffffff;\n  border: 2px solid #7878e6;\n  border-radius: 10px;\n}\n.todo__title {\n  font-family: \"Caveat\", cursive;\n  font-style: normal;\n}\n.todo__form {\n  margin: 20px 0;\n}\n\n.todo-form {\n  width: 100%;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  gap: 5px;\n}\n.todo-form__input {\n  width: 100%;\n  padding: 5px 10px;\n  font-size: 16px;\n  font-style: italic;\n  border: 1px solid #23092c;\n  border-radius: 5px;\n  outline: none;\n}\n.todo-form__input::-moz-placeholder {\n  font-size: 14px;\n}\n.todo-form__input:-ms-input-placeholder {\n  font-size: 14px;\n}\n.todo-form__input::placeholder {\n  font-size: 14px;\n}\n.todo-form__priority {\n  width: 60%;\n  height: 30px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-family: \"Open Sans\", sans-serif;\n  background-color: #e1ebff;\n  border: none;\n  border-radius: 5px;\n  cursor: pointer;\n  transition: all 0.3s;\n  justify-content: flex-start;\n  gap: 5px;\n  padding: 0 10px;\n  font-size: 14px;\n  color: #23092c;\n  background-color: transparent;\n}\n.todo-form__priority:hover {\n  background-color: #cdd1ff;\n}\n.todo-form__priority--important {\n  border: 1px solid #eeb7c5;\n}\n.todo-form__priority--checkbox {\n  width: 20px;\n  height: 20px;\n}\n.todo-form__btn-add {\n  width: 20%;\n  height: 30px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-family: \"Open Sans\", sans-serif;\n  background-color: #e1ebff;\n  border: none;\n  border-radius: 5px;\n  cursor: pointer;\n  transition: all 0.3s;\n  font-size: 36px;\n  font-weight: bold;\n  color: #1e9e12;\n}\n.todo-form__btn-add:hover {\n  background-color: #cdd1ff;\n}\n\n.todo-list {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n}\n.todo-list__item {\n  margin: 5px 0;\n}\n\n.todo-item {\n  padding: 5px 10px;\n  display: flex;\n  align-items: center;\n  list-style: none;\n  background-color: #e1ebff;\n  border-radius: 5px;\n}\n.todo-item--done {\n  text-decoration: line-through;\n  -webkit-text-decoration-color: #4256ac;\n          text-decoration-color: #4256ac;\n  text-decoration-thickness: 15%;\n}\n.todo-item--important {\n  background-color: #eeb7c5;\n}\n.todo-item__btn-done {\n  width: 20px;\n  height: 30px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-family: \"Open Sans\", sans-serif;\n  background-color: #e1ebff;\n  border: none;\n  border-radius: 5px;\n  cursor: pointer;\n  transition: all 0.3s;\n  height: 20px;\n  border: 1px solid #7878e6;\n  background-repeat: no-repeat;\n  background-position: center;\n}\n.todo-item__btn-done:hover {\n  background-color: #cdd1ff;\n}\n.todo-item--done > .todo-item__btn-done {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n.todo-item__btn-done:hover {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-size: contain;\n}\n.todo-item__name {\n  max-width: 250px;\n  margin: 0 auto 0 10px;\n  word-wrap: break-word;\n}\n.todo-item__btn-del {\n  width: 30px;\n  height: 30px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-family: \"Open Sans\", sans-serif;\n  background-color: #e1ebff;\n  border: none;\n  border-radius: 5px;\n  cursor: pointer;\n  transition: all 0.3s;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  opacity: 0;\n}\n.todo-item__btn-del:hover {\n  background-color: #cdd1ff;\n}\n.todo-item:hover .todo-item__btn-del {\n  opacity: 1;\n}", "",{"version":3,"sources":["webpack://./src/style.scss"],"names":[],"mappings":"AAkBA;EACI,SAAA;EACA,UAAA;EACA,sBAAA;AAjBJ;;AAoBA;EACI,YAAA;EACA,iBAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,oCAAA;EACA,eAAA;EACA,mBAAA;EACA,kBAAA;EACA,6FAAA;EACA,4BAAA;EACA,qBAAA;EACA,cAAA;AAjBJ;;AAoBA;EACI,WAAA;EACA,gBAAA;EACA,kBAAA;EACA,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,yBAAA;EACA,yBAAA;EACA,mBAAA;AAjBJ;AAoBI;EACI,8BAAA;EACA,kBAAA;AAlBR;AAsBI;EACI,cAAA;AApBR;;AAwBA;EACI,WAAA;EACA,aAAA;EACA,eAAA;EACA,8BAAA;EACA,QAAA;AArBJ;AAwBI;EACI,WAAA;EACA,iBAAA;EACA,eAAA;EACA,kBAAA;EACA,yBAAA;EACA,kBAAA;EACA,aAAA;AAtBR;AAwBQ;EACI,eAAA;AAtBZ;AAqBQ;EACI,eAAA;AAtBZ;AAqBQ;EACI,eAAA;AAtBZ;AA2BI;EArFA,UAsFiB;EArFjB,YAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,oCAAA;EACA,yBAAA;EACA,YAAA;EACA,kBAAA;EACA,eAAA;EACA,oBAAA;EA6EI,2BAAA;EACA,QAAA;EACA,eAAA;EACA,eAAA;EACA,cAAA;EACA,6BAAA;AAfR;AAjEI;EACI,yBAAA;AAmER;AAeQ;EACI,yBAAA;AAbZ;AAiBQ;EACI,WAAA;EACA,YAAA;AAfZ;AAoBI;EA3GA,UA4GiB;EA3GjB,YAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,oCAAA;EACA,yBAAA;EACA,YAAA;EACA,kBAAA;EACA,eAAA;EACA,oBAAA;EAmGI,eAAA;EACA,iBAAA;EACA,cAAA;AARR;AA3FI;EACI,yBAAA;AA6FR;;AASA;EACI,WAAA;EACA,aAAA;EACA,sBAAA;AANJ;AASI;EACI,aAAA;AAPR;;AAWA;EACI,iBAAA;EACA,aAAA;EACA,mBAAA;EACA,gBAAA;EACA,yBAAA;EACA,kBAAA;AARJ;AAWI;EACI,6BAAA;EACA,sCAAA;UAAA,8BAAA;EACA,8BAAA;AATR;AAaI;EACI,yBAAA;AAXR;AAeI;EAnJA,WAoJiB;EAnJjB,YAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,oCAAA;EACA,yBAAA;EACA,YAAA;EACA,kBAAA;EACA,eAAA;EACA,oBAAA;EA2II,YAAA;EACA,yBAAA;EACA,4BAAA;EACA,2BAAA;AAHR;AAzII;EACI,yBAAA;AA2IR;AAGQ;EACI,yDAAA;AADZ;AAKQ;EACI,yDAAA;EACA,wBAAA;AAHZ;AAQI;EACI,gBAAA;EACA,qBAAA;EACA,qBAAA;AANR;AAUI;EA9KA,WADe;EAEf,YAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,oCAAA;EACA,yBAAA;EACA,YAAA;EACA,kBAAA;EACA,eAAA;EACA,oBAAA;EAsKI,yDAAA;EACA,UAAA;AAER;AAvKI;EACI,yBAAA;AAyKR;AAFQ;EACI,UAAA;AAIZ","sourcesContent":["@mixin btn($width: 30px) {\r\n    width: $width;\r\n    height: 30px;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    font-family: \"Open Sans\", sans-serif;\r\n    background-color: #e1ebff;\r\n    border: none;\r\n    border-radius: 5px;\r\n    cursor: pointer;\r\n    transition: all 0.3s;\r\n\r\n    &:hover {\r\n        background-color: #cdd1ff;\r\n    }\r\n}\r\n\r\n* {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n    width: 100vw;\r\n    min-height: 100vh;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    font-family: \"Open Sans\", sans-serif;\r\n    font-size: 16px;\r\n    font-weight: normal;\r\n    font-style: italic;\r\n    background: linear-gradient(0, rgba(2, 0, 36, 1) 0%, rgba(120, 120, 230, 1) 0%, rgba(5, 198, 237, 1) 45%);\r\n    background-repeat: no-repeat;\r\n    background-size: 100%;\r\n    color: #23092c;\r\n}\r\n\r\n.todo {\r\n    width: 100%;\r\n    max-width: 400px;\r\n    padding: 20px 30px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    background-color: #ffffff;\r\n    border: 2px solid #7878e6;\r\n    border-radius: 10px;\r\n\r\n    // .todo__title\r\n    &__title {\r\n        font-family: \"Caveat\", cursive;\r\n        font-style: normal;\r\n    }\r\n\r\n    // .todo__form\r\n    &__form {\r\n        margin: 20px 0;\r\n    }\r\n}\r\n\r\n.todo-form {\r\n    width: 100%;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    justify-content: space-between;\r\n    gap: 5px;\r\n\r\n    // .todo-form__input\r\n    &__input {\r\n        width: 100%;\r\n        padding: 5px 10px;\r\n        font-size: 16px;\r\n        font-style: italic;\r\n        border: 1px solid #23092c;\r\n        border-radius: 5px;\r\n        outline: none;\r\n\r\n        &::placeholder {\r\n            font-size: 14px;\r\n        }\r\n    }\r\n\r\n    // .todo-form__priority\r\n    &__priority {\r\n        @include btn(60%);\r\n        justify-content: flex-start;\r\n        gap: 5px;\r\n        padding: 0 10px;\r\n        font-size: 14px;\r\n        color: #23092c;\r\n        background-color: transparent;\r\n\r\n        // .todo-form__priority--important\r\n        &--important {\r\n            border: 1px solid #eeb7c5;\r\n        }\r\n\r\n        // .todo-form__priority--checkbox\r\n        &--checkbox {\r\n            width: 20px;\r\n            height: 20px;\r\n        }\r\n    }\r\n\r\n    // .todo-form__btn-add\r\n    &__btn-add {\r\n        @include btn(20%);\r\n        font-size: 36px;\r\n        font-weight: bold;\r\n        color: #1e9e12;\r\n    }\r\n}\r\n\r\n.todo-list {\r\n    width: 100%;\r\n    display: flex;\r\n    flex-direction: column;\r\n\r\n    // .todo-list__item\r\n    &__item {\r\n        margin: 5px 0;\r\n    }\r\n}\r\n\r\n.todo-item {\r\n    padding: 5px 10px;\r\n    display: flex;\r\n    align-items: center;\r\n    list-style: none;\r\n    background-color: #e1ebff;\r\n    border-radius: 5px;\r\n\r\n    //.todo-item--done\r\n    &--done {\r\n        text-decoration: line-through;\r\n        text-decoration-color: #4256ac;\r\n        text-decoration-thickness: percentage($number: 0.15);\r\n    }\r\n\r\n    //.todo-item--important\r\n    &--important {\r\n        background-color: #eeb7c5;\r\n    }\r\n\r\n    // .todo-item__btn-done\r\n    &__btn-done {\r\n        @include btn(20px);\r\n        height: 20px;\r\n        border: 1px solid #7878e6;\r\n        background-repeat: no-repeat;\r\n        background-position: center;\r\n\r\n        // .todo-item--done .todo-item__btn-done\r\n        .todo-item--done > & {\r\n            background-image: url(\"./image/btn-done.png\");\r\n        }\r\n\r\n        // .todo-item__btn-done:hover,\r\n        &:hover {\r\n            background-image: url(\"./image/btn-done.png\");\r\n            background-size: contain;\r\n        }\r\n    }\r\n\r\n    // .todo-item__name\r\n    &__name {\r\n        max-width: 250px;\r\n        margin: 0 auto 0 10px;\r\n        overflow-wrap: break-word;\r\n    }\r\n\r\n    // .todo-item__btn-del\r\n    &__btn-del {\r\n        @include btn();\r\n        background-image: url(\"./image/btn-del.svg\");\r\n        opacity: 0;\r\n\r\n        // .todo-item:hover .todo-item__btn-del\r\n        .todo-item:hover & {\r\n            opacity: 1;\r\n        }\r\n    }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/style.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/image/btn-del.svg":
/*!*******************************!*\
  !*** ./src/image/btn-del.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2c00e3eb63ccd85dd78f.svg";

/***/ }),

/***/ "./src/image/btn-done.png":
/*!********************************!*\
  !*** ./src/image/btn-done.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5415b75a116c6399b5a8.png";

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./store */ "./src/store.js");
/* harmony import */ var _renderTodoList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./renderTodoList */ "./src/renderTodoList.js");



const todoList = document.querySelector('[data-todo="list"]');
const form = document.querySelector('[data-todo="form"]');
form.addEventListener('submit', evt => {
  evt.preventDefault();
});
const input = form.querySelector('[data-todo="input"]');
input.focus();
document.addEventListener('keydown', evt => {
  if (evt.key === 'Enter') {
    input.focus();
  }
});
const btnPriority = form.querySelector('[data-todo="priority"]');
const btnPriorityCheckbox = btnPriority.querySelector('[data-todo="priority-checkbox"]');
btnPriorityCheckbox.addEventListener('change', () => {
  if (btnPriorityCheckbox.checked) {
    btnPriority.classList.add('todo-form__priority--important');
  } else {
    btnPriority.classList.remove('todo-form__priority--important');
  }
});
const btnAdd = form.querySelector('[data-todo="btn-add-item"]');
btnAdd.addEventListener('click', () => {
  if (!input.value.length) {
    return;
  }

  let priority = 'common';

  if (btnPriorityCheckbox.checked) {
    priority = 'important';
  }

  const item = {
    name: input.value,
    status: 'active',
    priority
  };
  (0,_store__WEBPACK_IMPORTED_MODULE_1__.addTodoItem)(item);
  input.value = '';
  (0,_renderTodoList__WEBPACK_IMPORTED_MODULE_2__["default"])(_store__WEBPACK_IMPORTED_MODULE_1__.todoColl, todoList);
});
(0,_renderTodoList__WEBPACK_IMPORTED_MODULE_2__["default"])(_store__WEBPACK_IMPORTED_MODULE_1__.todoColl, todoList);
})();

/******/ })()
;
//# sourceMappingURL=main.568e0b507b9c99b2d580.js.map