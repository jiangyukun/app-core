/**
 * Created by jiangyukun on 2017/5/2.
 */
import React from 'react'

import './layout.scss'

class Line extends React.Component {

  render() {
    return (
      <div className="__line">
        {this.props.children}
      </div>
    )
  }
}

export default Line
