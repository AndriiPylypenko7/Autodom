import React from "react";
import { NavLink } from "react-router-dom";
import c from "./MainNav.module.css";

function MainNav() {
  return (
    <nav className={c.main__nav}>
      <ul className={c.main__nav_list}>
        <NavLink
          exact
          to="/main"
          className={c.main__nav_item}
          activeClassName={c.active}
        >
          Аренда
        </NavLink>
        <NavLink
          to="/main/longrent"
          className={c.main__nav_item}
          activeClassName={c.active}
        >
          Долгосрочная аренда
        </NavLink>
        <NavLink
          to="/main/weeding"
          className={c.main__nav_item}
          activeClassName={c.active}
        >
          Свадебный кортеж
        </NavLink>
        <NavLink
          to="/main/transfer"
          className={c.main__nav_item}
          activeClassName={c.active}
        >
          Трансфер из Аэропорта
        </NavLink>
      </ul>
    </nav>
  );
}

export default MainNav;
