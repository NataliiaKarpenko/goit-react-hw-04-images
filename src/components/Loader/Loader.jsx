import { InfinitySpin } from 'react-loader-spinner';
import { LoaderStyled } from './LoaderStyled';

export const Loader = () => {
  return (
    <LoaderStyled>
      <InfinitySpin />
    </LoaderStyled>
  );
};
