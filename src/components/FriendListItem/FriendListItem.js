

export const FriendListItem = ({ props:{avatar, name, isOnline, id  } }) => {
    return (<li id={id}>
        <span>{isOnline}</span>
        <img src={avatar} alt="User avatar" width="48" />
        <p>{name}</p>
        </li>) ;
}