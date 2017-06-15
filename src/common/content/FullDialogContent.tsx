/**
 * Created by jiangyukun on 2017/5/26.
 */
import React from 'react'
import classnames from 'classnames'
import Transition from '../../modal/Transition'
import './full-dialog-content.scss'

export default (props) => {
  return (
    <Transition show={props.show}>
      <div className={classnames("my-modal-content full-dialog-content", props.className)}>
        {props.children}
      </div>
    </Transition>
  )
}
