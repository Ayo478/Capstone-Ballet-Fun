import React, { useState, useEffect } from "react";
import axios from "axios";
import SideVideo from "../component/sideVideo/sideVideo";
import "./Workout.scss";

const Workout = () => {
  const [workoutvideos, setworkoutvideos] = useState(null);
  const [currentVideo, setCurrentvideo] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.get("/api/Workout/");
      setworkoutvideos(response.data);
      console.log(workoutvideos);
      setCurrentvideo(response.data[0]);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  if (!workoutvideos) return null;
  if (!currentVideo) return null;

  return (
    <div>
      <div className="workout__page">
        <iframe
          width="760"
          height="315"
          src={currentVideo.url}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <SideVideo vidside={workoutvideos} currentvidside={currentVideo} />
    </div>
  );
};
export default Workout;
