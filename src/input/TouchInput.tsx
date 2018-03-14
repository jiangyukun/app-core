/**
 * Created by jiangyukun on 2017/7/19.
 */
import React from 'react'

import BaseInput from './BaseInput'

interface TouchInputProps {
  value: string
  onChange: (e: any) => void
  className?: string
  valid?: boolean
}

class TouchInput extends React.Component<TouchInputProps> {
  state = {
    touched: false
  }

  render() {
    const {...props} = this.props
    return (
      <BaseInput {...props}/>
    )
  }
}

export default TouchInput
