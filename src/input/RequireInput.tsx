/**
 * jiangyukun on 2018/1/11
 */
import React from 'react'
import Input from './Input'

import Valid, {checkIsValid, getFormItemName} from '../form/Valid'

import {RequiredFormProperties} from '../interfaces/FormProperties'

interface RequireInputProps extends RequiredFormProperties {
  format?: any
  emptyTip?: string
  formatTip?: string | ((value) => string) | string[]
}

class RequireInput extends React.Component<RequireInputProps> {
  name: string

  componentWillMount() {
    this.name = getFormItemName(this.props.name, 'input')
  }

  checkValid = () => {
    return checkIsValid(true, this.props.value, value => checkFormat(this.props.format, value))
  }

  render() {
    const {format, formatTip, ...otherProps} = this.props
    const valid = this.checkValid()
    let errorMessage = ''
    if (typeof formatTip == 'function') {
      errorMessage = formatTip(this.props.value)
    } else if (formatTip instanceof Array) {
      errorMessage = this.props.value ? formatTip[1] : formatTip[0]
    } else {
      errorMessage = formatTip
    }

    return (
      <Valid name={this.name} valid={valid} errorMessage={errorMessage}>
        <Input {...otherProps} value={this.props.value || ''} valid={valid}/>
      </Valid>
    )
  }
}

export default RequireInput

function checkFormat(format, value) {
  let valid = true
  if (format instanceof RegExp) {
    valid = format.test(value)
  } else if (format instanceof Function) {
    valid = format(value)
  }
  return valid
}
