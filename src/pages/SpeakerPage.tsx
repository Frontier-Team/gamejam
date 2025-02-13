import { GridItem } from '../components/GridItem';
import Page from '../components/Page';
import { Speaker } from '../types';
import { StyledGrid } from './SpeakerPage.styled';

export const SpeakerPage: React.FC = () => {
  const speakers: Speaker[] = [
    {
      id: 1,
      name: 'John Doe',
      role: 'Software Engineer',
      bio: 'John is a software engineer who loves to code.',
    },
    {
      id: 2,
      name: 'Jane Doe',
      role: 'UX Designer',
      bio: 'Jane is a web developer who loves to design.',
    },
    {
      id: 3,
      name: 'Alice Doe',
      role: 'Product Manager',
      bio: 'Alice is a product manager who loves to manage products.',
    },
    {
      id: 4,
      name: 'Bob Doe',
      role: 'DevOps Engineer',
      bio: 'Bob is a DevOps engineer who loves to deploy code.',
    }
  ];

  return (
    <Page>
      <h1>Speakers</h1>
      <StyledGrid>
        {speakers.map((speaker) => (
          <GridItem key={speaker.id} {...speaker}/>
        ))}        
      </StyledGrid>
    </Page>
  );
};
