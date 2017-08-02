/**
 * 自动根据高度调整rows属性的textarea
 * Created by jiangyukun on 2017/7/19.
 */
import React from 'react'

interface AdaptationTextAreaProps extends React.HTMLProps<HTMLTextAreaElement> {

}

class AdaptationTextArea extends React.Component<AdaptationTextAreaProps> {
  static defaultProps = {
    rows: 3
  }

  _textArea: HTMLTextAreaElement

  state = {
    rows: 0
  }

  componentWillMount() {
    this.setState({rows: this.props.rows})
  }

  componentDidMount() {
    if (this._textArea.scrollHeight > this._textArea.clientHeight) {
      this.setState({rows: this.state.rows + 2})
    }
  }

  componentWillReceiveProps(nextProps: AdaptationTextAreaProps) {
    if (nextProps.value == '') {
      this.setState({rows: nextProps.rows})
    }
  }

  componentDidUpdate() {
    if (this._textArea.scrollHeight > this._textArea.clientHeight) {
      this.setState({rows: this.state.rows + 2})
    }
  }

  render() {
    const {...props} = this.props
    return (
      <textarea ref={c => this._textArea = c} {...props} rows={this.state.rows}></textarea>
    )
  }
}

export default AdaptationTextArea
