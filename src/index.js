import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'mobx-react'

import App from './components/App'
import BudgetStore from './stores/BudgetStore'

ReactDOM.render(
  <Provider BudgetStore={BudgetStore}>
    <App/>
  </Provider>,
  document.querySelector('#root')
)