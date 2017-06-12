/**
 * Created by jiangyukun on 2017/4/12.
 */
import React from 'react'
import classnames from 'classnames'
import './button.scss'

interface ButtonProps extends HTMLButtonElement {
  type: string
  className: string
}

class Button extends React.Component<any, any> {
  static defaultProps = {
    type: ''
  }

  render() {
    const {className, ...otherProps} = this.props

    return (
      <button className={classnames('button', this.props.type, className)} {...otherProps}>
      </button>
    )
  }
}

export default Button
