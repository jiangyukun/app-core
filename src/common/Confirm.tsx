/**
 * Created by jiangyukun on 2017/5/6.
 */
import React from 'react'
import Modal from '../modal/Modal'

import SmallDialogContent from './content/SmallDialogContent'
import ConfirmOrClose from './ConfirmOrClose'

interface ConfirmProps {
  message?: string
  onConfirm: () => void
  onExited?: () => void
}

class Confirm extends React.Component<ConfirmProps, any> {
  closeType: string
  state = {
    show: true
  }

  close = () => {
    this.setState({show: false})
  }

  handleConfirm = () => {
    this.closeType = 'confirm'
    this.close()
  }

  handleCancel = () => {
    this.closeType = 'cancel'
    this.close()
  }

  handleExited = () => {
    if (this.props.onExited) {
      this.props.onExited()
    }
    if (this.closeType == 'confirm') {
      this.props.onConfirm()
    }
  }

  render() {
    return (
      <Modal contentComponent={SmallDialogContent}
             onHide={this.close}
             show={this.state.show}
             onExited={this.handleExited}
      >
        <Modal.Header>
          <Modal.Title>提示</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          {
            this.props.message && (
              <div style={{fontSize: '14px'}}>
                {this.props.message}
              </div>
            )
          }
          {
            !this.props.message && this.props.children
          }
        </Modal.Body>

        <Modal.Footer>
          <ConfirmOrClose onCancel={this.handleCancel} onConfirm={this.handleConfirm}/>
        </Modal.Footer>
      </Modal>
    )
  }
}

export default Confirm
