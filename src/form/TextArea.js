/**
 * Created by jiangyukun on 2017/6/9.
 */
import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

class TextArea extends React.Component {
  constructor(props) {
    super()
    this.state = {
      isExceed: props.value.length > props.limit
    }
  }

  handleChange = (e) => {
    this.props.onChange(e)
    if (e.target.value.length > this.props.limit) {
      if (!this.state.isExceed) {
        this.setState({isExceed: true})
        this.props.onExceed()
      }
    } else {
      this.setState({isExceed: false})
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({isExceed: nextProps.value.length > nextProps.limit})
  }

  render() {
    let {className, onChange, limit, onExceed, ...otherProps} = this.props
    return (
      <div>
        <textarea {...otherProps} className={classnames(className, {invalid: this.state.isExceed})} onChange={this.handleChange}/>
        <div className="input-text-count">{this.props.value.length}/{this.props.limit}</div>
      </div>
    )
  }
}

TextArea.propTypes = {
  value: PropTypes.string,
  limit: PropTypes.number,
  onExceed: PropTypes.func,
  onChange: PropTypes.func
}

export default TextArea
