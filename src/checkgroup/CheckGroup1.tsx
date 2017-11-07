/**
 * Created by jiangyukun on 2017/8/4.
 */
import React from 'react'
import PropTypes from 'prop-types'

import addFormSupport from '../core/hoc/addFormSupport'
import {copyList} from '../core/utils'

interface CheckGroup1Props {
  value: any[]
  onChange: (value: any[]) => void
  disabled?: boolean
}

type ChildContextTypes = {
  value: any[]
  onChange: (value) => void
  disabled: boolean
}

class CheckGroup1 extends React.Component<CheckGroup1Props> implements React.ChildContextProvider<ChildContextTypes> {
  static childContextTypes = {
    value: PropTypes.array,
    onChange: PropTypes.func,
    disabled: PropTypes.bool
  }

  handleChange = (value) => {
    let newValue = copyList(this.props.value)
    if (newValue.indexOf(value) == -1) {
      newValue.push(value)
    } else {
      newValue.splice(newValue.indexOf(value), 1)
    }
    this.props.onChange(newValue)
  }

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }

  getChildContext() {
    return {
      value: this.props.value,
      onChange: this.handleChange,
      disabled: this.props.disabled
    }
  }
}

export default addFormSupport(CheckGroup1, ({props}) => true)
