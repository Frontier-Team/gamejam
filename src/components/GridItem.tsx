import { useState } from 'react';
import { AnimatePresence, AnimateSharedLayout, motion } from 'framer-motion';
import { BioContent, StyledBioContainer, StyledGridItem } from './StyledGridItem.styled';
import { ExpandedCard, MotionCard, Overlay } from './GridItem.styled';


interface GridItemProps {
  id: string;
  name: string;
  role: string;
  bio: string;
};

export const GridItem = ({
  id,
  name,
  role,
  bio,
}: GridItemProps) => {
  const [showBio, setShowBio] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleItem = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      <MotionCard
        layoutId={id}
        onClick={toggleItem}
      >
        <h1>{name}</h1>
        <h2>{role}</h2>
      </MotionCard>
      <AnimatePresence>
        {isExpanded && (
          <ExpandedCard
            layoutId={id}
            onClick={toggleItem}
          >
            {bio}
          </ExpandedCard>
        )}
      </AnimatePresence>
    </>
  );
};
