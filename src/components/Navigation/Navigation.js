import React from "react";
import { NavLink } from "react-router-dom";
import c from "./Navigation.module.css";

function Navigation() {
  return (
    <nav className={c.nav}>
      <div className={c.nav__text}>Аренда автомобилей</div>
      <ul className={c.nav__list}>
        <li className={c.list__item}>
          <NavLink
            className={c.nav__item}
            activeClassName={c.active}
            to="/"
            exact
          >
            Автопарк
          </NavLink>
        </li>
        <li className={c.list__item}>
          <NavLink
            className={c.nav__item}
            activeClassName={c.active}
            to="/main"
          >
            Услуги
          </NavLink>
        </li>
        <li className={c.list__item}>
          <NavLink
            className={c.nav__item}
            activeClassName={c.active}
            to="/price"
          >
            Тарифы
          </NavLink>
        </li>
        <li className={c.list__item}>
          <NavLink
            className={c.nav__item}
            activeClassName={c.active}
            to="/requirements"
          >
            Условия
          </NavLink>
        </li>
        <li className={c.list__item}>
          <NavLink
            className={c.nav__item}
            activeClassName={c.active}
            to="/contacts"
          >
            Контакты
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
