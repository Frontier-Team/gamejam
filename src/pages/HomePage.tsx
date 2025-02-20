import React from "react";
import styled from "@emotion/styled";
import HeroComponent from "../components/HeroComponent";

export const HomePage: React.FC = () => {
  return (
    <Wrapper>
      <HeroComponent></HeroComponent>
      <Content>
        <Section>
          <Title>Welcome to Game Jam Dundee</Title>
          <Subtitle>
            Thank you for joining us for Game Jam Dundee! The Scottish Widows
            team are thrilled to have you here and extend a warm welcome to all
            of you.
          </Subtitle>
        </Section>
        <Section>
          <Subtitle>What's a Game Jam</Subtitle>
          <Text>
            Think of Reboot (who are supporting the event) but with a focus on
            games and gamification. It's a super fun event where we come
            together to brainstorm, design, and develop a game or gamified app
            from scratch - all within a limited time frame.
          </Text>
          <Text>
            Whether you're a coding wizard, design guru, or just someone with a
            wild imagination and an interest in games, there's a place for you
            in this adventure. 60 attendees will word to solve challenges using
            games or gamification techniques over a 2-day period at the V&A
            museum in Dundee.
          </Text>
          <Text>
            This is a fantastic way to unleash creativity and explore new
            possibilities in game design by bringing together developers,
            designers, and other creatives to rapidly prototype and experiment
            with new ideas, mechanics, and art styles.
          </Text>
        </Section>
        <Section>
          <Subtitle>
            Not wanting to compete but still want to come along?
          </Subtitle>
          <Text>
            On Tuesday 4th March, we will host inspiring Tech Talks, Workshops
            and Exhibits! With carefully curated content focusing on game
            development, design, and engineering, we know it will be a valuable
            opportunity for you to learn more and meet people from across
            disciplines of LBG and external collaborations such as the Founder
            of Scottish Games Network, Product Director from Opera, Abertay &
            Dundee University Games Departments and much more!
          </Text>
        </Section>
        <Subtitle style={{ textAlign: "center" }}>
          Let's make this Game Jam an unforgettable experience!
        </Subtitle>
        <Subtitle style={{ textAlign: "center" }}>
          Ready, Set, Create! 🚀
        </Subtitle>
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 5rem;
  padding-left: 2rem;
  padding-right: 2rem;

  @media (max-width: 1300px) {
    margin-top: 0;
    padding: 0;
  }

  p {
    line-height: 1.8;
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

const Section = styled.div``;

const Title = styled.h1`
  font-size: 2.4rem;
  text-align: center;
  margin-bottom: 5rem;
`;

const Subtitle = styled.h2`
  font-size: 1.6rem;
  margin-bottom: 2rem;
  line-height: 1.8;
`;

const Text = styled.p`
  font-size: 1.4rem;
`;
