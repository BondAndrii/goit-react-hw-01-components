import PropTypes from 'prop-types';
import css from "components/TransactionItem/TransactionItem.module.css"

export const TransactionItem = ({props:{id, type, amount, currency}}) => {
    return (<tr className={css.line} id={id}>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{ currency}</td>
    </tr>);
}

TransactionItem.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
}