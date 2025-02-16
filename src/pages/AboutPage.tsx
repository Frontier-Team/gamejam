import data from '../events.json';
import { Card, Line, TimelineContainer, TimelineItem } from './AboutPage.styled';

export const AboutPage = () => {
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
  const sortedEvents = data.events.sort((a, b) => {
    const dateA = new Date(`${a.date} ${a.startTime}`).getTime();
    const dateB = new Date(`${b.date} ${b.startTime}`).getTime();
    return dateA - dateB;
  });
  return (
    <TimelineContainer>
      <Line />
      {sortedEvents.map((event, index) => (
        <TimelineItem
          key={event.id}
          side={index % 2 === 0 ? 'left' : 'right'}
          variants={timelineVariants}
          initial='hidden'
          animate='visible'
        >
          <Card>
            <h2>{event.time}</h2>
            <h2>{event.description}</h2>
          </Card>
        </TimelineItem>
      ))}
    </TimelineContainer>
  );
};
