/**
 * Created by jiangyukun on 2017/9/21.
 */
import React from 'react'
import PropTypes from 'prop-types'
import {getItemClassName} from './CategoryOptions'

interface DefaultCategoryItemProps extends React.HTMLProps<HTMLLIElement> {
  currentValue: string
  option: any
  index1: number
  index2: number
}

class DefaultCategoryItem extends React.Component<DefaultCategoryItemProps> {
  static contextTypes = {
    setTouchOption: PropTypes.func,
    onSelect: PropTypes.func,
    touchCategoryIndex: PropTypes.number,
    touchOptionIndex: PropTypes.number,
  }

  render() {
    let {currentValue, option, index1, index2} = this.props
    return (
      <li
        className={getItemClassName(currentValue == option.value, this.context.touchCategoryIndex, this.context.touchOptionIndex, index1, index2)}
        onMouseEnter={() => this.context.setTouchOption}
        onClick={() => this.context.onSelect(option.value)}
      >
        {option.text}
      </li>
    )
  }
}

export default DefaultCategoryItem
