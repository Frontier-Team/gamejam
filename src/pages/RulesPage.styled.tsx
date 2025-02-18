import styled from "@emotion/styled";

export const Content = styled.div`
  font-family: Arial, sans-serif;
  color: #333;
  line-height: 1.6;
  max-width: 1000px;
  margin: auto;
  padding: 2.5rem;
`;

export const Section = styled.div`
  background: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 1.5rem;
  margin-bottom: 2rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h1`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

export const SubTitle = styled.h3`
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.lilac};
  margin-top: 1.5rem;
  margin-bottom: 1rem;
  font-weight: bold;
`;

export const Paragraph = styled.p`
  font-size: 1rem;
  margin-bottom: 1rem;
`;

export const Highlight = styled.span`
  font-weight: bold;
  color: ${({ theme }) => theme.colors.turquoise};
`;
