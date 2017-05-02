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

var FixHead = function (_Component) {
  (0, _inherits3["default"])(FixHead, _Component);

  function FixHead() {
    (0, _classCallCheck3["default"])(this, FixHead);

    var _this = (0, _possibleConstructorReturn3["default"])(this, _Component.call(this));

    _this.state = { show: false };
    return _this;
  }

  FixHead.prototype.componentDidUpdate = function componentDidUpdate() {
    this._fixHeadContainer.scrollLeft = this.props.scrollLeft;
  };

  FixHead.prototype.render = function render() {
    var _this2 = this;

    return _react2["default"].createElement(
      "div",
      { className: "js-fix-header-container", ref: function ref(c) {
          return _this2._fixHeadContainer = c;
        } },
      _react2["default"].createElement(
        "div",
        { className: "fix-header", style: { width: this.props.width + 'px' } },
        this.props.component
      )
    );
  };

  return FixHead;
}(_react.Component); /**
                      * Created by jiangyukun on 2016/12/5.
                      */


FixHead.propTypes = {
  component: _react.PropTypes.element,
  scrollLeft: _react.PropTypes.number,
  width: _react.PropTypes.number
};

exports["default"] = FixHead;
module.exports = exports["default"];