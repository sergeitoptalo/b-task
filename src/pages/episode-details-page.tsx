import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import CardDetails from '../components/card-details.component';
import { EpisodeDetails } from '../models/episode.model';
import { getEpisode } from '../store/actions/episodes.action';
import { selectCurrentEpisode } from '../store/selectors/episodes.selector';

export default function EpisodesPage(): JSX.Element {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch();
  const currentEpisode = useSelector(selectCurrentEpisode);

  const episodeIsInStore = () => {
    return currentEpisode && String(currentEpisode.id) === id;
  };

  useEffect(() => {
    if (!episodeIsInStore()) {
      dispatch(getEpisode(id));
    }
  }, []);

  return (
    <div className="page-container">
      {episodeIsInStore() ? (
        <>
          <CardDetails card={currentEpisode as EpisodeDetails} />
          <div>
            <Link to="/episodes">Back</Link>
          </div>
        </>
      ) : (
        ''
      )}
    </div>
  );
}
