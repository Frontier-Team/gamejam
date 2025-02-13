import React from "react";
import { Game } from "../components/Game";
import Page from "../components/Page";

export const HomePage: React.FC = () => {
  return (
    <Page>
      <Game />
    </Page>
  );
};
