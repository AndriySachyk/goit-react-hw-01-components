import styled from "@emotion/styled";

export const CardProfile = styled.div`
    display: flex;
    justify-content: center;

    padding-bottom: 50px;
    flex-direction: column;
    align-items: center;
  
`

export const Description = styled.div`
    width: 500px;
    padding: 28px 16px;
    box-sizing: border-box;
    border-top-right-radius: 14px;
    border-top-left-radius: 14px;
    border: solid 2px #FFFFFF;

    background-color: white;
    display: flex;
    flex-direction: column;
    gap: 10px;
    justify-content: center;
    align-items: center;
`

export const AvatarUser = styled.img`
    width: 250px;
    height: 250px;
    border-radius: 50%;
 background-color: black;
`

export const NameUser = styled.p`
    font-size: 28px;
    font-weight: 600;
`
export const ContentUser = styled.p`
    font-size: 24px; 
    color: #575757;
`   

export const StatsUser = styled.ul`
    list-style: none;
    box-sizing: border-box;
    width: 500px;
    background-color: #e1e1e1;
    margin: 0;
    padding: 0;
    display: flex;
    border-bottom-left-radius: 14px;
    border-bottom-right-radius: 14px;


`


export const ItemStatsUser = styled.li`
    width: 100%;
    height: 100px;
    display: flex;
    border: solid gray 1px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;

`


export const LabelUser = styled.span`
    color: #9a9a9a;
    font-size: 18px;
`


export const QuantityUser = styled.span`
    font-weight: 700;
    font-size: 18px;
`