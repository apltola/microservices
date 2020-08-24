import React from 'react';

export default ({ comments }) => {
  const renderedComments = comments.map(comment => {
    let content;
    let fontStyle = 'normal';
    let color = 'inherit';

    if (comment.status === 'approved') {
      content = comment.content;
    } else if (comment.status === 'pending') {
      content = 'Comment awaiting moderation';
      fontStyle = 'italic';
      color = 'rgba(0,0,0,.6)'
    } else if (comment.status === 'rejected') {
      content = 'Comment rejected';
      fontStyle = 'italic';
      color = 'rgba(0,0,0,.6)';
    }

    return (
      <li key={comment.id} style={{ fontStyle, color, paddingBottom: '10px' }}>
        {content}
      </li>
    );
  });

  return (
    <ul>
      {renderedComments}
    </ul>
  );
}