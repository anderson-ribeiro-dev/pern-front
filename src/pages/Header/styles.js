import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  background: #2e294e;
  font-size: 25px;
  color: #fff;
  padding: 20px;
  border-bottom: 3px solid #d07373;
  img {
    margin: 5px;
    width: 55px;
    cursor: pointer;
  }
  span {
    padding: 15px;
  }
`;
