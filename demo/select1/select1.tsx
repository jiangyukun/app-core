/**
 * Created by jiangyukun on 2017/7/13.
 */

import React from 'react'
import {render} from 'react-dom'
import Select1 from '../../src/common/Select1'

import '../common.scss'

let o = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map(d => ({value: d + '', text: d + ''}))

class S extends React.Component<any> {
  state = {
    value: ''
  }

  render() {
    return (
      <div className="container">
        <Select1 options={o} value={this.state.value} onChange={v => this.setState({value: v})}/>
      </div>
    )
  }
}

render(<S/>, document.querySelector('#root'))
