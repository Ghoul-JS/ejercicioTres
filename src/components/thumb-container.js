import React from "react";

import video1 from "../images/video1.jpg";
import video2 from "../images/video2.jpg";
import video3 from "../images/video3.jpg";
import video4 from "../images/video4.jpg";
import video5 from "../images/video5.jpg";
import video6 from "../images/video6.jpg";
import video7 from "../images/video7.jpg";
import video8 from "../images/video8.jpg";

export function ThumbContainer() {
  return (
    <div className="thumb-container">
      <div className="thumbnail">
        <img src={video1} alt="video1" />
      </div>

      <div className="thumbnail">
        <img src={video2} alt="video2" />
      </div>

      <div className="thumbnail">
        <img src={video3} alt="video3" />
      </div>

      <div className="thumbnail">
        <img src={video4} alt="video4" />
      </div>

      <div className="thumbnail">
        <img src={video5} alt="video5" />
      </div>

      <div className="thumbnail">
        <img src={video6} alt="video6" />
      </div>

      <div className="thumbnail">
        <img src={video7} alt="video7" />
      </div>

      <div className="thumbnail">
        <img src={video8} alt="video8" />
      </div>
    </div>
  );
}
