/**
 * 容器外部点击事件将触发onOuterClick函数
 * Created by jiangyukun on 2017/7/13.
 */
import React from 'react'
import {events} from 'dom-helpers'

interface OuterClickProps {
  onOuterClick: () => void
}

class OuterClick extends React.Component<OuterClickProps> {
  clickFlag = false

  handleClick = () => {
    this.clickFlag = true
  }

  handleDocumentClick = () => {
    if (this.clickFlag) {
      this.clickFlag = false
      return
    }
    this.props.onOuterClick()
  }

  componentDidMount() {
    events.on(document, 'click', this.handleDocumentClick)
  }

  componentWillUnmount() {
    events.off(document, 'click', this.handleDocumentClick)
  }

  render() {
    return (
      <div onClick={this.handleClick}>
        {this.props.children}
      </div>
    )
  }
}

export default OuterClick
