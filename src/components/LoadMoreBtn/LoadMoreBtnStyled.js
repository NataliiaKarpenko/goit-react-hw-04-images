import styled from 'styled-components';

export const LoadMoreBtnStyled = styled.button`
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 20px;
  padding: 10px 16px;
  display: block;
  border-radius: 2px;
  background-color: #41d8bf;
  text-align: center;
  color: #fff;
  border: 2px solid transparent;
  text-decoration: none;
  cursor: pointer;
  font-family: inherit;
  font-size: 18px;
  line-height: 24px;
  font-style: normal;
  font-weight: 500;
  min-width: 180px;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background-color: #fff;
    color: #41d8bf;
    border: 2px solid #41d8bf;
  }
`;
