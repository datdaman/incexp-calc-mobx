import { autorun, observable, computed, action} from 'mobx'

class BudgetStore {
  @observable budget = 0;
  @observable addType = 'incomes';
  @observable description = '';
  @observable amount = 0;
  @observable data = {
    incomes: [],
    expenses: [],
  }

  @action
  addBudget = (addType, description, amount) => {
    let id = 0

    if (!!this.data[addType] && this.data[addType].length > 0) {
      id = this.data[addType][this.data[addType].length-1].id + 1
    }

    this.data[addType].push({
      description,
      id,
      amount
    })
    this.description = ''
    this.amount = ''
  }
  
  @action
  handleOnChange = (value, name) => {
    switch(name){
      case 'description':
        return this.description = value
      case 'amount':
        return this.amount = value
      case 'addType':
        return this.addType = value
      default:
        return
    }
  }

  @action
  deleteItem = (id, addType) => {
    this.data[addType] = this.data[addType].filter((data, index) => {
      
          return this.data[addType][index].id !== id
      
    })
  }

  @computed get totalBudget(){
    return this.totalIncomes - this.totalExpenses
  }
  @computed get totalIncomes(){
    let total = this.data["incomes"].reduce((sum, curr) => {
      return sum += curr.amount
    }, 0)
    return total
  }
  
  @computed get totalExpenses(){
    let total = this.data["expenses"].reduce((sum, curr) => {
      return sum += curr.amount
    }, 0)
    return total
  }

  formatNumber(val){
    return val.toLocaleString()
  }
}

const store = window.store = new BudgetStore();

export default store;

autorun( () => {
  
})