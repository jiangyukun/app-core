/**
 * Created by jiangyukun on 2017/7/13.
 */
import React from 'react'
import PropTypes from 'prop-types'

import ScrollContainer from '../../core/ScrollContainer'

interface OptionsProps {
  value: string
  options: any[]
  onSelect: (option) => void
  maxCount: number
  showMoreOptions: () => void
  renderOption: (option, index) => React.ReactNode
}

class Options extends React.Component<OptionsProps> implements React.ChildContextProvider<any> {
  static childContextTypes = {
    setTouchIndex: PropTypes.func,
    onSelect: PropTypes.func,
    selectIndex: PropTypes.number
  }

  state = {
    searchKey: '',
    selectIndex: -1,
    touchIndex: -1
  }

  onSelect = (option)=> {
    this.props.onSelect(option)
  }

  setTouchIndex = (index) => {
    this.setState({touchIndex: index})
  }

  componentWillMount() {
    const matchOption = this.props.options.find(option => option.value == this.props.value)
    let selectIndex = -1
    if (matchOption) {
      selectIndex = this.props.options.indexOf(matchOption)
      this.setState({selectIndex})
    }
  }

  render() {
    const filterOptions = this.props.options.filter(item => item.text.indexOf(this.state.searchKey) != -1)
    let showMore = filterOptions.length > this.props.maxCount, noMatch = filterOptions.length == 0
    return (
      <ScrollContainer className="all-select-items" onScrollBottom={this.props.showMoreOptions}>
        {
          this.props.options.length > 20 && (
            <input value={this.state.searchKey} className="search" onChange={e => this.setState({searchKey: e.target.value})}
                   placeholder="搜索"/>
          )
        }
        <ul className="select-items">
          {
            filterOptions.map((option, index) => {
              if (index < this.props.maxCount) {
                return this.props.renderOption(option, index)
              }
              return null
            })
          }
          {
            showMore && (
              <li className="show-more" onClick={this.props.showMoreOptions}>
                <span>更多...</span>
              </li>
            )
          }
        </ul>
        {
          noMatch && (
            <div className="no-match-result">
              <span>暂无数据</span>
            </div>
          )
        }
      </ScrollContainer>
    )
  }

  getChildContext() {
    return {
      setTouchIndex: this.setTouchIndex,
      onSelect: this.onSelect
    }
  }
}

export default Options
