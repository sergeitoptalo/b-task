import React from 'react';
import { useSelector } from 'react-redux';

import { selectLoadingState } from '../store/selectors/loading-state.selector';

export default function Loader(): JSX.Element {
  const isLoading = useSelector(selectLoadingState);

  return (
    <div>{isLoading ? <div className="loader">...LOADING...</div> : ''}</div>
  );
}
