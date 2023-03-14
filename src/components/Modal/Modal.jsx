import PropTypes from 'prop-types';
import { useEffect } from 'react';

import { ModalStyled } from './Modal.styled';

export const Modal = ({ largeImageURL, onCloseModal }) => {
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        onCloseModal();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onCloseModal]);

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      onCloseModal();
    }
  };

  return (
    <ModalStyled onClick={handleBackdropClick}>
      <button type="button" className="backdropBtn" onClick={onCloseModal}>
        ×
      </button>
      <div className="modal">
        <img src={largeImageURL} alt="" />
      </div>
    </ModalStyled>
  );
};

Modal.propTypes = {
  largeImageURL: PropTypes.string.isRequired,
  onCloseModal: PropTypes.func,
};
