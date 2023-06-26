import {FriendListUl, ItemFriendLi, StatsIsOnline, AvatarFriend, NameFriend} from './FriendList-style'


export const FriendList = ({friends}) => {
    return (<FriendListUl>
        {friends.map(friend => {
            return <ItemFriendLi key={friend.id}>
                <StatsIsOnline  stats={friend.isOnline}></StatsIsOnline>
  <AvatarFriend src={friend.avatar} alt={friend.name} width="48" />
  <NameFriend>{friend.name}</NameFriend>
</ItemFriendLi>
        })}
    </FriendListUl>)
}