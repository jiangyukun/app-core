/**
 * Created by jiangyukun on 2017/7/13.
 */
import React from 'react'
import classnames from 'classnames'
import ScrollContainer from '../../core/ScrollContainer'

interface OptionsProps {
  value: string
  options: any[]
  onSelect: (option) => void
  maxCount: number
  showMoreOptions: () => void
}

class Options extends React.Component<OptionsProps> {
  state = {
    searchKey: '',
    selectIndex: -1,
    touchIndex: -1
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
                return (
                  <li key={index}
                      className={classnames('select-item', {'selected': index == this.state.selectIndex})}
                      onClick={() => this.props.onSelect(option)}
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
}

export default Options
