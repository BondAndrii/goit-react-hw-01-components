import PropTypes from 'prop-types'; 
import css from 'components/FriendListItem/FriendListItem.module.css'

export const FriendListItem = ({ props:{avatar, name, isOnline, id  } }) => {
    return (<li className={css.item} id={id}>
        <span className={isOnline ? css.isOnline : css.isOfline}>{isOnline}</span>
        <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
        <p>{name}</p>
        </li>) ;
}
FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
}