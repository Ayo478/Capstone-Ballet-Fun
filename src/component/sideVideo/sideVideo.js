import React from "react";
import { Link } from "react-router-dom";

function SideVideo({ vidside, currentvidside }) {
  console.log(vidside);
  console.log(currentvidside);
  return (
    <div>
      {vidside
        .filter((video) => video.id !== currentvidside.id)
        .map((video) => {
          return (
            <Link key={video.id} to={video.id} className="next__video">
              <iframe
                width="100"
                height="100"
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
