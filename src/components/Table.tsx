import { TableContainer } from "./StyledTable.styled";

interface TableProps<T> {
  heading?: string;
  headers: string[];
  fieldsToDisplay: (keyof T)[];
  rows: T[];
  largeFields?: (keyof T)[];
}

export const Table = <T,>({
  heading,
  headers,
  fieldsToDisplay,
  largeFields = [],
  rows,
}: TableProps<T>) => {
  return (
    <TableContainer>
      {heading && <h2 className='table-heading'>{heading}</h2>}
      <h3 className='info-text'>{'Scroll horizontally for more information'}</h3>
      <table>
        <thead>
          <tr>
            {headers.map((header) => (
              <th key={header}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {fieldsToDisplay.map((field, fieldIndex) => {
                const isLarge = largeFields.includes(field);
                return (
                  <td key={fieldIndex} className={isLarge ? 'large' : ''}>
                    {Array.isArray(row[field]) ? row[field].join(', ') : String(row[field])}
                  </td>
                )}
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </TableContainer>
  );
};
