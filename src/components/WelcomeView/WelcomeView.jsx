import welcomeImage from '../../images/welcomeImage.jpeg';
import { WelcomeViewStyled } from './WelcomeViewStyled';

export const WelcomeView = () => {
  return (
    <WelcomeViewStyled>
      <img src={welcomeImage} alt="welcome" />
    </WelcomeViewStyled>
  );
};
