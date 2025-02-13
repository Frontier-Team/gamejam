import React from "react";
import { Button, Dialog, OverlayContainer } from "./Overlay.styled";

interface OverlayProps {
  onPlayGame: () => void;
  onSkipGame: () => void;
}

export const Overlay: React.FC<OverlayProps> = ({ onPlayGame, onSkipGame }) => {
  return (
    <OverlayContainer
      role="dialog"
      aria-labelledby="overlay-title"
      aria-modal="true"
    >
      <Dialog>
        <h2 id="overlay-title">Welcome to the Game Jam!</h2>
        <p>Would you like to play the game?</p>
        <Button onClick={onPlayGame}>Yes</Button>
        <Button onClick={onSkipGame}>No</Button>
      </Dialog>
    </OverlayContainer>
  );
};
