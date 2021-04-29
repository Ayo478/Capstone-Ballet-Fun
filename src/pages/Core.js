import React, { useState, useEffect } from "react";
import axios from "axios";

import SideVideo from "../component/sideVideo/sideVideo";

const Core = () => {
  const [corevideos, setcorevideos] = useState(null);
  const [currentVideo, setCurrentvideo] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.get("/api/core/");
      setcorevideos(response.data);
      console.log(corevideos);
      setCurrentvideo(response.data[0]);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  if (!corevideos) return null;
  if (!currentVideo) return null;

  return (
    <div>
      <div>
        <iframe
          width="560"
          height="315"
          src={currentVideo.url}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <SideVideo vidside={corevideos} currentvidside={currentVideo} />
    </div>
  );
};
export default Core;
