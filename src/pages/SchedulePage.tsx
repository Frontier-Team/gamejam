import { Heading, PageContainer } from './AccessibilityPage.styled';
import { SubHeading } from './SchedulePage.styled';
import data from '../events.json';

export const SchedulePage = () => {
  const uniqueLocations = Array.from(new Set(data.events.map(event => event.location)));
  console.log('UNIQUE LOCATIONS: ', uniqueLocations)

  return (
    <PageContainer>
      <Heading>Schedule of the Day</Heading>
      <SubHeading>
        Below is the running order of GameJam 2025. With so much to do be sure to plan
        to get the most out of the day!
      </SubHeading>
    </PageContainer>
  );
};
