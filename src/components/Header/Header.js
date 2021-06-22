import React from "react";
import iconSet from "../../IconFont/selection.json";
import IcomoonReact from "icomoon-react";
import c from "./Header.module.css";
import logo from "../../images/logo.png";

function Header() {
  return (
    <header className={c.header}>
      <div className={c.logo__wrapper}>
        <div className={c.image__wrapper}>
          <img className={c.logo__image} src={logo} alt="wheel" />
        </div>
        <div className={c.logo__text}>АвтоДом</div>
      </div>
      <div className={c.phone__wrapper}>
        <div className={c.number__wrapper}>+380 (12) 345 67 89</div>
        <div className={c.number__wrapper}>+380 (21) 345 67 89</div>
        <div className={c.messengers}>
          <IcomoonReact
            className={c.messengers__item}
            iconSet={iconSet}
            size={30}
            icon="telegram"
          />
          <IcomoonReact
            className={c.messengers__item}
            iconSet={iconSet}
            size={30}
            icon="viber"
          />
          <IcomoonReact
            className={c.messengers__item}
            iconSet={iconSet}
            size={30}
            icon="whatsapp"
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
