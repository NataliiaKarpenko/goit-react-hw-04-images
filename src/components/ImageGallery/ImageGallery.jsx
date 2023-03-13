import PropTypes from 'prop-types';

import { ImageGalleryStyled } from './ImageGalleryStyled';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ photos, onOpenModal }) => {
  return (
    <ImageGalleryStyled>
      {photos.map(photo => {
        return (
          <ImageGalleryItem
            key={photo.id}
            webformatURL={photo.webformatURL}
            largeImageURL={photo.largeImageURL}
            onOpenModal={onOpenModal}
            tags={photo.tags}
          />
        );
      })}
    </ImageGalleryStyled>
  );
};

ImageGallery.propTypes = {
  photos: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.number,
      webformatURL: PropTypes.string,
      largeImageURL: PropTypes.string,
      tags: PropTypes.string,
    })
  ).isRequired,
  onOpenModal: PropTypes.func.isRequired,
};
