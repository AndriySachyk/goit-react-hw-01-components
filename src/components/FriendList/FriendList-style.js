import styled from "@emotion/styled";

export const FriendListUl = styled.ul`
    list-style: none;
    width: 300px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 35px;
    margin-top: 100px;
    margin-left: auto;
    margin-right:auto;
    padding: 0;
`

export const ItemFriendLi = styled.li`
    background-color: #FFFFFF;
    width: 100%;
    box-sizing: border-box;
    padding-top: 16px;
    padding-bottom: 16px;
    padding-left: 24px;
    padding-right:24px;
    display: flex;
    align-items: center;
    justify-content: center;
    /* gap: 30px; */

`

export const StatsIsOnline = styled.span`
    width: 25px;
    height: 25px;
    border-radius: 50%;
    margin-right: 35px;
  background-color: ${({ stats }) => stats? 'green': 'red'};
`;


export const AvatarFriend = styled.img`
    background-color: black;
    border-radius: 10px;
    margin-right: auto;
`

export const NameFriend = styled.p`
    font-size: 18px;
    font-weight: 600;
    margin-right: 40px;

`