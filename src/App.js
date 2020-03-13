import React from 'react';
import './App.css';
import PostList from './posts/PostList';
import UserList from './users/UserList'

function App() {


  return (
    <div className="App">
      <header className="App-header">
    
      <h2>Kim's Blog Posting</h2>
      </header>
      <PostList/>
      {/* <UserList/>
       */}
    </div>
  );
}

export default App;
