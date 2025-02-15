import { AnimatePresence } from 'framer-motion';
import { ExpandedCard, MotionCard, StyledBio, StyledMotionCardContainer } from './GridItem.styled';


interface GridItemProps {
  id: string;
  name: string;
  role: string;
  bio: string;
  isSelected: boolean;
  setSelectedItem: (id: string | null) => void;
};

export const GridItem = ({
  id,
  name,
  role,
  bio,
  isSelected,
  setSelectedItem,
}: GridItemProps) => {

  return (
    <StyledMotionCardContainer>
      <MotionCard
        layoutId={id}
        onClick={() => setSelectedItem(isSelected ? null : id)}
      >
        <h1 data-testid='collapsed-card-heading'>{name}</h1>
        <h2>{role}</h2>
      </MotionCard>
      <AnimatePresence>
        {isSelected && (
          <ExpandedCard
            layoutId={id}
            onClick={() => setSelectedItem(null)}
          >
            <h1 data-testid='expanded-card-heading'>{name}</h1>
            <h2>{role}</h2>
            <StyledBio>{bio}</StyledBio>
          </ExpandedCard>
        )}
      </AnimatePresence>
    </StyledMotionCardContainer>
  );
};
