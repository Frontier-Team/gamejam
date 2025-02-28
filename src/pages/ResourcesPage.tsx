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

  const resourceTypes = Array.from(
    new Set(data.resources.map((resource) => resource.type))
  );

  return (
    <PageContainer>
      <Wrapper>
        <Title>Resources</Title>

        <Section>
          <SubTitle>Free tools for making games</SubTitle>

          <ResourcesWrapper>
            {resourceTypes.map((type) => (
              <ResourceWrapper key={type}>
                <CardTitle>
                  {type}
                </CardTitle>
                <ResourceContainer>
                  {data.resources
                    .filter((resource) => resource.type === type)
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
            ))}
          </ResourcesWrapper>
        </Section>

        <Section>
          <TemplateSection>
            <SubTitle>Template Repo</SubTitle>
            <Paragraph>
              The Game Jam Dundee team have put together a{" "}
              <strong>template Github repo </strong>
              to help you get started!{" "}
            </Paragraph>

            <TemplateRepoButton
              href='https://github.com/ross-kirk/gamejam-template'
              target='_blank'
              rel='noopener noreferrer'
            >
              View Template Repo
            </TemplateRepoButton>
          </TemplateSection>
        </Section>

        <Section>
          <SubTitle>Topics</SubTitle>
          <Paragraph>
            Your team will be given a random finance-related topic from the list
            below.
          </Paragraph>
          <TopicsGrid>
            <TopicCard>
              <TopicNumber>1</TopicNumber>
              <TopicTitle>Investments</TopicTitle>
            </TopicCard>
            <TopicCard>
              <TopicNumber>2</TopicNumber>
              <TopicTitle>Budgeting</TopicTitle>
            </TopicCard>
            <TopicCard>
              <TopicNumber>3</TopicNumber>
              <TopicTitle>Protection</TopicTitle>
            </TopicCard>
            <TopicCard>
              <TopicNumber>4</TopicNumber>
              <TopicTitle>General Insurance</TopicTitle>
            </TopicCard>
            <TopicCard>
              <TopicNumber>5</TopicNumber>
              <TopicTitle>Building Your Pension</TopicTitle>
            </TopicCard>
            <TopicCard>
              <TopicNumber>6</TopicNumber>
              <TopicTitle>Accessing your Pension</TopicTitle>
            </TopicCard>
          </TopicsGrid>
        </Section>

        <Section>
          <SubTitle>Links to Tutorials</SubTitle>
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
        </Section>
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

const TemplateSection = styled.div`
  padding: 2rem;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.colors.teal};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  margin-bottom: 2rem;
  max-width: 500px;
  margin: auto;

  h2 {
    margin-top: 0;
    margin-bottom: 1rem;
    color: white;
  }

  p {
    color: white;
    margin-bottom: 1.5rem;
  }
`;

const TemplateRepoButton = styled.a`
  display: inline-block;
  padding: 0.75rem 1.5rem;
  background-color: ${({ theme }) => theme.colors.lilacShade};
  color: white;
  font-size: 1.2rem;
  font-weight: bold;
  text-align: center;
  text-decoration: none;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s, transform 0.3s, box-shadow 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.lilacShade};
    transform: translateY(-3px);
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
  }
`;

const CardTitle = styled.h3``;

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
  align-items: stretch;
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
  flex-grow: 1;
  min-height: 140px;
  padding-right: 1rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    min-height: auto;
    padding-right: 0;
  }
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

const TopicsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin: auto;
  margin-top: 2rem;
  max-width: 600px;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`;

const TopicCard = styled.div`
  background: white;
  border: 1px solid ${({ theme }) => theme.colors.turquoiseShade};
  border-radius: 8px;
  padding: 1rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s, box-shadow 0.2s;
`;

const TopicNumber = styled.h3`
  width: 30px;
  height: 30px;
  font-weight: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.turquoiseShade};
  border-radius: 50%;
  margin: 0;
  color: white;
`;

const TopicTitle = styled.h3`
  color: ${({ theme }) => theme.colors.turquoiseShade};
  margin: 0;
`;

const Tutorial = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1rem 1.2rem;
  border: 1px solid ${({ theme }) => theme.colors.lilacShade};
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  margin-bottom: 1rem;
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
    cursor: pointer;
  }
`;

const Section = styled.div`
  padding: 1.5rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 0;
    margin-bottom: 5rem;
  }
`;

const Title = styled.h1`
  margin-bottom: 1.5rem;
  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 1.8rem;
  }
`;

const SubTitle = styled.h2`
  margin-top: 1.5rem;
  margin-bottom: 1.2rem;
  font-weight: bold;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 1.3rem;
    overflow: hidden;
  }
`;

const Paragraph = styled.p`
  font-size: 1rem;
  margin-bottom: 1rem;
`;
