import {Component} from 'react'

import DenominationItem from '../DenominationItem'

import './index.css'

class CashWithdrawal extends Component {
  state = {
    balance: 2000,
  }

  getDenominationValue = value => {
    const {balance} = this.state
    if (balance >= value) {
      this.setState(prevState => ({
        balance: prevState.balance - value,
      }))
    } else {
      alert('No enough balance')
    }
  }

  render() {
    const {denominationsList} = this.props
    const {balance} = this.state

    // Sarah Williams
    return (
      <div className="main-con">
        <div className="bg-con">
          <div className="user-con">
            <div className="user">
              <h1>SM</h1>
            </div>
            <p className="head">Sai Teja Macha</p>
          </div>
          <div className="mid-con">
            <p className="balancePara">Your Balance</p>
            <div className="money-con">
              <p className="money">{balance}</p>
              <p className="m-para">In Rupees</p>
            </div>
          </div>

          <p className="withdraw">Withdraw</p>
          <p className="para">CHOOSE SUM (IN RUPEES)</p>

          <ul className="list-items">
            <div className="unorder-list">
              {denominationsList.map(eachItem => (
                <DenominationItem
                  key={eachItem.id}
                  cashDeducting={eachItem}
                  getDenominationValue={this.getDenominationValue}
                />
              ))}
            </div>
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
