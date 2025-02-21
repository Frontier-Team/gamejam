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
  Title,
} from "../styles/sharedStyles";
import { JudgingContainer, PrizesContainer } from "./JammerPage.styled";

export const JammerPage: React.FC = () => {
  const jammer = db.jammers[0];

  return (
    <PageContainer>
      <>
        <Heading>{jammer.welcome}</Heading>
        <Paragraph>{jammer.welcomeDescription}</Paragraph>

        <Title>{jammer.challengeTitle}</Title>
        <Paragraph>{jammer.challengeDescription}</Paragraph>
        <StyledCard>
          <SubHeading>{jammer.internalColleagues}</SubHeading>
          <CenteredParagraph>{jammer.challengeInternal}</CenteredParagraph>
        </StyledCard>

        <StyledCard>
          <SubHeading>{jammer.externalColleagues}</SubHeading>
          <CenteredParagraph>{jammer.challengeExternal}</CenteredParagraph>
        </StyledCard>
        <Title>{jammer.judgingTitle}</Title>
        <CenteredParagraph>{jammer.judgingDescription}</CenteredParagraph>
        <JudgingContainer>
          {jammer.judgingCriteria.criteria.map((criteria, index) => (
            <Accordion key={index} title={criteria.title}>
              <CenteredParagraph>{criteria.description}</CenteredParagraph>
            </Accordion>
          ))}
        </JudgingContainer>
      </>
      <>
        <Title>Awards</Title>
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
                    Internal{" "}
                  </SubHeading>
                  <CenteredParagraph style={{ marginTop: "0" }}>
                    {award.prizes.Internal}
                  </CenteredParagraph>
                </>
              )}
              {award.prizes.External && (
                <>
                  <SubHeading style={{ marginBottom: "0" }}>
                    External{" "}
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
