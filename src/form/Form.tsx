/**
 * Created by jiangyukun on 2017/8/4.
 */
import React from 'react'
import PropTypes from 'prop-types'

interface FormProps {
  name?: string
  onValidChange: (valid: boolean, validInfo?: any) => void
}

let formUid = 1

export function getFormItemName(name, defaultName) {
  return name || `${defaultName}_${formUid++}`
}

class Form extends React.Component<FormProps> {
  name: string
  static contextTypes = {
    setValid: PropTypes.func
  }
  static childContextTypes = {
    setValid: PropTypes.func
  }

  constructor(props) {
    super(props)
    this.name = getFormItemName(this.props.name, 'form_')
  }

  formItemList = []

  setValid = (name, valid, errorMessage) => {
    if (!name) {
      return
    }
    let match = this.formItemList.find(item => item.name == name)
    if (!match) {
      this.formItemList.push({
        name, valid, errorMessage
      })
    } else {
      match.valid = valid
      match.errorMessage = errorMessage
    }
    let invalidInputs = this.formItemList.filter(formItem => formItem.valid == false)
    const formValid = invalidInputs.length == 0
    this.props.onValidChange(formValid, invalidInputs)
    if (this.context.setValid) {
      this.context.setValid(this.name, formValid)
    }
  }

  render() {
    return React.Children.only(this.props.children)
  }

  getChildContext() {
    return {
      setValid: this.setValid
    }
  }
}

export default Form
