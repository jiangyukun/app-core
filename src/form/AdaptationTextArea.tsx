/**
 * Created by jiangyukun on 2017/7/19.
 */
import React from 'react'

interface AdaptationTextAreaProps extends React.HTMLProps<HTMLTextAreaElement> {

}

class AdaptationTextArea extends React.Component<AdaptationTextAreaProps> {
  static defaultProps = {
    rows: 5
  }
  _textArea: HTMLTextAreaElement

  state = {
    rows: 0
  }

  componentWillMount() {
    this.setState({rows: this.props.rows})
  }

  componentDidUpdate() {
    if (this._textArea.scrollHeight > this._textArea.clientHeight) {
      this.setState({rows: this.state.rows + 2})
    }
  }

  render() {
    const {...props} = this.props
    return (
      <textarea {...props}></textarea>
    )
  }
}

export default AdaptationTextArea
