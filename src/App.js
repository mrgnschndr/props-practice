import React from "react";
import "./insta.css";
// Task 1: Import the necessary modules here and assign them to the appropriate variables used below. Remember that JSON files are also treated like modules.
import Post from './InstagramPost.js';
import posts from './demopost.json';
// We don't need to import CommentSection or PostActions because they feed into the Post component in InstagramPost.js file

function App() {

  return (
    <div className="app">
      {posts.map((post, index) => (
        <Post 
          // Task 2: Pass down the data of each JSON object to this child component.
        />
      ))}
    </div>
  );
}

export default App;
