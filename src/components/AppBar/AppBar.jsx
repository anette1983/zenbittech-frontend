import { useSelector } from "react-redux";
import AuthNav from "../AuthNav/AuthNav";
import Navigation from "../Navigation/Navigation";
import UserMenu from "../UserMenu/UserMenu";
import { StyledAppBar } from "./AppBar.styled";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <StyledAppBar>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </StyledAppBar>
  );
};

export default AppBar;
