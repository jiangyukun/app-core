/**
 * Created by jiangyukun on 2017/8/8.
 */
import React from 'react'
import classnames from 'classnames'

interface CategoryOptionsProps {
  value: string
  categoryOptions: any[]
  onSelect: (option) => void
}

class CategoryOptions extends React.Component<CategoryOptionsProps> {
  state = {
    selectIndex: -1,
    touchCategoryIndex: -1,
    touchOptionIndex: -1
  }

  getItemClassName = (option, index1, index2) => {
    return classnames('select-item',
      {'selected': option.value == this.props.value},
      {
        'last-touched': index1 == this.state.touchCategoryIndex && index2 == this.state.touchOptionIndex
      }
    )
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
                      return (
                        <li key={option.value} className={this.getItemClassName(option, index1, index2)}
                            onMouseEnter={() => this.setState({touchCategoryIndex: index1, touchOptionIndex: index2})}
                            onClick={() => this.props.onSelect(option.value)}
                        >
                          {option.text}
                        </li>
                      )
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
}

export default CategoryOptions
