/**
 * Created by jiangyukun on 2017/9/21.
 */
import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

interface DefaultOptionItemProps {
  option: any
  index
}

class DefaultOptionItem extends React.Component<DefaultOptionItemProps> {
  static contextTypes = {
    setTouchIndex: PropTypes.func,
    onSelect: PropTypes.func,
    selectIndex: PropTypes.number,
    needMoreWidth: PropTypes.func
  }
  textContainer: HTMLSpanElement

  componentDidUpdate() {
    if (this.textContainer.offsetWidth < this.textContainer.scrollWidth) {
      this.context.needMoreWidth()
    }
  }

  componentDidMount() {
    if (this.textContainer.offsetWidth < this.textContainer.scrollWidth) {
      this.context.needMoreWidth()
    }
  }

  render() {
    const {option, index} = this.props

    return (
      <li
        ref={c => this.textContainer = c}
        className={classnames('select-item', {'selected': index == this.context.selectIndex})}
        onClick={() => this.context.onSelect(option)}
        onMouseEnter={() => this.context.setTouchIndex(index)}
      >
        {option.text}
      </li>
    )
  }
}

export default DefaultOptionItem
