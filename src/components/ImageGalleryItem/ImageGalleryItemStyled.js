import styled from 'styled-components';

export const ImageGalleryItemStyled = styled.li`
  flex-basis: calc((100% - 30px) / 3);
  border-radius: 5px;
  // box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
  //   0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);

  & img {
    width: 100%;
    height: 300px;
    object-fit: cover;
    border-radius: 5px;
    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  & img:hover {
    transform: scale(1.03);
    cursor: zoom-in;
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
      1px 4px 6px rgba(0, 0, 0, 0.16);
  }
`;
