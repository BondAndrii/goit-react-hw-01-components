import PropTypes from 'prop-types';
import { Card, Personal, Data, DataBlock, Info, InfoData } from './Profile.styled'

export const Profile = ({ profile: { username, tag, location, avatar, stats: {followers, views, likes }  }}) => {
    return <Card>
  <Personal>
    <img
      src={avatar}
      alt="User avatar"
      class="avatar"
    />
    <p>{username}</p>
    <p>{tag}</p>
    <p>{location}</p>
  </Personal>

  <Data>
    <DataBlock>
        <Info>Followers</Info>
        <InfoData>{followers }</InfoData>
    </DataBlock>
    <DataBlock>
        <Info>Views</Info>
        <InfoData>{views}</InfoData>
    </DataBlock> 
    <DataBlock>
        <Info>Likes</Info>
        <InfoData>{likes}</InfoData>
    </DataBlock>
  </Data>
</Card>
};
Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,

    stats: PropTypes.exact({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired,
    })
}