/**
 * Created by jiangyukun on 2017/2/20.
 */
import React from 'react'

interface FooterProps {
}

class Footer extends React.Component {
  render() {
    return (
      <div className="my-modal-footer">
        {this.props.children}
      </div>
    )
  }
}

export default Footer
