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

class Form extends React.Component<FormProps> {
  static defaultProps = {
    name: 'form_' + formUid++
  }
  static contextTypes = {
    setValid: PropTypes.func
  }
  static childContextTypes = {
    setValid: PropTypes.func
  }

  map = {}

  setValid = (name, valid) => {
    if (!name) {
      return
    }
    this.map[name] = valid
    let invalidInputs = Object.keys(this.map).filter(input => this.map[input] == false)
    const formValid = invalidInputs.length == 0
    this.props.onValidChange(formValid, this.map)
    if (this.context.setValid) {
      this.context.setValid(this.props.name, formValid)
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
