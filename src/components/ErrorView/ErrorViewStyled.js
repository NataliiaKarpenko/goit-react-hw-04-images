import styled from 'styled-components';

export const ErrorViewStyled = styled.div`
  position: absolute;
  top: 150px;
  left: 50%;
  transform: translate(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;

  & img {
    width: 300px;
    height: auto;
    margin-bottom: 15px;
  }

  & p {
    font-size: 20px;
  }
`;
