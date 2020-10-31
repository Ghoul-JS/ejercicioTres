import React from "react";

import IconHome from "../icons/iconfinder_ic_home_48px_3669170.png";
import IconTrends from "../icons/iconfinder_Icon_Element_Fire_03_513726.png";
import IconSubscriptions from "../icons/iconfinder_ic_subscriptions_48px_3669213.png";
import IconLibrary from "../icons/iconfinder_ic_playlist_play_48px_3669290.png";

export function Sidebar(props) {
  return (
    <div className="sidebar">
      <div className="icon">
        <img src={IconHome} alt="icono" />
        <p>Principal</p>
      </div>

      <div className="icon">
        <img src={IconTrends} alt="icono" />
        <p>Tendencias</p>
      </div>

      <div className="icon">
        <img src={IconSubscriptions} alt="icono" />
        <p>Suscripciones</p>
      </div>

      <div className="icon">
        <img src={IconLibrary} alt="icono" />
        <p>Biblioteca</p>
      </div>
    </div>
  );
}
