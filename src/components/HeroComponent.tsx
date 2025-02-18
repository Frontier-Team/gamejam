import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

export default function HeroComponent() {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  // don't render image until loaded
  useEffect(() => {
    const img = new Image();
    img.src = "src/assets/GameJam Motion 8.gif";
    img.onload = () => setIsImageLoaded(true);
  }, []);

  return (
    <Wrapper>
      <Content>
        <LeftColumn>
          <Title>Welcome to the Dundee Game Jam 2025</Title>
          <Subtitle>
            Join us for an exciting event full of creativity and innovation!
          </Subtitle>
        </LeftColumn>
        <RightColumn>
          <GifImage
            src="src/assets/GameJam Motion 8.gif"
            alt="Game Jam Animation"
            className={isImageLoaded ? "loaded" : ""}
          />
        </RightColumn>
      </Content>
    </Wrapper>
  );
}

const slideDownWithFade = keyframes`
  from {
    transform: translateY(-40%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const scaleIn = keyframes`
    from {
        transform: scale(0.9);
        opacity: 0;
    } to {
        transform: scale(1);
        opacity: 1;
    }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.teal};
  padding: 0 2rem;
  min-height: 600px;
  max-width: 1300px;
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 10px 36px 0px,
    rgba(0, 128, 128, 0.2) 0px 0px 0px 1px;

  @media (max-width: 1300px) {
    margin-top: 0;
    padding: 0;
    border-radius: 0;
  }
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
    padding-bottom: 50px;
  }
`;

const LeftColumn = styled.div`
  flex: 1;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const RightColumn = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 2.8rem;
  color: white;
  margin-bottom: 1rem;
  animation: ${slideDownWithFade} 1.2s cubic-bezier(0.25, 0.1, 0.25, 1) 0.2s;
  animation-fill-mode: backwards;
`;

const Subtitle = styled.h2`
  font-size: 1.8rem;
  color: ${({ theme }) => theme.colors.turquoise};
  animation: ${slideDownWithFade} 1.2s cubic-bezier(0.25, 0.1, 0.25, 1) 0.8s;
  animation-fill-mode: backwards;
`;

const GifImage = styled.img`
  width: 100%;
  height: auto;
  max-width: 900px;
  animation: ${scaleIn} 2s cubic-bezier(0.25, 0.1, 0.25, 1);
  animation-fill-mode: backwards;
  animation-play-state: paused;
  &.loaded {
    animation-play-state: running;
  }
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;
