import styled from "styled-components";

export const InputEdit = styled.input`
  flex: 1;
  height: 46px;
  padding: 20px;
  color: #777;
  font-size: 18px;
  width: 100%;
  border: 1px solid #2e294e;
  outline: none;
  border-radius: 0px;
  &::placeholder {
    color: #999;
  }
`;
export const ButtonCadastro = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  background: #2e294e;
  height: 46px;
  border: 3px solid #d07373;
  width: 30%;
  font-size: 26px;
  margin-bottom: 15px;
  margin-left: 15px;
  cursor: pointer;
`;

export const ContainerCadGames = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  input {
    flex: 1;
    height: 46px;
    margin-bottom: 15px;
    padding: 20px;
    color: #777;
    font-size: 18px;
    width: 100%;
    border: 1px solid #2e294e;
    outline: none;
    border-radius: 0px;
    &::placeholder {
      color: #999;
    }
  }
`;

export const ContainerListaGames = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* border: 1px solid red; */
  padding: 10px;
`;

export const ConteudoGames = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #2e294e;
  padding: 10px;
  margin: 5px;
  width: 100%;
  font-size: 20px;
  img {
    margin: 5px;
    width: 40px;
    cursor: pointer;
  }
`;
