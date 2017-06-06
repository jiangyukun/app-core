/**
 * Created by jiangyukun on 2017/6/1.
 */
import {SHOW_MESSAGE, CHANGE_MESSAGE_STATUS} from './message.constants'

export function showMessage(messageInfo) {
  const {id, msgType, content, timeout} = messageInfo
  return {
    type: SHOW_MESSAGE, message: {id, msgType, content, timeout}
  }
}

export function changeMessageStatus(msgId, newStatus) {
  return {
    type: CHANGE_MESSAGE_STATUS, msgId, newStatus
  }
}
