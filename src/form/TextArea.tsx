/**
 * Created by jiangyukun on 2017/7/25.
 */
import React from 'react'
import AdaptationTextArea from './AdaptationTextArea'

interface TextAreaProps extends React.HTMLProps<HTMLTextAreaElement> {
  onChange?: (e: any) => void
}

class TextArea extends React.Component<TextAreaProps> {
  render() {
    return (
      <AdaptationTextArea {...this.props as any} className="__input"/>
    )
  }
}

export default TextArea
