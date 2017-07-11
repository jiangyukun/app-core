/**
 * Created by jiangyukun on 2017/4/18.
 */
import React from 'react'
import classnames from 'classnames'

interface FlexDivProps extends React.HTMLProps<HTMLDivElement> {
}

class FlexDiv extends React.Component<FlexDivProps> {
  render() {
    const {className, ...otherProps} = this.props
    return (
      <div className={classnames('__flex', className)} {...otherProps}>
        {this.props.children}
      </div>
    )
  }
}

export default FlexDiv
