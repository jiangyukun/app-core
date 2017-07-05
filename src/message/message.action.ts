/**
 * Created by jiangyukun on 2017/6/1.
 */
import {SHOW_MESSAGE, CHANGE_MESSAGE_STATUS, MESSAGE_TYPE} from './message.constants'

export function showMessage(messageInfo) {
  if (typeof messageInfo == 'string') {
    messageInfo = {
      content: messageInfo
    }
  }
  const {id, msgType, content, timeout} = messageInfo
  return {
    type: SHOW_MESSAGE, message: {id, msgType, content, timeout}
  }
}

export function showSuccess(messageInfo) {
  if (typeof messageInfo == 'string') {
    messageInfo = {
      content: messageInfo
    }
  }
  let {id, msgType, content, timeout} = messageInfo
  msgType = MESSAGE_TYPE.SUCCESS
  return {
    type: SHOW_MESSAGE, message: {id, msgType, content, timeout}
  }
}

export function showWarning(messageInfo) {
  if (typeof messageInfo == 'string') {
    messageInfo = {
      content: messageInfo
    }
  }
  let {id, msgType, content, timeout} = messageInfo
  msgType = MESSAGE_TYPE.WARNING
  return {
    type: SHOW_MESSAGE, message: {id, msgType, content, timeout}
  }
}

export function changeMessageStatus(msgId, newStatus) {
  return {
    type: CHANGE_MESSAGE_STATUS, msgId, newStatus
  }
}
