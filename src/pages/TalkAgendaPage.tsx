import { Table } from '../components/Table';
import data from '../db.json';
import { CenteredParagraph, Heading, PageContainer } from '../styles/sharedStyles';
import { Event } from '../types';

export const TalkAgendaPage = () => {
  const headers = [
    '',
    'Start',
    'End',
    'Title',
    'Description',
    'Speaker(s)',
    'Company',
  ];

  const fieldsToDisplay: (keyof Event)[] = [
    'startTime',
    'endTime',
    'title',
    'description',
    'speakers',
    'company',
  ];

  const uniqueLocations = Array.from(new Set(data.talks.map((talk) => talk.location)));

  return (
    <PageContainer>
      <Heading>Talk Agenda</Heading>
      <CenteredParagraph>Each of the studios holds 35 people, so it will be first come first serve. If you'd like to attend the talk please make sure you're on time to secure a space.</CenteredParagraph>
      <CenteredParagraph>All talks will be held on March 4, 2025.</CenteredParagraph>
      {uniqueLocations.map((location) => (
        <Table
          key={location}
          heading={location}
          headers={headers}
          rows={data.talks.filter((talk) => talk.location === location)}
          fieldsToDisplay={fieldsToDisplay}
          largeFields={['description']}
          showFavoritesFilter={true}
        />
      ))}
    </PageContainer>
  );
};
