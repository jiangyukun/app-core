/**
 * Created by jiangyukun on 2017/5/3.
 */
import React from 'react'
import PropTypes from 'prop-types'

import Messages from "./Messages"

import {MESSAGE_STATUS} from './message-constants'

class MessageManage extends React.Component {
  onMsgExited = (msgId) => {
    this.props.changeMessageStatus(msgId, MESSAGE_STATUS.SHOWED)
  }

  componentDidUpdate() {
    this.props.messageList.filter(msg => msg.status == MESSAGE_STATUS.TO_SHOW).forEach(msg => {
      this.props.changeMessageStatus(msg.id, MESSAGE_STATUS.SHOWING)
    })
  }

  render() {
    const messageList = this.props.messageList.filter(msg => msg.status != MESSAGE_STATUS.SHOWED)

    return (
      <Messages messageList={messageList} onExited={this.onMsgExited}/>
    )
  }
}

MessageManage.propTypes = {
  changeMessageStatus: PropTypes.func,
  messageList: PropTypes.array,
}

export default MessageManage
