/**
 * Created by jiangyukun on 2017/7/19.
 */
import React from 'react'

interface BaseInputProps extends React.HTMLProps<HTMLInputElement> {
  value: string
  onChange: (value) => void
}

class BaseInput extends React.Component<BaseInputProps> {
  onChange = (e) => {
    this.props.onChange(e.target.value)
  }

  render() {
    return (
      <input {...this.props} value={this.props.value || ''} onChange={this.onChange}/>
    )
  }
}

export default BaseInput
