'use strict';

exports.__esModule = true;

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var BodyContainer = function (_Component) {
  (0, _inherits3['default'])(BodyContainer, _Component);

  function BodyContainer() {
    (0, _classCallCheck3['default'])(this, BodyContainer);
    return (0, _possibleConstructorReturn3['default'])(this, _Component.apply(this, arguments));
  }

  BodyContainer.prototype.render = function render() {
    if (!this.props.children) {
      return null;
    }
    return this.props.children;
  };

  return BodyContainer;
}(_react.Component); /**
                      * Created by jiangyukun on 2016/12/5.
                      */


exports['default'] = BodyContainer;
module.exports = exports['default'];