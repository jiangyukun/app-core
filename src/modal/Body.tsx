/**
 * Created by jiangyukun on 2017/2/20.
 */
import React from 'react'
import classnames from 'classnames'

class Body extends React.Component<React.HTMLProps<HTMLDivElement>> {
  render() {
    const {className, ...otherProps} = this.props
    return (
      <div className={classnames('my-modal-body', className)} {...otherProps}>
        {this.props.children}
      </div>
    )
  }
}

export default Body
