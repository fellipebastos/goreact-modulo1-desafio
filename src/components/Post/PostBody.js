import React from 'react'
import PropTypes from 'prop-types';

const PostBody = ({ body }) => (
  <div className="post-body">
    <p>{body}</p>
  </div>
);

PostBody.propTypes = {
  body: PropTypes.string.isRequired
}

export default PostBody;
