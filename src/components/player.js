import React, { useState } from "react";
import ReactPlayer from 'react-player'

const Player = ({
  video,
  autoplay = 1,
  rel,
  modest,
  placeholder,
  height = "100%",
  tittle = "My super video",
  style,
  controls = 0
}) => {
  const [status, setStatus] = useState("idle");

  return (
    <div
      // className="border"
      style={{
        width: "100%",
        height: height,
        display: "inline-block",
        backgroundSize: `contain`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundColor: "White",
        textAlign: "center",
        cursor: "pointer",
        backgroundImage: `url('${placeholder}')`,
        ...style

      }}
    >
      {status === "idle" ? (
        <div style={{ display: "inline-block" }}>
          <div
            onClick={() => setStatus("playing")}
            style={{
              height: height,
              display: "table-cell",
              verticalAlign: "middle"
            }}
          >
            <button
              style={{
                borderRadius: "50%",
                width: "80px",
                height: "80px",
                cursor: "pointer",
                fontSize: "20px"
              }}
            >
              ▶
            </button>
          </div>
        </div>
      ) : (


          <ReactPlayer url={video} playing loop controls="false" width="100%" />

        )}
    </div>
  );
};

export default Player;

