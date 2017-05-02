/**
 * Created by jiangyukun on 2017/5/2.
 */
import React from 'react'

class Line extends React.Component {

  render() {
    return (
      <div className="line">
        {this.props.children}
      </div>
    )
  }
}

export default Line
