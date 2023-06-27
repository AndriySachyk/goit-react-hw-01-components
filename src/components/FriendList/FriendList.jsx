import PropTypes from 'prop-types'


import { FriendListUl, ItemFriendLi, StatsIsOnline, AvatarFriend, NameFriend } from './FriendList-style'


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



FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.number.isRequired,
            isOnline: PropTypes.bool.isRequired,
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            })
    ),
}