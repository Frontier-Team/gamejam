import styled from '@emotion/styled';

export const StyledTableContainer = styled.div`
  width: 100%;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;

  table {
    width: 100%;
    border-collapse: collapse;
    min-width: 60rem;
    margin-bottom: 4rem;
  }

  th, td {
    padding: 2rem;
    text-align: left;
    border-bottom: ${({ theme }) => `1px solid ${theme.colors.teal}`};
  }

  thead tr {
    background-color: ${({ theme }) => `${theme.colors.teal}`};
    color: ${({ theme }) => `${theme.colors.white}`};
  }

  td, th {
    width: 2rem;
  }

  .large {
    width: 20rem;
    word-wrap: break-word;
  }
`;
