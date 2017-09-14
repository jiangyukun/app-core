/**
 * Created by jiangyukun on 2017/8/5.
 */
import React from 'react'
import PropTypes from 'prop-types'

export interface FormCommon {
  required?: boolean
  name?: string
}

export function checkValid(format, value): boolean {
  let valid = true
  if (format instanceof RegExp) {
    valid = format.test(value)
  } else if (format instanceof Function) {
    valid = format(value)
  }
  return valid
}

function addFormSupport<T>(WrapperComponent, checkValid: (instance) => boolean) {

  interface P extends FormCommon {

  }

  class Valid extends React.Component<any> {
    static contextTypes = {
      setValid: PropTypes.func,
      disabled: PropTypes.bool
    }

    _instance: React.Component<any>
    valid = true

    componentDidMount() {
      if (this.props.required && this.context.setValid) {
        if (!this.props.name) {
          throw new Error('name is required !!!')
        }
        this.valid = checkValid(this._instance)
        this.context.setValid(this.props.name, this.valid)
      }
    }

    componentDidUpdate() {
      if (this.props.required && this.context.setValid) {
        let valid = checkValid(this._instance)
        if (this.valid != valid) {
          this.valid = valid
          this.context.setValid(this.props.name, valid)
        }
      }
    }

    render() {
      if (this.context.disabled) {
        return (
          <WrapperComponent ref={c => this._instance = c} {...this.props} valid={this.valid} disabled={this.context.disabled}/>
        )
      }
      return (
        <WrapperComponent ref={c => this._instance = c} {...this.props} valid={this.valid}/>
      )
    }
  }

  return Valid
}

export default addFormSupport
