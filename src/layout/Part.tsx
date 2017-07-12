/**
 * Created by jiangyukun on 2017/4/18.
 */
import React from 'react'

interface PartProps extends React.HTMLProps<HTMLDivElement> {
  weight?: number
  textAlign?: string
}

class Part extends React.Component<PartProps> {
  static defaultProps = {
    weight: 1,
    textAlign: 'left'
  }

  render() {
    let {style, weight, textAlign, ...otherProps} = this.props
    if (!style) style = {}
    style.flex = weight
    style.textAlign = textAlign

    return (
      <div style={style} {...otherProps}>
        {this.props.children}
      </div>
    )
  }
}

export default Part
