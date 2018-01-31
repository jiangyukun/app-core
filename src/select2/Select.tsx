/**
 * jiangyukun on 2018/1/31
 */
import React from 'react'
import PropTypes from 'prop-types'
import OuterClick from '../core/OuterClick'

interface SelectProps {
  value: string
  onChange: (value, selectOrInput) => void
}

export enum InputType {
  input, select
}

class Select extends React.Component<SelectProps> implements React.ChildContextProvider<any> {
  static childContextTypes = {
    onChange: PropTypes.func
  }

  getChildContext(): any {
    return {
      onChange: this.onChange
    }
  }

  state = {
    active: false
  }

  close = () => {
    this.setState({active: false})
  }

  toggle = () => {
    this.setState({active: !this.state.active})
  }

  onChange = (option) => {
    if (this.props.value != option.value) {
      this.props.onChange(option.value, InputType.select)
    }
    this.close()
  }

  render() {
    return (
      <OuterClick onOuterClick={this.close}>
        <div className="select2">
          <input className="search"
                 placeholder="请输入"
                 onFocus={this.close}
                 value={this.props.value} onChange={e => this.props.onChange(e.target.value, InputType.input)}/>

          <span className="dropdown" onClick={this.toggle}>
          <b></b>
        </span>

          {
            this.state.active && (
              <div className="options-container">
                <ul className="">
                  {this.props.children}
                </ul>
              </div>
            )
          }
        </div>
      </OuterClick>
    )
  }
}

export default Select
