import { GridItem } from '../components/GridItem';
import { speakers } from '../utils';
import { StyledGrid, StyledPageContainer } from './SpeakerPage.styled';

export const SpeakerPage: React.FC = () => {
  return (
    <StyledPageContainer>
      <h1>Speakers</h1>
      <StyledGrid>
        {speakers.map((speaker) => (
          <GridItem key={speaker.id} {...speaker}/>
        ))}        
      </StyledGrid>
    </StyledPageContainer>
  );
};
