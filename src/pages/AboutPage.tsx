import { useEffect, useState } from 'react';
import data from '../events.json';
import { Button, Card, Line, StyledForm, StyledFormElement, StyledHeading, TimelineContainer, TimelineItem } from './AboutPage.styled';
import { Event } from '../types';

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

  const [ date, setDate ] = useState<string>('');
  const [ location, setLocation ] = useState<string>('');
  const [ events, setEvents ] = useState<Event[]>([]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const filteredEvents = data.events.filter((event) => {
      return event.date === date && event.location === location;
    });
    const sortedEvents = filteredEvents.sort((a, b) => {
      const dateA = new Date(`${a.date} ${a.startTime}`).getTime();
      const dateB = new Date(`${b.date} ${b.startTime}`).getTime();
      return dateA - dateB;
    });
    setEvents(sortedEvents);
  };

  const eventDates = [...new Set(data.events.map((event) => event.date))];
  const eventLocations = [...new Set(data.events.map((event) => event.location))];

  useEffect(() => {
    setEvents([]);
  }, [date, location]);

  return (
    <>
      <StyledForm onSubmit={handleSubmit}>
        <StyledFormElement>
          <label htmlFor='date'>Date</label>
          <select id='date' value={date} onChange={(e) => setDate(e.target.value)}>
            <option value=''>{''}</option>
            {eventDates.map((date) => (
              <option key={date} value={date}>{date}</option>
            ))}
          </select>
        </StyledFormElement>
        <StyledFormElement>
          <label htmlFor='location'>Location</label>
          <select id='location' value={location} onChange={(e) => setLocation(e.target.value)}>
            <option value=''>{''}</option>
            {eventLocations.map((location) => (
              <option key={location} value={location}>{location}</option>
            ))}
          </select>
        </StyledFormElement>
        <StyledFormElement>
          <Button type='submit'>View Schedule</Button>
        </StyledFormElement>
      </StyledForm>
      {events.length > 0 && (
        <>
          <StyledHeading>{location.toLocaleUpperCase()}</StyledHeading>
          <StyledHeading>{date}</StyledHeading>
        </>
      )}
      <TimelineContainer>
        <Line />
        {events.length > 0 && events.map((event, index) => (
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
    </>
  );
};
