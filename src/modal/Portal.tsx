/**
 * 将组件移到body下面
 * Created by jiangyukun on 2017/2/20.
 */
import React from 'react'
import {
  unmountComponentAtNode,
  unstable_renderSubtreeIntoContainer as renderSubtreeIntoContainer
} from 'react-dom'

class Portal extends React.Component<any> {
  container: HTMLDivElement
  componentDidMount() {
    this.container = document.createElement('div')
    document.body.appendChild(this.container)
    renderSubtreeIntoContainer(this, <div {...this.props}/>, this.container)
  }

  componentDidUpdate() {
    renderSubtreeIntoContainer(this, <div {...this.props}/>, this.container)
  }

  componentWillUnmount() {
    unmountComponentAtNode(this.container)
    document.body.removeChild(this.container)
  }

  render() {
    return null
  }
}

export default Portal
