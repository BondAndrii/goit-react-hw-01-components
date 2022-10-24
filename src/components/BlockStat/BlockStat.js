import PropTypes from 'prop-types'; 
import css from 'components/BlockStat/BlockStat.module.css'


export const BlockStat = ({ stat: { id, label, percentage } }) => {
    return <li className={css.item} style={{ backgroundColor: getRandomHexColor() } } id={id}>
        <span>{label}</span>
        <span>{percentage}</span>
    </li>
}
function getRandomHexColor() {
    const red = Math.round(Math.random(0, 1) * 255);
    const green = Math.round(Math.random(0, 1) * 255);
    const blue = Math.round(Math.random(0, 1) * 255);
    return `rgb(${red}, ${green}, ${blue})`
}
BlockStat.propTypes = {
    stat: PropTypes.exact({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
    })
}
