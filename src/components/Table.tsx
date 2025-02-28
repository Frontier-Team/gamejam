import { useEffect, useState } from 'react';
import { StyledTableHeadingButton, TableContainer } from './Table.styled';

interface TableProps<T extends { isFilterable: boolean }> {
  heading?: string;
  headers: string[];
  fieldsToDisplay: (keyof T)[];
  rows: T[];
  largeFields?: (keyof T)[];
  showFavoritesFilter?: boolean;
  fieldToSave?: keyof T;
}

export const Table = <T extends { isFilterable: boolean; },>({
  heading,
  headers,
  fieldsToDisplay,
  largeFields = [],
  rows,
  showFavoritesFilter = false,
  fieldToSave,
}: TableProps<T>) => {

  const [favorites, setFavorites] = useState<string[]>([]);
  const [showFavorites, setShowFavorites] = useState(false);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem(`favorites-for-${heading}`) || '[]');
    setFavorites([...storedFavorites]);
  }, []);

  const toggleFavorite = (favorite: string) => {
    setFavorites((prev) => {
      let newFavorites = [];
      if (prev.includes(favorite)) {
        newFavorites = prev.filter((elem) => elem !== favorite);
      } else {
        newFavorites = [...prev, favorite];
      }
      localStorage.setItem(`favorites-for-${heading}`, JSON.stringify([...newFavorites]))
      return newFavorites;
    });
  };

  const filteredData = showFavorites
    ? rows.filter((row) => fieldToSave && favorites.includes(row[fieldToSave] as string))
    : rows;

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
        <a
          key={index}
          href={part}
          target='_blank'
          rel='noopener noreferrer'
          className='table-link'
        >
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
            {headers.map((header, index) => {
              if (header === '' && showFavoritesFilter) {
                return (
                  <th className='filter-heading-cell' key={index}>
                    <StyledTableHeadingButton className='favorites-btn' onClick={() => setShowFavorites((prev) => !prev)}>
                      {showFavorites ? 'Click to view all' : 'Click to view favourites'}
                    </StyledTableHeadingButton>
                  </th>
                )
              }
              return (<th key={header}>{header}</th>)
            })}
          </tr>
        </thead>
        <tbody>
          {filteredData.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.isFilterable ? (showFavoritesFilter && (
                <td className='checkbox-column'>
                  <input
                    type='checkbox'
                    checked={fieldToSave ? favorites.includes(row[fieldToSave] as string) : false}
                    onChange={() => {
                      if (fieldToSave) {
                        toggleFavorite(row[fieldToSave] as string)
                      }
                    }}
                  />
                </td>
              )): <td className='checkbox-column'></td>}
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
