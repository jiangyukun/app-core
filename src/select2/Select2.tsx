/**
 * jiangyukun on 2018/1/31
 */
import React from 'react'

import Select from './Select'
import Option from './Option'

interface Select2Props {
  options: any[]
  value: string
  onChange: (value: string) => void
}

class Select2 extends React.Component<Select2Props> {

  render() {
    return (
      <Select value={this.props.value} onChange={this.props.onChange}>
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
