/**
 * Created by jiangyukun on 2017/8/4.
 */
import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import CheckGroup1 from '../checkgroup/CheckGroup1'

interface CheckBox1Props {
  className?: string
  value: string
  disabled?: boolean
}

class CheckBox1 extends React.Component<CheckBox1Props> {
  static Group = CheckGroup1
  static contextTypes = {
    value: PropTypes.array,
    onChange: PropTypes.func,
    disabled: PropTypes.bool
  }

  handleChange = () => {
    this.context.onChange(this.props.value)
  }

  render() {
    const disabled = this.props.disabled || this.context.disabled
    return (
      <label className={classnames('checkbox-wrapper', this.props.className)}>
        <span className={classnames('checkbox', {'checkbox-checked': this.context.value.indexOf(this.props.value) != -1}, {'checkbox-disabled': disabled})}>
          <input className="checkbox-input" type="checkbox" disabled={disabled} onChange={this.handleChange}/>
          <span className="checkbox-inner"></span>
        </span>
        <span>{this.props.children}</span>
      </label>
    )
  }
}

export default CheckBox1
