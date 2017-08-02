/**
 * Created by jiangyukun on 2017/7/7.
 */
interface Message {
  id: string
  msgType: string
  timeout: number
  content: string
}

export default Message
