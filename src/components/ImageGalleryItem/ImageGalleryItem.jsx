import PropTypes from 'prop-types';

import { ImageGalleryItemStyled } from './ImageGalleryItemStyled';

export const ImageGalleryItem = ({
  webformatURL,
  largeImageURL,
  tags,
  onOpenModal,
}) => {
  return (
    <ImageGalleryItemStyled>
      <img
        className="photo"
        src={webformatURL}
        alt={tags}
        onClick={() => onOpenModal(largeImageURL)}
      />
    </ImageGalleryItemStyled>
  );
};

ImageGalleryItem.propTypes = {
  largeImageURL: PropTypes.string.isRequired,
  webformatURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  onOpenModal: PropTypes.func.isRequired,
};
