/**
 * 下拉框控件
 */
import React from 'react'
import classnames from 'classnames'

import './select1.scss'
import OuterClick from '../core/OuterClick'
import SelectMain from './select/SelectMain'
import Options from './select/Options'

const keyCode = {
  UP: 38, DOWN: 40, ENTER: 13, ESCAPE: 27
}

interface Select1Props {
  value?: string
  options?: { value: string, text: string }[]
  onChange?: (value: string, text: string) => void

  placeholder?: string
  className?: string
  initCount?: number
  required?: boolean
  showClear?: boolean
  disabled?: boolean
}

class Select1 extends React.Component<Select1Props> {
  static defaultProps = {
    value: '',
    initCount: 10,
    showClear: false,
    disabled: false,
    options: [],
    onChange: () => null
  }

  state = {
    active: false,
    touched: false,
    showClose: true
  }

  keepFlag = false

  toggle = () => {
    if (this.props.disabled) {
      return
    }
    //点击清除不改变状态
    if (this.keepFlag) {
      this.keepFlag = false
      return
    }
    this.setState({active: !this.state.active})
  }

  close = () => {
    this.setState({active: false, touched: true})
  }

  open = () => {
    if (this.props.disabled) {
      return
    }
    this.setState({active: true})
  }

  // 点击选项
  select = (option, index) => {
    this.setState({selectIndex: index})
    this.props.onChange(option.value, option.text)
    this.close()
  }

  handleContainerKeyUp = (event) => {
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
      default:
        break
    }
  }

  handleClearBtnClick = () => {
    this.keepFlag = true
    this.setState({showClose: false})
    this.props.onChange('', '')
  }

  render() {
    let selectText = this.props.placeholder || '请选择'
    this.props.options.forEach(option => {
      if (option.value == this.props.value) {
        selectText = option.text
      }
    })

    return (
      <OuterClick onOuterClick={this.close}>
        <div
          className={classnames('__select1-container', {'disabled': this.props.disabled}, this.props.className)}
          onMouseEnter={e => this.setState({showClose: true})}
          onMouseLeave={e => this.setState({showClose: false})}
          onKeyUp={this.handleContainerKeyUp}
          tabIndex={-1}
        >
          <SelectMain
            active={this.state.active}
            invalid={this.props.required && this.state.touched && !this.props.value}
            text={selectText}
            showClear={this.props.showClear && this.state.showClose && this.props.value != ''}
            onClick={this.toggle}
            onClear={this.handleClearBtnClick}
          />

          {
            this.state.active && (
              <Options
                value={this.props.value}
                options={this.props.options}
                onSelect={this.select}
                initCount={this.props.initCount}
              />
            )
          }
        </div>
      </OuterClick>
    )
  }
}

export default Select1
