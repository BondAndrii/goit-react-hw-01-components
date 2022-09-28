
import { FriendListItem } from "components/FriendListItem/FriendListItem";
export const FriendList = ({ friends }) => {
    return (<ul>
        {friends.map(friend => <FriendListItem props={friend} />)}
</ul>);
}