// import { useDispatch, useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/auth/operations";
import { StyledRegisterButton } from "./UserMenu.styled";

const UserMenu = () => {
  const dispatch = useDispatch();
  return (
    <>
      <StyledRegisterButton onClick={() => dispatch(logout())}>
        Sign Out
      </StyledRegisterButton>
    </>
  );
};

export default UserMenu;
