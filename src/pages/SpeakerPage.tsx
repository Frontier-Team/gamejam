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

  return (
    <PageContainer>
      <Heading>Talk Schedule</Heading>
      <Table
        heading='Talk Room 1'
        headers={headers}
        rows={data.events.filter((event) => event.location === 'Talk Room 1')}
        fieldsToDisplay={fieldsToDisplay}
        largeFields={['description']}
      />

      <Table
        heading='Talk Room 2'
        headers={headers}
        rows={data.events.filter((event) => event.location === 'Talk Room 2')}
        fieldsToDisplay={fieldsToDisplay}
        largeFields={['description']}
      />
    </PageContainer>
  );
};
