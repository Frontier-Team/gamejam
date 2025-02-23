import styled from "@emotion/styled";
import { SetStateAction, useState } from "react";
import data from "../db.json";
import { pageContainerStyles } from "../styles/sharedStyles";

export default function ResourcesPage() {
  const [activeFilter, setActiveFilter] = useState("all");

  const handleFilterChange = (filter: SetStateAction<string>) => {
    setActiveFilter(filter);
  };

  const filteredTutorials = data.tutorials.filter((tutorial) => {
    if (activeFilter === "all") return true;
    return tutorial.type === activeFilter;
  });

  return (
    <PageContainer>
      <Wrapper>
        <h1 style={{ textAlign: "center"}}>Resources</h1>
        <h2>Template Repo</h2>

        <Spacer />
        <h2>Free tools for making games</h2>

        <ResourcesWrapper>
          <ResourceWrapper>
            <CardTitle>Game Engines</CardTitle>
            <ResourceContainer>
              {data.resources
                .filter((resource) => resource.type === "game-engine")
                .map((resource, index) => (
                  <Resource key={index}>
                    <ResourceTitle
                      href={resource.link}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      {resource.title}
                    </ResourceTitle>
                    <ResourceDescription>
                      {resource.description}
                    </ResourceDescription>
                  </Resource>
                ))}
            </ResourceContainer>
          </ResourceWrapper>

          <ResourceWrapper>
            <CardTitle>Art Tools</CardTitle>
            <ResourceContainer>
              {data.resources
                .filter((resource) => resource.type === "art")
                .map((resource, index) => (
                  <Resource key={index}>
                    <ResourceTitle
                      href={resource.link}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      {resource.title}
                    </ResourceTitle>
                    <ResourceDescription>
                      {resource.description}
                    </ResourceDescription>
                  </Resource>
                ))}
            </ResourceContainer>
          </ResourceWrapper>

          <ResourceWrapper>
            <CardTitle>Audio</CardTitle>
            <ResourceContainer>
              {data.resources
                .filter((resource) => resource.type === "audio")
                .map((resource, index) => (
                  <Resource key={index}>
                    <ResourceTitle
                      href={resource.link}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      {resource.title}
                    </ResourceTitle>
                    <ResourceDescription>
                      {resource.description}
                    </ResourceDescription>
                  </Resource>
                ))}
            </ResourceContainer>
          </ResourceWrapper>

          <ResourceWrapper>
            <CardTitle>Programming & Scripting</CardTitle>
            <ResourceContainer>
              {data.resources
                .filter((resource) => resource.type === "scripting")
                .map((resource, index) => (
                  <Resource key={index}>
                    <ResourceTitle
                      href={resource.link}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      {resource.title}
                    </ResourceTitle>
                    <ResourceDescription>
                      {resource.description}
                    </ResourceDescription>
                  </Resource>
                ))}
            </ResourceContainer>
          </ResourceWrapper>

          <ResourceWrapper>
            <CardTitle>Assets Resources</CardTitle>
            <ResourceContainer>
              {data.resources
                .filter((resource) => resource.type === "assets")
                .map((resource, index) => (
                  <Resource key={index}>
                    <ResourceTitle
                      href={resource.link}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      {resource.title}
                    </ResourceTitle>
                    <ResourceDescription>
                      {resource.description}
                    </ResourceDescription>
                  </Resource>
                ))}
            </ResourceContainer>
          </ResourceWrapper>

          <ResourceWrapper>
            <CardTitle>Additional Tools</CardTitle>
            <ResourceContainer>
              {data.resources
                .filter((resource) => resource.type === "additional")
                .map((resource, index) => (
                  <Resource key={index}>
                    <ResourceTitle
                      href={resource.link}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      {resource.title}
                    </ResourceTitle>
                    <ResourceDescription>
                      {resource.description}
                    </ResourceDescription>
                  </Resource>
                ))}
            </ResourceContainer>
          </ResourceWrapper>
        </ResourcesWrapper>

        <Spacer />

        <h2>Links to Tutorials</h2>
        <FilterButtons>
          <FilterButton
            active={activeFilter === "all"}
            onClick={() => handleFilterChange("all")}
          >
            All
          </FilterButton>
          <FilterButton
            active={activeFilter === "react"}
            onClick={() => handleFilterChange("react")}
          >
            React
          </FilterButton>
          <FilterButton
            active={activeFilter === "javascript"}
            onClick={() => handleFilterChange("javascript")}
          >
            JavaScript
          </FilterButton>
        </FilterButtons>
        <p>Use the following tutorials to learn how to make a simple game.</p>
        {filteredTutorials.map((tutorial, index) => (
          <Tutorial key={index}>
            <ResourceTitle
              href={tutorial.link}
              target='_blank'
              rel='noopener noreferrer'
            >
              {tutorial.title}
            </ResourceTitle>
          </Tutorial>
        ))}

        <Spacer />

        <h2>Topics</h2>
        <p>
          Your team will be given a random finance-related topic from the list
          below. Click the topic to learn more about it.
        </p>
        <Spacer />
        <TopicsList>
          <TopicCard>
            <TopicIcon>💰</TopicIcon>
            <TopicTitle>Investments</TopicTitle>
          </TopicCard>
          <TopicCard>
            <TopicIcon>📊</TopicIcon>
            <TopicTitle>Budgeting</TopicTitle>
          </TopicCard>
          <TopicCard>
            <TopicIcon>🛡️</TopicIcon>
            <TopicTitle>Protection</TopicTitle>
          </TopicCard>
          <TopicCard>
            <TopicIcon>🏠</TopicIcon>
            <TopicTitle>GI</TopicTitle>
          </TopicCard>
          <TopicCard>
            <TopicIcon>💼</TopicIcon>
            <TopicTitle>Pensions - Paying In</TopicTitle>
          </TopicCard>
          <TopicCard>
            <TopicIcon>🏦</TopicIcon>
            <TopicTitle>Pensions - Getting Out</TopicTitle>
          </TopicCard>
        </TopicsList>
      </Wrapper>
    </PageContainer>
  );
}

const PageContainer = styled.div`
  ${() => pageContainerStyles()}
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 2rem;
  margin: auto;
`;

const Spacer = styled.div`
  margin-bottom: 3rem;
`;

const CardTitle = styled.h3`
`;

const ResourcesWrapper = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: 1fr 1fr 1fr;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`;

const ResourceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ResourceContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 600px;
  gap: 1rem;
`;

const Resource = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

const ResourceTitle = styled.a`
  margin: 0;
  font-size: 1.3rem;
  color: ${({ theme }) => theme.colors.lilacShade};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

const ResourceDescription = styled.p`
  margin: 0;
`;

const FilterButtons = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
`;

const FilterButton = styled.button<{ active: boolean }>`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  background-color: ${({ active, theme }) =>
    active ? theme.colors.lilacShade : theme.colors.turquoiseShade};
  color: white;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.lilac};
  }
`;

const TopicsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  margin: auto;
  max-width: 600px;
  margin-top: 3rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    align-items: center;
  }
`;

const TopicCard = styled.div`
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.turquoiseShade} 0%,
    ${({ theme }) => theme.colors.lilac} 100%
  );
  color: white;
  padding: 1rem;
  border-radius: 12px;
  width: 150px;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
    cursor: pointer;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 100px;
    height: 100px;
  }
`;

const TopicIcon = styled.div`
  font-size: 2rem;
  margin-bottom: 0.5rem;
`;

const TopicTitle = styled.div`
  font-size: 1rem;
`;

const Tutorial = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1rem 1.2rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;
