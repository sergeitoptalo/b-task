import React from 'react';
import { useSelector } from 'react-redux';

import { selectErrorState } from '../store/selectors/error-state.selector';

export default function ErrorComponent(): JSX.Element {
  const hasError = useSelector(selectErrorState);

  return <>{hasError ? <div className="error">ERROR</div> : ''}</>;
}
