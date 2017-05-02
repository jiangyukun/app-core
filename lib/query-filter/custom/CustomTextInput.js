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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/**
 * Created by jiangyu2016 on 16/10/15.
 */
var CustomTextInput = function (_Component) {
  (0, _inherits3['default'])(CustomTextInput, _Component);

  function CustomTextInput(props, context) {
    (0, _classCallCheck3['default'])(this, CustomTextInput);

    var _this = (0, _possibleConstructorReturn3['default'])(this, _Component.call(this, props));

    context.addCustomItem(_this);
    _this.state = {
      value: '',
      selected: false
    };
    return _this;
  }

  CustomTextInput.prototype.handleInputChange = function handleInputChange(e) {
    var value = e.target.value;
    this.setState({ value: value, selected: !!value });
    this.context.selectCustom({
      value: value,
      text: value
    });
  };

  CustomTextInput.prototype.reset = function reset() {
    this.setState({ value: '', selected: false });
  };

  CustomTextInput.prototype.getParam = function getParam() {
    var _ref;

    if (!this.props.textName) {
      return {};
    }
    if (!this.state.selected || !this.state.value) {
      return {};
    }
    return _ref = {}, _ref[this.props.textName] = this.state.value, _ref;
  };

  CustomTextInput.prototype.render = function render() {
    var _this2 = this;

    return _react2['default'].createElement(
      'div',
      { className: (0, _classnames2['default'])('custom-item-wrap', { selected: this.state.selected }) },
      _react2['default'].createElement('input', { value: this.state.value,
        className: (0, _classnames2['default'])('custom-text-search', this.props.className),
        placeholder: this.props.placeholder,
        onChange: function onChange(e) {
          return _this2.handleInputChange(e);
        } })
    );
  };

  return CustomTextInput;
}(_react.Component);

CustomTextInput.propTypes = {
  textName: _react.PropTypes.string
};

CustomTextInput.contextTypes = {
  selectCustom: _react.PropTypes.func,
  addCustomItem: _react.PropTypes.func
};

CustomTextInput.propTypes = {
  className: _react.PropTypes.string,
  placeholder: _react.PropTypes.string
};

exports['default'] = CustomTextInput;
module.exports = exports['default'];