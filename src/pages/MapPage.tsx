import Map from "../components/Map";
import styled from "@emotion/styled";

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
