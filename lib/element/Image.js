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

var _Spinner = require('../ui/Spinner');

var _Spinner2 = _interopRequireDefault(_Spinner);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/**
 * Created by jiangyukun on 2017/2/6.
 */
var Image = function (_Component) {
  (0, _inherits3['default'])(Image, _Component);

  function Image() {
    var _temp, _this, _ret;

    (0, _classCallCheck3['default'])(this, Image);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3['default'])(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {
      loading: true,
      showLoading: false,
      width: 0,
      angle: 0
    }, _this.onLoad = function () {
      _this.setState({ loading: false, showLoading: false });
      _this.setState({ width: _this._img.width, angle: 0 });
    }, _temp), (0, _possibleConstructorReturn3['default'])(_this, _ret);
  }

  Image.prototype.zoomIn = function zoomIn() {
    this.setState({ width: this.state.width * 1.2, showReset: true });
  };

  Image.prototype.zoomOut = function zoomOut() {
    this.setState({ width: this.state.width * 0.8, showReset: true });
  };

  Image.prototype.rotate = function rotate() {
    this.setState({ angle: this.state.angle + 90, showReset: true });
  };

  Image.prototype.reset = function reset() {
    this.setState({ width: this._img.naturalWidth, angle: 0, showReset: false });
  };

  Image.prototype.componentDidMount = function componentDidMount() {
    var _this2 = this;

    //延迟200ms后，如果图片还没有加载完成，显示loading
    setTimeout(function () {
      if (_this2.state.loading) {
        _this2.setState({ showLoading: true });
      }
    }, 200);
  };

  Image.prototype.render = function render() {
    var _this3 = this;

    var style = {
      transform: 'rotate(' + this.state.angle + 'deg)',
      width: this.state.width || '100%'
    };
    return _react2['default'].createElement(
      'div',
      { style: { position: 'relative' } },
      this.state.showLoading && _react2['default'].createElement(
        'div',
        { style: { position: 'absolute', left: 0, right: 0, zIndex: 1 } },
        _react2['default'].createElement(_Spinner2['default'], null)
      ),
      _react2['default'].createElement('img', { ref: function ref(c) {
          return _this3._img = c;
        },
        src: this.props.src,
        style: style,
        onLoad: this.onLoad })
    );
  };

  return Image;
}(_react.Component);

exports['default'] = Image;
module.exports = exports['default'];