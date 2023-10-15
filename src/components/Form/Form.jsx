import { useState } from "react";
import {
  StyledButton,
  StyledForm,
  StyledLink,
  StyledP,
  StyledTitle,
} from "./Form.styled";

export const Form = ({ title }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  console.log(title);

  const handleChange = (e) => {
    const { name, value } = e.target;
    name === "email" ? setEmail(value) : setPassword(value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const newUser = {
      email,
      password,
    };

    // dispatch(addContact(newContact));
    // handleClose();

    reset();
  };

  const reset = () => {
    setEmail("");
    setPassword("");
  };
  return (
    <>
      <StyledTitle>{title}</StyledTitle>
      <StyledForm onSubmit={handleSubmit}>
        <label>
          Email
          <input
            onChange={handleChange}
            type="text"
            name="email"
            value={email}
            placeholder="Email"
            // pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            // title="Name may contain only letters, apostrophe, dash and spaces."
            // required
          />
        </label>
        <label>
          Password
          <input
            onChange={handleChange}
            type="tel"
            name="password"
            value={password}
            placeholder="Password"
            // pattern="^\+?\d{1,4}?\(?\d{1,3}?\)?\d{1,4}?\d{1,4}?\d{1,9}$"
            // title="Phone number must be digits and can start with +"
            // required
          />
        </label>
        {title === "Login" && (
          <StyledLink to="/password_restoring">Forgot password?</StyledLink>
        )}
        <StyledButton type="submit">
          {title === "Login" ? "Sign In" : "Sign Up"}
        </StyledButton>

        <StyledP>
          {title === "Login" ? (
            <>
              Don’t have account?{" "}
              <StyledLink to="/register">Sign Up</StyledLink>
            </>
          ) : (
            <>
              Already have account? <StyledLink to="/login">Sign In</StyledLink>
            </>
          )}
        </StyledP>
      </StyledForm>
    </>
  );
};
