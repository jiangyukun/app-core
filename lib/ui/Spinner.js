"use strict";

exports.__esModule = true;

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Spinner = function (_Component) {
  (0, _inherits3["default"])(Spinner, _Component);

  function Spinner() {
    (0, _classCallCheck3["default"])(this, Spinner);
    return (0, _possibleConstructorReturn3["default"])(this, _Component.apply(this, arguments));
  }

  Spinner.prototype.render = function render() {
    return _react2["default"].createElement(
      "div",
      { className: "spinner-container" },
      _react2["default"].createElement(
        "div",
        { className: "spinner" },
        _react2["default"].createElement("div", { className: "rect1" }),
        _react2["default"].createElement("div", { className: "rect2" }),
        _react2["default"].createElement("div", { className: "rect3" }),
        _react2["default"].createElement("div", { className: "rect4" }),
        _react2["default"].createElement("div", { className: "rect5" })
      )
    );
  };

  return Spinner;
}(_react.Component);

exports["default"] = Spinner;
module.exports = exports["default"];