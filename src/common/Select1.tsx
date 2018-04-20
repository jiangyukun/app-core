/**
 * 下拉框控件
 */
import React from 'react'

import Spinner from './Spinner'
import OuterClick from '../core/OuterClick'
import Select from './select/Select'
import Options from './select/Options'

import DefaultOptionItem from './select/DefaultOptionItem'

export interface Select1Props {
  options: { value: string, text: string }[]
  value: string
  onChange?: (value: string) => void
  notMatchText?: string
  renderOption?: (option, index) => React.ReactNode

  initCount?: number

  lazyLoad?: boolean
  loadSuccess?: boolean

  placeholder?: string
  classPre?: string
  disabled?: boolean
  valid?: boolean
  showClear?: boolean
  onFirstOpen?: () => void
  onOpen?: () => void
}

class Select1 extends React.Component<Select1Props> {
  static defaultProps = {
    options: [],
    value: '',
    notMatchText: null,
    onChange: () => null,
    initCount: 10,
    lazyLoad: false,
    renderOption: (option, index) => {
      return (
        <DefaultOptionItem
          key={option.value}
          option={option}
          index={index}
        />
      )
    }
  }

  state = {
    active: false,
    maxCount: 0
  }

  close = () => {
    this.setState({active: false})
  }

  // 点击选项
  select = (option) => {
    if (this.props.value != option.value) {
      this.props.onChange(option.value)
    }
    this.close()
  }

  showMoreOptions = () => {
    this.setState({maxCount: this.state.maxCount + 10})
  }

  componentWillMount() {
    this.setState({maxCount: this.props.initCount})
  }

  render() {
    let text = null
    let match = this.props.options.find(option => option.value == this.props.value)
    if (match) {
      text = match.text
    } else {
      text = this.props.notMatchText
    }

    return (
      <OuterClick onOuterClick={this.close}>
        <span>
        <Select
          active={this.state.active}
          onActiveChange={active => this.setState({active})}
          text={text}
          placeholder={this.props.placeholder}
          classPre={this.props.classPre}
          disabled={this.props.disabled}
          onOpen={this.props.onOpen}
          onFirstOpen={this.props.onFirstOpen}
          valid={this.props.valid}
          showClear={this.props.showClear && this.props.value != ''}
          onClear={() => this.props.onChange('')}
        >
          {
            this.state.active && this.props.lazyLoad && !this.props.loadSuccess && (
              <div className="all-select-items">
                <Spinner/>
              </div>
            )
          }

          {
            this.state.active && (this.props.lazyLoad && this.props.loadSuccess || !this.props.lazyLoad) && (
              <Options
                value={this.props.value}
                options={this.props.options}
                onSelect={this.select}
                maxCount={this.state.maxCount}
                showMoreOptions={this.showMoreOptions}
                renderOption={this.props.renderOption}
              />
            )
          }
        </Select>
        </span>
      </OuterClick>
    )
  }
}

export default Select1
