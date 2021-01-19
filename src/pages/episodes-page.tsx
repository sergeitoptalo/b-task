import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Card from '../components/card.component';
import { Episode } from '../models/episode.model';
import { getAllEpisodes } from '../store/actions/episodes.action';
import { selectAllEpisodes } from '../store/selectors/episodes.selector';

export default function EpisodesPage(): JSX.Element {
  const [page, setPage] = useState<number>(1);
  const dispatch = useDispatch();

  const handlePageChanged = (pageNumber: number) => {
    if (pageNumber > 0) {
      setPage(pageNumber);
      dispatch(getAllEpisodes(pageNumber));
    }
  };

  useEffect(() => {
    dispatch(getAllEpisodes());
  }, []);
  const episodes = useSelector(selectAllEpisodes);

  return (
    <>
      <div className="page-container">
        {episodes.map((episode: Episode) => (
          <Card card={episode} key={episode.id} />
        ))}
      </div>
      <div className="controls">
        {page > 1 && (
          <button onClick={() => handlePageChanged(page - 1)}>Prev</button>
        )}
        <button onClick={() => handlePageChanged(page + 1)}>Next</button>
      </div>
    </>
  );
}
