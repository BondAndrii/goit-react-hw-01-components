import css from "components/TransactionItem/TransactionItem.module.css"

export const TransactionItem = ({props:{id, type, amount, currency}}) => {
    return (<tr className={css.line} id={id}>
      <td>{type}</td>
      <td>{amount}</td>
        <td>{ currency}</td>
    </tr>);
}