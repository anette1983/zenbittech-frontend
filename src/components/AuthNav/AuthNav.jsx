import {
  StyledDiv,
  StyledLoginLink,
  StyledRegisterLink,
} from "./AuthNav.styled";

const AuthNav = () => {
  return (
    <StyledDiv>
      <StyledLoginLink to="/login">Log In</StyledLoginLink>
      <StyledRegisterLink to="/register">Sign Up</StyledRegisterLink>
    </StyledDiv>
  );
};

export default AuthNav;
