import React, { Component } from 'react'
import BudgetView from './BudgetView';
import { inject, observer } from 'mobx-react'

@inject('BudgetStore')
@observer
class App extends Component {
  render() {
    return (
      <div>
        <BudgetView store={this.props.BudgetStore}/>
      </div>
    )
  }
}

export default App;
