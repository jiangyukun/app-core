/**
 * 下拉框控件
 */
import React from 'react'

import OuterClick from '../core/OuterClick'
import Select, {SelectProps} from '../common/select/Select'
import CategoryOptions from './CategoryOptions'

import addFormSupport from '../core/hoc/addFormSupport'

type CategoryOption = {
  categoryName: string,
  options: { value: string, text: string }[]
}

interface CategorySelectProps extends SelectProps {
  value?: string
  categoryOptions?: CategoryOption[]
  onChange?: (value: string) => void
}

class CategorySelect extends React.Component<CategorySelectProps> {
  static defaultProps = {
    options: [],
    value: '',
    onChange: () => null,
  }

  state = {
    active: false,
  }

  close = () => {
    this.setState({active: false})
  }

  // 点击选项
  select = (value) => {
    if (this.props.value != value) {
      this.props.onChange(value)
    }
    this.close()
  }

  render() {
    let text = null
    this.props.categoryOptions.forEach(category => {
      let match = category.options.find(option => option.value == this.props.value)
      if (match) {
        text = match.text
      }
    })

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
            showClear={this.props.showClear}
            onClear={() => this.props.onChange('')}
          >

          {
            this.state.active && (
              <CategoryOptions
                value={this.props.value}
                categoryOptions={this.props.categoryOptions}
                onSelect={this.select}
              />
            )
          }
        </Select>
        </span>
      </OuterClick>
    )
  }
}

export default addFormSupport(CategorySelect, ({props}) => props.value != '')
