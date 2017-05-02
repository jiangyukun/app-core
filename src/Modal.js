/**
 * Created by jiangyukun on 2017/2/20.
 */

import React, {Component, PropTypes} from 'react'
import {unmountComponentAtNode, unstable_renderSubtreeIntoContainer as renderSubtreeIntoContainer} from 'react-dom'

class Modal extends Component {

  _wrapChildren() {
    return (
      <div className="my-modal">
        <div className="my-mask"></div>
        {this.props.children}
      </div>
    )
  }

  componentDidUpdate() {
    renderSubtreeIntoContainer(this, this._wrapChildren(), this.context)
  }

  componentDidMount() {
    this.context = document.createElement('div')
    document.body.appendChild(this.context)
    renderSubtreeIntoContainer(this, this._wrapChildren(), this.context)
  }

  componentWillUnmount() {
    unmountComponentAtNode(this.context)
    document.body.removeChild(this.context)
  }

  render() {
    return null
  }
}

export default Modal
