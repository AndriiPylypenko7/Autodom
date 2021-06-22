import React, { useState } from "react";
import BurgerNav from "./BurgerNav/BurgerNav";
import styled from "styled-components";
import c from "./Burger.module.css";

const StyledBurger = styled.div`
  position: fixed;
  top: 100px;
  z-index: 2;
  right: 5px;
  width: 55px;
  height: 55px;
  background: ${({ open }) =>
    open ? "rgba(0, 0, 0, 0)" : "rgba(0, 0, 0, 0.6)"};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  flex-wrap: no-wrap;
  justify-content: space-around;
  align-items: center;
  padding: 4px;

  div {
    width: 100%;
    height: 8px;
    border-radius: 4px;
    background-color: ${({ open }) =>
      open ? "rgba(255, 255, 255, 0.9)" : "rgba(255, 255, 255, 0.5)"};
    transform-origin: 1px;
    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }
    &:nth-child(2) {
      transform: ${({ open }) => (open ? "translateX(100%)" : "translateX(0)")};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }
    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;
function Burger() {
  const [open, setOpen] = useState(false);
  return (
    <div className={c.wrap}>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div></div>
        <div></div>
        <div></div>
      </StyledBurger>
      <BurgerNav open={open} />
    </div>
  );
}

export default Burger;
