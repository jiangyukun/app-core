/**
 * Created by jiangyukun on 2017/5/2.
 */
import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import {events} from 'dom-helpers'

class _Modal extends React.Component {
  onHide = () => {
    this.props.onHide()
    setTimeout(() => this.onExited(), 120)
  }

  onExited = () => {
    this.props.onExited()
  }

  handleKeyUp = e => {
    if (e.keyCode === 27 && e.target === this._container) {
      this.onHide()
    }
  }

  componentDidMount() {
    this._container.focus()
    events.on(this._container, 'keyup', this.handleKeyUp)
  }

  componentWillReceiveProps(newProps) {
    if (this.props.show && !newProps.show) {
      this.onHide()
    }
  }

  componentWillUnmount() {
    events.off(this._container, 'keyup', this.handleKeyUp)
  }

  render() {
    return (
      <div className="my-modal" tabIndex="-1" ref={c => this._container = c}>
        <div className={classnames('my-mask', this.props.show !== false ? 'my-open' : 'my-close')} onClick={this.onHide}></div>
        <div className="my-modal-container">
          <div className={classnames('my-modal-content', this.props.className, this.props.show ? 'my-open' : 'my-close')}>
            {this.props.children}
          </div>
        </div>
      </div>
    )
  }

  getChildContext() {
    return {
      onHide: this.onHide,
      onExited: this.onExited
    }
  }
}

_Modal.propTypes = {
  show: PropTypes.bool,
  className: PropTypes.bool,
}

_Modal.childContextTypes = {
  onHide: PropTypes.func,
  onExited: PropTypes.func
}

export default _Modal
