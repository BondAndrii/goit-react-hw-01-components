import PropTypes from 'prop-types'; 
import css from 'components/BlockStat/BlockStat.module.css'


export const BlockStat = ({ stat: { id, label, percentage } }) => {
    return <li className={css.item} id={id}>
        <span>{label}</span>
        <span>{percentage}</span>
    </li>
}
BlockStat.propTypes = {
    stat: PropTypes.exact({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
      })
}