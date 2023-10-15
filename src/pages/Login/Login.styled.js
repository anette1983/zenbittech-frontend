import styled from "styled-components";
import loginBg from "../../images/login.png";

export const StyledLoginSection = styled.section`
  display: flex;
`;

export const StyledBgWrapper = styled.div`
  width: 62%;
  height: 100vh;
  background-image: url(${loginBg});
  background-color: #172234;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

export const StyledFormWrapper = styled.aside`
  /* padding-top: 295px; */
  padding-top: calc((100vh - 300px) / 2);
  /* margin: 0 auto; */
  /* padding-left: 100px;
  padding-right: 100px; */
  padding-left: 7%;
  padding-right: 7%;
`;
