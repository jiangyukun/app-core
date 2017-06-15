/**
 * Created by jiangyukun on 2017/2/6.
 */
import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

class Button1 extends React.Component {
  render() {
    const {className, ...otherProps} = this.props
    return (
      <button className={classnames('btn btn-sm', className)} {...otherProps}/>
    )
  }
}

Button1.propTypes = {
  className: PropTypes.string
}

export default Button1
