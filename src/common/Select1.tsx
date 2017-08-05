/**
 * 下拉框控件
 */
import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import './select1.scss'
import OuterClick from '../core/OuterClick'
import SelectMain from './select/SelectMain'
import Options from './select/Options'
import Spinner from './Spinner'

import addFormSupport from '../core/hoc/addFormSupport'

const keyCode = {
  UP: 38, DOWN: 40, ENTER: 13, ESCAPE: 27
}

interface Select1Props {
  value?: string
  options?: { value: string, text: string }[]
  onChange?: (value: string, text: string) => void

  placeholder?: string
  className?: string
  width?: string
  initCount?: number
  required?: boolean
  name?: string
  showClear?: boolean
  disabled?: boolean

  lazyLoad?: boolean
  loadSuccess?: boolean
  onOpen?: () => void
  onFirstOpen?: () => void
}

class Select1 extends React.Component<Select1Props> {
  static defaultProps = {
    value: '',
    initCount: 10,
    showClear: false,
    disabled: false,
    lazyLoad: false,
    options: [],
    onChange: () => null,
    onOpen: () => null
  }
  static contextTypes = {
    setValid: PropTypes.func
  }

  state = {
    active: false,
    showClose: true,
    maxCount: 0
  }

  keepFlag = false
  firstFlag = true
  valid = true

  toggle = () => {
    if (this.props.disabled) {
      return
    }
    //点击清除不改变状态
    if (this.keepFlag) {
      this.keepFlag = false
      return
    }
    if (this.state.active) {
      this.close()
    } else {
      this.open()
    }
  }

  close = () => {
    this.setState({active: false})
  }

  open = () => {
    if (this.props.disabled) {
      return
    }
    if (this.firstFlag) {
      this.firstFlag = false
      if (this.props.lazyLoad) {
        this.props.onFirstOpen()
      }
    }
    this.props.onOpen()
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

  showMoreOptions = () => {
    this.setState({maxCount: this.state.maxCount + 10})
  }

  componentWillMount() {
    this.setState({maxCount: this.props.initCount})
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
          style={{width: this.props.width}}
          onMouseEnter={e => this.setState({showClose: true})}
          onMouseLeave={e => this.setState({showClose: false})}
          onKeyUp={this.handleContainerKeyUp}
          tabIndex={-1}
        >
          <SelectMain
            active={this.state.active}
            invalid={this.props.required && !this.props.value}
            text={selectText}
            showClear={this.props.showClear && this.state.showClose && this.props.value != ''}
            onClick={this.toggle}
            onClear={this.handleClearBtnClick}
          />

          {
            this.state.active && this.props.lazyLoad && !this.props.loadSuccess && (
              <div className="all-select-items">
                <Spinner/>
              </div>
            )
          }

          {
            this.state.active && (this.props.lazyLoad && this.props.loadSuccess || !this.props.lazyLoad) && (
              <Options
                value={this.props.value}
                options={this.props.options}
                onSelect={this.select}
                maxCount={this.state.maxCount}
                showMoreOptions={this.showMoreOptions}
              />
            )
          }
        </div>
      </OuterClick>
    )
  }
}

export default addFormSupport<Select1Props>(Select1, ({props}) => props.value != '')
