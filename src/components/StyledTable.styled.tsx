import styled from '@emotion/styled';

export const Heading = styled.div`
  text-align: center;
`;

export const TableContainer = styled.div`
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;

  .table-heading, .info-text {
    position: sticky;
    top: 0;
    left: 0;
    z-index: 10;
    margin-bottom: 1rem;
    text-align: center;
  }

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

  td:first-of-type {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  thead tr {
    background-color: ${({ theme }) => `${theme.colors.teal}`};
    color: ${({ theme }) => `${theme.colors.white}`};
  }

  td, th {
    width: 20rem;
  }

  .large {
    width: 40rem;
    word-wrap: break-word;
  }

  .info-text {
    @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
      display: none;
    }
  }
`;
