/**
 * Created by jiangyukun on 2017/7/13.
 */

import React from 'react'
import {render} from 'react-dom'

import '../common.scss'
import '../../src/select2/select2.scss'
import Select from '../../src/select2/Select'

let o = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map(d => ({value: d + '', text: d + ''}))

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
        <Select
          options={o} value={this.state.value} onChange={v => this.setState({value: v})}/>
      </div>
    )
  }
}

render(<S/>, document.querySelector('#root'))
