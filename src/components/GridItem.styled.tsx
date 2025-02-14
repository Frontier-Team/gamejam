import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export const MotionCard = styled(motion.div)`
  background-color: ${({ theme }) => theme.colors.turquoise};
  color: black;
  padding: 1rem;
  text-align: center;
  cursor: pointer;
  user-select: none;
  position: relative;
  width: 100%;

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 80%;
  }
`;

export const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: ${({ theme }) => theme.colors.turquoiseShade};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ExpandedCard = styled(motion.div)`
  background-color: ${({ theme }) => theme.colors.turquoiseShade};
  padding-block: 0.5rem;
  padding-inline: 1rem;
  margin: 0;
`;
