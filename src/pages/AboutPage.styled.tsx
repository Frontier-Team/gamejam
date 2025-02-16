import { motion } from 'framer-motion';
import styled from '@emotion/styled';

export const TimelineContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  gap: 2.5rem;
  margin-bottom: 2rem;
`;

export const Line = styled.div`
  position: absolute;
  left: 50%;
  width: 0.25rem;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.turquoise};
  transform: translateX(-50%);
`;

interface TimelineItemProps {
  side: 'left' | 'right';
};

export const TimelineItem = styled(motion.div)<TimelineItemProps>`
  display: flex;
  justify-content: ${({ side }) => side === 'left' ? 'flex-start' : 'flex-end'};
  width: 100%;
  max-width: 800px;
  padding: 20px 0;
  position: relative;

  &:before {
    content: '';
    position: absolute;
    left: 50%;
    top: 50%;
    width: 2.5rem;
    height: 2.5rem;
    background-color: ${({ theme }) => theme.colors.turquoise};
    border-radius: 50%;
    transform: translate(-50%, -50%);
  }
`;

export const Card = styled.div`
  background-color: ${({ theme }) => theme.colors.turquoise};
  color: ${({ theme }) => theme.colors.teal};
  padding: 2rem;
  border-radius: 1rem;
  width: 45%;
  max-width: 300px;
  word-wrap: break-word;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 1);
  position: relative;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 30%;
  }
`;

export const StyledForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
  flex-direction: column;
`;

export const StyledFormElement = styled.div`
  margin-bottom: 0.5rem;
`;

export const StyledHeading = styled.h1`
  text-align: center;
`;