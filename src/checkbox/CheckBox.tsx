/**
 * Created by jiangyukun on 2017/7/7.
 */
import React from 'react'
import classnames from 'classnames'

import {supportClassPre} from '../tools/common-utils'

interface CheckBoxProps {
  classPre?: string
  checked: boolean
  onChange?: (checked: boolean) => void
  disabled?: boolean
}

class CheckBox extends React.Component<CheckBoxProps> {
  handleChange = (e) => {
    this.props.onChange(!this.props.checked)
  }

  render() {
    return (
      <label className={supportClassPre(this.props.classPre, 'checkbox-wrapper')}>
        <span className={classnames('checkbox', {'checkbox-checked': this.props.checked}, {'checkbox-disabled': this.props.disabled})}>
          <input className="checkbox-input" type="checkbox" onChange={this.handleChange} disabled={this.props.disabled}/>
          <span className="checkbox-inner"></span>
        </span>

        <span>{this.props.children}</span>
      </label>
    )
  }
}

export default CheckBox
