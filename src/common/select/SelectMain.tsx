/**
 * Created by jiangyukun on 2017/7/13.
 */
import React from 'react'
import classnames from 'classnames'

interface SelectMainProps {
  active: boolean
  showClear: boolean
  text: string
  valid: boolean
  onClear: () => void
  onClick: any
}

class SelectMain extends React.Component<SelectMainProps> {
  state = {
    touched: false
  }

  componentWillReceiveProps(nextProps: SelectMainProps) {
    if (!this.state.touched) {
      if (nextProps.active && !this.props.active) {
        this.setState({touched: true})
      }
    }
  }

  render() {
    return (
      <div
        onClick={this.props.onClick}
        className={classnames('selected-item', {'open': this.props.active}, {'invalid': !this.props.valid && this.state.touched})}
      >
        <span className="select-item-text">{this.props.text}</span>
        <span className="dropdown"><b></b></span>
        {
          this.props.showClear && (
            <span className="close-btn" onClick={this.props.onClear}>
              <img src={require('./close.svg')}/>
            </span>
          )
        }
      </div>
    )
  }
}

export default SelectMain
