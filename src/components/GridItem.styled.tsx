import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export const StyledMotionCardContainer = styled.div`
  position: relative;
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
  border-radius: 1rem;
  z-index: 100;
  top: 0%;
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.2);
  width: 100%;
  text-align: center;
`;

export const StyledBio = styled.h3`
  padding: 1rem;
`;
