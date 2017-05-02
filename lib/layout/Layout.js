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

var _SmartList = require('../list/SmartList');

var _SmartList2 = _interopRequireDefault(_SmartList);

var _HeadContainer = require('../list/HeadContainer');

var _HeadContainer2 = _interopRequireDefault(_HeadContainer);

var _BodyContainer = require('../list/BodyContainer');

var _BodyContainer2 = _interopRequireDefault(_BodyContainer);

var _Head = require('./Head');

var _Head2 = _interopRequireDefault(_Head);

var _HeadItem = require('./HeadItem');

var _HeadItem2 = _interopRequireDefault(_HeadItem);

var _Row = require('./Row');

var _Row2 = _interopRequireDefault(_Row);

var _RowItem = require('./RowItem');

var _RowItem2 = _interopRequireDefault(_RowItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/**
 * Created by jiangyukun on 2017/1/11.
 */
var Layout = function (_Component) {
  (0, _inherits3['default'])(Layout, _Component);

  function Layout() {
    (0, _classCallCheck3['default'])(this, Layout);

    var _this = (0, _possibleConstructorReturn3['default'])(this, _Component.call(this));

    _this.state = {
      currentIndex: -1
    };
    return _this;
  }

  Layout.prototype.render = function render() {
    var header = void 0,
        row = void 0;
    _react.Children.forEach(this.props.children, function (child) {
      if (child.type == _Head2['default']) {
        header = child;
      } else {
        row = child;
      }
    });

    if (!header && !row) {
      return null;
    }

    return _react2['default'].createElement(
      _SmartList2['default'],
      { fixHead: this.props.fixHead,
        fixLeft: this.props.fixLeft,
        loading: this.props.loading,
        minWidth: this.props.minWidth,
        width: this.props.width },
      _react2['default'].createElement(
        _HeadContainer2['default'],
        null,
        header && header
      ),
      _react2['default'].createElement(
        _BodyContainer2['default'],
        null,
        row && row
      )
    );
  };

  Layout.prototype.getChildContext = function getChildContext() {
    return {
      weight: this.props.weight
    };
  };

  return Layout;
}(_react.Component);

Layout.childContextTypes = {
  weight: _react.PropTypes.array
};

Layout.propTypes = {
  data: _react.PropTypes.object,
  onRowClick: _react.PropTypes.func
};

Layout.Head = _Head2['default'];
Layout.HeadItem = _HeadItem2['default'];
Layout.Row = _Row2['default'];
Layout.RowItem = _RowItem2['default'];

exports['default'] = Layout;
module.exports = exports['default'];