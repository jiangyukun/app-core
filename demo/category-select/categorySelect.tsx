/**
 * Created by jiangyukun on 2017/7/13.
 */

import React from 'react'
import {render} from 'react-dom'
import CategorySelect from '../../src/category-select/CategorySelect'

import '../common.scss'
import '../../src/style/index.scss'

let options = [
  {value: '1', text: '1'},
  {value: '2', text: '2'},
  {value: '3', text: '3'},
]
let o = [
  {
    categoryName: '分类1',
    options
  },
  {
    categoryName: '分类2',
    options
  }
]

class S extends React.Component<any> {
  state = {
    value: '',
    loadSuccess: false
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({loadSuccess: !this.state.loadSuccess})
    }, 2000)
  }

  render() {
    return (
      <div className="container">
        <CategorySelect
          categoryOptions={o} value={this.state.value} onChange={v => this.setState({value: v})}/>
      </div>
    )
  }
}

render(<S/>, document.querySelector('#root'))
