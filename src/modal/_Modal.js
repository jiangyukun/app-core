/**
 * Created by jiangyukun on 2017/5/2.
 */
import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import {events} from 'dom-helpers'

class _Modal extends React.Component {
  state = {
    autoDetectCls: ''
  }

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
    e.stopPropagation()
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

  componentDidUpdate() {
    if (this._wrap.scrollHeight > this._wrap.clientHeight) {
      // this.setState({autoDetectCls: ''})
    }
  }

  render() {
    const contentCls = classnames('my-modal-content', this.props.contentClass || this.props.className, this.props.show ? 'my-open' : 'my-close')
    return (
      <div className="my-modal" tabIndex="-1" ref={c => this._container = c}>
        <div className={classnames('my-mask', this.props.show !== false ? 'my-open' : 'my-close')} onClick={this.onHide}></div>
        <div ref={c => this._wrap = c} className={classnames('my-modal-container', this.props.containerClass || 'top')}>
          <div className={contentCls}>
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
  containerClass: PropTypes.string,
  contentClass: PropTypes.string,
  className: PropTypes.string,
  show: PropTypes.bool,
  onHide: PropTypes.func,
  onExited: PropTypes.func,
}

_Modal.childContextTypes = {
  onHide: PropTypes.func,
  onExited: PropTypes.func
}

export default _Modal
