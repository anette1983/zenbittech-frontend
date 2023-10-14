// import { useDispatch, useSelector } from "react-redux";
// import { logout } from "redux/auth/operations";
// import { selectAuth } from "redux/auth/selectors";
// import { ColoredButton, StyledUserWrapper } from "./UserMenu.styled";

const UserMenu = () => {
  //   const dispatch = useDispatch();
  //   const { user } = useSelector(selectAuth);

  return (
    <>
      <p>Usermenu logout button</p>
      {/* <ColoredButton
        sx={{ color: "rgb(42, 54, 59)", border: "1px solid rgb(42, 54, 59)" }}
        size="medium"
        type="button"
        variant="outlined"
        onClick={() => dispatch(logout())}
      >
        Logout
      </ColoredButton> */}
    </>
  );
};

export default UserMenu;
