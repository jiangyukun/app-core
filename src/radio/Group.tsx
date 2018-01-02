/**
 * Created by jiangyukun on 2017/7/10.
 */
import React from 'react'
import PropTypes from 'prop-types'
import addFormSupport from 'app-core/core/hoc/addFormSupport'

interface GroupProps {
  value: string | number
  onChange?: any
  name?: string
  required?: boolean
  disabled?: boolean
}

class Group extends React.Component<GroupProps> {
  static childContextTypes = {
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    onChange: PropTypes.func,
    disabled: PropTypes.bool
  }

  valid: boolean

  onChange = (value) => {
    this.props.onChange(value)
  }

  render() {
    return (
      <div className="radio-group">
        {this.props.children}
      </div>
    )
  }

  getChildContext() {
    return {
      value: this.props.value,
      onChange: this.onChange,
      disabled: this.props.disabled
    }
  }
}

export default addFormSupport(Group, ({props}) => props.value != null && props.value != '')
