import { useState } from "react";
import Nav from "./Nav";
import style from "./header.module.css";

function Header({ fun }) {
  const [light, setLight] = useState(true);
  return (
    <header className={light?
      style.wrapper_header:
      style.wrapper_headerDark}>
      <div className={style.image}>
        <img src="https://cdn.pixabay.com/photo/2015/11/26/16/28/vintage-1064142_1280.png" />
      </div>
      <h3>testSite</h3>
      <Nav light={light}/>
      <div className={style.wrapper_switch}>
        <label>
          выбрать тему сайта:
          <span className={style.text_switch}>{light ? "светлая" : "тёмная"}</span>
          <input
            type="checkbox"
            onChange={(e) => {
              setLight(!e.target.checked);
              fun(!e.target.checked);
            }}
          ></input>
        </label>
      </div>
    </header>
  );
}

export default Header;
