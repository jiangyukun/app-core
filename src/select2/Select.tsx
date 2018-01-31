/**
 * jiangyukun on 2018/1/31
 */
import React from 'react'

import Select2 from './Select2'
import Option from './Option'

interface SelectProps {
  options: any[]
  value: string
  onChange: (value: string) => void
}

class Select extends React.Component<SelectProps> {

  render() {
    return (
      <Select2 value={this.props.value} onChange={this.props.onChange}>
        {
          this.props.options.map(option => {
            return (
              <Option key={option.value} value={option.value} text={option.text}/>
            )
          })
        }
      </Select2>
    )
  }
}

export default Select
