import styled from "styled-components";
import heroBg from "../../images/hero.png";
import { Link } from "react-router-dom";

export const StyledHero = styled.section`
  background-image: linear-gradient(
      rgba(23, 34, 52, 0.6),
      rgba(23, 34, 52, 0.6)
    ),
    url(${heroBg});
  /* background-image: url(${heroBg}); */
  /* background-color: lightgray; */
  /* background-color: rgba(211, 211, 211, 0.5); */
  background-color: #172234;
  background-size: cover;
  background-position: 50%;
  background-repeat: no-repeat;
  height: 100vh;

  /* background: url(${heroBg}), lightgray 50% / cover no-repeat; */
`;

export const StyledContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 75%;
  padding-left: 0;
  padding-right: 0;
  padding-top: 297px;
  margin: 0 auto;
  text-align: center;
  /* display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto; */
  & h1 {
    color: #fff;
    text-align: center;
    /* font-family: Merriweather; */
    font-size: 64px;
    font-style: normal;
    font-weight: 700;
    line-height: 1.25; /* 125% */
    margin-bottom: 10px;
  }
  & p {
    color: #fff;
    text-align: center;
    font-family: Lato;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 1.3; /* 133.333% */
    letter-spacing: -0.48px;
    margin-bottom: 30px;
    max-width: 76%;
  }
`;

export const StyledListSection = styled.section`
  height: 100px;
  background-color: #172234;
`;

export const StyledLink = styled(Link)`
  display: inline-flex;
  padding: 10px 24px;
  align-items: center;
  color: #fff;

  /* Merriweather 20 */
  font-family: inherit;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 1.7; /* 170% */
  border-radius: 8px;
  border: 1px solid #fff;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    border 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    color: #b29f7e;
    background-color: transparent;
    border: 1px solid #b29f7e;
  }
`;
