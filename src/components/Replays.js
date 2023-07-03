import React, { useState, useEffect } from "react";
import Replay from "./Replay";
import axios from "axios";
import { Name } from "../items/names";

const Replays = ({ id }) => {
  const [replay, setReplay] = useState("");
  const [allReplays, setAllReplays] = useState([]);

  // Fetches all the replays for a specific post
  const fetchPosts = async () => {
    const response = await axios.get(`http://localhost:3001/Posts/${id}`);
    setAllReplays(response.data.replay);
  };

  useEffect(() => {
    // Fetch the replays when the component mounts
    fetchPosts();
  }, []);

  // Get the current date and time
  const currentDate = new Date().toLocaleString();

   // Handles adding a new replay
  const handleAddReplay = async (e) => {
    e.preventDefault();
    if (!replay) return;

     // Send a patch request to update the post with the new replay
    await axios.patch(`http://localhost:3001/Posts/${id}`, {
      replay: [
        ...allReplays,
        { replay: replay, date: currentDate, id: currentDate  , name :Name},
      ],
    });

    // Update the local state with the new replay
    setAllReplays([
      ...allReplays,
      { replay: replay, date: currentDate, id: currentDate },
    ]);

    // Reset the replay input field
    setReplay("");
  };

  return (
    <>
      {allReplays.map((replay) => {
        return (
          <div className="ui comments" key={replay.id}>
            <div className="comment">
              <div className="content ">
                <Replay
                  id={id}
                  replay={replay}
                  allReplays={allReplays}
                  setAllReplays={setAllReplays}
                />
              </div>
            </div>
          </div>
        );
      })}
      <form className="ui input" onSubmit={handleAddReplay}>
        <input
          className="form-replay"
          onChange={(e) => setReplay(e.target.value)}
          value={replay}
          placeholder="Replay..."
        />
        {replay ? <button className="ui green button">Reply</button> : ""}
      </form>
      <hr />
    </>
  );
};

export default Replays;
