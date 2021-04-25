import React, { useState, useEffect } from "react";
import Mainvideo from "../component/mainvideo/Mainvideo";
import SideVideo from "../component/sideVideo/sideVideo";
import axios from "axios";

const Barre = () => {
  const [barrevideos, setBarrevideos] = useState(null);
  const [currentvideo, setCurrentvideo] = useState(null);

  const fetchData = async () => {
    const response = await axios.get("/api/barre/");
    setBarrevideos(response.data);
  };

  useEffect(() => {
    fetchData();
  }, []);
  //use useeffect so page loads with data
  if (!barrevideos) return null;
  setCurrentvideo(barrevideos[0]);
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
      <SideVideo barrvidside={barrevideos} currentvidside={currentvideo} />
    </div>
  );
};
export default Barre;
