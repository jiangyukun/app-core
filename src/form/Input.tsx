/**
 * Created by jiangyukun on 2017/7/20.
 */
import React from 'react'

interface InputProps extends React.HTMLProps<HTMLInputElement> {
  value: string
  onChange: (value: any) => void
  classPre?: string
}

class Input extends React.Component<InputProps> {
  render() {
    const {classPre, ...otherProps} = this.props
    return (
      <input {...otherProps} className={`__input ${classPre}-input`} onChange={e => this.props.onChange(e.target.value)}/>
    )
  }
}

export default Input
