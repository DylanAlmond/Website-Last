import { PostPageWrapper } from './PostPage.styled';
import { useParams } from 'react-router-dom';
import { gql, useQuery } from "@apollo/client";
import PostPageContent from '../PostPageContent/PostPageContent.lazy';

const GET_POST_BY_SLUG = gql`
  query getProjectBySlug($slug: String) {
    projectBy(uri: $slug) {
      databaseId
      title
      slug
      tools {
        nodes {
          databaseId
          name
        }
      }
      featuredImage {
        node {
          id
          altText
          srcSet
          sizes
          sourceUrl(size: LARGE)
        }
      }
      content
    }
  }
`;

const PostPage = () => {
  const { slug } = useParams();

  const { loading, error, data } = useQuery(GET_POST_BY_SLUG, {
    variables: {
      slug: slug
    }
  });

  const postFound = Boolean(data?.projectBy);

  return (
    <PostPageWrapper data-testid="PostPage">
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error.message}</p>
      ) : !postFound ? (
        <p>Post could not be found.</p>
      ) : (
        <PostPageContent post={data.projectBy} />
      )}
    </PostPageWrapper>
  )
};

PostPage.propTypes = {};

PostPage.defaultProps = {};

export default PostPage;
