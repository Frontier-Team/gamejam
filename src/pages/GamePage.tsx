import React from 'react';
import { Game } from '../components/Game';
import { CenteredParagraph, Heading, PageContainer } from '../styles/sharedStyles';

export const GamePage: React.FC = () => {
  return (
    <PageContainer>
      <Heading>Game Example</Heading>
      <CenteredParagraph>Here is an example of a game we built using Unity and React Unity WebGL for integrating into a web application. </CenteredParagraph>
      <Game />
    </PageContainer>
  );
};
