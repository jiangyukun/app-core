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

var _lodash = require('lodash');

var _CommonDialog = require('./CommonDialog');

var _CommonDialog2 = _interopRequireDefault(_CommonDialog);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var ImagePreview = function (_Component) {
  (0, _inherits3['default'])(ImagePreview, _Component);

  function ImagePreview(props) {
    (0, _classCallCheck3['default'])(this, ImagePreview);

    var _this = (0, _possibleConstructorReturn3['default'])(this, _Component.call(this, props));

    _this.close = _this.close.bind(_this);
    _this.state = {
      show: true,
      width: 0,
      angle: 0,
      showReset: false
    };
    return _this;
  }

  ImagePreview.prototype.close = function close() {
    this.setState({ show: false });
  };

  ImagePreview.prototype.zoomIn = function zoomIn() {
    this.setState({ width: this.state.width * 1.2, showReset: true });
  };

  ImagePreview.prototype.zoomOut = function zoomOut() {
    this.setState({ width: this.state.width * 0.8, showReset: true });
  };

  ImagePreview.prototype.rotate = function rotate() {
    this.setState({ angle: this.state.angle + 90, showReset: true });
  };

  ImagePreview.prototype.reset = function reset() {
    this.setState({ width: this._img.naturalWidth, angle: 0, showReset: false });
  };

  ImagePreview.prototype.componentDidMount = function componentDidMount() {
    var _this2 = this;

    if (this._img) {
      this._img.onload = function () {
        _this2.setState({ width: _this2._img.naturalWidth, angle: 0, showReset: false });
      };
    }
  };

  ImagePreview.prototype.render = function render() {
    var _this3 = this;

    var toolButtons = [],
        contents = [];
    _react.Children.forEach(this.props.children, function (child) {
      if (!child) return;
      if (child.type == ToolButton) {
        toolButtons.push(child);
      } else {
        contents.push(child);
      }
    });

    var imageStyle = {
      transform: 'rotate(' + this.state.angle + 'deg)'
    };
    if (this.state.width) {
      imageStyle.width = this.state.width;
    }

    return _react2['default'].createElement(
      _CommonDialog2['default'],
      { show: this.state.show,
        onHide: this.close,
        onExited: function onExited() {
          return _this3.props.onExited();
        },
        className: 'ngdialog ngdialog-theme-full-container',
        width: '80%'
      },
      _react2['default'].createElement(
        'div',
        { className: 'full-screen-preview' },
        !this.props.url && this.props.showEmptyText && _react2['default'].createElement(
          'div',
          null,
          '\u6682\u65E0\u56FE\u7247'
        ),
        this.props.url && _react2['default'].createElement('img', { ref: function ref(c) {
            return _this3._img = c;
          }, src: this.props.url, style: imageStyle }),
        contents
      ),
      _react2['default'].createElement(
        'div',
        { className: 'ngdialog-buttons' },
        this.props.url && _react2['default'].createElement('input', { type: 'button', className: 'btn toolbar-btn', onClick: function onClick(e) {
            return _this3.zoomIn(e);
          }, value: '\u653E\u5927' }),
        this.props.url && _react2['default'].createElement('input', { type: 'button', className: 'btn toolbar-btn', onClick: function onClick(e) {
            return _this3.zoomOut(e);
          }, value: '\u7F29\u5C0F' }),
        this.props.url && _react2['default'].createElement('input', { type: 'button', className: 'btn toolbar-btn', onClick: function onClick(e) {
            return _this3.rotate(e);
          }, value: '\u65CB\u8F6C' }),
        this.state.showReset && _react2['default'].createElement('input', { type: 'button', className: 'btn toolbar-btn reset', onClick: function onClick(e) {
            return _this3.reset(e);
          }, value: '\u8FD8\u539F' }),
        this.props.showCloseButton && _react2['default'].createElement('input', { type: 'button', className: 'ngdialog-button ngdialog-button-secondary', onClick: this.close, value: '\u5173\u95ED' }),
        toolButtons && toolButtons
      )
    );
  };

  return ImagePreview;
}(_react.Component); /**
                      * Created by jiangyukun on 2016/10/21.
                      */


exports['default'] = ImagePreview;


ImagePreview.defaultProps = {
  showEmptyText: true,
  showCloseButton: true
};

ImagePreview.propTypes = {
  url: _react.PropTypes.string,
  onExited: _react.PropTypes.func,

  showEmptyText: _react.PropTypes.bool,
  showCloseButton: _react.PropTypes.bool
};

var ToolButton = function (_Component2) {
  (0, _inherits3['default'])(ToolButton, _Component2);

  function ToolButton() {
    (0, _classCallCheck3['default'])(this, ToolButton);
    return (0, _possibleConstructorReturn3['default'])(this, _Component2.apply(this, arguments));
  }

  ToolButton.prototype.render = function render() {
    return this.props.children;
  };

  return ToolButton;
}(_react.Component);

ImagePreview.ToolButton = ToolButton;
module.exports = exports['default'];