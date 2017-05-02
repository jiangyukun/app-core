'use strict';

exports.__esModule = true;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactOverlays = require('react-overlays');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var CommonDialog = function (_Component) {
  (0, _inherits3['default'])(CommonDialog, _Component);

  function CommonDialog() {
    (0, _classCallCheck3['default'])(this, CommonDialog);
    return (0, _possibleConstructorReturn3['default'])(this, _Component.apply(this, arguments));
  }

  CommonDialog.prototype.render = function render() {
    var _this2 = this;

    return _react2['default'].createElement(
      _reactOverlays.Modal,
      { show: this.props.show,
        className: (0, _classnames2['default'])(this.props.className, { 'ngdialog-closing': !this.props.show }),
        backdrop: 'static',
        backdropClassName: 'ngdialog-overlay',
        transition: Fly,
        dialogTransitionTimeout: 450,
        onHide: function onHide() {
          return _this2.props.onHide();
        },
        onExited: function onExited(e) {
          return _this2.props.onExited();
        } },
      _react2['default'].createElement(
        'div',
        { className: 'ngdialog-content', style: { width: this.props.width } },
        _react2['default'].createElement('div', { className: 'ngdialog-close', onClick: function onClick() {
            return _this2.props.onHide();
          } }),
        this.props.children
      )
    );
  };

  return CommonDialog;
}(_react.Component); /**
                      * Created by jiangyukun on 2016/10/21.
                      */


exports['default'] = CommonDialog;


CommonDialog.propTypes = {
  show: _react.PropTypes.bool,
  width: _react.PropTypes.string,
  className: _react.PropTypes.string,
  onHide: _react.PropTypes.func,
  onExited: _react.PropTypes.func
};

//-----------------------------------

var Fly = function (_Component2) {
  (0, _inherits3['default'])(Fly, _Component2);

  function Fly() {
    (0, _classCallCheck3['default'])(this, Fly);
    return (0, _possibleConstructorReturn3['default'])(this, _Component2.apply(this, arguments));
  }

  Fly.prototype.render = function render() {
    return _react2['default'].createElement(_reactOverlays.Transition, (0, _extends3['default'])({}, this.props, {
      className: (0, _classnames2['default'])(this.props.className, 'fly'),
      enteredClassName: 'in',
      enteringClassName: 'in' }));
  };

  return Fly;
}(_react.Component);

module.exports = exports['default'];