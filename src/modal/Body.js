/**
 * Created by jiangyukun on 2017/2/20.
 */
import React, {Component} from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

class Body extends Component {

  render() {
    return (
      <div className={classnames('my-modal-body', this.props.className)}>
        {this.props.children}
      </div>
    )
  }
}

Body.propTypes = {
  className: PropTypes.string
}

export default Body
