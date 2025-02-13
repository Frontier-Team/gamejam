import styled from '@emotion/styled';

export const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, minmax(200px, 1fr));
  width: 50%;
  gap: 4rem;
  margin: 0 auto;

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: repeat(4, minmax(200px, 1fr));
    width: 100%;
  }
`;
