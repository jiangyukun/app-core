'use strict';

exports.__esModule = true;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _RowItem = require('./RowItem');

var _RowItem2 = _interopRequireDefault(_RowItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var Row = function (_Component) {
  (0, _inherits3['default'])(Row, _Component);

  function Row() {
    (0, _classCallCheck3['default'])(this, Row);
    return (0, _possibleConstructorReturn3['default'])(this, _Component.apply(this, arguments));
  }

  Row.prototype.render = function render() {
    var weight = this.context.weight;

    var rowItems = [];
    _react.Children.forEach(this.props.children, function (child, index) {
      rowItems.push((0, _react.cloneElement)(child, { key: index, flex: weight[index] }));
    });

    var _props = this.props,
        selected = _props.selected,
        props = (0, _objectWithoutProperties3['default'])(_props, ['selected']);

    return _react2['default'].createElement(
      'ul',
      (0, _extends3['default'])({ className: (0, _classnames2['default'])('flex-list body', { 'selected': selected }) }, props),
      rowItems
    );
  };

  return Row;
}(_react.Component); /**
                      * Created by jiangyukun on 2017/1/19.
                      */


Row.contextTypes = {
  weight: _react.PropTypes.array
};

Row.Item = _RowItem2['default'];

exports['default'] = Row;
module.exports = exports['default'];