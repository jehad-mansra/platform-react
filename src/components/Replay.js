import React, { useEffect, useState } from "react";
import axios from "axios";


const Replay = ({ setAllReplays, allReplays, replay, id }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [replayEditing, setReplayEditing] = useState("");

  // Fetches all the replays for a specific post
  const fetchPosts = async () => {
    const response = await axios.get(`http://localhost:3001/Posts/${id}`);
    const replays = response.data.replay;
    setAllReplays(replays);
  };
  useEffect(() => {
     // Fetch the replays when the component mounts
    fetchPosts();
  }, []);

  const handleEditClick = async () => {
    setIsEditing(!isEditing);

 // Update the replay with the edited text
    if (!replayEditing) return;
    const finalReply = allReplays.map((e) => {
      if (e.id === replay.id) {
        return { ...replay, replay: replayEditing };
      } else {
        return e;
      }
    });

    // Update the local state with the edited replay
    setAllReplays(finalReply);
    await axios.patch(`http://localhost:3001/Posts/${id}`, {
      replay: finalReply,
    });
  };

  const handleDeleteReplay = async (ids) => {
    const response = await axios.get(`http://localhost:3001/Posts/${id}`);

    const replayData = response.data;
    const newReplays = response.data.replay.filter((item) => item.id !== ids);

    // Send a put request to update the post without the replay that get rid of with filter function
    axios.put(`http://localhost:3001/Posts/${id}`, {
      ...replayData,
      replay: newReplays,
    });

    // Update the local state with the updated set of replays
    setAllReplays(newReplays);
  };

  let replayContent;

   // Determine whether to render the replay input field or the replay text
  isEditing
    ? (replayContent = (
        <div className="ui mini input">
          <input
            
         
            onChange={(e) => setReplayEditing(e.target.value)}
          />
        </div>
      ))
    : (replayContent = <span className="form-replay">{replay.replay}</span>);

  return (
    <>
      <div className="replay" key={replay.id}>
        <div>
          <span className="avatar">
            <img
              src="https://cdn.discordapp.com/attachments/1112627096804655246/1121372700796014603/profile-user-round-red-icon-symbol-download-png-11639594337tco5j3n0ix-removebg-preview.png"
              alt="img"
            />
          </span>

          <span className="author">{replay.name}</span>
          <div className="metadata">
            <span className="date">{replay.date}</span>
          </div>
          <div className="text-reply">{replayContent}</div>
        </div>
        <div className="icons-replay">
          <button onClick={handleEditClick}>
            {isEditing ? (
              <i className="check icon" style={{ color: " #1678c2" }}></i>
            ) : (
              <i className="pen square icon" style={{ color: " #1678c2" }}></i>
            )}
          </button>

          <button onClick={() => handleDeleteReplay(replay.id)}>
            <i
              className="trash alternate icon"
              style={{ color: " #d01919" }}
            ></i>
          </button>
        </div>
      </div>
    </>
  );
};

export default Replay;

