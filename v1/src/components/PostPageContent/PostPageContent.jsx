import React from 'react';
import PropTypes from 'prop-types';
import { PostPageContentWrapper, PostPageImageWrapper } from './PostPageContent.styled';
import { Tag } from '../../styles/globalComponents';
import { WpContentWrapper, WpPageTitle } from '../../styles/globalComponents';

const toolsProps = PropTypes.shape({
  nodes: PropTypes.arrayOf(
    PropTypes.shape({
      databaseId: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired
    }).isRequired
  )
});

const imageProps = PropTypes.shape({
  node: PropTypes.shape({
    id: PropTypes.string.isRequired,
    sourceUrl: PropTypes.string.isRequired,
    altText: PropTypes.string.isRequired,
    srcSet: PropTypes.string.isRequired,
    sizes: PropTypes.string.isRequired
  })
});

const postProps = PropTypes.shape({
  projectBy: PropTypes.shape({
    databaseId: PropTypes.number,
    title: PropTypes.string,
    slug: PropTypes.string,
    tools: toolsProps,
    featuredImage: imageProps,
    content: PropTypes.string,
  }),
});

const PostPageContent = ({ post }) => {
  // console.log(post.featuredImage);
  return (
    <PostPageContentWrapper data-testid="PostPageContent">
      <WpContentWrapper>
        <Tag>
          {'Tags: '}
          {post.tools?.nodes.map((tool, index) => (
            <React.Fragment key={tool.databaseId}>
              {tool.name}
              {index < (post.tools.nodes.length - 1) ? ', ' : ''}
            </React.Fragment>
          ))}
        </Tag>
        <WpPageTitle>{post.title}</WpPageTitle>
        <PostPageImageWrapper>
          <img
            src={post.featuredImage.node.sourceUrl}
            alt={post.featuredImage.node.altText}
            srcSet={post.featuredImage.node.srcSet}
            sizes={post.featuredImage.node.sizes}
          />
        </PostPageImageWrapper>
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </WpContentWrapper>
    </PostPageContentWrapper>
  )
};

PostPageContent.propTypes = postProps.isRequired,

  postProps.defaultProps = {
    projectBy: {
      databaseId: null,
      title: 'Error',
      slug: '',
      tools: {
        nodes: [
          {
            databaseId: 1,
            name: 'Tool 1',
          },
          {
            databaseId: 2,
            name: 'Tool 2',
          },
        ],
      },
      content: '<p>ERROR</p>',
    },
  };

export default PostPageContent;
