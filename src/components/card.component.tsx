import React from 'react';
import { Link } from 'react-router-dom';

import { Episode } from '../models/episode.model';

interface CardProps {
  card: Episode;
}

export default function Card({ card }: CardProps): JSX.Element {
  return (
    <div className="card-wrapper" key={card.id}>
      <div className="card-image-wrapper">
        <img src={card.image_thumbnail_path} />
      </div>
      <h4>
        <Link to={`/episodes/${card.id}`} className="name-link">{card.name}</Link>
      </h4>
    </div>
  );
}
