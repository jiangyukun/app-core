/**
 * Created by jiangyukun on 2017/7/20.
 */
import React from 'react'
import classnames from 'classnames'

interface InputProps extends React.HTMLProps<HTMLInputElement> {
  value: string
  onChange: (value: any) => void
  classPre?: string
  valid?: boolean
}

class Input extends React.Component<InputProps> {
  state = {
    touched: false
  }

  handleBlur = (e) => {
    this.setState({touched: true})
    this.props.onBlur && this.props.onBlur(e)
  }

  render() {
    const {classPre, valid, ...otherProps} = this.props

    return (
      <input
        {...otherProps}
        className={classnames(`__input`, {[`${classPre}-input`]: this.props.classPre, 'invalid': this.state.touched && valid == false})}
        onChange={e => this.props.onChange(e.target.value)}
        onBlur={this.handleBlur}
      />
    )
  }
}

export default Input
