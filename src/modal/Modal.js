/**
 * 自己造的对话框
 * Created by jiangyukun on 2017/2/20.
 */
import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {
  unmountComponentAtNode,
  unstable_renderSubtreeIntoContainer as renderSubtreeIntoContainer
} from 'react-dom'

import {addClass, removeClass} from 'dom-helpers/class'

import _Modal from './_Modal'
import Header from './Header'
import Body from './Body'
import Footer from './Footer'

class Modal extends Component {
  componentDidMount() {
    this.container = document.createElement('div')
    document.body.appendChild(this.container)
    renderSubtreeIntoContainer(this, <_Modal {...this.props}/>, this.container)
    // 使页面无法滚动
    addClass(document.getElementsByTagName('html')[0], 'modal-opened')
  }

  componentDidUpdate() {
    renderSubtreeIntoContainer(this, <_Modal {...this.props}/>, this.container)
  }

  componentWillUnmount() {
    unmountComponentAtNode(this.container)
    document.body.removeChild(this.container)
    // 取消页面无法滚动
    removeClass(document.getElementsByTagName('html')[0], 'modal-opened')
  }

  render() {
    return null
  }
}

Modal.propTypes = {
  show: PropTypes.bool,
  onHide: PropTypes.func,
  onExited: PropTypes.func
}

Modal.Header = Header
Modal.Body = Body
Modal.Footer = Footer

export default Modal
