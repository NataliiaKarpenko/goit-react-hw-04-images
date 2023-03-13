import styled from 'styled-components';

export const ModalStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1200;

  & .modal {
    width: calc(100vw - 500px);
    height: calc(100vh - 100px);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  & img {
    border-radius: 5px;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  & .backdropBtn {
    position: absolute;
    top: 30px;
    right: 190px;
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid white;
    border-radius: 50%;
    background-color: transparent;
    color: white;
    font-size: 30px;
  }
`;
