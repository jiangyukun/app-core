/**
 * Created by wangji on 2017/5/6.
 */
import React from 'react'
import Modal from '../modal/Modal'

import SmallDialogContent from './content/SmallDialogContent'

class Alert extends React.Component<AlertProps, any> {
  state = {
    show: true
  }

  close = () => {
    this.setState({show: false})
  }

  render() {
    return (
      <Modal
        contentComponent={SmallDialogContent}
        show={this.state.show} onHide={this.close} onExited={this.props.onExited}>
        <Modal.Header>
          <Modal.Title>提示</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {this.props.message}
        </Modal.Body>

        <Modal.Footer>
          <button className="button default" onClick={this.close}>取消</button>
          <button className="button" onClick={this.close && this.props.onConfirm}>确定</button>
        </Modal.Footer>
      </Modal>
    )
  }
}

interface AlertProps {
  message: string
  onConfirm: () => void
  onExited: () => void
}

export default Alert
