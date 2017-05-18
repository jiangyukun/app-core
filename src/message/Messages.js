/**
 * Created by jiangyukun on 2017/5/3.
 */
import React from 'react'
import PropTypes from 'prop-types'

import Msg from './Msg'

class Messages extends React.Component {

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

Messages.propTypes = {
  messageList: PropTypes.array,
  onExited: PropTypes.func,
}

export default Messages
