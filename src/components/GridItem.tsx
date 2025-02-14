import { AnimatePresence } from 'framer-motion';
import { ExpandedCard, MotionCard } from './GridItem.styled';


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
    <>
      <MotionCard
        layoutId={id}
        onClick={() => setSelectedItem(isSelected ? null : id)}
      >
        <h1>{name}</h1>
        <h2>{role}</h2>
      </MotionCard>
      <AnimatePresence>
        {isSelected && (
          <ExpandedCard
            layoutId={id}
            onClick={() => setSelectedItem(null)}
          >
            <h1>{name}</h1>
            <h2>{role}</h2>
            <h2>{bio}</h2>
          </ExpandedCard>
        )}
      </AnimatePresence>
    </>
  );
};
