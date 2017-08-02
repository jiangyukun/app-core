/**
 * Created by jiangyukun on 2017/5/3.
 */
import React from 'react'

import Msg from './Msg'

interface MessagesProps {
  messageList: any[]
  onExited: (msgId: string) => void
}

class Messages extends React.Component<MessagesProps> {

  render() {
    return (
      <div className="message-list">
        {
          this.props.messageList.map(msg => {
            return (
              <Msg key={msg.id} msg={msg} onExited={this.props.onExited}/>
            )
          })
        }
      </div>
    )
  }
}

export default Messages
