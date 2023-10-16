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

export default Register;
