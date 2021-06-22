import React from "react";
import { NavLink } from "react-router-dom";
import c from "./BurgerNav.module.css";
import iconSet from "../../../../IconFont/selection.json";
import IcomoonReact from "icomoon-react";
import styled from "styled-components";

const Nav = styled.div`
  transform: ${({ open }) => (open ? "translateY(0)" : "translateY(-400px)")};
`;

function BurgerNav({ open }) {
  return (
    <Nav open={open} className={c.burger__container}>
      <ul className={c.burger__list}>
        <li className={c.burger__item}>
          <NavLink
            className={c.burger__link}
            activeClassName={c.link__active}
            to="/"
            exact
          >
            Автопарк
          </NavLink>
        </li>
        <li className={c.burger__item}>
          <NavLink
            className={c.burger__link}
            activeClassName={c.link__active}
            to="/main"
          >
            Услуги
          </NavLink>
        </li>
        <li className={c.burger__item}>
          <NavLink
            className={c.burger__link}
            activeClassName={c.link__active}
            to="/price"
          >
            Тарифы
          </NavLink>
        </li>
        <li className={c.burger__item}>
          <NavLink
            className={c.burger__link}
            activeClassName={c.link__active}
            to="/requirements"
          >
            Условия
          </NavLink>
        </li>
        <li className={c.burger__item}>
          <NavLink
            className={c.burger__link}
            activeClassName={c.link__active}
            to="/contacts"
          >
            Контакты
          </NavLink>
        </li>
      </ul>
      <div className={c.icon__wrapper}>
        <a
          className={c.sidebar_item__wrapper}
          href="https://www.facebook.com/"
          target="_blank"
          rel="noreferrer"
        >
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
          <IcomoonReact
            className={c.messengers__item}
            iconSet={iconSet}
            size={40}
            icon="instagram"
          />
        </a>
      </div>
    </Nav>
  );
}

export default BurgerNav;
