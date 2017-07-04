/**
 * Created by jiangyukun on 2017/5/26.
 */
import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

class Transition extends React.PureComponent {

  render() {
    const transitionClass = this.props.show ? 'my-open' : 'my-close'
    let child = React.Children.only(this.props.children)

    return React.cloneElement(child, {
      className: classnames(
        child.props.className,
        transitionClass
      )
    })
  }
}

Transition.propTypes = {
  show: PropTypes.bool
}

export default Transition
