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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/**
 * Created by jiangyukun on 2017/2/20.
 */

var Modal = function (_Component) {
  (0, _inherits3['default'])(Modal, _Component);

  function Modal() {
    (0, _classCallCheck3['default'])(this, Modal);
    return (0, _possibleConstructorReturn3['default'])(this, _Component.apply(this, arguments));
  }

  Modal.prototype._wrapChildren = function _wrapChildren() {
    return _react2['default'].createElement(
      'div',
      { className: 'my-modal' },
      _react2['default'].createElement('div', { className: 'my-mask' }),
      this.props.children
    );
  };

  Modal.prototype.componentDidUpdate = function componentDidUpdate() {
    (0, _reactDom.unstable_renderSubtreeIntoContainer)(this, this._wrapChildren(), this.context);
  };

  Modal.prototype.componentDidMount = function componentDidMount() {
    this.context = document.createElement('div');
    document.body.appendChild(this.context);
    (0, _reactDom.unstable_renderSubtreeIntoContainer)(this, this._wrapChildren(), this.context);
  };

  Modal.prototype.componentWillUnmount = function componentWillUnmount() {
    (0, _reactDom.unmountComponentAtNode)(this.context);
    document.body.removeChild(this.context);
  };

  Modal.prototype.render = function render() {
    return null;
  };

  return Modal;
}(_react.Component);

exports['default'] = Modal;
module.exports = exports['default'];