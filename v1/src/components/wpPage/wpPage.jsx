import { WpPageWrapper } from './wpPage.styled';
import { useParams } from 'react-router-dom';
import { gql, useQuery } from "@apollo/client";
import WpPageContent from '../WpPageContent/WpPageContent.lazy';

const GET_PAGE_BY_SLUG = gql`
  query getPageBySlug($slug: String) {
    pageBy(uri: $slug) {
      databaseId
      title
      content
    }
  }
`;


const WpPage = () => {
  const { slug } = useParams();

  const { loading, error, data } = useQuery(GET_PAGE_BY_SLUG, {
    variables: {
      slug: slug
    }
  });

  const pageFound = Boolean(data?.pageBy);

  return (
    <WpPageWrapper data-testid="WpPage">
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error.message}</p>
      ) : !pageFound ? (
        <p>Page could not be found.</p>
      ) : (
        <WpPageContent pageBy={data.pageBy} />
      )}
    </WpPageWrapper>
  )
};

WpPage.propTypes = {};

WpPage.defaultProps = {};

export default WpPage;
