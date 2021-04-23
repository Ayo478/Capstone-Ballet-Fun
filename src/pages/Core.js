import React, { useState, useEffect } from "react";
import axios from "axios";

const Core = () => {
  const [corevideos, setcorevideos] = useState(null);
  const fetchData = async () => {
    const response = await axios.get("/api/Core/2");
    setcorevideos(response.data);
  };

  useEffect(() => {
    fetchData();
  }, []);
  //use useeffect so page loads with data
  if (!corevideos) return null;
  return (
    <div>
      <iframe
        width="560"
        height="315"
        src={corevideos.first_video}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>

      <iframe
        width="560"
        height="315"
        src={corevideos.second_video}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>

      <iframe
        width="560"
        height="315"
        src={corevideos.third_video}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>

      <iframe
        width="560"
        height="315"
        src={corevideos.fourth_video}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>

      <iframe
        width="560"
        height="315"
        src={corevideos.fifth_video}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  );
};
export default Core;
