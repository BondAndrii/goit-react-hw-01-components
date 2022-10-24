import PropTypes from 'prop-types';
import { TransactionItem } from "components/TransactionItem/TransactionItem";
import css from "components/TransactionHistory/TransactionHistory.module.css"
export const TransactionHistory = ({ props }) => {
    return (<table className={css.tableAction}>
  <thead className={css.tableHeader}>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>
            {props.map(prop => <TransactionItem props={prop}/>)}
  </tbody>
</table>); 
}

TransactionHistory.propTypes = {
  props: PropTypes.object.isRequired
}