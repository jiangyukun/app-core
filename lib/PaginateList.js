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

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _calculatePageIndex = require('./utils/calculatePageIndex');

var _calculatePageIndex2 = _interopRequireDefault(_calculatePageIndex);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/**
 * Created by jiangyu2016 on 16/10/15.
 */
var pageSize = 10;

var PaginateList = function (_Component) {
  (0, _inherits3['default'])(PaginateList, _Component);

  function PaginateList(props) {
    (0, _classCallCheck3['default'])(this, PaginateList);

    var _this = (0, _possibleConstructorReturn3['default'])(this, _Component.call(this, props));

    _this.addSortBy = _this.addSortBy.bind(_this);
    _this.sort = _this.sort.bind(_this);
    _this.sortByList = [];
    _this.state = {
      draw: 1,
      currentPage: 1,
      by: '',
      order: 'default'
    };
    return _this;
  }

  PaginateList.prototype.beginFetch = function beginFetch(page) {
    var _this2 = this;

    if (page) {
      this.setState({ currentPage: page });
    }
    this.setState({ draw: this.state.draw + 1 }, function () {
      return _this2.props.doFetch();
    });
  };

  PaginateList.prototype.addSortBy = function addSortBy(sortBy) {
    this.sortByList.push(sortBy);
  };

  PaginateList.prototype.sort = function sort(by, order) {
    if (order == 'default') {
      order = '';
    }
    this.setState({ by: by, order: order }, this.beginFetch(1));
    this.sortByList.forEach(function (sortBy) {
      return sortBy.reset(by);
    });
  };

  PaginateList.prototype.nextPage = function nextPage() {
    if (this.state.currentPage < this.pageTotal) {
      this.toPage(this.state.currentPage + 1);
    }
  };

  PaginateList.prototype.beforePage = function beforePage() {
    if (this.state.currentPage > 1) {
      this.toPage(this.state.currentPage - 1);
    }
  };

  PaginateList.prototype.toPage = function toPage(page) {
    var _this3 = this;

    if (this.state.currentPage != page) {
      this.setState({ currentPage: page }, function () {
        return _this3.beginFetch();
      });
    }
  };

  PaginateList.prototype.getParams = function getParams() {
    var _ref2;

    if (this.state.by && this.state.order) {
      var _ref;

      return _ref = {}, _ref[this.props.startName] = this.state.currentPage - 1, _ref[this.props.lengthName] = pageSize, _ref[this.props.drawName] = this.state.draw, _ref[this.props.byName] = this.state.by, _ref[this.props.orderName] = this.state.order, _ref;
    }
    return _ref2 = {}, _ref2[this.props.startName] = this.state.currentPage - 1, _ref2[this.props.lengthName] = pageSize, _ref2[this.props.drawName] = this.state.draw, _ref2;
  };

  PaginateList.prototype.render = function render() {
    var _this4 = this;

    this.pageTotal = parseInt((this.props.total + pageSize - 1) / pageSize);
    var pageIndexes = (0, _calculatePageIndex2['default'])(this.pageTotal, this.state.currentPage);

    return _react2['default'].createElement(
      'div',
      { className: 'paginate-list', style: this.props.style },
      this.props.children,
      _react2['default'].createElement(
        'div',
        { className: 'list-info' },
        _react2['default'].createElement(
          'div',
          { className: 'list-count-info' },
          _react2['default'].createElement(
            'span',
            null,
            '\u5F53\u524D\u7B2C',
            this.state.currentPage,
            '\u9875\uFF0C\u5171',
            this.props.total,
            '\u6761\u6570\u636E'
          )
        ),
        _react2['default'].createElement(
          'nav',
          { className: 'list-nav-button' },
          _react2['default'].createElement(
            'ul',
            { className: 'pagination' },
            _react2['default'].createElement(
              'li',
              { className: (0, _classnames2['default'])({ 'disabled': this.state.currentPage == 1 }), onClick: function onClick(e) {
                  return _this4.beforePage();
                } },
              _react2['default'].createElement(
                'a',
                null,
                '\u4E0A\u4E00\u9875'
              )
            ),
            pageIndexes.map(function (page, index) {
              return _react2['default'].createElement(
                'li',
                { key: index, className: (0, _classnames2['default'])({ 'active': _this4.state.currentPage == page }) },
                _react2['default'].createElement(
                  'a',
                  { onClick: function onClick(e) {
                      return _this4.toPage(page);
                    }, disabled: page == '...' },
                  page
                )
              );
            }),
            _react2['default'].createElement(
              'li',
              { className: (0, _classnames2['default'])({ 'disabled': this.state.currentPage == this.pageTotal }), onClick: function onClick(e) {
                  return _this4.nextPage();
                } },
              _react2['default'].createElement(
                'a',
                null,
                '\u4E0B\u4E00\u9875'
              )
            )
          )
        )
      )
    );
  };

  PaginateList.prototype.getChildContext = function getChildContext() {
    return {
      addSortBy: this.addSortBy,
      sort: this.sort,
      total: this.props.total
    };
  };

  return PaginateList;
}(_react.Component);

PaginateList.defaultProps = {
  startName: 'start',
  lengthName: 'length',
  drawName: 'draw',
  byName: 'by',
  orderName: 'order'
};

PaginateList.propTypes = {
  total: _react.PropTypes.number.isRequired,
  loading: _react.PropTypes.bool,
  doFetch: _react.PropTypes.func.isRequired,

  startName: _react.PropTypes.string,
  lengthName: _react.PropTypes.string,
  drawName: _react.PropTypes.string,
  byName: _react.PropTypes.string,
  orderName: _react.PropTypes.string
};

PaginateList.childContextTypes = {
  addSortBy: _react.PropTypes.func,
  sort: _react.PropTypes.func,
  total: _react.PropTypes.number
};

exports['default'] = PaginateList;
module.exports = exports['default'];