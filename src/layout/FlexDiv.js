/**
 * Created by jiangyukun on 2017/4/18.
 */
import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

class FlexDiv extends React.Component {

  render() {
    const {className, otherProps} = this.props
    return (
      <div className={classnames('flex middle', className)} {...otherProps}>
        {this.props.children}
      </div>
    )
  }
}

FlexDiv.propTypes = {
  className: PropTypes.string
}

export default FlexDiv
