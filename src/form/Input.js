/**
 * Created by jiangyukun on 2017/6/9.
 */
import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

class Input extends React.Component {

  constructor(props) {
    super()
    this.isExceed = props.value.length > props.limit
  }

  handleChange = (e) => {
    this.props.onChange(e)
    if (e.target.value.length > this.props.limit) {
      if (!this.isExceed) {
        this.isExceed = true
        this.props.onExceed()
      }
    } else {
      this.isExceed = false
    }
  }

  render() {
    let {className, onChange, limit, onExceed, ...otherProps} = this.props
    return (
      <input {...otherProps} className={classnames(className, {invalid: this.isExceed})} onChange={this.handleChange}/>
    )
  }
}

Input.propTypes = {
  limit: PropTypes.number,
  onExceed: PropTypes.func,
  onChange: PropTypes.func
}

export default Input
