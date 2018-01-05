/**
 * Created by jiangyukun on 2017/7/25.
 */
import React from 'react'
import AdaptationTextArea from './AdaptationTextArea'

interface TextAreaProps extends React.HTMLProps<HTMLTextAreaElement> {
  onChange?: (v) => void
}

class TextArea extends React.Component<TextAreaProps> {
  render() {
    return (
      <AdaptationTextArea
        {...this.props as any}
        onChange={(e: any) => this.props.onChange(e.target.value)}
        className="__input"
      />
    )
  }
}

export default TextArea
