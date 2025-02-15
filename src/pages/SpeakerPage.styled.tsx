import styled from '@emotion/styled';
import { containerStyles } from '../styles/sharedStyles';

export const StyledGrid = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr;
  gap: 2.5rem;
  margin: 0 auto;
  padding-bottom: 2rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;

export const StyledPageContainer = styled.div`
  ${() => containerStyles()}
  margin-bottom: 2rem;
`;

export const StyledDiv = styled.div`
  height: 2rem;
`;
