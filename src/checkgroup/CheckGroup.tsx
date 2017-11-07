/**
 * Created by jiangyukun on 2017/7/25.
 */
import React from 'react'
import PropTypes from 'prop-types'

import CheckBox from '../checkbox/CheckBox'
import addFormSupport from '../core/hoc/addFormSupport'

import {copyList} from '../core/utils'

interface CheckGroupProps {
  options: { value: any, text: string, disabled?: boolean }[]
  value: any[]
  onChange: (value: any[]) => void
  required?: boolean
  name?: string
}

class CheckGroup extends React.Component<CheckGroupProps> {
  static contextTypes = {
    disabled: PropTypes.bool
  }

  handleChange = (itemValue) => {
    const value = copyList(this.props.value)
    let index = value.indexOf(itemValue)
    if (index != -1) {
      value.splice(index, 1)
      this.props.onChange(value)
    } else {
      value.push(itemValue)
      this.props.onChange(value)
    }
  }

  render() {
    return (
      <div className="check-group">
        {
          this.props.options.map(option => {
            let disabled = option.disabled || this.context.disabled
            return (
              <CheckBox
                key={option.value}
                checked={this.props.value.indexOf(option.value) != -1}
                onChange={() => this.handleChange(option.value)}
                disabled={disabled}
              >
                {option.text}
              </CheckBox>
            )
          })
        }
      </div>
    )
  }
}

export default addFormSupport(CheckGroup, ({props}) => props.value.length != 0)
