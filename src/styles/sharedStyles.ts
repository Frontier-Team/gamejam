import { css, Theme } from "@emotion/react";
import styled from "@emotion/styled";

export const pageContainerStyles = () => css`
  line-height: 1.6;
  margin: auto;
  max-width: 1000px;
  padding: 2.5rem;
`;

export const buttonAndLinkStyles = (theme: Theme) => css`
  margin: 10px;
  padding: 15px;
  cursor: pointer;
  background-color: ${theme.colors.teal};
  color: ${theme.colors.white};
  border: 2px solid ${theme.colors.turquoiseShade};
  border-top: 1px solid rgba(1, 205, 209, 0.6);
  border-radius: 4px;
  text-decoration: none;

  box-shadow: 0 4px 0 ${theme.colors.turquoiseShade},
    0 4px 6px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease, border-color 0.3s ease,
    box-shadow 0.3s ease;

  &:hover,
  &.active-link {
    background-color: ${theme.colors.lilac};
    border: 2px solid ${theme.colors.lilacShade};
    border-top: 1px solid rgba(176, 97, 255, 0.8);
    box-shadow: 0 4px 0 ${theme.colors.lilacShade}, 0 4px 6px rgba(0, 0, 0, 0.1);
  }
`;

export const PageContainer = styled.div`
  ${() => pageContainerStyles()}
`;

export const Heading = styled.h1`
  text-align: center;
`;

export const Paragraph = styled.p`
  font-size: 1.4rem;
  margin-bottom: 1rem;
`;

export const Title = styled.h1`
  margin-bottom: 1.5rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 1.8rem;
  }
`;

export const SubHeading = styled.h2`
  font-size: 1.25rem;
  margin-top: 1.25rem;
  margin-bottom: 1rem;
  font-weight: bold;
  text-align: center;
`;
