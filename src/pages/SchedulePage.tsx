import { Card, Connector, Line, PageContainer, TimelineContainer, TimelineItem } from './SchedulePage.styled';
import data from '../db.json';
import { Heading, SubHeading } from './SchedulePage.styled';

export const SchedulePage = () => {
  const timelineVariants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    }
  };

  return (
    <PageContainer>
      <Heading>
        Schedule of the Day
      </Heading>
      <SubHeading>
        March 3 2025 - GameJam for participating teams
      </SubHeading>
      <SubHeading>
        Find below the running order for March 4, 2025.
      </SubHeading>
      <TimelineContainer>
        <Line />
        {data.schedule.length > 0 && data.schedule.map((event, index) => (
          <TimelineItem
            key={event.description}
            side={index % 2 === 0 ? 'left' : 'right'}
            variants={timelineVariants}
            initial='hidden'
            animate='visible'
          >
            <Connector side={index % 2 === 0 ? 'left' : 'right'} />
            <Card>
              <h3>{event.time}</h3>
              <h3>{event.description}</h3>
            </Card>
          </TimelineItem>
        ))}
      </TimelineContainer>
    </PageContainer>
  );
};
