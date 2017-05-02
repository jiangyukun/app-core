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

var _datePicker = require('antd/lib/date-picker');

var _datePicker2 = _interopRequireDefault(_datePicker);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var CustomDateRange = function (_Component) {
  (0, _inherits3['default'])(CustomDateRange, _Component);

  function CustomDateRange(props, context) {
    (0, _classCallCheck3['default'])(this, CustomDateRange);

    var _this = (0, _possibleConstructorReturn3['default'])(this, _Component.call(this, props));

    _this.startValue = null;
    _this.endValue = null;
    _this.state = {
      selected: false
    };
    context.addCustomItem(_this);
    return _this;
  }

  CustomDateRange.prototype.onStartDateChange = function onStartDateChange(moment) {
    this.startValue = moment;
    this.switchToSelectState();
  };

  CustomDateRange.prototype.onEndDateChange = function onEndDateChange(moment) {
    this.endValue = moment;
    this.switchToSelectState();
  };

  CustomDateRange.prototype.switchToSelectState = function switchToSelectState() {
    if (!this.startValue && !this.endValue) {
      return;
    }
    var errorTip = '';
    var text = '';
    var startText = this.startValue && this.startValue.format('YYYY-MM-DD');
    var endText = this.endValue && this.endValue.format('YYYY-MM-DD');

    if (!startText) {
      text = endText + ' 之前';
    } else if (!endText) {
      text = startText + ' 之后';
    } else {
      text = startText + ' 到 ' + endText;
      if (startText > endText) {
        errorTip = '开始时间不能大于结束时间！';
      }
    }
    this.setState({ selected: true });
    this.context.selectCustom({
      value: (startText || '') + ',' + (endText || ''),
      text: text,
      errorTip: errorTip
    });
  };

  CustomDateRange.prototype.reset = function reset() {
    this.startValue = null;
    this.endValue = null;
    this.setState({ selected: false });
  };

  CustomDateRange.prototype.getParam = function getParam() {
    if (!this.props.startName || !this.props.endName) {
      console.log('未设置（startName或endName）参数名请勿调用此方法');
      return {};
    }
    if (this.startValue || this.endValue) {
      var _ref;

      var startText = this.startValue && this.startValue.format('YYYY-MM-DD');
      var endText = this.endValue && this.endValue.format('YYYY-MM-DD');
      return _ref = {}, _ref[this.props.startName] = startText, _ref[this.props.endName] = endText, _ref;
    }
    return {};
  };

  CustomDateRange.prototype.render = function render() {
    var _this2 = this;

    return _react2['default'].createElement(
      'div',
      { className: (0, _classnames2['default'])('custom-item-wrap', { selected: this.state.selected }) },
      _react2['default'].createElement(
        'span',
        { style: { display: 'inline-block', width: '100px' } },
        _react2['default'].createElement(_datePicker2['default'], { inputPrefixCls: 'my-input',
          placeholder: '\u5F00\u59CB\u65F6\u95F4',
          size: 'small',
          format: 'YYYY-MM-DD',
          value: this.startValue,
          onChange: function onChange(e) {
            return _this2.onStartDateChange(e);
          } })
      ),
      '-',
      _react2['default'].createElement(
        'span',
        { style: { display: 'inline-block', width: '100px' } },
        _react2['default'].createElement(_datePicker2['default'], { inputPrefixCls: 'my-input',
          placeholder: '\u7ED3\u675F\u65F6\u95F4',
          size: 'small',
          format: 'YYYY-MM-DD',
          value: this.endValue,
          onChange: function onChange(e) {
            return _this2.onEndDateChange(e);
          } })
      )
    );
  };

  return CustomDateRange;
}(_react.Component); /**
                      * Created by jiangyu2016 on 16/10/15.
                      */


CustomDateRange.propTypes = {
  startName: _react.PropTypes.string,
  endName: _react.PropTypes.string
};

CustomDateRange.contextTypes = {
  selectCustom: _react.PropTypes.func,
  addCustomItem: _react.PropTypes.func
};

exports['default'] = CustomDateRange;
module.exports = exports['default'];