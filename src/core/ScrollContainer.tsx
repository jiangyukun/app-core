/**
 * Created by jiangyukun on 2017/7/13.
 */
import React from 'react'

interface ScrollContainerProps extends React.HTMLProps<HTMLDivElement> {
  onScrollBottom: () => void
}

class ScrollContainer extends React.Component<ScrollContainerProps> {
  _container: HTMLDivElement

  handleScroll = (e) => {
    const target = this._container
    if (target.clientHeight + target.scrollTop == target.scrollHeight) {
      this.props.onScrollBottom()
    }
  }

  render() {
    let {onScrollBottom, ...otherProps} = this.props
    return (
      <div ref={c => this._container = c} {...otherProps} onScroll={this.handleScroll} onWheel={this.handleScroll}>
        {this.props.children}
      </div>
    )
  }
}

export default ScrollContainer
