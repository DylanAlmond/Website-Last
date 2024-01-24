import PropTypes from 'prop-types';
import React from 'react';
import { CardWrapper } from './Card.styled';
import { Tag } from '../../styles/globalComponents';
import { Link } from 'react-router-dom';

const imageProps = PropTypes.shape({
  node: PropTypes.shape({
    id: PropTypes.string.isRequired,
    sourceUrl: PropTypes.string.isRequired,
    altText: PropTypes.string.isRequired,
    srcSet: PropTypes.string.isRequired,
    sizes: PropTypes.string.isRequired
  }).isRequired
});

const toolsProps = PropTypes.shape({
  nodes: PropTypes.arrayOf(
    PropTypes.shape({
      databaseId: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired
    }).isRequired
  )
});

const PostProps = PropTypes.shape({
  databaseId: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  tools: toolsProps,
  featuredImage: imageProps
});

const Card = ({post}) => {
  return (
    <CardWrapper data-testid="Card">
      <article>
        <Tag>
          {'Tags: '}
          {post.tools?.nodes.map((tool, index) => (
            <React.Fragment key={tool.databaseId}>
              {tool.name}
              {index < (post.tools.nodes.length - 1) ? ', ' : ''}
            </React.Fragment>
          ))}
        </Tag>
        <h2>{post.title}</h2>
        <div>
          <Link to={`/work/${post.slug}`}>
            Read More...
          </Link>
        </div>
      </article>
      <figure>
        <img 
          loading="lazy"
          height={'600px'}
          src={post.featuredImage.node.sourceUrl}
          alt={post.featuredImage.node.altText}
          srcSet={post.featuredImage.node.srcSet}
          sizes={post.featuredImage.node.sizes}
        />
      </figure>
    </CardWrapper>
  );
};

Card.propTypes = {
  post: PostProps
};

Card.defaultProps = {
  post: {
    databaseId: 0, // Update with a valid default number
    title: 'A post!',
    slug: 'slug',
    featuredImage: {
      node: {
        id: '0', // Update with a valid default ID
        sourceUrl: '', // Update with a valid default URL
        altText: 'Alt Text',
        srcSet: '', // Update with a valid default srcSet
        sizes: '', // Update with a valid default sizes
      },
    },
    tools: {
      nodes: [
        {
          databaseId: 0, // Update with a valid default number
          name: 'Blender',
        },
        {
          databaseId: 1, // Update with a valid default number
          name: 'Photoshop',
        },
      ],
    },
  },
};

export default Card;

