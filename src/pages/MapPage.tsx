
import styled from "@emotion/styled";
import Map from "../components/Map";

export default function MapPage() {
  return (
    <Wrapper>
      <h1>Map/Floor plan</h1>
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
