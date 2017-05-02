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

var _Form = require('./element/Form');

var _Form2 = _interopRequireDefault(_Form);

var _FilterItem = require('./query-filter/FilterItem');

var _FilterItem2 = _interopRequireDefault(_FilterItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var QueryFilter = function (_Component) {
  (0, _inherits3['default'])(QueryFilter, _Component);

  function QueryFilter() {
    (0, _classCallCheck3['default'])(this, QueryFilter);

    var _this = (0, _possibleConstructorReturn3['default'])(this, _Component.call(this));

    _this.addFilterItem = _this.addFilterItem.bind(_this);
    _this.removeFilterItem = _this.removeFilterItem.bind(_this);
    _this.updateFilterItem = _this.updateFilterItem.bind(_this);
    _this.searchKey = '';
    _this.filterItemList = [];
    _this.state = { more: false, filterConditions: [] };
    return _this;
  }

  QueryFilter.prototype.searchKeyChange = function searchKeyChange(e) {
    this.searchKey = e.target.value;
  };

  QueryFilter.prototype.toggleMoreState = function toggleMoreState() {
    this.setState({ more: !this.state.more });
  };

  QueryFilter.prototype.updateFilterItem = function updateFilterItem(newFilterCondition) {
    var match = this.state.filterConditions.find(function (condition) {
      return condition.typeCode == newFilterCondition.typeCode;
    });
    if (match) {
      var index = this.state.filterConditions.indexOf(match);
      this.state.filterConditions[index] = newFilterCondition;
    } else {
      this.state.filterConditions.push(newFilterCondition);
    }
    this.forceUpdate();
  };

  QueryFilter.prototype.removeFilterItem = function removeFilterItem(typeCode) {
    var newFilterCondition = this.state.filterConditions.filter(function (filterCondition) {
      if (filterCondition.typeCode == typeCode) {
        filterCondition.filterItem.reset();
      }
      return filterCondition.typeCode != typeCode;
    });
    this.setState({ filterConditions: newFilterCondition });
  };

  QueryFilter.prototype.clearAllFilterCondition = function clearAllFilterCondition() {
    this.state.filterConditions.forEach(function (filterCondition) {
      return filterCondition.filterItem.reset();
    });
    this.setState({ filterConditions: [] });
  };

  QueryFilter.prototype.filter = function filter() {
    this.props.beginFilter();
  };

  QueryFilter.prototype.addFilterItem = function addFilterItem(filterItem) {
    if (this.filterItemList.indexOf(filterItem) == -1) {
      this.filterItemList.push(filterItem);
    } else {
      console.log('重复添加的filterItem');
    }
  };

  QueryFilter.prototype.getSearchParam = function getSearchParam() {
    var _ref;

    if (!this.searchKey) {
      return {};
    }
    return _ref = {}, _ref[this.props.searchKeyName] = this.searchKey, _ref;
  };

  QueryFilter.prototype.getParams = function getParams() {
    var params = this.getSearchParam();
    this.filterItemList.forEach(function (filterItem) {
      (0, _lodash.merge)(params, filterItem.getParam());
    });
    return params;
  };

  QueryFilter.prototype.getSearchToolbar = function getSearchToolbar() {
    var _this2 = this;

    return _react2['default'].createElement(
      'div',
      { className: 'group-input' },
      _react2['default'].createElement(
        _Form2['default'],
        null,
        _react2['default'].createElement('input', { type: 'text', placeholder: '\u641C\u7D22\u5173\u952E\u8BCD', onChange: function onChange(e) {
            return _this2.searchKeyChange(e);
          } }),
        _react2['default'].createElement('button', { className: 'icon-search-btn', onClick: function onClick(e) {
            return _this2.filter();
          } })
      )
    );
  };

  QueryFilter.prototype.render = function render() {
    var _this3 = this;

    var buttons = this.props.children.map(function (child) {
      if (child.type == 'button') {
        return child;
      }
    });

    var filterItems = this.props.children.map(function (child, index) {
      if (child.type == _FilterItem2['default']) {
        return child;
      }
    });

    var showSelectFilterItem = function showSelectFilterItem() {
      return _this3.state.filterConditions.map(function (filterCondition, index) {
        return _react2['default'].createElement(
          'a',
          { key: index,
            className: (0, _classnames2['default'])('select-result select-result2 select-resultqage', { 'invalidate': filterCondition.invalidate }) },
          _react2['default'].createElement(
            'span',
            null,
            filterCondition.typeText,
            '\uFF1A ',
            filterCondition.typeItem.text
          ),
          filterCondition.invalidate && _react2['default'].createElement('i', { className: 'fa fa-warning filter-item-warning', title: filterCondition.errorTip }),
          _react2['default'].createElement('i', { className: 'icon-close', onClick: function onClick(e) {
              return _this3.removeFilterItem(filterCondition.typeCode);
            } })
        );
      });
    };

    return _react2['default'].createElement(
      'div',
      { className: (0, _classnames2['default'])('query-filter', this.props.className) },
      _react2['default'].createElement(
        'div',
        { className: 'group-tools' },
        _react2['default'].createElement(
          'div',
          { className: 'filter-toolbar' },
          buttons
        ),
        _react2['default'].createElement(
          'div',
          { className: 'group-search' },
          this.getSearchToolbar(),
          _react2['default'].createElement(
            'div',
            { className: (0, _classnames2['default'])('group-select-btn', { 'selected': this.state.more }),
              onClick: function onClick(e) {
                return _this3.toggleMoreState();
              } },
            _react2['default'].createElement(
              'a',
              null,
              _react2['default'].createElement(
                'span',
                null,
                '\u66F4\u591A\u7B5B\u9009'
              ),
              _react2['default'].createElement('i', { className: 'icon-arrow-blue' })
            )
          )
        ),
        _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(
            'div',
            { className: (0, _classnames2['default'])('child', 'group-select-more', { 'hide': !this.state.more }) },
            _react2['default'].createElement(
              'div',
              { className: 'group-top' },
              _react2['default'].createElement('div', null)
            ),
            filterItems,
            _react2['default'].createElement(
              'div',
              { className: 'group-select-more-btm flex' },
              _react2['default'].createElement(
                'div',
                { style: { width: '80px' } },
                '\u7B5B\u9009\u6761\u4EF6:'
              ),
              _react2['default'].createElement(
                'div',
                { className: 'flex1 ' },
                _react2['default'].createElement(
                  'div',
                  { className: 'clearfix' },
                  showSelectFilterItem()
                )
              ),
              _react2['default'].createElement(
                'div',
                { className: 'select-result' },
                _react2['default'].createElement(
                  'button',
                  {
                    className: (0, _classnames2['default'])('clear', { 'disabled': this.state.filterConditions.length == 0 }),
                    onClick: function onClick(e) {
                      return _this3.clearAllFilterCondition();
                    },
                    disabled: this.state.filterConditions.length == 0 },
                  '\u6E05\u9664'
                ),
                _react2['default'].createElement(
                  'button',
                  { className: 'submit', onClick: function onClick(e) {
                      return _this3.filter();
                    } },
                  '\u786E\u5B9A'
                )
              ),
              _react2['default'].createElement('div', { className: 'clear disabled' })
            )
          )
        )
      )
    );
  };

  QueryFilter.prototype.getChildContext = function getChildContext() {
    return {
      addFilterItem: this.addFilterItem,
      removeFilterItem: this.removeFilterItem,
      updateFilterItem: this.updateFilterItem
    };
  };

  return QueryFilter;
}(_react.Component); /**
                      * Created by jiangyu2016 on 16/10/15.
                      */


QueryFilter.propTypes = {
  className: _react.PropTypes.string,
  beginFilter: _react.PropTypes.func.isRequired,
  searchKeyName: _react.PropTypes.string
};

QueryFilter.childContextTypes = {
  addFilterItem: _react.PropTypes.func,
  removeFilterItem: _react.PropTypes.func,
  updateFilterItem: _react.PropTypes.func
};

exports['default'] = QueryFilter;
module.exports = exports['default'];