/**
 * Created by jiangyukun on 2017/7/20.
 */
import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import BaseInput from './BaseInput'

interface InputProps extends React.HTMLProps<HTMLInputElement> {
  value: string
  onChange: (value) => void
  classPre?: string
  valid?: boolean
}

class Input extends React.Component<InputProps> {
  static contextTypes = {
    setTouched: PropTypes.func
  }

  state = {
    touched: false
  }

  handleBlur = (e) => {
    this.setState({touched: true})
    if (this.props.onBlur) {
      this.props.onBlur(e)
    }
    if (this.context.setTouched) {
      this.context.setTouched()
    }
  }

  render() {
    const {classPre, valid, ...otherProps} = this.props

    return (
      <BaseInput
        {...otherProps as any}
        className={classnames(`__input`, {[`${classPre}-input`]: this.props.classPre, 'invalid': this.state.touched && valid == false})}
        onBlur={this.handleBlur}
      />
    )
  }
}

export default Input
