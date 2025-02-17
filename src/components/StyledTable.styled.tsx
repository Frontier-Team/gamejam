import styled from '@emotion/styled';

export const StyledTableContainer = styled.div`
  width: 100%;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;

  table {
    width: 100%;
    border-collapse: collapse;
    min-width: 600px;
  }

  th, td {
    padding: 2rem 2rem;
    text-align: left;
    border-bottom: 1px solid #0B3239;
  }

  thead tr {
    background-color: ${({ theme }) => `${theme.colors.teal}CC`};
    color: ${({ theme }) => `${theme.colors.white}CC`};
  }

  td, th {
    width: 60px;
  }

  .large {
    width: 200px;
    word-wrap: break-word;
  }
`;

export const LargeTableHeader = styled.td`
  width: 150px;
`;

export const LargeTableCell = styled.td`
  width: 150px;
`;


export const StyledTableHead = styled.thead`
  background-color: ${({ theme }) => theme.colors.teal};
  padding: 2rem;
  position: relative;
  color: ${({ theme }) => theme.colors.white};
`;
