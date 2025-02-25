import { Table } from '../components/Table';
import data from '../db.json';
import { Heading, PageContainer } from '../styles/sharedStyles';
import { Event } from '../types';

export const SpeakerPage = () => {
  const headers = [
    'Date',
    'Start',
    'End',
    'Title',
    'Description',
    'Speaker(s)'
  ];

  const fieldsToDisplay: (keyof Event)[] = [
    'date',
    'startTime',
    'endTime',
    'title',
    'description',
    'speakers'
  ];

  const uniqueLocations = Array.from(new Set(data.talks.map((talk) => talk.location)));

  return (
    <PageContainer>
      <Heading>Talk Agenda</Heading>
      {uniqueLocations.map((location) => (
        <Table
          key={location}
          heading={location}
          headers={headers}
          rows={data.talks.filter((talk) => talk.location === location)}
          fieldsToDisplay={fieldsToDisplay}
          largeFields={['description']}
        />
      ))}
    </PageContainer>
  );
};
