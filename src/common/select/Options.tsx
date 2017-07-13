/**
 * Created by jiangyukun on 2017/7/13.
 */
import React from 'react'
import classnames from 'classnames'
import ScrollContainer from '../../core/ScrollContainer'

interface OptionsProps {
  value: string
  options: any[]
  onSelect: (option, index) => void
  initCount: number
}

class Options extends React.Component<OptionsProps> {
  state = {
    searchKey: '',
    selectIndex: -1,
    touchIndex: -1,
    maxCount: 0
  }

  showMoreItems = () => {
    this.setState({maxCount: this.state.maxCount + 10})
  }

  componentWillMount() {
    this.setState({maxCount: this.props.initCount})

    const matchOption = this.props.options.find(option => option.value == this.props.value)
    let selectIndex = -1
    if (matchOption) {
      selectIndex = this.props.options.indexOf(matchOption)
      this.setState({selectIndex})
    }
  }

  render() {
    const filterOptions = this.props.options.filter(item => item.text.indexOf(this.state.searchKey) != -1)
    let showMore = filterOptions.length > this.state.maxCount, noMatch = filterOptions.length == 0
    return (
      <ScrollContainer className="all-select-items" onScrollBottom={this.showMoreItems}>
        {
          this.props.options.length > 10 && (
            <input value={this.state.searchKey} className="search" onChange={e => this.setState({searchKey: e.target.value})}
                   placeholder="搜索"/>
          )
        }
        <ul className="select-items">
          {
            filterOptions.map((option, index) => {
              if (index < this.state.maxCount) {
                return (
                  <li key={index}
                      className={classnames('select-item', {'selected': index == this.state.selectIndex}, {'last-touched': index == this.state.touchIndex})}
                      onClick={e => this.props.onSelect(option, index)}
                      onMouseEnter={() => this.setState({touchIndex: index})}>
                    {option.text}
                  </li>
                )
              }
              return null
            })
          }
          {
            showMore && (
              <li className="show-more" onClick={e => this.showMoreItems()}>
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
}

export default Options
