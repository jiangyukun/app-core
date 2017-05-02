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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/**
 * Created by jiangyu2016 on 2016/10/19.
 */
var Input = function (_Component) {
  (0, _inherits3['default'])(Input, _Component);

  function Input(props, context) {
    (0, _classCallCheck3['default'])(this, Input);

    var _this = (0, _possibleConstructorReturn3['default'])(this, _Component.call(this, props, context));

    _this.state = {
      valid: _this._getIsValid(props.value),
      touched: false,
      focus: false
    };
    return _this;
  }

  Input.prototype.getInput = function getInput() {
    return this._input;
  };

  Input.prototype.handleBlur = function handleBlur() {
    this.setState({ touched: true, focus: false });
  };

  Input.prototype.handleChange = function handleChange(event) {
    var _this2 = this;

    this.props.onChange(event);
    var value = event.target.value;
    setTimeout(function () {
      return _this2.setState({ valid: _this2._getIsValid(value) });
    }, 0);
  };

  Input.prototype.isValid = function isValid(value) {
    return this._getIsValid(value);
  };

  Input.prototype._getIsValid = function _getIsValid(value) {
    if (!this.props.format) {
      return !!value;
    }
    var regex = new RegExp(this.props.format);
    return regex.test(value);
  };

  Input.prototype.render = function render() {
    var _this3 = this;

    var _props = this.props,
        className = _props.className,
        errorTip = _props.errorTip,
        props = (0, _objectWithoutProperties3['default'])(_props, ['className', 'errorTip']);

    if (errorTip && typeof errorTip == 'string') {
      errorTip = _react2['default'].createElement(
        'span',
        null,
        errorTip
      );
    }

    var getInput = function getInput() {
      return _react2['default'].createElement('input', (0, _extends3['default'])({}, props, {
        className: (0, _classnames2['default'])(className, { 'invalid': !_this3.state.valid }, { 'touched': _this3.state.touched }),
        ref: function ref(c) {
          return _this3._input = c;
        },
        onFocus: function onFocus(e) {
          return _this3.setState({ focus: true });
        },
        onBlur: function onBlur(e) {
          return _this3.handleBlur();
        },
        onChange: function onChange(e) {
          return _this3.handleChange(e);
        } }));
    };

    /*if (this.props.format) {
     return (
     <ToolTip overlay={errorTip} visible={this.props.format && !this.state.valid && this.state.touched && this.state.focus}>
     {getInput()}
     </ToolTip>
     )
     }*/
    return getInput();
  };

  return Input;
}(_react.Component);

Input.propTypes = {
  required: _react.PropTypes.bool,
  onChange: _react.PropTypes.func,
  format: _react.PropTypes.string,
  errorTip: _react.PropTypes.oneOfType([_react.PropTypes.element, _react.PropTypes.string])
};

exports['default'] = Input;
module.exports = exports['default'];