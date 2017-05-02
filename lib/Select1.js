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

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _domHelpers = require('dom-helpers');

var _keyboard = require('./constants/keyboard');

var _keyboard2 = _interopRequireDefault(_keyboard);

var _select = require('./constants/select1');

var _select2 = _interopRequireDefault(_select);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var Select1 = function (_Component) {
  (0, _inherits3['default'])(Select1, _Component);

  function Select1() {
    var _temp, _this, _ret;

    (0, _classCallCheck3['default'])(this, Select1);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3['default'])(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {
      active: false,
      value: props.value + '',
      maxLength: _select2['default'].init,
      searchKey: '',
      selectIndex: -1,
      touched: false,
      touchIndex: -1
    }, _this.handleDocumentClick = function () {
      if (_this.openFlag) {
        _this.openFlag = false;
        return;
      }
      if (_this.state.active) {
        _this.close();
      }
    }, _this.handleContainerKeyDown = function (event) {
      if (!_this.state.active) {
        switch (event.which) {
          case _keyboard2['default'].ENTER:
            _this.open();
            break;
          default:
            break;
        }
        return;
      }
      switch (event.which) {
        case _keyboard2['default'].ESCAPE:
          event.stopPropagation();
          _this.close();
          break;
        case _keyboard2['default'].DOWN:
          if (_this.state.touchIndex + 1 <= _this.currentCount - 1) {
            _this.setState({ touchIndex: _this.state.touchIndex + 1 });
          }
          break;
        case _keyboard2['default'].UP:
          if (_this.state.touchIndex - 1 >= 0) {
            _this.setState({ touchIndex: _this.state.touchIndex - 1 });
          }
          break;
        case _keyboard2['default'].ENTER:
          var touchIndex = _this.state.touchIndex;
          var selectItems = _this.props.selectItems;
          if (touchIndex >= 0 && touchIndex < selectItems.length) {
            _this.select(selectItems[touchIndex], touchIndex);
          }
          break;
        default:
          break;
      }
    }, _this.handleClearBtnClick = function () {
      _this.closeFlag = true;
      _this.setState({ value: '', showClose: false });
      _this.props.onClear();
    }, _temp), (0, _possibleConstructorReturn3['default'])(_this, _ret);
  }

  Select1.prototype.getSelected = function getSelected() {
    var _this2 = this;

    if (!this.state.value) {
      return {};
    }
    return this.props.selectItems.find(function (item) {
      return item.value == _this2.state.value;
    });
  };

  Select1.prototype.toggle = function toggle() {
    if (this.props.disabled) {
      return;
    }
    if (this.closeFlag) {
      this.closeFlag = false;
      return;
    }
    this.setState({ active: !this.state.active });
  };

  Select1.prototype.close = function close() {
    this.setState({ active: false, touched: true });
  };

  Select1.prototype.open = function open() {
    if (this.props.disabled) {
      return;
    }
    this.setState({ active: true, touchIndex: this.state.selectIndex });
  };

  // 点击选项


  Select1.prototype.select = function select(option, index) {
    this.setState({ value: option.value, selectIndex: index });
    this.props.onSelect(option);
    this.close();
  };

  // 选中值为value的选项


  Select1.prototype.activeValue = function activeValue(value) {
    this.setState({ value: value });
    this.props.onValueChange(value);
  };

  Select1.prototype.reset = function reset() {
    this.setState({ value: '', selectIndex: -1 });
  };

  Select1.prototype.touch = function touch(index) {
    this.setState({ touchIndex: index });
  };

  Select1.prototype.search = function search(event) {
    var searchKey = event.target.value.trim();
    this.setState({ searchKey: searchKey });
  };

  Select1.prototype.showMoreItems = function showMoreItems() {
    this.setState({ maxLength: this.state.maxLength + _select2['default'].increase });
  };

  Select1.prototype.activeOpenFlag = function activeOpenFlag() {
    this.openFlag = true;
  };

  Select1.prototype.componentDidMount = function componentDidMount() {
    _domHelpers.events.on((0, _reactDom.findDOMNode)(this._container), 'keyup', this.handleContainerKeyDown);
    _domHelpers.events.on(document, 'click', this.handleDocumentClick);
  };

  Select1.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    var nextValue = nextProps.value + '';
    if (nextValue !== this.props.value) {
      this.activeValue(nextValue);
    }
  };

  Select1.prototype.componentWillUnmount = function componentWillUnmount() {
    _domHelpers.events.off((0, _reactDom.findDOMNode)(this._container), 'keyup', this.handleContainerKeyDown);
    _domHelpers.events.off(document, 'click', this.handleDocumentClick);
  };

  Select1.prototype.render = function render() {
    var _this3 = this;

    var selectText = '请选择';
    this.props.selectItems.forEach(function (selectItem) {
      if (selectItem.value == _this3.state.value) {
        selectText = selectItem.text;
      }
    });
    var showMore = false,
        noMatch = true;

    var showSelectItems = function showSelectItems() {
      var currentCount = 0,
          filterTotalCount = 0;
      try {
        return _this3.props.selectItems.map(function (option, index) {
          if (option.text.indexOf(_this3.state.searchKey) != -1) {
            noMatch = false;
            filterTotalCount++;
            if (currentCount < _this3.state.maxLength) {
              currentCount++;
              return _react2['default'].createElement(
                'li',
                { key: index,
                  className: (0, _classnames2['default'])('select-item', { 'selected': index == _this3.state.selectIndex }, { 'last-touched': index == _this3.state.touchIndex }),
                  onClick: function onClick(e) {
                    return _this3.select(option, index);
                  },
                  onMouseEnter: function onMouseEnter(e) {
                    return _this3.touch(index);
                  } },
                option.text
              );
            }
            return null;
          }
        });
      } finally {
        _this3.currentCount = currentCount;
        if (currentCount != filterTotalCount) {
          showMore = true;
        }
      }
    };

    return _react2['default'].createElement(
      'div',
      { ref: function ref(c) {
          return _this3._container = c;
        },
        className: (0, _classnames2['default'])('select1-container', { 'disabled': this.props.disabled }, this.props.className),
        onClick: function onClick(e) {
          return _this3.activeOpenFlag(e);
        },
        onMouseEnter: function onMouseEnter(e) {
          return _this3.setState({ showClose: true });
        },
        onMouseLeave: function onMouseLeave(e) {
          return _this3.setState({ showClose: false });
        },
        tabIndex: '-1' },
      _react2['default'].createElement(
        'div',
        { onClick: function onClick(e) {
            return _this3.toggle();
          },
          className: (0, _classnames2['default'])('selected-item', { 'open': this.state.active }, { 'invalid': this.props.required && this.state.touched && !this.state.value })
        },
        _react2['default'].createElement(
          'span',
          { className: 'select-item-text' },
          selectText
        ),
        _react2['default'].createElement(
          'span',
          { className: 'dropdown' },
          _react2['default'].createElement('b', null)
        ),
        this.props.showClear && this.state.showClose && this.state.value && _react2['default'].createElement(
          'span',
          { className: 'close-btn', onClick: this.handleClearBtnClick },
          _react2['default'].createElement('i', { className: 'fa fa-close' })
        )
      ),
      this.state.active && _react2['default'].createElement(
        'div',
        { className: 'all-select-items' },
        this.props.selectItems.length > 10 && _react2['default'].createElement('input', { value: this.state.searchKey, className: 'search', onChange: function onChange(e) {
            return _this3.search(e);
          },
          placeholder: '\u8BF7\u8F93\u5165\u67E5\u8BE2\u6761\u4EF6' }),
        _react2['default'].createElement(
          'ul',
          { className: 'select-items-container' },
          showSelectItems(),
          showMore && _react2['default'].createElement(
            'li',
            { className: 'show-more', onClick: function onClick(e) {
                return _this3.showMoreItems();
              } },
            _react2['default'].createElement(
              'span',
              null,
              '\u52A0\u8F7D\u66F4\u591A...'
            )
          )
        ),
        noMatch && _react2['default'].createElement(
          'div',
          { className: 'no-match-result' },
          _react2['default'].createElement(
            'span',
            null,
            '\u6682\u65E0\u7B26\u5408\u6761\u4EF6\u7684\u6570\u636E'
          )
        )
      )
    );
  };

  return Select1;
}(_react.Component);

exports['default'] = Select1;


Select1.defaultProps = {
  value: '',
  showClear: false,
  disabled: false,
  selectItems: [],
  onSelect: function onSelect() {},
  onValueChange: function onValueChange() {},
  onClear: function onClear() {}
};

Select1.propTypes = {
  title: _react.PropTypes.string,
  selectItems: _react.PropTypes.array,
  required: _react.PropTypes.bool,
  showClear: _react.PropTypes.bool,
  onSelect: _react.PropTypes.func,
  value: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),
  disabled: _react.PropTypes.bool
};
module.exports = exports['default'];