import { useState } from 'react';
import { GridItem } from '../components/GridItem';
import { speakers } from '../utils';
import { StyledDiv, StyledGrid, StyledPageContainer } from './SpeakerPage.styled';
import { motion } from 'framer-motion';

export const SpeakerPage: React.FC = () => {
  const [ selectedItem, setSelectedItem ] = useState<string | null>(null);

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: index * 0.1, duration: 0.5, ease: 'easeOut' },
    }),
  };

  return (
      <StyledPageContainer>
        <h1>Speakers</h1>
        <StyledGrid>
          {speakers.map((speaker, index) => (
            <motion.div
              key={speaker.id}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              <GridItem
                key={speaker.id}
                {...speaker}
                isSelected={selectedItem === speaker.id}
                setSelectedItem={setSelectedItem}
              />
              </motion.div>
          ))}        
        </StyledGrid>
        <StyledDiv />
      </StyledPageContainer>
  );
};
