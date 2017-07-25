/**
 * Created by jiangyukun on 2017/7/20.
 */
import React from 'react'

interface InputProps extends React.HTMLProps<HTMLInputElement>{

}

class Input extends React.Component<InputProps> {
  render() {
    return (
      <input {...this.props} className="__input"/>
    )
  }
}

export default Input
