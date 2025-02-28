import React from 'react';
import styled from '@emotion/styled';
import HeroComponent from '../components/HeroComponent';
import { Paragraph } from '../styles/sharedStyles';

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
          <Paragraph>
            Think of Reboot (who are supporting the event) but with a focus on
            games and gamification. It's a super fun event where we come
            together to brainstorm, design, and develop a game or gamified app
            from scratch - all within a limited time frame.
          </Paragraph>
          <Paragraph>
            Whether you're a coding wizard, design guru, or just someone with a
            wild imagination and an interest in games, there's a place for you
            in this adventure. In the game jam 60 attendees will work to solve
            challenges using games or gamification techniques over a 2-day
            period at the V&A Museum in Dundee.
          </Paragraph>
          <Paragraph>
            This is a fantastic way to unleash creativity and explore new
            possibilities in game design by bringing together developers,
            designers, and other creatives to rapidly prototype and experiment
            with new ideas, mechanics, and art styles.
          </Paragraph>
        </Section>
        <Section>
          <Subtitle>
            Not wanting to compete but still want to come along?
          </Subtitle>
          <Paragraph>
            On <strong>Tuesday 4th March</strong>, we will host inspiring{' '}
            <strong>Tech Talks, Workshops and Exhibits!</strong> With carefully
            curated content focusing on game development, design, and
            engineering, we know it will be a valuable opportunity for you to
            learn more and meet people from across disciplines of LBG and
            external collaborations such as the Founder of Scottish Games
            Network, Product Director from Opera, Abertay & Dundee University
            Games Departments and much more!
          </Paragraph>
        </Section>
        <Section>
          <Subtitle>
            V&A Wi-Fi
          </Subtitle>
          <Paragraph>
          Please connect to the Wi-Fi network using the credentials below.
          <br></br>
          <strong>Network Name: </strong>vadevent
          <br></br>
          <strong>Password: </strong>rivertay
          </Paragraph>
        </Section>
        <Section>
          <Subtitle>
            Look out for our helpers and support team
          </Subtitle>
          <Paragraph>
            Our event organisers and support team will be wearing t-shirts with the 
            game jam logo. You'll see them at the front desk and around the event.
          </Paragraph>
        </Section>
        <Subtitle style={{ textAlign: 'center' }}>
          Let's make this Game Jam an unforgettable experience!
        </Subtitle>
        <Subtitle style={{ textAlign: 'center' }}>
          Ready, Set, Create! 🚀
        </Subtitle>
        <Footer>
          <FooterContent>
            <Paragraph>
              If you need to make any adjustments or have any specific requests, please contact us at: <a href="mailto:IPIEvents@lloydsbanking.com">IPIEvents@lloydsbanking.com</a>
            </Paragraph>
          </FooterContent>
        </Footer>
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
  max-width: 1000px;
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

const Footer = styled.div`
  display: flex;
  text-align: center;
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.teal};
  border-radius: 10px;
  margin-top: 1rem;
`;

const FooterContent = styled.div`
  color: white;

  a {
    color: white;
    text-decoration: none;
  }
`;
