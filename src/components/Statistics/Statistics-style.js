import styled from "@emotion/styled";


export const Section = styled.section`
  margin-left:auto ;
  margin-right: auto;
  box-sizing: border-box;
  width: 500px;
  background-color: #FFFFFF;
  
  padding-top: 26px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
`;


export const Title = styled.h2`
    font-size: 38px;
    font-weight: 700;
    text-transform: uppercase;
    margin: 0;

`


export const StatList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  width: 100%;
  justify-content: space-between;

`;


export const Item = styled.li`
  width: 100%;
  height: 100px;
  display: flex;
  border: solid gray 1px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  background-color: #e1e1e1;
`;



export const Label = styled.span`
  color: #272727;
  font-size: 18px;
`;
export const Percentage = styled.span`
  font-size: 28px;
  color: #272727;
`;
