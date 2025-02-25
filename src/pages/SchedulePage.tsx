import { CenteredParagraph, Heading, PageContainer } from '../styles/sharedStyles';
import { Timeline } from '../components/Timeline';
import data from '../db.json';

export const SchedulePage = () => {
  return (
    <PageContainer>
      <Heading>
        Schedule of the Day
      </Heading>
      <CenteredParagraph>
        March 3 2025 - GameJam for participating teams
      </CenteredParagraph>
      <CenteredParagraph>
        Find below the running order for March 4, 2025.
      </CenteredParagraph>
      <Timeline schedule={data.schedule}/>
    </PageContainer>
  );
};
