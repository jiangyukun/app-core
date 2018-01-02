/**
 * Created by jiangyukun on 2017/7/10.
 */
import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import './radio.scss'
import Group from './Group'

interface RadioProps {
  value: string | number
  disabled?: boolean
}

class Radio extends React.Component<RadioProps> {
  static Group = Group
  static contextTypes = {
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    onChange: PropTypes.func,
    disabled: PropTypes.bool
  }

  onClick = () => {
    if (this.props.disabled || this.context.disabled) return
    this.context.onChange(this.props.value)
  }

  render() {
    let disabled = this.props.disabled || this.context.disabled
    return (
      <label className={classnames('radio-wrapper', {'radio-wrapper-disabled': disabled})}
             onClick={this.onClick}
      >
        <span className={classnames('radio', {'radio-checked': this.context.value == this.props.value}, {'radio-disabled': disabled})}>
          <input type="radio" className="radio-input" disabled={disabled}/>
          <span className="radio-inner"></span>
        </span>
        <span>{this.props.children}</span>
      </label>
    )
  }
}

export default Radio
