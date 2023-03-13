import PropTypes from 'prop-types';
import { ErrorViewStyled } from './ErrorViewStyled';

import errorImage from '../../images/errorImage.png';

export const ErrorView = ({ message }) => {
  return (
    <ErrorViewStyled>
      <img src={errorImage} alt="upset smiley" />
      <p>{message}</p>
    </ErrorViewStyled>
  );
};

ErrorView.propTypes = {
  message: PropTypes.string.isRequired,
};
