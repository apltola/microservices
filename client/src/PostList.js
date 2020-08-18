import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default () => {
  const [posts, setPosts] = useState({});

  useEffect(() => {
    fetchPosts();
  }, [])

  const fetchPosts = async () => {
    const res = await axios.get('http://localhost:4000/posts');
    setPosts(res.data);
  }

  return (
    <section className="post-list">
      posts: {JSON.stringify(posts, null, 2)}
    </section>
  )
}