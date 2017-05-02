/**
 * Created by jiangyukun on 2017/4/24.
 */
import React from 'react'
import PropTypes from 'prop-types'

class Width extends React.Component {

  render() {
    const {width, otherProps} = this.props
    return (
      <div style={{width}} {...otherProps}>
        {this.props.children}
      </div>
    )
  }
}

Width.propTypes = {
  width: PropTypes.string,
  className: PropTypes.string,
}

export default Width
