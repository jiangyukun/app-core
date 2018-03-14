/**
 * Created by jiangyukun on 2017/7/20.
 */
import React from 'react'
import classnames from 'classnames'

import BaseInput from './BaseInput'

interface InputProps extends React.HTMLProps<HTMLInputElement> {
  value: string
  onChange: (value) => void
  classPre?: string
}

class Input extends React.Component<InputProps> {

  render() {
    const {classPre, ...otherProps} = this.props

    return (
      <BaseInput
        {...otherProps as any}
        className={classnames(this.props.className, '__input', {[`${classPre}-input`]: this.props.classPre})}
      />
    )
  }
}

export default Input
