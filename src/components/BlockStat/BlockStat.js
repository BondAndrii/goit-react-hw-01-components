import PropTypes from 'prop-types'; 

export const BlockStat = ({ stat: { id, label, percentage } }) => {
    return <li id={id}>
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