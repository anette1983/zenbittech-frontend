import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledAppBar = styled.header`
  /* position: fixed;
  top: 0;
  left: 0;
  right: 0; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 18px 80px;
  background-color: #172234;
  box-shadow: 0px 10px 40px 0px rgba(0, 0, 0, 0.06),
    0px 2px 10px 0px rgba(0, 0, 0, 0.1);

  /* border-bottom: 1px solid #ececec; */
  /* box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 6px rgba(0, 0, 0, 0.16); */
`;

export const StyledLink = styled(Link)`
  color: #fff;

  font-size: 28px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.2; /* 121.429% */
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    color: #b29f7e;
  }
  /* &.active {
    color: #e84a5f;
  } */
`;
