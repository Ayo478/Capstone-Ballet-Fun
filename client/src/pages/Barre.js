import React, { useState, useEffect } from "react";
import SideVideo from "../component/sideVideo/sideVideo";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./Barre.scss";

const Barre = () => {
  let id = useParams();
  const [barrevideos, setBarrevideos] = useState(null);
  const [currentVideo, setCurrentvideo] = useState(null);

  const fetchData = async () => {
    try {
      if (id) {
        const singleResponse = await axios.get(`/api/barre/${id}`);
        setCurrentvideo(singleResponse.data);
        const response = await axios.get("/api/barre/");
        setBarrevideos(response.data);
      } else {
      }
      const response = await axios.get("/api/barre/");
      setBarrevideos(response.data);
      console.log(barrevideos);
      setCurrentvideo(response.data[0]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (!barrevideos) return null;
  if (!currentVideo) return null;

  return (
    <div>
      <div className="barre__page">
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
      <SideVideo vidside={barrevideos} currentvidside={currentVideo} />
    </div>
  );
};
export default Barre;
