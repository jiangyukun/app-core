/**
 * Created by jiangyukun on 2017/6/9.
 */
import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

class Input extends React.Component {
  constructor(props) {
    super()
    this.state = {
      isExceed: props.value.length > props.limit
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({isExceed: nextProps.value.length > nextProps.limit})
    if (this.props.value.length > this.props.limit) {
      if (!this.state.isExceed) {
        this.setState({isExceed: true})
        this.props.onExceed()
      }
    } else {
      this.setState({isExceed: false})
    }
  }

  render() {
    let {className, limit, onExceed, ...otherProps} = this.props
    return (
      <input {...otherProps} className={classnames(className, {invalid: this.state.isExceed})}/>
    )
  }
}

Input.propTypes = {
  value: PropTypes.string,
  limit: PropTypes.number,
  onExceed: PropTypes.func,
  onChange: PropTypes.func
}

export default Input
