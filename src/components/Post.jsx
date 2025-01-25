import React, { useState } from 'react';
import '../styles/Post.css';

const Post = ({ username, title, content, image, likes, readTime, tags }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(likes);
  const [isSaved, setIsSaved] = useState(false);

  const handleLike = () => {
    if (isLiked) {
      setLikeCount(likeCount - 1);
    } else {
      setLikeCount(likeCount + 1);
    }
    setIsLiked(!isLiked);
  };

  return (
    <article className="post">
      <div className="post-header">
        <div className="author-info">
          <span className="avatar">{username.split(' ')[0]}</span>
          <div>
            <h4>{username}</h4>
            <div className="post-meta">
              <span>{readTime} min read</span>
              <span>·</span>
              <span>{new Date().toLocaleDateString()}</span>
            </div>
          </div>
        </div>
        <button className={`save-button ${isSaved ? 'saved' : ''}`} onClick={() => setIsSaved(!isSaved)}>
          {isSaved ? '📥 Saved' : '📤 Save'}
        </button>
      </div>

      <div className="post-content">
        <h2 className="post-title">{title}</h2>
        {image && (
          <div className="post-image">
            <img src={image} alt={title} />
          </div>
        )}
        <p className="post-text">{content}</p>
      </div>

      <div className="post-tags">
        {tags && tags.map((tag, index) => (
          <span key={index} className="tag">#{tag}</span>
        ))}
      </div>
      
      <div className="post-actions">
        <div className="left-actions">
          <button className={`like-button ${isLiked ? 'liked' : ''}`} onClick={handleLike}>
            {isLiked ? '❤️' : '🤍'} {likeCount}
          </button>
          <button className="comment-button">💬 Comments</button>
        </div>
        <div className="right-actions">
          <button className="share-button">📤 Share</button>
        </div>
      </div>
    </article>
  );
};

export default Post;
