import React, { useState, useEffect } from "react";
import axios from "axios";

const Barre = () => {
  const [barrevideos, setBarrevideos] = useState(null);
  const fetchData = async () => {
    const response = await axios.get("/api/barre/1");
    setBarrevideos(response.data);
  };

  useEffect(() => {
    fetchData();
  }, []);
  //use useeffect so page loads with data
  if (!barrevideos) return null;
  return (
    <div>
      <iframe
        width="560"
        height="315"
        src={barrevideos.first_video}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>

      <iframe
        width="560"
        height="315"
        src={barrevideos.second_video}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>

      <iframe
        width="560"
        height="315"
        src={barrevideos.third_video}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>

      <iframe
        width="560"
        height="315"
        src={barrevideos.fourth_video}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>

      <iframe
        width="560"
        height="315"
        src={barrevideos.fifth_video}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  );
};
export default Barre;
