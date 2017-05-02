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

var FixLeft = function (_Component) {
  (0, _inherits3["default"])(FixLeft, _Component);

  function FixLeft() {
    (0, _classCallCheck3["default"])(this, FixLeft);
    return (0, _possibleConstructorReturn3["default"])(this, _Component.apply(this, arguments));
  }

  FixLeft.prototype.render = function render() {
    return _react2["default"].createElement(
      "div",
      { className: "fix-left", style: { width: this.props.width } },
      this.props.leftItem && this.props.leftItem.map(function (item, index) {
        return _react2["default"].createElement(
          "div",
          { key: index, className: "fix-left-item", style: { height: item.height + 'px' } },
          _react2["default"].createElement(
            "span",
            null,
            item.text
          )
        );
      })
    );
  };

  return FixLeft;
}(_react.Component); /**
                      * Created by jiangyukun on 2016/12/5.
                      */


FixLeft.propTypes = {
  leftItem: _react.PropTypes.array,
  width: _react.PropTypes.number
};

exports["default"] = FixLeft;
module.exports = exports["default"];