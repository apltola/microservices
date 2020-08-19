import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CommentCreate from './CommentCreate';
import CommentList from './CommentList';

export default () => {
  const [posts, setPosts] = useState({});

  useEffect(() => {
    fetchPosts();
  }, [])

  const fetchPosts = async () => {
    const res = await axios.get('http://localhost:4000/posts');
    setPosts(res.data);
  }

  const renderedPosts = Object.values(posts).map(post => {
    return (
      <article className="post-container" key={post.id}>
        <div className="post-body">
          <h3>{post.title}</h3>
          <CommentList postId={post.id} />
          <CommentCreate postId={post.id} />
        </div>
      </article>
    )
  });

  return (
    <section className="post-list">
      {renderedPosts}

      {/* <div style={{marginTop: "5rem"}}>
        posts: {JSON.stringify(posts, null, 2)}
      </div> */}
    </section>
  )
}