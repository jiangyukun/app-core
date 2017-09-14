/**
 * 下拉框控件
 */
import React from 'react'

import Spinner from './Spinner'
import OuterClick from '../core/OuterClick'
import Select, {SelectProps} from './select/Select'
import Options from './select/Options'

import addFormSupport from '../core/hoc/addFormSupport'

interface Select1Props extends SelectProps {
  value?: string
  options?: { value: string, text: string }[]
  onChange?: (value: string, text: string) => void
  notMatchText?: string

  initCount?: number

  lazyLoad?: boolean
  loadSuccess?: boolean
}

class Select1 extends React.Component<Select1Props> {
  static defaultProps = {
    options: [],
    value: '',
    notMatchText: null,
    onChange: () => null,
    initCount: 10,
    lazyLoad: false
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
      this.props.onChange(option.value, option.text)
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
          className={this.props.className}
          disabled={this.props.disabled}
          width={this.props.width}
          onOpen={this.props.onOpen}
          onFirstOpen={this.props.onFirstOpen}
          valid={this.props.value != ''}
          showClear={this.props.showClear && this.props.value != ''}
          onClear={() => this.props.onChange('', '')}
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
              />
            )
          }
        </Select>
        </span>
      </OuterClick>
    )
  }
}

export default addFormSupport<Select1Props>(Select1, ({props}) => props.value != '')
