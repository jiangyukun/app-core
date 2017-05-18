/**
 * Created by jiangyukun on 2017/2/20.
 */
import React, {Component} from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

class Body extends Component {

  render() {
    const {className, ...otherProps} = this.props
    return (
      <div className={classnames('my-modal-body', className)} {...otherProps}>
        {this.props.children}
      </div>
    )
  }
}

Body.propTypes = {
  className: PropTypes.string
}

export default Body
