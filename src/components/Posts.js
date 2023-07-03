import React from "react";
import { useState, useEffect } from "react";
import "../styles/Posts.css";
import Form from "./Form";
import Post from "./Post";
import Replays from "./Replays";
import axios from "axios";

const Posts = () => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    const response = await axios.get("http://localhost:3001/Posts");
    setPosts(response.data);
  };

  useEffect(() => {
    // Fetch posts data from the server when the component mounts
    fetchPosts();
  }, []);

  const currentDate = new Date().toLocaleString();
  const handleAddPost = async () => {
    // Add a new post when the "Add Post" button is clicked
    if (!title || !text) return;
    const response = await axios.post("http://localhost:3001/Posts", {
      title,
      text,
      date: currentDate,
      replay: [],
    });

    const updatedPosts = [...posts, response.data];
    setPosts(updatedPosts);
    setText("");
    setTitle("");
  };

  const handleDeletePost = async (id) => {
    // Delete a post when the "Delete" button is clicked
    await axios.delete(`http://localhost:3001/Posts/${id}`);
    const updatedPosts = posts.filter((post) => post.id !== id);
    setPosts(updatedPosts);
  };
  return (
    <div className="postSection">
      <h1>Reviews</h1>
      <div className="postField">
      <Form
        title={title}
        setTitle={setTitle}
        text={text}
        setText={setText}
        handleAddPost={handleAddPost}
      />

</div>

      <hr />
      {posts.map((post) => {
        return (
          <div key={post.id}>
            <Post
              id={post.id}
              title={post.title}
              text={post.text}
              date={post.date}
              handleDeletePost={handleDeletePost}
            />
            <Replays key={post.date} id={post.id} />
          </div>
        );
      })}
    </div>
  );
};

export default Posts;
