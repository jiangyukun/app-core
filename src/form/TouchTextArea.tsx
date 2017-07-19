/**
 * Created by jiangyukun on 2017/7/19.
 */
import React from 'react'
import classnames from 'classnames'

interface TouchTextAreaProps extends React.HTMLProps<HTMLTextAreaElement> {
  value: string
  onChange: (e: any) => void

  valid: boolean
}

class TouchTextArea extends React.Component<TouchTextAreaProps> {
  state = {
    touched: false
  }

  render() {
    const {className, valid, ...props} = this.props
    return (
      <div>
        <textarea
          {...props}
          className={classnames('__input', className, {invalid: !valid && this.state.touched})}
          onBlur={() => this.setState({touched: true})}
        />
        {
          this.props.value.length != 0 && (
            <div className="__input-text-count">{this.props.value.length}</div>
          )
        }
      </div>
    )
  }
}

export default TouchTextArea
