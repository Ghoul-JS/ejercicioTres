import React from "react";

/* Importar los componentes */
/* Importar los iconos */
import LogoYt from "../icons/iconfinder_youtube_294703.png";
import LogoUp from "../icons/iconfinder_ic_videocam_48px_3669181.png";
import LogoApps from "../icons/iconfinder_ic_view_module_48px_3669149.png";
import LogoBell from "../icons/iconfinder_icon-ios7-bell_211694.png";

export default function Navbar(props) {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={LogoYt} alt="YouTube" />
      </div>

      <div className="search-bar">SearchBar</div>

      <div className="icon">
        <img src={LogoUp} alt="Cam" />
      </div>

      <div className="icon">
        <img src={LogoApps} alt="App" />
      </div>

      <div className="icon">
        <img src={LogoBell} alt="Bell" />
      </div>

      <div className="login">Login </div>
    </div>
  );
}
