import React from "react";

function Mainvideo({ barrvid }) {
  let currentVideo = barrvid[0];
  console.log(barrvid);
  return (
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
  );
}

export default Mainvideo;
