import { applyMiddleware, compose, createStore, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createEpicMiddleware } from 'redux-observable';

import { EpisodeAction } from '../models/episode.model';
import { State } from '../models/state.model';
import episodesEpic from './epics/episodes.epic';
import { episodesReducer } from './reducers/episodes.reducer';

const episodesMiddleware = createEpicMiddleware();

export const configureStore = (): Store<State, EpisodeAction> & {
    dispatch: unknown;
} => {
    const store = createStore(
        episodesReducer,
        compose(applyMiddleware(episodesMiddleware), composeWithDevTools()),
    );

    episodesMiddleware.run(episodesEpic);

    return store;
};
