/**
 * 下拉框控件
 */
import React, {Component} from 'react'
import {findDOMNode} from 'react-dom'
import classnames from 'classnames'
import {events} from 'dom-helpers'

import './select1.scss'

const keyCode = {
  UP: 38, DOWN: 40, ENTER: 13, ESCAPE: 27
}

interface Select1Props {
  value: string
  options: { value: string, text: string }[]
  onChange: (value: string, text: string) => void

  className?: string
  initCount?: number
  required?: boolean
  showClear?: boolean
  disabled?: boolean
}

class Select1 extends Component<Select1Props, any> {
  static defaultProps = {
    value: '',
    initCount: 10,
    showClear: false,
    disabled: false,
    options: [],
    onChange: () => null
  }

  _container: any

  constructor(props) {
    super(props)
    const matchOption = props.options.find(option => option.value == props.value)
    let selectIndex = -1
    if (matchOption) {
      selectIndex = props.options.indexOf(matchOption)
    }
    this.state = {
      active: false,
      maxLength: props.initCount,
      searchKey: '',
      selectIndex,
      touched: false,
      touchIndex: -1,
      showClose: true
    }
  }

  closeFlag: boolean = false
  openFlag: boolean = false
  currentCount: number = 0

  toggle() {
    if (this.props.disabled) {
      return
    }
    if (this.closeFlag) {
      this.closeFlag = false
      return
    }
    this.setState({active: !this.state.active})
  }

  close() {
    this.setState({active: false, touched: true})
  }

  open() {
    if (this.props.disabled) {
      return
    }
    this.setState({active: true, touchIndex: this.state.selectIndex})
  }

  // 点击选项
  select(option, index) {
    this.setState({selectIndex: index})
    this.props.onChange(option.value, option.text)
    this.close()
  }

  touch(index) {
    this.setState({touchIndex: index})
  }

  search(event) {
    let searchKey = event.target.value.trim()
    this.setState({searchKey})
  }

  showMoreItems() {
    this.setState({maxLength: this.state.maxLength + 10})
  }

  activeOpenFlag = () => {
    this.openFlag = true
  }

  handleDocumentClick = () => {
    if (this.openFlag) {
      this.openFlag = false
      return
    }
    if (this.state.active) {
      this.close()
    }
  }

  handleContainerKeyDown = (event) => {
    if (!this.state.active) {
      switch (event.which) {
        case keyCode.ENTER:
          this.open()
          break
        default:
          break
      }
      return
    }
    switch (event.which) {
      case keyCode.ESCAPE:
        event.stopPropagation()
        this.close()
        break
      case keyCode.DOWN:
        if (this.state.touchIndex + 1 <= this.currentCount - 1) {
          this.setState({touchIndex: this.state.touchIndex + 1})
        }
        break
      case keyCode.UP:
        if (this.state.touchIndex - 1 >= 0) {
          this.setState({touchIndex: this.state.touchIndex - 1})
        }
        break
      case keyCode.ENTER:
        let touchIndex = this.state.touchIndex
        let options = this.props.options
        if (touchIndex >= 0 && touchIndex < options.length) {
          this.select(options[touchIndex], touchIndex)
        }
        break
      default:
        break
    }
  }

  handleClearBtnClick = () => {
    this.closeFlag = true
    this.setState({showClose: false})
    this.props.onChange('', '')
  }

  handleOptionScroll = (e) => {
    const target = e.target
    if (target.clientHeight + target.scrollTop == target.scrollHeight) {
      this.showMoreItems()
    }
  }

  componentDidMount() {
    events.on(findDOMNode(this._container), 'keyup', this.handleContainerKeyDown)
    events.on(document, 'click', this.handleDocumentClick)
  }

  componentWillUnmount() {
    events.off(findDOMNode(this._container), 'keyup', this.handleContainerKeyDown)
    events.off(document, 'click', this.handleDocumentClick)
  }

  render() {
    let selectText = '请选择'
    this.props.options.forEach(option => {
      if (option.value == this.props.value) {
        selectText = option.text
      }
    })
    let showMore = false, noMatch = true

    let showSelectItems = () => {
      let currentCount = 0, filterTotalCount = 0
      try {
        return this.props.options.map((option, index) => {
          if (option.text.indexOf(this.state.searchKey) != -1) {
            noMatch = false
            filterTotalCount++
            if (currentCount < this.state.maxLength) {
              currentCount++
              return (
                <li key={index}
                    className={classnames('select-item', {'selected': index == this.state.selectIndex}, {'last-touched': index == this.state.touchIndex})}
                    onClick={e => this.select(option, index)}
                    onMouseEnter={e => this.touch(index)}>
                  {option.text}
                </li>
              )
            }
            return null
          }
        })
      } finally {
        this.currentCount = currentCount
        if (currentCount != filterTotalCount) {
          showMore = true
        }
      }
    }

    return (
      <div ref={c => this._container = c}
           className={classnames('__select1-container', {'disabled': this.props.disabled}, this.props.className)}
           onClick={this.activeOpenFlag}
           onMouseEnter={e => this.setState({showClose: true})}
           onMouseLeave={e => this.setState({showClose: false})}
           tabIndex={-1}>
        <div onClick={e => this.toggle()}
             className={classnames('selected-item',
               {'open': this.state.active},
               {'invalid': this.props.required && this.state.touched && !this.props.value})}
        >
          <span className="select-item-text">{selectText}</span>
          <span className="dropdown"><b></b></span>
          {
            this.props.showClear && this.state.showClose && this.props.value && (
              <span className="close-btn" onClick={this.handleClearBtnClick}>
                <i className="fa fa-close"></i>
              </span>
            )
          }
        </div>

        {
          this.state.active && (
            <div className="all-select-items" onScroll={this.handleOptionScroll}>
              {
                this.props.options.length > 10 && (
                  <input value={this.state.searchKey} className="search" onChange={e => this.search(e)}
                         placeholder="搜索"/>
                )
              }
              <ul className="select-items-container">
                {showSelectItems()}
                {
                  showMore && (
                    <li className="show-more" onClick={e => this.showMoreItems()}>
                      <span>更多...</span>
                    </li>
                  )
                }
              </ul>
              {
                noMatch && (
                  <div className="no-match-result">
                    <span>暂无数据</span>
                  </div>
                )
              }
            </div>
          )
        }
      </div>
    )
  }
}

export default Select1
