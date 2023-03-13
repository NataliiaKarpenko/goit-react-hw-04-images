import PropTypes from 'prop-types';
import { LoadMoreBtnStyled } from './LoadMoreBtnStyled';

export const LoadMoreBtn = ({ onLoadMorePhotos }) => {
  return (
    <LoadMoreBtnStyled type="button" onClick={onLoadMorePhotos}>
      Load more
    </LoadMoreBtnStyled>
  );
};

LoadMoreBtn.propTypes = {
  onLoadMorePhotos: PropTypes.func.isRequired,
};
