import AuthNav from "../AuthNav/AuthNav";
import Navigation from "../Navigation/Navigation";
import UserMenu from "../UserMenu/UserMenu";
// import { useSelector } from "react-redux";
// import { selectAuth } from "redux/auth/selectors";
import { StyledAppBar } from "./AppBar.styled";

const AppBar = () => {
  // const {isLoggedIn } = useSelector(selectAuth);
  const isLoggedIn = false;

  return (
    <StyledAppBar>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </StyledAppBar>
  );
};

export default AppBar;
