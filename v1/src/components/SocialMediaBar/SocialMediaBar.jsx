import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SocialMediaBarWrapper } from './SocialMediaBar.styled';

const SocialMediaBar = () => (
  <SocialMediaBarWrapper>
    <a 
      href='https://www.linkedin.com/in/dylan-almond-a36a76251/'
      aria-label='LinkedIn'
    >
      <FontAwesomeIcon icon={['fab', 'linkedin']} />
    </a>
    {/* <a href="/" aria-label='Instagram'>
      <FontAwesomeIcon icon={['fab', 'instagram']} />
    </a>
    <a href="/" aria-label='Facebook'>
      <FontAwesomeIcon icon={['fab', 'facebook']} />
    </a>
    <a href="/" aria-label='Twitter'>
      <FontAwesomeIcon icon={['fab', 'twitter']} />
    </a>
    <a href="/" aria-label='YouTube'>
      <FontAwesomeIcon icon={['fab', 'youtube']} />
    </a> */}
  </SocialMediaBarWrapper>
);

SocialMediaBar.propTypes = {};

SocialMediaBar.defaultProps = {};

export default SocialMediaBar;
