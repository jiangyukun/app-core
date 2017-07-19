/**
 * Created by jiangyukun on 2017/6/9.
 */
import React from 'react'
import classnames from 'classnames'

import AdaptationTextArea from './AdaptationTextArea'

interface LimitTextAreaProps extends React.HTMLProps<HTMLTextAreaElement> {
  value: string
  onChange: (e: any) => void
  limit: number
  onExceed: () => void
  className?: string
}

class LimitTextArea extends React.Component<LimitTextAreaProps> {
  static defaultProps = {
    rows: 5
  }
  _textArea: HTMLTextAreaElement

  state = {
    isExceed: false,
    rows: 0
  }

  componentWillMount() {
    this.setState({isExceed: this.props.value.length > this.props.limit, rows: this.props.rows})
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

  componentDidUpdate() {
    if (this._textArea.scrollHeight > this._textArea.clientHeight) {
      this.setState({rows: this.state.rows + 2})
    }
  }

  render() {
    let {className, limit, onExceed, ...otherProps} = this.props
    return (
      <div>
        <textarea ref={c => this._textArea = c} {...otherProps}
                  rows={this.state.rows}
                  className={classnames('__input', className, {invalid: this.state.isExceed})}
        />
        <div className="__input-text-count">{this.props.value.length}/{limit}</div>
      </div>
    )
  }
}

export default LimitTextArea
