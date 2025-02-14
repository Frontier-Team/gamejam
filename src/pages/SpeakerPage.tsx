import { useState } from 'react';
import { GridItem } from '../components/GridItem';
import { speakers } from '../utils';
import { StyledGrid, StyledPageContainer } from './SpeakerPage.styled';

export const SpeakerPage: React.FC = () => {
  const [ selectedItem, setSelectedItem ] = useState<string | null>(null);

  return (
    <StyledPageContainer>
      <h1>Speakers</h1>
      <StyledGrid>
        {speakers.map((speaker) => (
          <GridItem
            key={speaker.id}
            {...speaker}
            isSelected={selectedItem === speaker.id}
            setSelectedItem={setSelectedItem}
          />
        ))}        
      </StyledGrid>
    </StyledPageContainer>
  );
};
