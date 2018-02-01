/**
 * jiangyukun on 2018/1/31
 */
import React from 'react'

import Select from './Select'
import Option from './Option'

export enum InputType {
  input, select
}

interface Select2Props {
  inputType: InputType
  options: any[]
  value: string
  onChange: (value, selectOrInput) => void

}

class Select2 extends React.Component<Select2Props> {

  render() {
    let value = this.props.value
    if (this.props.inputType == InputType.select) {
      value = this.props.options.find(option => option.value == this.props.value).text
    }
    return (
      <Select value={value} onChange={this.props.onChange}>
        {
          this.props.options.map(option => {
            return (
              <Option key={option.value} value={option.value} text={option.text}/>
            )
          })
        }
      </Select>
    )
  }
}

export default Select2
