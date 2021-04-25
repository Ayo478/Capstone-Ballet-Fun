import React from "react";
import { Link } from "react-router-dom";

function SideVideo({ barrvidside, currentvidside }) {
  console.log(barrvidside);
  console.log(currentvidside);
  return (
    <div>
      {barrvidside
        .filter((video) => video.id !== currentvidside.id)
        .map((video) => {
          return (
            <Link key={video.id} to={video.id} className="next__video">
              <iframe
                width="560"
                height="315"
                src={video.url}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </Link>
          );
        })}
      ;
    </div>
  );
}

export default SideVideo;

/*
<iframe
        width="560"
        height="315"
        src={barrevideos.first_video}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
*/
