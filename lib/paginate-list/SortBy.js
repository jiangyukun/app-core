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

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _domHelpers = require('dom-helpers');

var _domHelpers2 = _interopRequireDefault(_domHelpers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var SortBy = function (_Component) {
  (0, _inherits3['default'])(SortBy, _Component);

  function SortBy(props, context) {
    (0, _classCallCheck3['default'])(this, SortBy);

    var _this = (0, _possibleConstructorReturn3['default'])(this, _Component.call(this, props, context));

    context.addSortBy(_this);
    _this.handleDocumentClick = _this.handleDocumentClick.bind(_this);
    _this.state = { active: false, order: 'default' };
    return _this;
  }

  SortBy.prototype.handleDocumentClick = function handleDocumentClick() {
    if (this.activeFlag) {
      this.activeFlag = false;
    } else {
      this.close();
    }
  };

  SortBy.prototype.toggle = function toggle() {
    this.setState({ active: !this.state.active });
  };

  SortBy.prototype.close = function close() {
    this.setState({ active: false });
  };

  SortBy.prototype.sort = function sort(order) {
    this.setState({ order: order });
    this.context.sort(this.props.by, order);
  };

  // PaginateList 重置SortBy


  SortBy.prototype.reset = function reset(by) {
    if (by != this.props.by) {
      this.setState({ order: 'default' });
    }
  };

  SortBy.prototype.componentDidMount = function componentDidMount() {
    _domHelpers2['default'].on(document, 'click', this.handleDocumentClick);
  };

  SortBy.prototype.componentWillUnmount = function componentWillUnmount() {
    _domHelpers2['default'].off(document, 'click', this.handleDocumentClick);
  };

  SortBy.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps, nextState) {
    if (nextState.active == this.state.active && nextState.order == this.state.order) {
      return false;
    }
    return true;
  };

  SortBy.prototype.componentDidUpdate = function componentDidUpdate() {
    if (this.state.active) {
      this.activeFlag = true;
    }
  };

  SortBy.prototype.render = function render() {
    var _this2 = this;

    var defaultIcon = function defaultIcon() {
      if (_this2.state.order != 'default') {
        return _react2['default'].createElement(
          'li',
          { onClick: function onClick(e) {
              return _this2.sort('default');
            }, className: 'default' },
          '\u9ED8\u8BA4'
        );
      }
      return null;
    };

    var ascIcon = function ascIcon() {
      if (_this2.state.order != 'asc') {
        return _react2['default'].createElement(
          'li',
          { onClick: function onClick(e) {
              return _this2.sort('asc');
            }, className: 'asc' },
          _react2['default'].createElement(
            'a',
            null,
            name
          ),
          _react2['default'].createElement('i', { className: 'icon-arrow-asc' })
        );
      }
      return null;
    };

    var descIcon = function descIcon() {
      if (_this2.state.order != 'desc') {
        return _react2['default'].createElement(
          'li',
          { onClick: function onClick(e) {
              return _this2.sort('desc');
            }, className: 'desc' },
          _react2['default'].createElement(
            'a',
            null,
            name
          ),
          _react2['default'].createElement('i', { className: 'icon-arrow-desc' })
        );
      }
      return null;
    };

    var name = this.props.children;

    var style = {};
    if (this.props.activeWidth && this.state.active) {
      style.width = this.props.activeWidth + (this.state.order != 'default' ? 7 : 0) + 'px';
    }

    return _react2['default'].createElement(
      'div',
      {
        className: (0, _classnames2['default'])('sort', { 'active': this.state.active }, { 'asc': this.state.order == 'asc' }, { 'desc': this.state.order == 'desc' }),
        onClick: function onClick(e) {
          return _this2.toggle();
        }
      },
      _react2['default'].createElement(
        'div',
        { className: 'sort-container', style: style },
        _react2['default'].createElement(
          'div',
          { className: 'clearfix current-sort' },
          _react2['default'].createElement(
            'a',
            { className: 'link' },
            name
          ),
          this.state.order == 'asc' && _react2['default'].createElement('i', { className: 'icon-arrow-asc-red' }),
          this.state.order == 'desc' && _react2['default'].createElement('i', { className: 'icon-arrow-desc-red' }),
          _react2['default'].createElement('i', { className: 'icon-more-select' })
        ),
        this.state.active && _react2['default'].createElement(
          'ul',
          { className: 'more' },
          defaultIcon(),
          ascIcon(),
          descIcon()
        )
      )
    );
  };

  return SortBy;
}(_react.Component); /**
                      * Created by jiangyu2016 on 16/10/16.
                      */


SortBy.propTypes = {
  by: _react.PropTypes.string,
  activeWidth: _react.PropTypes.number
};

SortBy.contextTypes = {
  sort: _react.PropTypes.func,
  addSortBy: _react.PropTypes.func
};

exports['default'] = SortBy;
module.exports = exports['default'];