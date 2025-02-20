import { Table } from '../components/Table';
import data from '../events.json';
import { Event } from '../types';
import { PageContainer } from './SpeakerPage.styled';

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
      <h1>Talk Schedule</h1>
      <Table
        heading='Talk Room 1'
        headers={headers}
        rows={data.events.filter((event) => event.location === 'Talk Room 1')}
        fieldsToDisplay={fieldsToDisplay}
        largeFields={['date', 'description']}
      />

      <Table
        heading='Talk Room 2'
        headers={headers}
        rows={data.events.filter((event) => event.location === 'Talk Room 2')}
        fieldsToDisplay={fieldsToDisplay}
        largeFields={['date', 'description']}
      />
    </PageContainer>
  );
};
