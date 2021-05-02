import React from "react";
import "./Mainvideo.scss";

function Mainvideo({ barrvid }) {
  let currentVideo = barrvid[0];
  console.log(barrvid);
  return (
    <div className="barre__video">
      <iframe
        className="barre__video"
        width="750"
        height="600"
        src={currentVideo.url}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  );
}

export default Mainvideo;
