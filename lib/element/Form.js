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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var Form = function (_Component) {
  (0, _inherits3['default'])(Form, _Component);

  function Form() {
    (0, _classCallCheck3['default'])(this, Form);

    var _this = (0, _possibleConstructorReturn3['default'])(this, _Component.call(this));

    _this.handleFormSubmit = _this.handleFormSubmit.bind(_this);
    return _this;
  }

  Form.prototype.handleFormSubmit = function handleFormSubmit(event) {
    event.preventDefault();
  };

  Form.prototype.componentDidMount = function componentDidMount() {
    _domHelpers.events.on((0, _reactDom.findDOMNode)(this), 'submit', this.handleFormSubmit);
  };

  Form.prototype.componentWillUnmount = function componentWillUnmount() {
    _domHelpers.events.off((0, _reactDom.findDOMNode)(this), 'submit', this.handleFormSubmit);
  };

  Form.prototype.render = function render() {
    return _react2['default'].createElement(
      'form',
      null,
      this.props.children
    );
  };

  return Form;
}(_react.Component); /**
                      * Created by jiangyukun on 2016/11/27.
                      */


exports['default'] = Form;
module.exports = exports['default'];