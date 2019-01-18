import React from 'react'
import BudgetHeader from './BudgetHeader';
// import BudgetList from './BudgetList';


export default function BudgetView(props) {
  return (
    <div>
      <BudgetHeader store={props.store}/>
      {/* <BudgetList/> */}
    </div>
  )
}
