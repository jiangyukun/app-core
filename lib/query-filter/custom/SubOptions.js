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

var _Select = require('../../Select1');

var _Select2 = _interopRequireDefault(_Select);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var SubOptions = function (_Component) {
  (0, _inherits3['default'])(SubOptions, _Component);

  function SubOptions(props, context) {
    (0, _classCallCheck3['default'])(this, SubOptions);

    var _this = (0, _possibleConstructorReturn3['default'])(this, _Component.call(this, props, context));

    _this.selectOption = _this.selectOption.bind(_this);
    _this.state = { active: false };
    context.addSubItem(_this);
    return _this;
  }

  // FilterItem 调用的方法(onChange, getParam)

  SubOptions.prototype.onChange = function onChange(typeItem) {
    if (typeItem.value) {
      this.setState({ active: true });
    } else {
      this.setState({ active: false });
    }
    this._select1.reset();
  };

  SubOptions.prototype.getParam = function getParam() {
    var _ref;

    if (!this.lastOption) {
      return {};
    }
    var _lastOption = this.lastOption,
        text = _lastOption.text,
        value = _lastOption.value;

    return _ref = {}, _ref[this.props.paramName] = this.props.useText ? text : value, _ref;
  };

  // ------------------------------------

  SubOptions.prototype.selectOption = function selectOption(option) {
    var text = option.text,
        value = option.value;

    this.lastOption = option;
    this.context.selectSubItem('\uFF0C' + this.props.title + '\uFF1A' + text, value, text);
  };

  SubOptions.prototype.reset = function reset() {
    this.setState({ active: false });
    this.lastOption = null;
    this._select1.reset();
  };

  SubOptions.prototype.render = function render() {
    var _this2 = this;

    return _react2['default'].createElement(
      'div',
      { className: (0, _classnames2['default'])('custom-item-wrap', { 'hidden': !this.state.active }) },
      this.props.title,
      '\uFF1A',
      _react2['default'].createElement(
        'span',
        { style: { width: '150px', display: 'inline-block' } },
        _react2['default'].createElement(_Select2['default'], { ref: function ref(c) {
            return _this2._select1 = c;
          }, selectItems: this.props.options, onSelect: this.selectOption })
      )
    );
  };

  return SubOptions;
}(_react.Component); /**
                      * Created by jiangyukun on 2016/11/27.
                      */


SubOptions.defaultProps = {
  options: []
};

SubOptions.propTypes = {
  title: _react.PropTypes.string.isRequired,
  options: _react.PropTypes.array.isRequired,
  paramName: _react.PropTypes.string,
  useText: _react.PropTypes.bool
};

SubOptions.contextTypes = {
  selectSubItem: _react.PropTypes.func,
  addSubItem: _react.PropTypes.func
};

exports['default'] = SubOptions;
module.exports = exports['default'];