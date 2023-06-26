import styled from "@emotion/styled";


export const TabletTransactionHistory = styled.table`
    width: 750px;
    box-sizing: border-box;
    margin-top: 100px;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #e1e1e1;

`


export const TheadTransactionHistory = styled.thead`
  width: 100%;
  background-color: #00C6D5;
  height: 50px;
    font-size: 22px;
    color: #272727;
  
  `
export const TrTransactionHistory = styled.tr`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
`

export const ThTransactionHistory = styled.th`
box-sizing: border-box;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border: solid grey 1px;

`



export const TbodyTransactionHistory = styled.tbody`
  /* box-sizing: border-box; */
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;

`;


export const TrBodyTransactionHistory = styled.tr`
  width: 100%;
  height: 50px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  &:hover {
    background-color: #007e87;
    color: #efefef;
  }
`;
export const TdTransactionHistory = styled.td`
  font-size: 18px;
  font-weight: 400;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  border: solid grey 1px;
  margin: 0;
  padding: 0;
  
`;