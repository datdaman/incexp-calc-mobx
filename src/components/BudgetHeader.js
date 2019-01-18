import React from "react";
import "../scss/BudgetHeader.scss";
import {observer} from 'mobx-react'

@observer
class BudgetHeader extends React.Component {

  state = {
    amount : ''
  }

  onFormSubmit = (e) => {
    e.preventDefault();
    const {amount, description, addType} = this.props.store
    if(!!amount && !!description) this.props.store.addBudget(addType, description, amount)

    this.myFormRef.reset()
    this.setState({amount: ''})
  }

  handleOnChange = e => {
    const {value, name, validity} = e.target

    if(name === 'amount'){
      if(validity.valid){
        let amount = Number(value) 

        this.setState({ amount }, ()=>{
          this.props.store.handleOnChange(this.state.amount, name)
        });
      }
      return
    }
    this.props.store.handleOnChange(value, name)
  };

  render() {
    const {store} = this.props;
    return (
      <div className="budget--container">
        <div className=" header">
          <div className="title">
            Available Budget in <span>%Month%</span>:
          </div>
          <div className="value">{store.addType}</div>

          <div className="stats--container">
            <div className="budget-inc-exp income">
              <p>Income</p> <span> {store.totalIncomes} </span>
            </div>

            <div className="budget-inc-exp expense">
              <p>Expense</p> <span> {store.totalExpenses} </span>
            </div>
          </div>
        </div>

        <div className="input">
          <div className="container">
            <form onSubmit={this.onFormSubmit} ref={el => this.myFormRef = el}>
              <select className="add-type" name="addType" onChange={this.handleOnChange}>
                <option value="incomes">+</option>
                <option value="expenses">-</option>
              </select>
              <input
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
                  store.data.incomes.map(income => (
                    <div className="item" key={income.id}>
                      {income.description}  <div key={income.id} className="right floated content">+ {income.amount}</div>
                    </div>
                  ))
                }
              </div>
            </div>
            <div className="column">
              <div className="ui middle aligned divided list">
                <h3>Expense</h3>
                {
                  store.data.expenses.map(expense => (
                    <div className="item" key={expense.id}>
                      {expense.description}  <div key={expense.id} className="right floated content">+ {expense.amount}</div>
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
