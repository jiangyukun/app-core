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

var _reactDom = require('react-dom');

var _domHelpers = require('dom-helpers');

var _lodash = require('lodash');

var _Loading = require('../ui/Loading');

var _Loading2 = _interopRequireDefault(_Loading);

var _HeadContainer = require('./HeadContainer');

var _HeadContainer2 = _interopRequireDefault(_HeadContainer);

var _BodyContainer = require('./BodyContainer');

var _BodyContainer2 = _interopRequireDefault(_BodyContainer);

var _FixHead = require('../paginate-list/FixHead');

var _FixHead2 = _interopRequireDefault(_FixHead);

var _FixLeftContainer = require('../paginate-list/FixLeftContainer');

var _FixLeftContainer2 = _interopRequireDefault(_FixLeftContainer);

var _FixLeft = require('../paginate-list/FixLeft');

var _FixLeft2 = _interopRequireDefault(_FixLeft);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/**
 * 能固定头部和设置固定的列的列表
 * Created by jiangyukun on 2016/12/5.
 */
var SmartList = function (_Component) {
  (0, _inherits3['default'])(SmartList, _Component);

  function SmartList() {
    (0, _classCallCheck3['default'])(this, SmartList);

    var _this = (0, _possibleConstructorReturn3['default'])(this, _Component.call(this));

    _this.handleTableScroll = (0, _lodash.throttle)(_this.handleTableScroll.bind(_this), 10, { leading: true, trailing: true });
    _this.state = {
      showHead: false,
      showLeft: false,
      actualWidth: 0,
      scrollLeft: 0,
      scrollTop: 0
    };
    return _this;
  }

  SmartList.prototype.handleTableScroll = function handleTableScroll() {
    if (!this.props.fixHead && !this.props.fixLeft) {
      return;
    }
    this.setState({ scrollTop: this._tableContainer.scrollTop });
    this.setState({ scrollLeft: this._tableContainer.scrollLeft });
    if (this.props.fixHead) {
      this.setState({ showHead: this._tableContainer.scrollTop > 0 });
    }
    if (this.props.fixLeft) {
      this.setState({ showLeft: this._tableContainer.scrollLeft > 0 });
    }
  };

  SmartList.prototype.getLeftHeadItem = function getLeftHeadItem() {
    var leftHeadItems = [];
    var leftIndexes = [0];
    if (this.props.fixLeft instanceof Array) {
      leftIndexes = this.props.fixLeft;
    }
    for (var i = 0; i < leftIndexes.length; i++) {
      var leftIndex = leftIndexes[i];
      var leftItem = this._getLeftHeadItem(leftIndex);
      if (leftItem) {
        leftHeadItems.push(leftItem);
      }
    }
    return leftHeadItems;
  };

  SmartList.prototype._getLeftHeadItem = function _getLeftHeadItem(index) {
    if (this._getLeftTotalWidth(index) > this.state.scrollLeft) {
      return;
    }
    var head = (0, _reactDom.findDOMNode)(this._head);
    var targetHeadItem = head.childNodes[index];
    return {
      text: targetHeadItem.innerText,
      width: 100, //targetHeadItem.clientWidth
      height: head.clientHeight
    };
  };

  SmartList.prototype.getLeftItems = function getLeftItems() {
    var leftItems = [];
    var leftIndexes = [0];
    if (this.props.fixLeft instanceof Array) {
      leftIndexes = this.props.fixLeft;
    }

    for (var i = 0; i < leftIndexes.length; i++) {
      var leftIndex = leftIndexes[i];
      var leftItem = this._getLeftItem(leftIndex);
      if (leftItem) {
        leftItems.push(leftItem);
      }
    }
    return leftItems;
  };

  SmartList.prototype._getLeftItem = function _getLeftItem(index) {
    if (this._getLeftTotalWidth(index) > this.state.scrollLeft) {
      return;
    }
    var leftItem = { items: [] };

    var head = (0, _reactDom.findDOMNode)(this._head);
    var body = (0, _reactDom.findDOMNode)(this._body);

    leftItem.width = 100; //head.childNodes[index].clientWidth
    leftItem.items.push({ text: head.childNodes[index].innerText, height: head.clientHeight });

    var listItems = body.childNodes;
    for (var i = 0; i < listItems.length; i++) {
      var item = listItems[i];
      leftItem.items.push({ text: item.childNodes[index].innerText, height: item.clientHeight });
    }
    return leftItem;
  };

  SmartList.prototype._getLeftTotalWidth = function _getLeftTotalWidth(index) {
    var head = (0, _reactDom.findDOMNode)(this._head);

    var leftTotalWidth = 0;
    for (var i = 0; i < index; i++) {
      leftTotalWidth += head.childNodes[i].clientWidth;
    }
    return leftTotalWidth;
  };

  SmartList.prototype.componentDidMount = function componentDidMount() {
    _domHelpers.events.on(this._tableContainer, 'scroll', this.handleTableScroll);
    if (this.state.actualWidth != this._listContainer.clientWidth) {
      this.setState({ actualWidth: this._listContainer.clientWidth });
    }
  };

  SmartList.prototype.componentDidUpdate = function componentDidUpdate() {
    if (!this._head || !this._body) return;

    this.leftHeadItems = this.getLeftHeadItem();
    this.leftItems = this.getLeftItems();
    if (this.state.actualWidth != this._listContainer.clientWidth) {
      this.setState({ actualWidth: this._listContainer.clientWidth });
    }
  };

  SmartList.prototype.componentWillUnmount = function componentWillUnmount() {
    _domHelpers.events.off(this._tableContainer, 'scroll', this.handleTableScroll);
  };

  SmartList.prototype.render = function render() {
    var _this2 = this;

    var children = this.props.children;

    if (!(children instanceof Array)) {
      children = [children];
    }
    var handledChildren = children.map(function (child, index) {
      if (child.type == _HeadContainer2['default']) {
        _this2.clonedHeadComponent = (0, _react.cloneElement)(child.props.children, { key: index + '_clone', ref: function ref(c) {
            return _this2._head = c;
          } });
        return (0, _react.cloneElement)(child, { key: index, ref: function ref(c) {
            return _this2._head = c;
          } });
      }
      if (child.type == _BodyContainer2['default']) {
        return (0, _react.cloneElement)(child, { key: index, ref: function ref(c) {
            return _this2._body = c;
          } });
      }
      return (0, _react.cloneElement)(child, { key: index });
    });

    var listWrapStyle = {};
    if (this.props.width) {
      listWrapStyle.width = this.props.width + 'px';
    }
    listWrapStyle.minWidth = this.props.minWidth ? this.props.minWidth + 'px' : '100%';
    if (this.props.style) {
      listWrapStyle = (0, _lodash.merge)({}, listWrapStyle, this.props.style);
    }

    return _react2['default'].createElement(
      'div',
      { className: 'table relative' },
      this.props.loading && _react2['default'].createElement(_Loading2['default'], null),
      this.context.total == 0 && !this.props.loading && _react2['default'].createElement(
        'span',
        { className: 'no-list-data' },
        '\u6682\u65E0\u6570\u636E'
      ),
      this.state.showHead && _react2['default'].createElement(_FixHead2['default'], { width: this.state.actualWidth,
        scrollLeft: this.state.scrollLeft,
        component: this.clonedHeadComponent }),
      this.state.showLeft && _react2['default'].createElement(
        _FixLeftContainer2['default'],
        { leftHeadItems: this.leftHeadItems, scrollTop: this.state.scrollTop },
        this.leftItems.map(function (leftItem, index) {
          return _react2['default'].createElement(_FixLeft2['default'], { key: index, leftItem: leftItem.items, width: leftItem.width });
        })
      ),
      _react2['default'].createElement(
        'div',
        { className: 'js-table-container', ref: function ref(c) {
            return _this2._tableContainer = c;
          } },
        _react2['default'].createElement(
          'div',
          { ref: function ref(c) {
              return _this2._listContainer = c;
            }, className: this.props.className, style: listWrapStyle },
          handledChildren
        )
      )
    );
  };

  return SmartList;
}(_react.Component);

SmartList.propTypes = {
  loading: _react.PropTypes.bool,
  total: _react.PropTypes.number,
  width: _react.PropTypes.number,
  minWidth: _react.PropTypes.number,
  fixHead: _react.PropTypes.bool,
  fixLeft: _react.PropTypes.oneOfType([_react.PropTypes.bool, _react.PropTypes.array])
};

SmartList.contextTypes = {
  total: _react.PropTypes.number
};

exports['default'] = SmartList;
module.exports = exports['default'];