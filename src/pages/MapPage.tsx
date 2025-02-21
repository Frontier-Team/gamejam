
import styled from "@emotion/styled";
import Map from "../components/Map";
import { Heading, PageContainer } from "../styles/sharedStyles";

export default function MapPage() {
  return (
    <PageContainer>
      <Heading>Map/Floor plan</Heading>
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
