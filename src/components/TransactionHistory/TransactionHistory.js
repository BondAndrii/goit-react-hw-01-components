import { TransactionItem } from "components/TransactionItem/TransactionItem";

export const TransactionHistory = ({ props }) => {
    return (<table>
  <thead>
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

