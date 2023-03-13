import PropTypes from 'prop-types';

import { ModalStyled } from './Modal.styled';
import { createPortal } from 'react-dom';
import { Component } from 'react';

const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onCloseModal();
    }
  };

  handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      this.props.onCloseModal();
    }
  };

  render() {
    return createPortal(
      <ModalStyled onClick={this.handleBackdropClick}>
        <button
          type="button"
          className="backdropBtn"
          onClick={this.props.onCloseModal}
        >
          ×
        </button>
        <div className="modal">
          <img src={this.props.largeImageURL} alt="" />
        </div>
      </ModalStyled>,
      modalRoot
    );
  }
}

Modal.propTypes = {
  largeImageURL: PropTypes.string.isRequired,
  onCloseModal: PropTypes.func,
};
