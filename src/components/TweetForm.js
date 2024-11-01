// src/components/TweetForm.js
import React, { useState } from 'react';

const TweetForm = ({ addTweet }) => {
  const [content, setContent] = useState('');
  const [isEmbedded, setIsEmbedded] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!content) return;
    addTweet(content, isEmbedded);
    setContent('');
    setIsEmbedded(false);
  };

  return (
    <form onSubmit={handleSubmit} style={styles.formContainer}>
      <textarea
        placeholder="Escribe un tweet o agrega un link a un tweet famoso"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        style={styles.textarea}
      />
      <label style={styles.label}>
        <input
          type="checkbox"
          checked={isEmbedded}
          onChange={(e) => setIsEmbedded(e.target.checked)}
        />
        Incrustar como Tweet de Twitter
      </label>
      <button type="submit" style={styles.button}>Tweet</button>
    </form>
  );
};

const styles = {
  formContainer: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '600px',
    marginBottom: '20px',
  },
  textarea: {
    padding: '28px',
    fontSize: '18px',
    resize: 'none',
    marginBottom: '4px',
    backgroundColor: '#1e1e1e',
    color: '#fff',
    border: '1px solid #333',
    borderRadius: '5px',
  },
  label: {
    color: '#bbb',
    fontSize: '14px',
    marginBottom: '10px',
  },
  button: {
    padding: '12px',
    fontSize: '16px',
    backgroundColor: '#1DA1F2',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default TweetForm;
