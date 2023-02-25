"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Page_PinInput_PinInput_tsx"],{

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