/**
 * Created by jiangyukun on 2017/11/3.
 */
import {fromJS} from 'immutable'


/**
 * 复制对象，object或者list
 */
export function copyList(obj: any[]): any[] {
  return fromJS(obj).toJS()
}
