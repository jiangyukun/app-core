/**
 * Created by jiangyukun on 2017/8/8.
 */
import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

interface CategoryOptionsProps {
  value: string
  categoryOptions: any[]
  onSelect: (option) => void
  renderOption: (option, index1, index2) => React.ReactNode
}

export function getItemClassName(selected: boolean, touchCategoryIndex, touchOptionIndex, index1, index2) {
  return classnames('select-item',
    {'selected': selected},
    {
      'last-touched': index1 == touchCategoryIndex && index2 == touchOptionIndex
    }
  )
}

class CategoryOptions extends React.Component<CategoryOptionsProps> implements React.ChildContextProvider<any> {
  static childContextTypes = {
    setTouchOption: PropTypes.func,
    onSelect: PropTypes.func,
    touchCategoryIndex: PropTypes.number,
    touchOptionIndex: PropTypes.number,
  }

  state = {
    selectIndex: -1,
    touchCategoryIndex: -1,
    touchOptionIndex: -1
  }

  setTouchOption = (index1, index2) => {
    this.setState({touchCategoryIndex: index1, touchOptionIndex: index2})
  }

  onSelect = (value) => {
    this.props.onSelect(value)
  }

  render() {
    return (
      <div className="all-select-items">
        {
          this.props.categoryOptions.map((category, index1) => {
            return (
              <div key={category.categoryName} className="category">
                <div className="select-category-title">
                  {category.categoryName}
                </div>
                <ul className="select-items">
                  {
                    category.options.map((option, index2) => {
                      return this.props.renderOption(option, index1, index2)
                    })
                  }
                </ul>
              </div>
            )
          })
        }
      </div>
    )
  }

  getChildContext() {
    return {
      setTouchOption: this.setTouchOption,
      onSelect: this.onSelect,
      touchCategoryIndex: this.state.touchCategoryIndex,
      touchOptionIndex: this.state.touchOptionIndex,
    }
  }
}

export default CategoryOptions
