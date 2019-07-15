import React from 'react'
import PropTypes from 'prop-types';

const PostHeader = ({ avatar, name, time }) => (
  <div className="post-header">
    <img className="post-avatar" src={avatar}/>

    <div className="post-info">
      <strong className="name">{name}</strong>
      <small className="time">{time}</small>
    </div>

    <hr/>
  </div>
);

PostHeader.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
}

export default PostHeader;
