import styled from '@emotion/styled';
import { pageContainerStyles } from '../styles/sharedStyles';

export const PageContainer = styled.div`
  ${({ theme }) => pageContainerStyles(theme)}
`;
