import styled from '@emotion/styled';
import Map from '../components/Map';
import { Heading, PageContainer } from '../styles/sharedStyles';

export default function MapPage() {
  return (
    <PageContainer>
      <Heading>V&A Museum Map/Floor Plan</Heading>
      <Wrapper>
        <Map />
      </Wrapper>
    </PageContainer>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 2rem;
`;
