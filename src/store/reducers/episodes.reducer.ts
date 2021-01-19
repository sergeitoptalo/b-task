import { Episode, EpisodeAction, EpisodeDetails } from '../../models/episode.model';
import { State } from '../../models/state.model';
import { EpisodeActions } from '../actions/episodes.action';

const initialState: State = {
    episodes: [],
    currentEpisode: null,
    isLoading: false,
    hasError: false,
};

export const episodesReducer = (state = initialState, action: EpisodeAction): State => {
    switch (action.type) {
        case EpisodeActions.GET_ALL_EPISODES:
            return {
                ...state,
                isLoading: true,
            };
        case EpisodeActions.GET_ALL_EPISODES_SUCCESS:
            return {
                ...state,
                episodes: (action.payload || []) as Array<Episode>,
                isLoading: false,
                hasError: false,
            };
        case EpisodeActions.GET_ALL_EPISODES_FAIL:
            return {
                ...state,
                isLoading: false,
                hasError: true,
            };
        case EpisodeActions.GET_EPISODE:
            return {
                ...state,
                isLoading: true,
            };
        case EpisodeActions.GET_EPISODE_SUCCESS:
            return {
                ...state,
                currentEpisode: action.payload as EpisodeDetails,
                isLoading: false,
                hasError: false,
            };
        case EpisodeActions.GET_EPISODE_FAIL:
            return {
                ...state,
                isLoading: false,
                hasError: true,
            };
        default:
            return state;
    }
};
