/**
 * Created by jiangyukun on 2017/2/20.
 */
import React, {Component} from 'react'
import PropTypes from 'prop-types'

interface HeaderProps {
  closeButton?: boolean
}

class Header extends Component<HeaderProps> {
  static contextTypes = {
    onHide: PropTypes.func
  }

  onHide = () => {
    this.context.onHide()
  }

  render() {
    return (
      <div className="my-modal-header">
        {
          this.props.closeButton && (
            <div className="my-close-btn" onClick={this.onHide}>
              <span className="my-close-btn-icon">+</span>
            </div>
          )
        }
        {this.props.children}
      </div>
    )
  }
}

export default Header
