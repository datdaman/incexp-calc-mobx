import React from 'react'
import '../scss/BudgetHeader.scss'

export default function BudgetHeader() {
  return (
      <div className="budget--container"> 

        <div className=" header">
          <div className="title">
            Available Budget in <span>%Month%</span>:
          </div>
          <div className="value">+ 2,345.64</div>

          <div className="stats--container">
            <div className="budget-inc-exp income">
              <p>Income</p> <span> + 2,500 </span>
            </div>

            <div className="budget-inc-exp expense">
              <p>Expense</p> <span> - 2,500 </span>
            </div>
          </div>
        </div>

        <div className="input">
          <div className="container">
            <input className="add-type"/>
            <input className="add-description"/>
            <input className="add-value"/>
            <button className="add-btn"><i className="check circle outline icon"/> </button>
          </div>
        </div>


        <div className="ui container two column grid aligned">
          <div className="row">
            <div className="column">
              <div className="ui middle aligned divided list">
                <h3>Income</h3>
                <div className="item">
                  <div className="right floated content">
                    +25000
                  </div>
                  Hi
                </div>
                <div className="item">
                  <div className="right floated content">
                    +25000
                  </div>
                  Hi
                </div>
              </div>
            </div>
            <div className="column">
              <div className="ui middle aligned divided list">
              <h3>Expense</h3>
                <div className="item">
                  <div className="right floated content">
                    +25000
                  </div>
                  Hi
                </div>
                <div className="item">
                  <div className="right floated content">
                    +25000
                  </div>
                  Hi
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      
  )
}
