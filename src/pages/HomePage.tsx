import React from "react";
import styled from "@emotion/styled";
import HeroComponent from "../components/HeroComponent";

export const HomePage: React.FC = () => {
  return (
    <Wrapper>
      <HeroComponent></HeroComponent>
      <Content>
        <Title>Welcome to the Dundee Game Jam 2025</Title>
        <Subtitle>
          Thank you for joining us for the Dundee Game Jam 2025! The Chief
          Technology Office is thrilled to have you here and extend a warm
          welcome to all of you.
        </Subtitle>
        <Text>
          This event promises to be a key moment in your 2025 learning calendar.
          Our action-packed Game Jam schedule includes the opportunity to find
          out more about some of the local platform teams. In-between the
          sessions, interact with a variety of our suppliers, all providing
          ideas for you to explore and learn. We also have 180 competitors
          taking part in our hackathon, competing for a selection of prizes
          against three business challenges.
        </Text>
        <Text>
          You and also hear from event sponsors Microsoft, who are hosting out
          Hackathon competition, and Publicis Sapient, who have designed the
          day's fantastic branding.
        </Text>
        <Text>Reboot Manchester 2024 has two main themes:</Text>

        <Subtitle>
          Engineering Excellence and a showcase & celebration on what we've
          acheived in 2024.
        </Subtitle>
        <Text>
          So, what are you waiting for? Get ready to immerse yourself in the
          latest technologies, ignite your creativity, stay curious, learn
          something new, and most importantly, have some fun.
        </Text>
        <Subtitle>#EngineertheFuture</Subtitle>
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  margin-top: 5rem;
  padding-left: 2rem;
  padding-right: 2rem;

  @media (max-width: 1300px) {
    margin-top: 0;
    padding: 0;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  padding: 2rem;
  text-align: left;
  margin-top: 2rem;
`;

const Title = styled.h1`
  font-size: 2.8rem;
  text-align: center;
`;

const Subtitle = styled.h2`
  font-size: 1.8rem;
`;

const Text = styled.p`
  font-size: 1.6rem;
`;
