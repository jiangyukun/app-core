/**
 * Created by jiangyukun on 2017/6/9.
 */
import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import './tab.scss'

interface TabsProps {
  activeKey: number
  onSelect: (tabKey) => void
}

class Tabs extends React.Component<TabsProps, any> {
  static childContextTypes = {
    currentTabKey: PropTypes.number
  }

  onTabSelect = (newTabKey) => {
    this.props.onSelect(newTabKey)
  }

  render() {
    let tabs = []
    React.Children.map(this.props.children, (child: any, index) => {
      tabs.push({
        tabKey: child.props.tabKey,
        text: child.props.title
      })
    })
    return (
      <div className="i-tabs">
        <div className="tab-titles clearfix">
          {
            tabs.map((tab, index) => {
              return (
                <div key={index} className={classnames('tab-title', {'selected': this.props.activeKey == tab.tabKey})}
                     onClick={() => this.onTabSelect(tab.tabKey)}
                >
                  <a>
                    {tab.text}
                  </a>
                </div>
              )
            })
          }
        </div>
        <div>
          {this.props.children}
        </div>
      </div>
    )
  }

  getChildContext() {
    return {
      currentTabKey: this.props.activeKey
    }
  }
}

export default Tabs
