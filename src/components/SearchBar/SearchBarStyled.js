import styled from 'styled-components';

export const SearchBarStyled = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 64px;
  margin-bottom: 15px;
  padding-top: 12px;
  padding-bottom: 12px;
  background-color: #41d8bf;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);

  & .searchForm {
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 600px;
    background-color: #fff;
    border-radius: 3px;
    overflow: hidden;
  }

  & .searchBtn {
    display: inline-block;
    width: 48px;
    height: 48px;
    border: 0;
    opacity: 0.6;
    transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
    cursor: pointer;
    outline: none;
  }

  .searchBtn:hover {
    opacity: 1;
  }

  & .input {
    display: inline-block;
    width: 100%;
    font: inherit;
    font-size: 20px;
    border: none;
    outline: none;
    padding: 4px 6px;
  }

  & .input::placeholder {
    font: inherit;
    font-size: 18px;
  }
`;
