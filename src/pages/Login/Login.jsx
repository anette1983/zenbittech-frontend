import { Form } from "../../components/Form/Form";
import {
  StyledBgWrapper,
  StyledFormWrapper,
  StyledLoginSection,
} from "./Login.styled";

const Login = () => {
  return (
    <>
      <StyledLoginSection>
        <StyledBgWrapper></StyledBgWrapper>
        <StyledFormWrapper>
          <Form title="Login" />
        </StyledFormWrapper>
      </StyledLoginSection>
    </>
  );
};

export default Login;
