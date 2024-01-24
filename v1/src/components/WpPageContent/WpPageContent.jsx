import PropTypes from 'prop-types';
import { WpPageContentWrapper } from './WpPageContent.styled';
import { WpContentWrapper, WpPageTitle } from '../../styles/globalComponents';

const pageProps = PropTypes.shape({
  pageBy: PropTypes.shape({
    databaseId: PropTypes.number,
    title: PropTypes.string,
    content: PropTypes.string,
  }),
});

const WpPageContent = ({ pageBy }) => {
  return (
    <WpPageContentWrapper data-testid="WpPageContent">
      <WpContentWrapper>
        <WpPageTitle>{pageBy.title}</WpPageTitle>
        <div dangerouslySetInnerHTML={{ __html: pageBy.content }} />
      </WpContentWrapper>
    </WpPageContentWrapper>
  )
};

WpPageContent.propTypes = pageProps.isRequired;

WpPageContent.defaultProps = {
  pageBy: {
    databaseId: null,
    title: 'Error',
    content: '<p>ERROR</p>'
  }
};

export default WpPageContent;
