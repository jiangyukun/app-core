/**
 * Created by jiangyukun on 2017/5/26.
 */
import React from 'react'
import classnames from 'classnames'
import Transition from '../../modal/Transition'
import './small-dialog-content.scss'

export default (props) => {
  return (
    <Transition show={props.show}>
      <div className={classnames('my-modal-content small-dialog-content', props.className || '')}>
        {props.children}
      </div>
    </Transition>
  )
}
