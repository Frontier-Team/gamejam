import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export const StyledMotionCardContainer = styled.div`
  position: relative;

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    position: static;
  }
`;

export const MotionCard = styled(motion.div)`
  background-color: ${({ theme }) => theme.colors.turquoise};
  color: black;
  text-align: center;
  cursor: pointer;
  user-select: none;
  position: relative;
  border-radius: 1rem;
  width: 100%;
  box-sizing: border-box;
  height: 10rem;
  padding-top: 1rem;
`;

export const ExpandedCard = styled(motion.div)`
  background-color: ${({ theme }) => theme.colors.turquoiseShade};
  position: absolute;
  top: 0%;
  right: 20%;
  padding: 2rem;
  border-radius: 1rem;
  z-index: 100;
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.2);
  width: 50%;
  text-align: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    position: absolute;
    top: 50%;
    right: 20%;
  }
`;
