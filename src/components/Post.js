import React from "react";

const Post = ({ title, text, handleDeletePost, id }) => {

    // Get the current date and time
  const currentDate = new Date().toLocaleString();
  return (
    <>
      <div className="ui comments">
        <div className="comment">
          <div className="content ">
            <div className="header-post">
              
                <h2>{title}</h2>
                
                <div className="post-date">
                {currentDate}
              <button
                className="ui red button"
                onClick={() => handleDeletePost(id)}
              >
                Delete
              </button>
              </div>
            </div>
            <div className="text">{text}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
