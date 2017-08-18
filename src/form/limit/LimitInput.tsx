/**
 * Created by jiangyukun on 2017/6/9.
 */
import React from 'react'
import classnames from 'classnames'

export interface LimitInputProps extends React.HTMLProps<HTMLInputElement> {
  value: string
  onChange: (e: any) => void
  limit: number
  onExceed: () => void
  className?: string
}

class LimitInput extends React.Component<LimitInputProps> {
  state: {
    isExceed: boolean
  }

  constructor(props) {
    super()
    this.state = {
      isExceed: props.value.length > props.limit
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({isExceed: nextProps.value.length > nextProps.limit})
    if (nextProps.value.length > nextProps.limit) {
      if (!this.state.isExceed) {
        this.setState({isExceed: true})
        this.props.onExceed()
      }
    } else {
      this.setState({isExceed: false})
    }
  }

  render() {
    let {className, limit, onExceed, ...otherProps} = this.props
    return (
      <input {...otherProps} className={classnames('__input', className, {invalid: this.state.isExceed})}/>
    )
  }
}

export default LimitInput
