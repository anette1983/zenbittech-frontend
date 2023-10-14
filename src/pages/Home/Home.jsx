import {
  StyledContentWrapper,
  StyledHero,
  StyledLink,
  StyledListSection,
} from "./Home.styled";

const Home = () => {
  return (
    <>
      <StyledHero>
        <StyledContentWrapper>
          <h1>The chemical negatively charged</h1>
          <p>
            Numerous calculations predict, and experiments confirm, that the
            force field reflects the beam, while the mass defect is not formed.
            The chemical compound is negatively charged. Twhile the mass defect
            is
          </p>
          <StyledLink>Get Started</StyledLink>
        </StyledContentWrapper>
      </StyledHero>
      <StyledListSection>open deals list</StyledListSection>
    </>
  );
};

export default Home;
