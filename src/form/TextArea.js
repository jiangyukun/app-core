/**
 * Created by jiangyukun on 2017/6/9.
 */
import React from 'react'
import PropTypes from 'prop-types'


class TextArea extends React.Component {
  constructor(props) {
    super()
    this.isExceed = props.value.length <= props.limit
  }

  handleChange = (e) => {
    if (e.target.value.length > this.props.limit) {
      if (!this.isExceed) {
        this.isExceed = true
        this.props.onExceed()
      }
    } else {
      this.props.onChange(e)
      this.isExceed = false
    }
  }

  render() {
    let {onChange, limit, onExceed, ...otherProps} = this.props
    return (
      <div>
        <textarea {...otherProps} onChange={this.handleChange}/>
        <div className="input-text-count">{this.props.value.length}/{this.props.limit}</div>
      </div>
    )
  }
}

TextArea.propTypes = {
  limit: PropTypes.number,
  onExceed: PropTypes.func,
  onChange: PropTypes.func
}

export default TextArea
