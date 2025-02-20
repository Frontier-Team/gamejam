import styled from '@emotion/styled';
import { pageContainerStyles } from '../styles/sharedStyles';

export const PageContainer = styled.div`
  ${() => pageContainerStyles()}
`;

export const Heading = styled.h1`
  text-align: center;
`;

export const SubHeading = styled.h2`
  font-size: 1.25rem;
  margin-top: 1.25rem;
  margin-bottom: 1rem;
  font-weight: bold;
  text-align: center;
`;

export const Paragraph = styled.p`
  font-size: 1rem;
  margin-bottom: 1rem;
`;

