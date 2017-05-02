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

var HeadItem = function (_Component) {
  (0, _inherits3["default"])(HeadItem, _Component);

  function HeadItem() {
    (0, _classCallCheck3["default"])(this, HeadItem);
    return (0, _possibleConstructorReturn3["default"])(this, _Component.apply(this, arguments));
  }

  HeadItem.prototype.render = function render() {
    var style = {};
    if (this.props.width) {
      style.width = this.props.width;
    }
    if (this.props.flex) {
      style.flex = this.props.flex;
    }

    return _react2["default"].createElement(
      "li",
      { className: "item", style: style },
      this.props.children
    );
  };

  return HeadItem;
}(_react.Component); /**
                      * Created by jiangyukun on 2017/1/19.
                      */


HeadItem.propTypes = {
  width: _react.PropTypes.number,
  flex: _react.PropTypes.number
};

exports["default"] = HeadItem;
module.exports = exports["default"];