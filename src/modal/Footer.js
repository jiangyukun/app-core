/**
 * Created by jiangyukun on 2017/2/20.
 */
import React, {Component} from 'react'
import PropTypes from 'prop-types'

class Footer extends Component {

  render() {
    return (
      <div className="my-modal-footer">

        {this.props.children}
      </div>
    )
  }
}

Footer.propTypes = {

}

export default Footer
