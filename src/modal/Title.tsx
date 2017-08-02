/**
 * Created by jiangyukun on 2017/2/20.
 */
import React, {Component} from 'react'

class Title extends Component<any> {
  render() {
    return (
      <div className="my-modal-title">
        {this.props.children}
      </div>
    )
  }
}

export default Title
