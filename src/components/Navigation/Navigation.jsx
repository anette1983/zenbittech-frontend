import { StyledLink } from "../AppBar/AppBar.styled";

// import { useSelector } from "react-redux";
// import { selectAuth } from "redux/auth/selectors";
// import { useAuth } from 'hooks';

const Navigation = () => {
  //   const { isLoggedIn } = useAuth();
  //   const { isLoggedIn } = useSelector(selectAuth);
  //   const isLoggedIn = false;

  return (
    <nav>
      <StyledLink to="/">My Logo</StyledLink>
      {/* {isLoggedIn && <StyledNavLink to="/contacts">Contacts</StyledNavLink>} */}
    </nav>
  );
};

export default Navigation;
