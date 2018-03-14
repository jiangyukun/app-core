/**
 * jiangyukun on 2018/1/11
 */
import React from 'react'
import PropTypes from 'prop-types'

export interface ValidProps {
  name?: string
  valid: boolean
  errorMessage?: string
}

let uid = 1

export function getFormItemName(name, defaultName) {
  return name || `${defaultName}_${uid++}`
}

export function isEmpty(value) {
  return value == '' || value == null
}

export function isNotEmpty(value) {
  return !isEmpty(value)
}

export function checkIsValid(required, value, checkFormat: (value) => boolean): boolean {
  if (!required && isEmpty(value)) return true
  if (required && isEmpty(value)) return false
  return checkFormat(value)
}

class Valid extends React.Component<ValidProps> {
  static contextTypes = {
    setValid: PropTypes.func
  }

  name = ''
  valid = true
  errorMessage = ''

  constructor(props) {
    super(props)
    this.name = props.name || 'form-item_' + uid++
  }

  setValid(valid) {
    if (this.context.setValid) {
      if (this.valid != valid || this.errorMessage != this.props.errorMessage) {
        this.valid = valid
        this.errorMessage = this.props.errorMessage
        this.context.setValid(this.name, valid, this.props.errorMessage)
      }
    }
  }

  componentDidMount() {
    this.setValid(this.props.valid)
  }

  componentDidUpdate() {
    this.setValid(this.props.valid)
  }

  componentWillUnmount() {
    this.setValid(true)
  }

  render() {
    return React.Children.only(this.props.children)
  }
}

export default Valid
