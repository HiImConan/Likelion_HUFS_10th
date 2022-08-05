import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const HeaderSection = styled.header`
  background-color: #2c4172;
  border-radius: 16px;
  padding-top: 7rem;
`;

export const NavUl = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 4rem;
  background-color: #aabacd;
`;

export const NavLi = styled(NavLink)`
  text-decoration: none;
  margin: 1rem;
  color: ${({ isActive }) => !isActive && "#2C4172"};
  font-size: ${({ isActive }) => isActive && "600"};
`;
