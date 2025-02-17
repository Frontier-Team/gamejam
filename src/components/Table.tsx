import { StyledTableContainer } from "./StyledTable.styled";

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
    <StyledTableContainer>
      {heading && <h2>{heading}</h2>}
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
                    {String(row[field])}
                  </td>
                )}
              )}

            </tr>
          ))}
        </tbody>
      </table>
    </StyledTableContainer>
  );
};
