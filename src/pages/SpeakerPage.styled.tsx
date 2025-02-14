import styled from '@emotion/styled';
import { containerStyles } from '../styles/sharedStyles';

export const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  width: 50%;
  gap: 2.5rem;
  margin: 0 auto;

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    width: 70%;
  }
`;

export const StyledPageContainer = styled.div`
  ${() => containerStyles()}
`;
