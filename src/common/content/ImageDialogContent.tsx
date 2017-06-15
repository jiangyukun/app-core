/**
 * Created by jiangyukun on 2017/5/26.
 */
import React from 'react'
import classnames from 'classnames'
import Transition from '../../modal/Transition'
import './image-dialog-content.scss'

export default (props) => {
  return (
    <Transition show={props.show}>
      <div className="my-modal-content image-dialog-content">
        {props.children}
      </div>
    </Transition>
  )
}
