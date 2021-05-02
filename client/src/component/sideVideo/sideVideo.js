import React from "react";
import { Link } from "react-router-dom";
import "./sideVideo.scss";

function SideVideo({ vidside, currentvidside }) {
  console.log(vidside);
  console.log(currentvidside);
  return (
    <div className="side__video">
      {vidside
        .filter((video) => video.id !== currentvidside.id)
        .map((video) => {
          return (
            <Link
              key={video.id}
              to={`/barre/${video.id}`}
              className="next__video"
            >
              <iframe
                width="250"
                height="150"
                src={video.url}
                title="YouTube video player"
                frameborder="0"
                autohide="1"
                //  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                // allowfullscreen
                modestbranding="1"
                sandbox="allow-forms allow-scripts allow-pointer-lock allow-same-origin allow-top-navigation"
              ></iframe>
            </Link>
          );
        })}
      ;
    </div>
  );
}

export default SideVideo;
