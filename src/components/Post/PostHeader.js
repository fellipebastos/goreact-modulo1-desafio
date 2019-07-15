import React, { Fragment } from 'react'
import PropTypes from 'prop-types';

const PostHeader = (props) => (
  <div className="post-header">
    <img className="post-avatar" src="./assets/images/avatar1.png"/>

    <div className="post-info">
      <strong className="name">Lorem Ipsum Dolor</strong>
      <small className="time">há 1 min</small>
    </div>

    <hr/>
  </div>
);

export default PostHeader;
