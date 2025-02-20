import { Portfolio } from '../types';
import data from '../db.json';
import { Table } from '../components/Table';
import { Heading, PageContainer } from '../styles/sharedStyles';

export const PortfolioPage = () => {
  const headers = [
    'Name',
    'Occupation',
    'Details',
    'Get in touch',
  ];

  const fieldsToDisplay: (keyof Portfolio)[] = [
    'name',
    'occupation',
    'details',
    'contact',
  ];

  return (
    <PageContainer>
      <Heading>List of Profiles</Heading>
      <Table
        heading='Profile'
        headers={headers}
        rows={data.portfolio}
        fieldsToDisplay={fieldsToDisplay}
        largeFields={['details']}
      />
    </PageContainer>
  );
};
