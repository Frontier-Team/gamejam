import styled from '@emotion/styled';

export default function ResourcesPage() {
  return (
    <Wrapper>
      <h1>Resources</h1>
      <h2>Template Repo</h2>
      <h2>Free tools for making games</h2>
      <CardsContainer>
        <ResourcesCard>
          <CardTitle>Game Engines</CardTitle>
          <Resource>
            <ResourceTitle>Unity Engine</ResourceTitle>
            <ResourceDescription>
              A versatile and widely-used game engine suitable for both 2D and
              3D games development.
            </ResourceDescription>
          </Resource>
        </ResourcesCard>
        <ResourcesCard>
          <CardTitle>Another Resource</CardTitle>
          <Resource>
            <ResourceTitle>Another Tool</ResourceTitle>
            <ResourceDescription>
              Description of another tool or resource.
            </ResourceDescription>
          </Resource>
        </ResourcesCard>
      </CardsContainer>

      <h2>Links to Tutorials</h2>
      <h2>Topics</h2>
      <p>
        Your team will be given a random finance-related topic from this list:
      </p>
      <TopicsList>
        <li>Investments</li>
        <li>Budgeting</li>
        <li>Protection</li>
        <li>GI</li>
        <li>Pensions - Paying In</li>
        <li>Pensions - Getting Out</li>
      </TopicsList>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 2rem;
`;

const CardsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.5rem;
`;

const ResourcesCard = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  width: 48%; /* Adjust the width to fit two cards in a row */
`;

const CardTitle = styled.h3`
  margin-bottom: 1rem;
  font-size: 1.5rem;
  color: #333;
`;

const Resource = styled.div`
  display: flex;
  align-items: center;
  background-color: #f9f9f9;
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 0.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const ResourceTitle = styled.h4`
  flex: 1;
  margin: 0;
  font-size: 1.2rem;
  color: #0073e6;
`;

const ResourceDescription = styled.p`
  flex: 2;
  margin: 0;
  padding-left: 1rem;
  font-size: 1rem;
  color: #555;
`;

const TopicsList = styled.ul`
  list-style-type: disc;
  padding-left: 1.5rem;
  font-size: 1rem;
  color: #333;
`;
