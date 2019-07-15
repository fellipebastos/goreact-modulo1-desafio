import React from 'react'

// Import Components
import PostHeader from './PostHeader'
import PostBody from './PostBody'

const Post = ({ data }) => (
  <div className="post">
    <PostHeader avatar={data.avatar} name={data.name} time={data.time}/>
    <PostBody body={data.body} />
  </div>
);

export default Post;
