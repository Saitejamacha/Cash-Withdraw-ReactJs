import './index.css'

const DenominationItem = props => {
  const {cashDeducting, updateAmount} = props
  const {value} = cashDeducting

  const onClickSendValue = () => {
    updateAmount(value)
  }

  return (
    <li className="list">
      <button type="button" className="btn" onClick={onClickSendValue}>
        {value}
      </button>
    </li>
  )
}
export default DenominationItem
