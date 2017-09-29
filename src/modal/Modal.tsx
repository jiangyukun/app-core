/**
 * Created by jiangyukun on 2017/5/2.
 */
import React from 'react'
import PropTypes from 'prop-types'
import {events} from 'dom-helpers'
import classnames from 'classnames'
import {addClass, removeClass} from 'dom-helpers/class'

import Portal from './Portal'
import Transition from './Transition'
import Header from './Header'
import Title from './Title'
import Body from './Body'
import Footer from './Footer'

const Content = (props) => {
  return (
    <Transition show={props.show}>
      <div className={classnames('my-modal-content default', props.className)} style={props.style}>
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

interface ModalProps {
  containerComponent?: any
  contentComponent?: any

  className?: string
  style?: any
  show: boolean
  onHide: () => void
  onExited: () => void
}

class Modal extends React.Component<ModalProps> {
  static Header = Header
  static Title = Title
  static Body = Body
  static Footer = Footer
  static defaultProps = {
    containerComponent: Container,
    contentComponent: Content
  }
  static childContextTypes = {
    onHide: PropTypes.func,
    onExited: PropTypes.func
  }

  _container: HTMLDivElement
  exited = false

  onHide = () => {
    this.props.onHide()
    setTimeout(() => this.onExited(), 240)
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
    // 使页面无法滚动
    addClass(document.getElementsByTagName('html')[0], 'modal-opened')
  }

  componentWillReceiveProps(newProps) {
    if (this.props.show && !newProps.show) {
      this.onHide()
    }
  }

  componentWillUnmount() {
    if (!this.exited) {
      this.props.onExited()
    }
    // 取消页面无法滚动
    removeClass(document.getElementsByTagName('html')[0], 'modal-opened')
  }

  render() {
    return (
      <Portal>
        <div className="__modal" tabIndex={-1} onKeyUp={this.handleKeyUp}>
          <Transition show={this.props.show}>
            <div className="my-mask" onClick={this.onHide}></div>
          </Transition>
          <Container {...this.props}/>
        </div>
      </Portal>
    )
  }

  getChildContext() {
    return {
      onHide: this.onHide,
      onExited: this.onExited
    }
  }
}

export default Modal
