import React, { useState, useEffect } from "react";
import axios from "axios";

const Workout = () => {
  const [workoutvideos, setWorkoutvideos] = useState(null);
  const fetchData = async () => {
    const response = await axios.get("/api/Workout/3");
    setWorkoutvideos(response.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (!workoutvideos) return null;
  return (
    <div>
      <iframe
        width="560"
        height="315"
        src={workoutvideos.first_video}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>

      <iframe
        width="560"
        height="315"
        src={workoutvideos.second_video}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>

      <iframe
        width="560"
        height="315"
        src={workoutvideos.third_video}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>

      <iframe
        width="560"
        height="315"
        src={workoutvideos.fourth_video}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>

      <iframe
        width="560"
        height="315"
        src={workoutvideos.fifth_video}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  );
};
export default Workout;
