/**
 * Created by jiangyukun on 2017/6/9.
 */
import React from 'react'
import classnames from 'classnames'

import AdaptationTextArea from '../AdaptationTextArea'

export interface LimitTextAreaProps extends React.HTMLProps<HTMLTextAreaElement> {
  value: string
  onChange: (e: any) => void
  limit: number
  onExceed: () => void
  className?: string
}

class LimitTextArea extends React.Component<LimitTextAreaProps> {
  _textArea: HTMLTextAreaElement

  state = {
    isExceed: false
  }

  componentWillMount() {
    this.setState({isExceed: this.props.value.length > this.props.limit})
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
      <div>
        <AdaptationTextArea
          {...otherProps as any}
          className={classnames('__input', className, {invalid: this.state.isExceed})}
        />
        <div className="__input-text-count">{this.props.value.length}/{limit}</div>
      </div>
    )
  }
}

export default LimitTextArea
