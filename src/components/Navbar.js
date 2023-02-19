import React from 'react'
import style from "./Navbar.module.css";

function Navbar() {
  return (
    <div className={style.main}>
      <img
        className={style.imageIcon}
        alt=""
        src="https://www.carlogos.org/logo/Tata-Group-logo-3840x2160.png"
      />
      <div className={style.shop}>Shop</div>
      <div className={style.education}>Education</div>
      <div className={style.sublimationTips}>Sublimation Tips</div>
      <div className={style.contact}>Contact</div>
      <div className={style.myStory}>My Story</div>
      <img className={style.groupIcon} alt="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN2huUC1xTKi8V-yrpIuKtaRmPRzNaZi7r11YtjmV4Vg&s" />
    </div>
  );
}

export default Navbar

