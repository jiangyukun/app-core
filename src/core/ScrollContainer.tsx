/**
 * Created by jiangyukun on 2017/7/13.
 */
import React from 'react'

interface ScrollContainerProps extends React.HTMLProps<HTMLDivElement> {
  onScrollBottom: () => void
}

class ScrollContainer extends React.Component<ScrollContainerProps> {
  handleScroll = (e) => {
    const target = e.target
    if (target.clientHeight + target.scrollTop == target.scrollHeight) {
      this.props.onScrollBottom()
    }
  }

  render() {
    let {onScrollBottom, ...otherProps} = this.props
    return (
      <div {...otherProps} onScroll={this.handleScroll}>
        {this.props.children}
      </div>
    )
  }
}

export default ScrollContainer
