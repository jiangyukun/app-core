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

var _lodash = require('lodash');

var _Select = require('../Select1');

var _Select2 = _interopRequireDefault(_Select);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/**
 * Created by jiangyu2016 on 16/10/15.
 */
var FilterItem = function (_Component) {
  (0, _inherits3['default'])(FilterItem, _Component);

  function FilterItem(props, context) {
    (0, _classCallCheck3['default'])(this, FilterItem);

    var _this = (0, _possibleConstructorReturn3['default'])(this, _Component.call(this, props, context));

    _this.reset = function () {
      _this.setState({ 'selected': '' });
      _this.lastTypeItem = null;
      _this.subItemList.forEach(function (subItem) {
        return subItem.reset();
      });
      _this.customItemList.forEach(function (customItem) {
        return customItem.reset();
      });
      if (_this._select1) {
        _this._select1.reset();
      }
    };

    _this.getSelectInfo = function () {};

    _this.getParam = function () {
      var result = {};
      var _this$props = _this.props,
          paramName = _this$props.paramName,
          useText = _this$props.useText;

      if (paramName && _this.lastTypeItem) {
        result[paramName] = useText ? _this.lastTypeItem.text : _this.lastTypeItem.value;
      }
      _this.customItemList.forEach(function (customItem) {
        try {
          (0, _lodash.merge)(result, customItem.getParam());
        } catch (e) {
          console.log('customItem 暂不支持getParam方法');
        }
      });
      _this.subItemList.forEach(function (subItem) {
        try {
          (0, _lodash.merge)(result, subItem.getParam());
        } catch (e) {
          console.log('subItem 暂不支持getParam方法');
        }
      });
      return result;
    };

    _this.addCustomItem = function (customItem) {
      if (_this.customItemList.indexOf(customItem) == -1) {
        _this.customItemList.push(customItem);
      }
    };

    _this.addSubItem = function (subItem) {
      if (_this.subItemList.indexOf(subItem) == -1) {
        _this.subItemList.push(subItem);
      }
    };

    _this.select = function (typeItem) {
      _this.lastTypeItem = typeItem;
      _this.subItemList.forEach(function (subItem) {
        return subItem.onChange(typeItem);
      });
      _this.setState({ 'selected': typeItem.value });
      var _this$props$item = _this.props.item,
          typeCode = _this$props$item.typeCode,
          typeText = _this$props$item.typeText;

      _this.props.onSelect(typeItem);
      _this.context.updateFilterItem({ typeCode: typeCode, typeText: typeText, typeItem: typeItem, filterItem: _this });
    };

    _this.selectCustom = function (typeItem) {
      _this.lastTypeItem = null;
      _this.setState({ 'selected': null });
      var _this$props$item2 = _this.props.item,
          typeCode = _this$props$item2.typeCode,
          typeText = _this$props$item2.typeText;

      _this.props.onSelect(typeItem);
      _this.context.updateFilterItem({ typeCode: typeCode, typeText: typeText, typeItem: typeItem, filterItem: _this });
    };

    _this.selectSubItem = function (title, value, text, errorTip) {
      var _this$props$item3 = _this.props.item,
          typeCode = _this$props$item3.typeCode,
          typeText = _this$props$item3.typeText;

      _this.context.updateFilterItem({
        typeCode: typeCode,
        typeText: typeText,
        typeItem: {
          value: {
            main: _this.lastTypeItem,
            custom: { value: value, text: text }
          },
          text: _this.lastTypeItem.text + title,
          errorTip: errorTip
        },
        filterItem: _this
      });
    };

    _this.selectDefault = function () {
      _this.setState({ 'selected': '' });
      _this.subItemList.forEach(function (subItem) {
        return subItem.onChange(_this.defaultItem);
      });
      _this.customItemList.forEach(function (customItem) {
        return customItem.reset();
      });
      _this.context.removeFilterItem(_this.props.item.typeCode);
      if (_this._select1) {
        _this._select1.reset();
      }
    };

    context.addFilterItem(_this);
    _this.defaultItem = { value: '', text: '不限' };
    _this.customItemList = [];
    _this.subItemList = [];
    _this.lastTypeItem = null;
    _this.state = { selected: '', labelWidth: -1 };
    return _this;
  }

  // QueryFilter 重置 FilterItem 调用方法


  // QueryFilter 调用此方法合成所有过滤请求参数


  // 添加自定义选项


  // 添加子选项


  // 选择选项


  // 选择子选项


  // 点击“不限”


  FilterItem.prototype.render = function render() {
    var _this2 = this;

    var item = this.props.item;

    if (!item) {
      return null;
    }

    var showItemUI = function showItemUI() {
      if (item.typeItemList.length > 2) {
        return showItemTotal();
      }
      return showItemRespective();
    };

    var showItemRespective = function showItemRespective() {
      return item.typeItemList.map(function (typeItem) {
        return _react2['default'].createElement(
          'li',
          { key: typeItem.value,
            className: (0, _classnames2['default'])('filter-item-single', { 'selected': typeItem.value == _this2.state.selected }),
            onClick: function onClick(e) {
              return _this2.select(typeItem);
            } },
          typeItem.text
        );
      });
    };

    var showItemTotal = function showItemTotal() {
      return _react2['default'].createElement(
        'li',
        { className: 'select-option-container filter-item-single' },
        _react2['default'].createElement(_Select2['default'], { ref: function ref(c) {
            return _this2._select1 = c;
          },
          className: (0, _classnames2['default'])({ 'selected': _this2.state.selected != '' }),
          selectItems: item.typeItemList,
          onSelect: function onSelect(option) {
            return _this2.select(option);
          } })
      );
    };

    /* - - - - - - - - - - - - - - - - - - - - - - - - - -*/

    var style = {};
    var labelLength = item.typeText.length;
    if (labelLength > 6) {
      style.width = labelLength * 15;
    }

    var sizeClass = '';
    if (!this.props.className && this.props.size) {
      sizeClass = this.props.size + sizeClass + '-filter-item';
    }

    return _react2['default'].createElement(
      'ul',
      { className: (0, _classnames2['default'])(sizeClass, this.props.className) },
      _react2['default'].createElement(
        'li',
        { className: 'filter-item-label' },
        _react2['default'].createElement(
          'label',
          { style: style },
          item.typeText,
          '\uFF1A'
        )
      ),
      _react2['default'].createElement(
        'li',
        { className: 'flex1 filter-items' },
        _react2['default'].createElement(
          'ul',
          { className: 'filter-item-main' },
          _react2['default'].createElement(
            'li',
            { className: (0, _classnames2['default'])('filter-item-single', { 'selected': this.state.selected == '' }),
              onClick: function onClick(e) {
                return _this2.selectDefault();
              } },
            '\u4E0D\u9650'
          ),
          showItemUI()
        ),
        this.props.children
      )
    );
  };

  FilterItem.prototype.getChildContext = function getChildContext() {
    return {
      selectCustom: this.selectCustom,
      selectSubItem: this.selectSubItem,
      addCustomItem: this.addCustomItem,
      addSubItem: this.addSubItem
    };
  };

  return FilterItem;
}(_react.Component);

FilterItem.defaultProps = {
  paramName: '',
  useText: false,
  size: 'middle',
  onSelect: function onSelect() {}
};

FilterItem.propTypes = {
  item: _react.PropTypes.object,
  className: _react.PropTypes.string,
  onSelect: _react.PropTypes.func,

  size: _react.PropTypes.oneOf(['small', 'middle', 'big']),
  paramName: _react.PropTypes.string,
  useText: _react.PropTypes.bool
};

FilterItem.contextTypes = {
  addFilterItem: _react.PropTypes.func,
  updateFilterItem: _react.PropTypes.func,
  removeFilterItem: _react.PropTypes.func
};

FilterItem.childContextTypes = {
  selectCustom: _react.PropTypes.func,
  selectSubItem: _react.PropTypes.func,
  addCustomItem: _react.PropTypes.func,
  addSubItem: _react.PropTypes.func
};

exports['default'] = FilterItem;
module.exports = exports['default'];