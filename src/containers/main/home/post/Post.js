import React from 'react';
import PostHeader from './PostHeader';
import PostImage from './PostImage';
import PostActions from './PostActions';
import PostLikes from './PostLikes';
import PostDescription from './PostDescription';
import PostComments from './PostComments';
import PostPublishDate from './PostPublishDate';

const Post = ({post}) => {
  return (
      <React.Fragment>
        <PostHeader post={post} />
        <PostImage post={post} />
        <PostActions post={post} />
        <PostLikes post={post} />
        <PostDescription post={post} />
        <PostComments post={post} />
        <PostPublishDate post={post} />
      </React.Fragment>
  );
}
export default Post;