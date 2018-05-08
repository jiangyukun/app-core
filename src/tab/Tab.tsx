/**
 * Created by jiangyukun on 2017/6/9.
 */
import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

interface TabProps {
  tabKey: number
  title: string
}

class Tab extends React.Component<TabProps, any> {
  static contextTypes = {
    currentTabKey: PropTypes.number
  }

  render() {
    return (
      <div className={classnames('tab', {
        'hidden': this.context.currentTabKey != this.props.tabKey,
        'active': this.context.currentTabKey == this.props.tabKey
      })}>
        {this.props.children}
      </div>
    )
  }
}

export default Tab
