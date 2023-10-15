import { StyledTitle } from "../../components/Form/Form.styled";
import {
  StyledBgWrapper,
  StyledFormWrapper,
  StyledLoginSection,
} from "../Login/Login.styled";

const PasswordRestore = () => {
  return (
    <>
      <>
        <StyledLoginSection>
          <StyledBgWrapper></StyledBgWrapper>
          <StyledFormWrapper>
            <StyledTitle>We are sorry!</StyledTitle>
            <p>This feature is under construction ;)</p>
          </StyledFormWrapper>
        </StyledLoginSection>
      </>
    </>
  );
};

export default PasswordRestore;
