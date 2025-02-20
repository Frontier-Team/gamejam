
import styled from "@emotion/styled";
import Map from "../components/Map";
import { Heading } from "../styles/sharedStyles";

export default function MapPage() {
  return (
    <Wrapper>
      <Heading>Map/Floor plan</Heading>
      <Map />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 2rem;
`;
