/**
 * Created by jiangyukun on 2017/8/5.
 */
import React from 'react'
import PropTypes from 'prop-types'

export interface FormCommon {
  required?: boolean
  name?: string
}

export function checkValid(format, value, required): boolean {
  if (!required && value == '') return true
  return checkFormat(format, value)
}

function checkFormat(format, value) {
  let valid = true
  if (format instanceof RegExp) {
    valid = format.test(value)
  } else if (format instanceof Function) {
    valid = format(value)
  }
  return valid
}

export function defaultValueFormat(value) {
  if (value == null) return false
  if (typeof value == 'number') return true
  return value.trim().length != 0
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
      if ((this.props.required || this.props.format) && this.context.setValid) {
        if (!this.props.name) {
          throw new Error('name is required !!!')
        }
        this.valid = checkValid(this._instance)
        this.context.setValid(this.props.name, this.valid)
      }
    }

    componentDidUpdate() {
      if ((this.props.required || this.props.format) && this.context.setValid) {
        let valid = checkValid(this._instance)
        if (this.valid != valid) {
          this.valid = valid
          this.context.setValid(this.props.name, valid)
        }
      }
    }

    componentWillUnmount() {
      if ((this.props.required || this.props.format) && this.context.setValid) {
        this.context.setValid(this.props.name, true)
      }
    }

    render() {
      if (this.context.disabled) {
        return (
          <WrapperComponent ref={c => this._instance = c} {...this.props} valid={this.valid}
                            disabled={this.context.disabled}/>
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
