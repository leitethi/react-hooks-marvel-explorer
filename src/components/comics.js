import React, { useEffect, useState } from 'react';
import MarvelApi from '../services/marvel';
import ComicsGrid from './comics-grid';
import Loading from './loading';
// import useInfiniteScroll from './use-infinite-scroll';

const limit = 12;

function Comics() {
  const [results, setResults] = useState([]);
  const [offset, setOffset] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    MarvelApi.getComics({ offset }).then((response) => {
      const { data } = response;

      setResults(prevState => [...prevState, ...data.results]);
      setOffset(offset + limit + 1);
      setIsLoading(false);
    });
  }, []);

  return (
    <div>
      <h1>Comics</h1>
      <ul>
        <ComicsGrid results={results} />
      </ul>
      {isLoading && <Loading />}
    </div>
  );
}

export default Comics;
