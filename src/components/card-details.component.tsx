import React from 'react';

import { EpisodeDetails } from '../models/episode.model';

interface CardProps {
  card: EpisodeDetails;
}

export default function Card({ card }: CardProps): JSX.Element {
  return (
    <div className="card-details-wrapper" key={card.id}>
      <div className="card-details-image-wrapper">
        <img src={card.image_path} />
      </div>
      <h2 className="name">{card.name}</h2>
      <div>Rating: <strong>{card.rating}</strong></div>
      <div>Runtime: <strong>{card.runtime} min</strong></div>
      <div>Start date: <strong>{card.start_date}</strong></div>
      <div>Status: <strong>{card.status}</strong></div>
      <div className="description" dangerouslySetInnerHTML={{ __html: card.description }} />
    </div>
  );
}
