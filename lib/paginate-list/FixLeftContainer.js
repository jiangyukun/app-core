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

var FixLeftContainer = function (_Component) {
  (0, _inherits3["default"])(FixLeftContainer, _Component);

  function FixLeftContainer() {
    (0, _classCallCheck3["default"])(this, FixLeftContainer);
    return (0, _possibleConstructorReturn3["default"])(this, _Component.apply(this, arguments));
  }

  FixLeftContainer.prototype.componentDidUpdate = function componentDidUpdate() {
    this._fixLeftContainer.scrollTop = this.props.scrollTop;
  };

  FixLeftContainer.prototype.render = function render() {
    var _this2 = this;

    return _react2["default"].createElement(
      "div",
      null,
      _react2["default"].createElement(
        "div",
        { className: "fix-left-head" },
        this.props.leftHeadItems.map(function (leftHeadItem, index) {
          return _react2["default"].createElement(
            "div",
            { key: index, className: "fix-left-head-item", style: { width: leftHeadItem.width, height: leftHeadItem.height } },
            leftHeadItem.text
          );
        })
      ),
      _react2["default"].createElement(
        "div",
        { className: "fix-left-container", ref: function ref(c) {
            return _this2._fixLeftContainer = c;
          } },
        this.props.children
      )
    );
  };

  return FixLeftContainer;
}(_react.Component); /**
                      * Created by jiangyu2016 on 2016/12/5.
                      */


FixLeftContainer.propTypes = {
  leftHeadItems: _react.PropTypes.array,
  scrollTop: _react.PropTypes.number
};

exports["default"] = FixLeftContainer;
module.exports = exports["default"];