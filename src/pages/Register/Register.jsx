import { Form } from "../../components/Form/Form";
import {
  StyledBgWrapper,
  StyledFormWrapper,
  StyledLoginSection,
} from "../Login/Login.styled";

const Register = () => {
  return (
    <>
      <StyledLoginSection>
        <StyledBgWrapper></StyledBgWrapper>
        <StyledFormWrapper>
          <Form title="Register" />
        </StyledFormWrapper>
      </StyledLoginSection>
    </>
  );
};
// після натискання на sign in мене має редиректити на головну сторінку і має змінюватись значення шз логд ін в редаксі

export default Register;
