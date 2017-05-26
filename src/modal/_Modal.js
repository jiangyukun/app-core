/**
 * Created by jiangyukun on 2017/5/2.
 */
import React from 'react'
import PropTypes from 'prop-types'
import {events} from 'dom-helpers'

import Transition from './Transition'

const Content = (props) => {
  return (
    <Transition show={props.show}>
      <div className="my-modal-content default" style={props.style}>
        {props.children}
      </div>
    </Transition>
  )
}

const Container = (props) => {
  const Content = props.contentComponent
  return (
    <div className="my-modal-container">
      <Content {...props}/>
    </div>
  )
}

class _Modal extends React.Component {
  exited = false

  onHide = () => {
    this.props.onHide()
    setTimeout(() => this.onExited(), 120)
  }

  onExited = () => {
    this.exited = true
    this.props.onExited()
  }

  handleKeyUp = e => {
    if (e.keyCode === 27) {
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
    if (!this.exited) {
      this.props.onExited()
    }
  }

  render() {
    const Container = this.props.containerComponent
    return (
      <div className="my-modal" tabIndex="-1" ref={c => this._container = c}>
        <Transition show={this.props.show}>
          <div className="my-mask" onClick={this.onHide}></div>
        </Transition>
        <Container {...this.props}/>
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
  containerComponent: PropTypes.any,
  contentComponent: PropTypes.any,

  className: PropTypes.string,
  show: PropTypes.bool,
  onHide: PropTypes.func,
  onExited: PropTypes.func
}

_Modal.defaultProps = {
  containerComponent: Container,
  contentComponent: Content
}

_Modal.childContextTypes = {
  onHide: PropTypes.func,
  onExited: PropTypes.func
}

export default _Modal
