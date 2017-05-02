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

var Loading = function (_Component) {
  (0, _inherits3["default"])(Loading, _Component);

  function Loading(props) {
    (0, _classCallCheck3["default"])(this, Loading);
    return (0, _possibleConstructorReturn3["default"])(this, _Component.call(this, props));
  }

  Loading.prototype.render = function render() {
    return _react2["default"].createElement(
      "div",
      { className: "rotate" },
      _react2["default"].createElement(
        "div",
        { className: "rotate-container container1" },
        _react2["default"].createElement("div", { className: "circle1" }),
        _react2["default"].createElement("div", { className: "circle2" }),
        _react2["default"].createElement("div", { className: "circle3" }),
        _react2["default"].createElement("div", { className: "circle4" })
      ),
      _react2["default"].createElement(
        "div",
        { className: "rotate-container container2" },
        _react2["default"].createElement("div", { className: "circle1" }),
        _react2["default"].createElement("div", { className: "circle2" }),
        _react2["default"].createElement("div", { className: "circle3" }),
        _react2["default"].createElement("div", { className: "circle4" })
      ),
      _react2["default"].createElement(
        "div",
        { className: "rotate-container container3" },
        _react2["default"].createElement("div", { className: "circle1" }),
        _react2["default"].createElement("div", { className: "circle2" }),
        _react2["default"].createElement("div", { className: "circle3" }),
        _react2["default"].createElement("div", { className: "circle4" })
      )
    );
  };

  return Loading;
}(_react.Component); /**
                      * jiangyukun on 2016/9/8 11:26
                      */


exports["default"] = Loading;
module.exports = exports["default"];