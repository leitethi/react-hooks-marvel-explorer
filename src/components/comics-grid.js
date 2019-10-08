import React from 'react';
import GridList from '@material-ui/core/GridList';
import ComicTile from './comic-tile';

function ComicsGrid(props) {
  const { results } = props;
 
  return (
    <div>
      <GridList cols={4}>
        {results.map((comic) => (<ComicTile key={comic.id} comic={comic} />))}
      </GridList>
    </div>
  );
}

export default ComicsGrid;
  