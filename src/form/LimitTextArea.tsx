/**
 * Created by jiangyukun on 2017/6/9.
 */
import React from 'react'
import classnames from 'classnames'

interface LimitTextAreaProps extends React.HTMLProps<HTMLTextAreaElement> {
  value: string
  onChange: (e: any) => void
  limit: number
  onExceed: () => void

  className?: string
}

class LimitTextArea extends React.Component<LimitTextAreaProps> {
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
    if (this.props.value.length > this.props.limit) {
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
      <div>
        <textarea {...otherProps} className={classnames('__input', className, {invalid: this.state.isExceed})}/>
        <div className="__input-text-count">{this.props.value.length}/{limit}</div>
      </div>
    )
  }
}

export default LimitTextArea
