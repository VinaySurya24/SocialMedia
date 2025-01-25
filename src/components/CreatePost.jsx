import React, { useState } from 'react';
import '../styles/CreatePost.css';

const CreatePost = ({ onPost }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState('');
  const [isExpanded, setIsExpanded] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() && content.trim()) {
      onPost({ title, content, image });
      setTitle('');
      setContent('');
      setImage('');
      setIsExpanded(false);
    }
  };

  return (
    <div className="create-post">
      <form onSubmit={handleSubmit}>
        <div className="post-input">
          <span className="avatar">👤</span>
          {!isExpanded ? (
            <input
              type="text"
              placeholder="What's on your mind?"
              onClick={() => setIsExpanded(true)}
              className="title-input collapsed"
            />
          ) : (
            <div className="expanded-form">
              <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="title-input"
              />
              <textarea
                placeholder="Tell your story..."
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="content-input"
              />
              <input
                type="text"
                placeholder="Image URL (optional)"
                value={image}
                onChange={(e) => setImage(e.target.value)}
                className="image-input"
              />
              <div className="form-actions">
                <button type="button" onClick={() => setIsExpanded(false)} className="cancel-button">
                  Cancel
                </button>
                <button type="submit" className="publish-button">
                  Publish
                </button>
              </div>
            </div>
          )}
        </div>
      </form>
    </div>
  );
};

export default CreatePost;
