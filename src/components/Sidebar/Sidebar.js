import React from "react";
import c from "./Sidebar.module.css";
import iconSet from "../../IconFont/selection.json";
import IcomoonReact from "icomoon-react";

function Sidebar() {
  return (
    <section className={c.sidebar}>
      <a
        className={c.sidebar_item__wrapper}
        href="https://www.facebook.com/"
        target="_blank"
        rel="noreferrer"
      >
        Facebook{" "}
        <IcomoonReact
          className={c.messengers__item}
          iconSet={iconSet}
          size={40}
          icon="facebook"
        />
      </a>
      <a
        className={c.sidebar_item__wrapper}
        href="https://twitter.com/"
        target="_blank"
        rel="noreferrer"
      >
        Twitter
        <IcomoonReact
          className={c.messengers__item}
          iconSet={iconSet}
          size={40}
          icon="twitter"
        />
      </a>
      <a
        className={c.sidebar_item__wrapper}
        href="https://instagram.com/"
        target="_blank"
        rel="noreferrer"
      >
        Instagram
        <IcomoonReact
          className={c.messengers__item}
          iconSet={iconSet}
          size={40}
          icon="instagram"
        />
      </a>
    </section>
  );
}

export default Sidebar;
