import css from 'components/FriendListItem/FriendListItem.module.css'

export const FriendListItem = ({ props:{avatar, name, isOnline, id  } }) => {
    return (<li className={css.item} id={id}>
        <span>{isOnline}</span>
        <img src={avatar} alt="User avatar" width="48" />
        <p>{name}</p>
        </li>) ;
}