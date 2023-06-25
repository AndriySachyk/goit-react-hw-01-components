
import {
    CardProfile,
    Description,
    AvatarUser,
    NameUser,
    ContentUser,
    StatsUser,
    ItemStatsUser,
    LabelUser,
    QuantityUser
} from './Profile-style'

export const Profile = ({username, tag, location, avatar, stats}) => {
    return (<CardProfile>
  <Description>
    <AvatarUser
      src={avatar}
      alt={username}
      
    />
    <NameUser>{username}</NameUser>
    <ContentUser>@{tag}</ContentUser>
    <ContentUser>{location}</ContentUser>
  </Description>

  <StatsUser>
    <ItemStatsUser>
      <LabelUser>Followers</LabelUser>
      <QuantityUser>{stats.followers}</QuantityUser>
    </ItemStatsUser>
    <ItemStatsUser>
      <LabelUser>Views</LabelUser>
      <QuantityUser>{stats.views}</QuantityUser>
    </ItemStatsUser>
    <ItemStatsUser>
      <LabelUser>Likes</LabelUser>
      <QuantityUser>{stats.likes}</QuantityUser>
    </ItemStatsUser>
  </StatsUser>
</CardProfile>)
}
