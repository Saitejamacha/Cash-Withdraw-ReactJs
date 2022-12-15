import {Component} from 'react'
import './index.css'

class DenominationItem extends Component {
  onClickSendValue = () => {
    const {cashDeducting, getDenominationValue} = this.props
    const {value} = cashDeducting
    getDenominationValue(value)
  }

  render() {
    const {cashDeducting} = this.props
    const {value} = cashDeducting

    return (
      <li className="list">
        <button type="button" className="btn" onClick={this.onClickSendValue}>
          {value}
        </button>
      </li>
    )
  }
}

export default DenominationItem
