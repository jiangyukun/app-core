/**
 * Created by jiangyukun on 2017/7/19.
 */
import React from 'react'
import classnames from 'classnames'

interface BaseInputProps {
  value: string
  onChange: (e: any) => void
  className?: string
  valid?: boolean
  onBlur?: () => void
}

class BaseInput extends React.Component<BaseInputProps> {
  static defaultProps = {
    onBlur: () => null
  }

  render() {
    let {className} = this.props
    return (
      <input value={this.props.value}
             onChange={this.props.onChange}
             className={classnames('__input', className, {invalid: !this.props.valid})}
             onBlur={this.props.onBlur}
      />
    )
  }
}

export default BaseInput
