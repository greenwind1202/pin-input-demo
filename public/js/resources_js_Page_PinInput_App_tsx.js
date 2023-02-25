"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Page_PinInput_App_tsx"],{

/***/ "./resources/js/Page/PinInput/App.tsx":
/*!********************************************!*\
  !*** ./resources/js/Page/PinInput/App.tsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _PinInput__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PinInput */ "./resources/js/Page/PinInput/PinInput.tsx");
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constant */ "./resources/js/constant.tsx");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




function App() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState2 = _slicedToArray(_useState, 2),
    pin = _useState2[0],
    setPin = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    secretMode = _useState4[0],
    setSecretMode = _useState4[1];
  var onChange = function onChange(value) {
    setPin(value);
  };
  var onReset = function onReset() {
    setSecretMode(false);
    setPin("");
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
    className: "text-center"
  }, "PIN INPUT DEMO"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_PinInput__WEBPACK_IMPORTED_MODULE_1__["default"], {
    value: pin,
    valueLength: _constant__WEBPACK_IMPORTED_MODULE_2__.LENGTH_OF_PIN,
    secretMode: secretMode,
    onChange: onChange
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "mt-10"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "checkbox",
    checked: secretMode,
    onChange: function onChange() {
      return setSecretMode(!secretMode);
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "Secret mode")), pin.trim().length === _constant__WEBPACK_IMPORTED_MODULE_2__.LENGTH_OF_PIN && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "mt-10"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: "result-title"
  }, "Success! Your PIN is ", pin), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "reset",
    onClick: onReset
  }, "Reset")));
}

/***/ }),

/***/ "./resources/js/Page/PinInput/PinInput.tsx":
/*!*************************************************!*\
  !*** ./resources/js/Page/PinInput/PinInput.tsx ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PinInput)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constant */ "./resources/js/constant.tsx");



function PinInput(_ref) {
  var value = _ref.value,
    valueLength = _ref.valueLength,
    secretMode = _ref.secretMode,
    onChange = _ref.onChange;
  var valueItems = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    var valueArray = value.split("");
    var items = [];
    for (var i = 0; i < valueLength; i++) {
      var _char = valueArray[i];
      if (_constant__WEBPACK_IMPORTED_MODULE_1__.RE_DIGIT.test(_char)) {
        items.push(_char);
      } else {
        items.push("");
      }
    }
    return items;
  }, [value, valueLength]);
  var inputOnChange = function inputOnChange(e, idx) {
    var target = e.target;
    var targetValue = target.value.trim();
    var isTargetValueDigit = _constant__WEBPACK_IMPORTED_MODULE_1__.RE_DIGIT.test(targetValue);
    if (!isTargetValueDigit && targetValue !== "") {
      return;
    }
    var nextInputEl = target.nextElementSibling;
    // only delete digit if next input element has no value
    if (!isTargetValueDigit && nextInputEl && nextInputEl.value !== "") {
      return;
    }
    targetValue = isTargetValueDigit ? targetValue : " ";
    var targetValueLength = targetValue.length;
    if (targetValueLength === 1) {
      var newValue = value.substring(0, idx) + targetValue + value.substring(idx + 1);
      onChange(newValue);
      if (!isTargetValueDigit) {
        return;
      }
      focusToNextInput(target);
    } else if (targetValueLength === valueLength) {
      onChange(targetValue);
      target.blur();
    }
  };
  var inputOnKeyDown = function inputOnKeyDown(e) {
    var key = e.key;
    var target = e.target;
    if (key === "ArrowRight" || key === "ArrowDown") {
      e.preventDefault();
      return focusToNextInput(target);
    }
    if (key === "ArrowLeft" || key === "ArrowUp") {
      e.preventDefault();
      return focusToPrevInput(target);
    }
    var targetValue = target.value;
    if (e.key !== "Backspace" || targetValue !== "") {
      return;
    }
    focusToPrevInput(target);
  };
  var inputOnFocus = function inputOnFocus(e) {
    var target = e.target;
    var prevInputEl = target.previousElementSibling;
    if (prevInputEl && prevInputEl.value === "") {
      return prevInputEl.focus();
    }
    target.setSelectionRange(0, target.value.length);
  };
  var focusToNextInput = function focusToNextInput(target) {
    var nextElementSibling = target.nextElementSibling;
    if (nextElementSibling) {
      nextElementSibling.focus();
    }
  };
  var focusToPrevInput = function focusToPrevInput(target) {
    var previousElementSibling = target.previousElementSibling;
    if (previousElementSibling) {
      previousElementSibling.focus();
    }
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "pin-group"
  }, valueItems.map(function (digit, idx) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
      key: idx,
      type: secretMode ? "password" : "text",
      inputMode: "numeric",
      autoComplete: "one-time-code",
      pattern: "\\d{1}",
      maxLength: valueLength,
      className: "pin-input",
      value: digit,
      onChange: function onChange(e) {
        return inputOnChange(e, idx);
      },
      onKeyDown: inputOnKeyDown,
      onFocus: inputOnFocus
    });
  }));
}

/***/ }),

/***/ "./resources/js/constant.tsx":
/*!***********************************!*\
  !*** ./resources/js/constant.tsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LENGTH_OF_PIN": () => (/* binding */ LENGTH_OF_PIN),
/* harmony export */   "RE_DIGIT": () => (/* binding */ RE_DIGIT)
/* harmony export */ });
var RE_DIGIT = new RegExp(/^\d+$/);
var LENGTH_OF_PIN = 6;

/***/ })

}]);