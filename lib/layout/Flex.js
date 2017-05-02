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

var Flex = function (_Component) {
  (0, _inherits3['default'])(Flex, _Component);

  function Flex() {
    (0, _classCallCheck3['default'])(this, Flex);
    return (0, _possibleConstructorReturn3['default'])(this, _Component.apply(this, arguments));
  }

  Flex.prototype.render = function render() {
    return _react2['default'].createElement(
      'div',
      { style: { display: 'flex' } },
      this.props.children
    );
  };

  return Flex;
}(_react.Component); /**
                      * Created by jiangyukun on 2017/1/11.
                      */


var Item = function (_Component2) {
  (0, _inherits3['default'])(Item, _Component2);

  function Item() {
    (0, _classCallCheck3['default'])(this, Item);
    return (0, _possibleConstructorReturn3['default'])(this, _Component2.apply(this, arguments));
  }

  Item.prototype.render = function render() {
    return _react2['default'].createElement(
      'div',
      { style: { flex: this.props.flex } },
      this.props.children
    );
  };

  return Item;
}(_react.Component);

Flex.Item = Item;

exports['default'] = Flex;
module.exports = exports['default'];