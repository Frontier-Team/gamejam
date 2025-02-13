import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

export const StyledGridItem = styled.div`
  background-color: ${({ theme }) => theme.colors.turquoise};
  color: black;
  padding: 1rem;
  text-align: center;
  cursor: pointer;
  user-select: none;
  position: relative;
`;

const slideDown = keyframes`
  0% {
    max-height: 0;
    opacity: 0;
  }
  80% {
    max-height: 120px;
    opacity: 1;
  }
  100% {
    max-height: 100%;
    opacity: 1;
  }
`;

const slideUp = keyframes`
  0% {
    max-height: 100%;
    opacity: 1;
  }
  20% {
    max-height: 120px;
    opacity: 1;
  }
  100% {
    max-height: 0;
    opacity: 0;
  }
`;

interface StyledBioContainerProps {
  showBio: boolean;
};

export const StyledBioContainer = styled.div<StyledBioContainerProps>`
  position: absolute;
  left: 0;
  top: 100%;
  width: 100%;
  background-color: white;
  z-index: 10;
  overflow: hidden;
  opacity: ${({ showBio }) => (showBio ? '1' : '0')};
  animation: ${({ showBio }) => (showBio ? slideDown : slideUp)} 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards;
`;

export const BioContent = styled.p`
  background-color: ${({ theme }) => theme.colors.turquoiseShade};
  padding-block: 0.5rem;
  padding-inline: 1rem;
  margin: 0;
`;
