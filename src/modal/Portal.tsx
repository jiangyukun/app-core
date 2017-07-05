/**
 * 将组件移到body下面
 * Created by jiangyukun on 2017/2/20.
 */
import React from 'react'
import PropTypes from 'prop-types'
import {
  unmountComponentAtNode,
  unstable_renderSubtreeIntoContainer as renderSubtreeIntoContainer
} from 'react-dom'

import {addClass, removeClass} from 'dom-helpers/class'

class Portal extends React.Component<any> {
  container: HTMLDivElement
  componentDidMount() {
    this.container = document.createElement('div')
    document.body.appendChild(this.container)
    renderSubtreeIntoContainer(this, <div {...this.props}/>, this.container)
    // 使页面无法滚动
    addClass(document.getElementsByTagName('html')[0], 'modal-opened')
  }

  componentDidUpdate() {
    renderSubtreeIntoContainer(this, <div {...this.props}/>, this.container)
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

export default Portal
