import styled from "styled-components";
import Image from "../assets/Image";

export const LayoutWrapper = styled.div`
  width: 500px;
  height: 700px;

  position: relative;
  background: #f7f7f7;
  border-radius: 16px;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);

  margin: 0 auto;

  margin-top: 96px;
  margin-bottom: 32px;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.header`
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

export const Main = styled.div`
  height: 100%;
  display: flex;
  margin: 0 auto;
`;
