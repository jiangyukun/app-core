/**
 * Created by jiangyukun on 2017/5/3.
 */
import React from 'react'

import Messages from "./Messages"
import {MESSAGE_STATUS} from './message.constants'
import Portal from '../modal/Portal'

interface MessageManageProps {
  changeMessageStatus: any
  messageList: any[]
}

class MessageManage extends React.Component<MessageManageProps> {
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
      <Portal>
        <div className="message-container">
          <Messages messageList={messageList} onExited={this.onMsgExited}/>
        </div>
      </Portal>
    )
  }
}

export default MessageManage
