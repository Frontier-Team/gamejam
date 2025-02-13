import styled from "@emotion/styled";
import { buttonAndLinkStyles } from "../styles/sharedStyles";

export const OverlayContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${({ theme }) => `${theme.colors.teal}CC`};
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const Dialog = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
`;

export const Button = styled.button`
  ${({ theme }) => buttonAndLinkStyles(theme)}
`;
