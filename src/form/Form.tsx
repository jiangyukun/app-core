/**
 * Created by jiangyukun on 2017/8/4.
 */
import React from 'react'
import PropTypes from 'prop-types'

interface FormProps extends React.HTMLProps<HTMLDivElement> {
  onValidChange: (valid: boolean) => void
}

class Form extends React.Component<FormProps> {
  static childContextTypes = {
    setValid: PropTypes.func,
    disabled: PropTypes.bool
  }

  map = {}

  setValid = (name, valid) => {
    if (!name) {
      return
    }
    this.map[name] = valid
    let inValidInputs = Object.keys(this.map).filter(input => this.map[input] == false)
    this.props.onValidChange(inValidInputs.length == 0)
  }

  render() {
    const {onValidChange, ...otherProps} = this.props
    return (
      <div {...otherProps}/>
    )
  }

  getChildContext() {
    return {
      setValid: this.setValid,
      disabled: this.props.disabled
    }
  }
}

export default Form
