/**
 * Created by jiangyukun on 2017/8/8.
 */
import React from 'react'
import classnames from 'classnames'

import SelectMain from './SelectMain'

export interface SelectProps {
  active: boolean
  onActiveChange: (active) => void
  placeholder: string
  className: string
  width: string
  disabled: boolean
  required?: boolean
  valid: boolean
  text: string
  showClear: boolean
  onFirstOpen: () => void
  onOpen: () => void
  onClear: () => void
}

const keyCode = {
  UP: 38, DOWN: 40, ENTER: 13, ESCAPE: 27
}

class Select extends React.Component<SelectProps> {
  static defaultProps = {
    placeholder: '请选择',
    showClear: false,
    disabled: false,
    onFirstOpen: () => null,
    onOpen: () => null
  }

  state = {
    showClose: false
  }

  keepFlag = false
  firstFlag = true

  toggle = () => {
    if (this.props.disabled) {
      return
    }
    //点击清除不改变状态
    if (this.keepFlag) {
      this.keepFlag = false
      return
    }
    if (this.props.active) {
      this.close()
    } else {
      this.open()
    }
  }

  close = () => {
    this.props.onActiveChange(false)
  }

  open = () => {
    if (this.props.disabled) {
      return
    }
    if (this.firstFlag) {
      this.firstFlag = false
      this.props.onFirstOpen()
    }
    this.props.onOpen()
    this.props.onActiveChange(true)
  }

  handleContainerKeyUp = (event) => {
    if (!this.props.active) {
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
      default:
        break
    }
  }

  handleClearBtnClick = () => {
    this.keepFlag = true
    this.setState({showClose: false})
    this.props.onClear()
  }

  render() {
    let text = this.props.text
    if (text == null) {
      text = this.props.placeholder
    }

    return (
      <div
        className={classnames('__select-container', {'disabled': this.props.disabled}, this.props.className)}
        style={{width: this.props.width}}
        onMouseEnter={() => this.setState({showClose: true})}
        onMouseLeave={() => this.setState({showClose: false})}
        onKeyUp={this.handleContainerKeyUp}
        tabIndex={-1}
      >
        <SelectMain
          active={this.props.active}
          valid={!this.props.required || this.props.valid}
          text={text}
          showClear={!this.props.disabled && this.props.showClear && this.state.showClose}
          onClick={this.toggle}
          onClear={this.handleClearBtnClick}
        />
        {this.props.children}
      </div>
    )
  }
}

export default Select
