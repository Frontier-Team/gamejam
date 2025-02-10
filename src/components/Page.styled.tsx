import styled from "@emotion/styled";

export const PageContainer = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  padding: 1rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    max-width: 540px;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    max-width: 720px;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    max-width: 960px;
  }

  main {
    width: 100%;
    height: 100%;
  }
`;
