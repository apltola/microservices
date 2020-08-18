import React from 'react';
import PostCreate from './PostCreate';
import './App.css';
import PostList from './PostList';

export default () => {
  return (
    <main className="App">
      <header>
        <h1>Create post</h1>
      </header>

      <PostCreate />
      <PostList />
    </main>
  )
}