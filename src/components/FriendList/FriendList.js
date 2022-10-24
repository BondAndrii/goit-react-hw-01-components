import PropTypes from 'prop-types';
import { FriendListItem } from "components/FriendListItem/FriendListItem";
import css from 'components/FriendList/FriendList.module.css'
export const FriendList = ({ friends }) => {
    return (<ul className={css.list}>
        {friends.map(friend => <FriendListItem props={friend} />)}
</ul>);
}
FriendList.propTypes = {
    friends: PropTypes.object.isRequired
}