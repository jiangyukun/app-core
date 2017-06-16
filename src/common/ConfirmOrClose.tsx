/**
 * Created by jiangyukun on 2017/5/8.
 */
import React from 'react'
import Button from '../button/Button'

interface ConfirmOrCloseProps {
  onCancel: () => void
  onConfirm: () => void
  disabled?: boolean
  okBtnName?: string
}

class ConfirmOrClose extends React.Component<ConfirmOrCloseProps, any> {
  static defaultProps = {
    disabled: false,
    okBtnName: '确定'
  }

  render() {
    return (
      <div className="button-group">
        <div className="button-item">
          <Button type="full closed" onClick={this.props.onCancel}>
            取消
          </Button>
        </div>
        <div className="button-item">
          <Button type="full" onClick={this.props.onConfirm} disabled={this.props.disabled}>
            {this.props.okBtnName}
          </Button>
        </div>
      </div>
    )
  }
}

export default ConfirmOrClose
