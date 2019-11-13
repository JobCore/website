import React, { useState } from "react";
import JobCoreLogo from "../images/jobcorelogo.png";
const Player = ({
  video,
  autoplay = 0,
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
      style={{
        width: "100%",
        height: height,
        display: "inline-block",
        backgroundSize: `contain`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        textAlign: "center",
        cursor: "pointer",
        ...style
      }}
    >
      <iframe src={`https://streamable.com/${video}`} frameborder="0" width="100%" height="100%" allowfullscreen style={{ width: '100%', height: '100%', overflow: 'hidden' }}></iframe>
    </div >
  );
};

export default Player;