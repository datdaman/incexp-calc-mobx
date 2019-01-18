import React from "react";
import "../scss/BudgetHeader.scss";
import {observer} from 'mobx-react'

@observer
class BudgetHeader extends React.Component {

  state = {
    amount : '',
    monthNames : ["January", "February", "March", "April", 
                  "May","June","July", "August", "September", 
                  "October", "November","December"]
  }

  onFormSubmit = (e) => {
    e.preventDefault();
    const {amount, description, addType} = this.props.store
    if(!!amount && !!description) {
      this.props.store.addBudget(addType, description, amount)
      this.myFormRef.value = ''
      this.myFormRef.focus();
      this.setState({amount: ''})
    }
  }

  handleOnChange = e => {
    const {value, name, validity} = e.target
    const {store} = this.props

    if(name === 'amount'){
      if(validity.valid){
        let amount = Number(value) 

        this.setState({ amount }, () => {
          store.handleOnChange(this.state.amount, name)
        });
      }
      return
    }
    store.handleOnChange(value, name)
  };

  render() {
    const {formatNumber, totalIncomes, totalExpenses, totalBudget, data, deleteItem} = this.props.store;
    
    return (
      <div className="budget--container">
        <div className=" header">
          <div className="title">
            Available Budget in <span>{this.state.monthNames[new Date().getMonth()]}</span>:
          </div>
          <div className="value">{formatNumber(totalBudget)}</div>

          <div className="stats--container">
            <div className="budget-inc-exp income">
              <p>Income</p> <span> {formatNumber(totalIncomes)} </span>
            </div>

            <div className="budget-inc-exp expense">
              <p>Expense</p> <span> {formatNumber(totalExpenses)} </span>
            </div>
          </div>
        </div>

        <div className="input">
          <div className="container">
            <form onSubmit={this.onFormSubmit}>
              <select className="add-type" name="addType" onChange={this.handleOnChange}>
                <option value="incomes">+</option>
                <option value="expenses">-</option>
              </select>
              <input
                ref={el => this.myFormRef = el}
                type="text"
                name="description"
                className="add-description"
                placeholder="Add description"
                onInput={this.test}
                value={this.value}
                onChange={this.handleOnChange}
              />
              <input 
                className="add-value" 
                placeholder="Amount" 
                type= "text" 
                pattern="[0-9]*"
                name= "amount" 
                value={this.state.amount}
                onChange={this.handleOnChange}
              />
              <button className="add-btn" type="submit" value="Submit">
                <i className="check circle outline icon" />{" "}
              </button>
            </form>
          </div>
        </div>

        <div className="ui container two column grid aligned">
          <div className="row">
            <div className="column">
              <div className="ui middle aligned divided list">
                <h3>Income</h3>
                {
                  data.incomes.map(income => (
                    <div className="item" key={income.id}>
                      <div className="description">{income.description}</div>  
                      <div className="right">
                        <div className="inc-amount">+ {formatNumber(income.amount)}</div>         
                        <div className="delete-btn" onClick={() => deleteItem(income.id, 'incomes')}>
                          <i className="window close outline icon"/>
                        </div>
                      </div>
                    </div>
                  ))
                }
              </div>
            </div>
            <div className="column">
              <div className="ui middle aligned divided list">
                <h3>Expense</h3>
                {
                  data.expenses.map(expense => (
                    <div className="item" key={expense.id}>
                      <div className="description">{formatNumber(expense.description)}</div>  
                      <div className="right">
                        <div className="inc-amount">- {expense.amount}</div>         
                        <div className="delete-btn" onClick={() => deleteItem(expense.id, 'expenses')}>
                          <i className="window close outline icon"/>
                        </div>
                      </div>
                    </div>
                  ))
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BudgetHeader;
