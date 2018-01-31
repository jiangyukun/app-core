/**
 * jiangyukun on 2018/1/31
 */
import React from 'react'
import PropTypes from 'prop-types'

interface OptionProps {
  value: string
  text: string
}

class Option extends React.Component<OptionProps> {
  static contextTypes = {
    onChange: PropTypes.func
  }

  render() {
    return (
      <li className="option" onClick={()=>this.context.onChange(this.props.value)}>
        {this.props.text}
      </li>
    )
  }
}

export default Option
