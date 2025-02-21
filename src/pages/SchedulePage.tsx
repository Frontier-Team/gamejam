import { Card, Connector, Line, TimelineContainer, TimelineItem } from './SchedulePage.styled';
import data from '../db.json';
import { CenteredParagraph, Heading, PageContainer, Paragraph } from '../styles/sharedStyles';

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
      <CenteredParagraph>
        March 3 2025 - GameJam for participating teams
      </CenteredParagraph>
      <CenteredParagraph>
        Find below the running order for March 4, 2025.
      </CenteredParagraph>
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
              <Paragraph>{event.time}</Paragraph>
              <Paragraph>{event.description}</Paragraph>
            </Card>
          </TimelineItem>
        ))}
      </TimelineContainer>
    </PageContainer>
  );
};
