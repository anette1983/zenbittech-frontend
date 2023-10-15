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
// після натискання на sign in мене має редиректити на головну сторінку і має змінюватись значення шз логд ін в редаксі

export default Login;
