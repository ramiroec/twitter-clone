// src/App.js
import React, { useState } from 'react';
import TweetList from './components/TweetList';
import TweetForm from './components/TweetForm';

function App() {
  const [tweets, setTweets] = useState([
    { content: '1852064677536432269', isEmbedded: true }, 
  ]);

  const addTweet = (content, isEmbedded) => {
    const newTweet = {
      content,
      isEmbedded,
      username: isEmbedded ? '' : 'usuario_demo',
      date: isEmbedded ? '' : new Date(),
    };
    setTweets([newTweet, ...tweets]);
  };

  return (
    <div style={styles.appContainer}>
      <h1 style={styles.header}>Twitter Clone</h1>
      <TweetForm addTweet={addTweet} />
      <TweetList tweets={tweets} />
    </div>
  );
}

const styles = {
  appContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#15202B',
    color: '#fff',
    minHeight: '100vh',
    paddingTop: '20px',
  },
  header: {
    fontSize: '32px',
    fontWeight: 'bold',
    marginBottom: '20px',
    color: '#1DA1F2',
  },
};

export default App;
