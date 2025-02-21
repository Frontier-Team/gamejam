import React from "react";
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
        <SubHeading>{jammer.internalColleagues}</SubHeading>
        <StyledCard>
          <CenteredParagraph>{jammer.challengeInternal}</CenteredParagraph>
        </StyledCard>

        <SubHeading>{jammer.externalColleagues}</SubHeading>
        <StyledCard>
          <CenteredParagraph>{jammer.challengeExternal}</CenteredParagraph>
        </StyledCard>
        <Title>{jammer.judgingTitle}</Title>
        <CenteredParagraph>{jammer.judgingDescription}</CenteredParagraph>
        <JudgingContainer>
          {jammer.judgingCriteria.criteria.map((criteria, index) => (
            <StyledCard key={index}>
              <SubHeading>{criteria.title}</SubHeading>
              <Paragraph>{criteria.description}</Paragraph>
            </StyledCard>
          ))}
        </JudgingContainer>
      </>
      <>
        <Title>Awards</Title>
        <PrizesContainer>
          {jammer.Awards.awards.map((award, index) => (
            <StyledCard key={index}>
              <SubHeading>{award.title}</SubHeading>
              <Paragraph style={{ marginBottom: "0" }}>
                {award.prizes.all}
              </Paragraph>
              {award.prizes.Internal && (
                <>
                  <SubHeading style={{ marginTop: "0", marginBottom: "0" }}>
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
