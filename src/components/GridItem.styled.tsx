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
  border-radius: 1rem;
  width: 100%;

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
  max-width: 600px;
  text-align: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    top: 50%;
    right: 20%;
  }
`;
