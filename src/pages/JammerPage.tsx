import React from "react";
import Accordion from "../components/Accordion";
import db from "../db.json";
import {
  CenteredParagraph,
  Heading,
  PageContainer,
  Paragraph,
  StyledCard,
  SubHeading,
} from "../styles/sharedStyles";
import { JudgingContainer, PrizesContainer } from "./JammerPage.styled";

export const JammerPage: React.FC = () => {
  const jammer = db.jammers[0];

  return (
    <PageContainer>
      <>
        <Heading>{jammer.welcome}</Heading>
        <CenteredParagraph>{jammer.welcomeDescription}</CenteredParagraph>

        <h2>{jammer.challengeTitle}</h2>
        <Paragraph>{jammer.challengeDescription}</Paragraph>

        <Accordion title={jammer.internalColleagues}>
          <CenteredParagraph>{jammer.challengeInternal}</CenteredParagraph>
          <CenteredParagraph>{jammer.challengeInternalDescriptor}</CenteredParagraph>
          <CenteredParagraph>
            {jammer.internalTopics.split("\n").map((line, index) => (
              <React.Fragment key={index}>
                {line}
                <br />
              </React.Fragment>
            ))}
          </CenteredParagraph>
        </Accordion>

        <Accordion title={jammer.externalColleagues}>
          <CenteredParagraph>{jammer.challengeExternal}</CenteredParagraph>
          <CenteredParagraph>
            {jammer.externalTopics.split("\n").map((line, index) => (
              <React.Fragment key={index}>
                {line}
                <br />
              </React.Fragment>
            ))}
          </CenteredParagraph>
          <CenteredParagraph>{jammer.externalDescriptor}</CenteredParagraph>

        </Accordion>

        <h2>{jammer.Pitches.title}</h2>
        <Paragraph>{jammer.Pitches.description}</Paragraph>
        <Paragraph>{jammer.Pitches.presentation}</Paragraph>
        <CenteredParagraph>{jammer.Pitches.time}</CenteredParagraph>
        <PrizesContainer>
          <StyledCard>
            <SubHeading>Internal Teams</SubHeading>
            <CenteredParagraph>{jammer.Pitches.locationInternal}</CenteredParagraph>
          </StyledCard>
          <StyledCard>
            <SubHeading>Student Teams</SubHeading>
            <CenteredParagraph>{jammer.Pitches.locationExternal}</CenteredParagraph>
          </StyledCard>
        </PrizesContainer>

        <h2>{jammer.judgingTitle}</h2>
        <Paragraph>{jammer.judgingDescription}</Paragraph>
        <JudgingContainer>
          {jammer.judgingCriteria.criteria.map((criteria, index) => (
            <Accordion key={index} title={criteria.title}>
              <CenteredParagraph>{criteria.description}</CenteredParagraph>
            </Accordion>
          ))}
        </JudgingContainer>
      </>
      <>
        <h2>Awards</h2>
        <PrizesContainer>
          {jammer.Awards.awards.map((award, index) => (
            <StyledCard key={index}>
              <SubHeading>
                {award.title.split("\n").map((line, i) => (
                  <React.Fragment key={i}>
                    {line}
                    <br />
                  </React.Fragment>
                ))}
              </SubHeading>
              <CenteredParagraph style={{ marginBottom: "0" }}>
                {award.prizes.all}
              </CenteredParagraph>
              {award.prizes.Internal && (
                <>
                  <SubHeading style={{ marginBottom: "0" }}>
                    For Internal Teams{" "}
                  </SubHeading>
                  <CenteredParagraph style={{ marginTop: "0" }}>
                    {award.prizes.Internal}
                  </CenteredParagraph>
                </>
              )}
              {award.prizes.External && (
                <>
                  <SubHeading style={{ marginBottom: "0" }}>
                    For Student Teams{" "}
                  </SubHeading>
                  <CenteredParagraph style={{ marginTop: "0" }}>
                    {award.prizes.External}
                  </CenteredParagraph>
                </>
              )}
            </StyledCard>
          ))}
        </PrizesContainer>
      </>
    </PageContainer>
  );
};
