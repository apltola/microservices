import React, { useState } from 'react';
import axios from 'axios';

export default ({ postId }) => {
  const [content, setContent] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();

    await axios.post(`http://localhost:4001/posts/${postId}/comments`, { content });
    setContent('');
  }

  return (
    <div className="comment-form">
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>New comment</label>
          <input value={content} onChange={e => setContent(e.target.value)} />
        </div>
        <button className="submit-button">Submit</button>
      </form>
    </div>
  )
}