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

var _HeadItem = require('./HeadItem');

var _HeadItem2 = _interopRequireDefault(_HeadItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/**
 * Created by jiangyukun on 2017/1/19.
 */
var Head = function (_Component) {
  (0, _inherits3['default'])(Head, _Component);

  function Head() {
    (0, _classCallCheck3['default'])(this, Head);
    return (0, _possibleConstructorReturn3['default'])(this, _Component.apply(this, arguments));
  }

  Head.prototype.render = function render() {
    var weight = this.context.weight;

    var headItems = [];
    _react.Children.forEach(this.props.children, function (child, index) {
      headItems.push((0, _react.cloneElement)(child, { key: index, flex: weight[index] }));
    });

    return _react2['default'].createElement(
      'ul',
      { className: 'flex-list header' },
      headItems
    );
  };

  return Head;
}(_react.Component);

Head.contextTypes = {
  weight: _react.PropTypes.array
};

Head.Item = _HeadItem2['default'];

exports['default'] = Head;
module.exports = exports['default'];