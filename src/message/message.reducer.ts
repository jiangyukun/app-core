import {fromJS, Map} from 'immutable'
import {MESSAGE_TYPE, MESSAGE_STATUS, SHOW_MESSAGE, CHANGE_MESSAGE_STATUS} from './message.constants'

const initValue = {
  msgQueue: []
}
let uid = 1

export function getMsgId() {
  return '__auto_msg_id__' + uid++
}

export default function message(iState = fromJS(initValue), action) {

  let nextIState = iState
  switch (action.type) {

    case SHOW_MESSAGE:
      nextIState = nextIState.update('msgQueue', msgQueue => msgQueue.push(Map(_handleMessage(action.message))))
      break

    case CHANGE_MESSAGE_STATUS:
      nextIState = _updateMsgQueue(nextIState, action.msgId, msg => msg.set('status', action.newStatus))
      break

  }

  return nextIState

  // - - - - - - -  --  - - - - - -- - -

  function _handleMessage(message) {
    let id = message.id
    let timeout = message.timeout
    let msgType = message.msgType
    if (!id) {
      id = getMsgId()
    }
    if (typeof timeout != 'number') {
      timeout = 3000
    }
    if (!msgType) {
      msgType = MESSAGE_TYPE.SUCCESS
    }
    return {
      ...message,
      id,
      timeout,
      msgType,
      status: MESSAGE_STATUS.TO_SHOW
    }
  }

  function _updateMsgQueue(curIState, msgId, callback) {
    let msgQueue = curIState.get('msgQueue')
    const match = msgQueue.find(msg => msg.get('id') == msgId)
    if (!match) {
      console.log('not match')
      return curIState
    }
    msgQueue = msgQueue.update(msgQueue.indexOf(match), msg => callback(msg))
    return curIState.set('msgQueue', msgQueue)
  }

}
