import { TableContainer } from "./Table.styled";

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

  const renderContent = (value: any) => {
    if (typeof value === 'string') {
      return formatTextWithLinks(value);
    }
  
    if (Array.isArray(value)) {
      return value.map((item, index) => (
        <span key={index}>
          {formatTextWithLinks(item)}
          <br />
        </span>
      ));
    }
  
    return String(value);
  };

  const formatTextWithLinks = (text: string) => {
    const parts = text.split(/(https?:\/\/\S+)/g);
  
    return parts.map((part, index) =>
      part.startsWith('http') ? (
        <a key={index} href={part} target='_blank' rel='noopener noreferrer'>
          {part}
        </a>
      ) : (
        part
      )
    );
  };

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
              {fieldsToDisplay.map((field) => {
                const isLarge = largeFields.includes(field);
                return (
                  <td key={field.toString()} className={isLarge ? 'large' : ''}>
                    {renderContent(row[field])}
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
