/**
 * Created by jiangyukun on 2017/5/3.
 */
import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import {MESSAGE_TYPE} from './message.constants'

class Msg extends React.Component {
  state = {
    show: true
  }

  componentDidMount() {
    const timeout = this.props.msg.timeout
    if (timeout == -1) {
      return
    }
    setTimeout(() => {
      this.setState({show: false})
      setTimeout(() => {
        this.props.onExited(this.props.msg.id)
      }, 150)
    }, timeout)
  }

  render() {
    const {msgType, content} = this.props.msg
    const className = classnames(
      'message-item', this.state.show ? 'in' : 'out',
      {'success': msgType == MESSAGE_TYPE.SUCCESS},
      {'warning': msgType == MESSAGE_TYPE.WARNING},
      {'failure': msgType == MESSAGE_TYPE.FAILURE}
    )
    return (
      <div className={className}>
        <div className="message-content">{content || ''}</div>
      </div>
    )

  }
}

Msg.propTypes = {
  msg: PropTypes.object,
  onExited: PropTypes.func
}

export default Msg
