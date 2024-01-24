import { CardGridWrapper } from './CardGrid.styled';
import Card from '../Card/Card.lazy';
import placeholder from '../../assets/placeholder.webp';

import { gql, useQuery } from "@apollo/client";

const GET_ALL_POSTS = gql`
  query getAllProjects {
    projects(first: 12) {
      nodes {
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
            sourceUrl(size: THUMBNAIL)
          }
        }
      }
    }
  }
`;

const defaultPost = {
  databaseId: 0,
  title: 'A post!',
  slug: 'slug',
  featuredImage: {
    node: {
      id: '0',
      sourceUrl: placeholder,
      altText: 'Alt Text',
      srcSet: '',
      sizes: ''
    },
  },
  tools: {
    nodes: [
      {
        databaseId: 0,
        name: 'Blender',
      },
      {
        databaseId: 1,
        name: 'Photoshop',
      },
    ],
  },
}

const CardGrid = () => {
  const { loading, error, data } = useQuery(GET_ALL_POSTS);

  if (loading) {
    // Return a loading state or skeleton screen
    return (
      <CardGridWrapper data-testid="CardGrid">
        {Array.from({ length: 12 }, (_, index) => (
          <Card key={index} post={defaultPost} />
        ))}
      </CardGridWrapper>
    );
  }

  if (error) return <p>Error :(</p>;

  const posts = data?.projects.nodes || [];

  if (posts.length === 0) {
    return <p>No matching posts found.</p>;
  }

  return (
    <CardGridWrapper data-testid="CardGrid">
      {posts.map((post) => (
        <Card key={post.databaseId} post={post} />
      ))}
    </CardGridWrapper>
  );
};

CardGrid.propTypes = {};

CardGrid.defaultProps = {};

export default CardGrid;
