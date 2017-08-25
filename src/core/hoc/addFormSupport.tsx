/**
 * Created by jiangyukun on 2017/8/5.
 */
import React from 'react'
import PropTypes from 'prop-types'

function addFormSupport<T>(WrapperComponent, checkValid: (instance) => boolean) {

  class Valid extends React.Component<any> {
    static contextTypes = {
      setValid: PropTypes.func
    }
    _instance: React.Component<any>
    valid: boolean

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
      return (
        <WrapperComponent ref={c => this._instance = c} {...this.props}/>
      )
    }
  }

  return Valid
}

export default addFormSupport
