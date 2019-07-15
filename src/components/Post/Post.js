import React, { Fragment } from 'react'
import PropTypes from 'prop-types';

// Import Components
import PostHeader from './PostHeader'
import PostBody from './PostBody'

const Post = () => (
  <div className="post">
    <PostHeader />
    <PostBody />
  </div>
);

export default Post;
