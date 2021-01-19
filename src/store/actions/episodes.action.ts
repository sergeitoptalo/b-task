import { Episode, EpisodeAction } from '../../models/episode.model';

export enum EpisodeActions {
    GET_ALL_EPISODES = 'GET_ALL_EPISODES',
    GET_ALL_EPISODES_SUCCESS = 'GET_ALL_EPISODES_SUCCESS',
    GET_ALL_EPISODES_FAIL = 'GET_ALL_EPISODES_SUCCESS',
    GET_EPISODE = 'GET_EPISODE',
    GET_EPISODE_SUCCESS = 'GET_EPISODE_SUCCESS',
    GET_EPISODE_FAIL = 'GET_EPISODE_FAIL'
}

export const getAllEpisodes = (pageNumber = 1): EpisodeAction =>
    ({ type: EpisodeActions.GET_ALL_EPISODES, payload: pageNumber });

export const getAllEpisodesSuccess =
    (episodes: Array<Episode>): EpisodeAction =>
        ({ type: EpisodeActions.GET_ALL_EPISODES_SUCCESS, payload: episodes });

export const getAllEpisodesFail = (): EpisodeAction =>
    ({ type: EpisodeActions.GET_ALL_EPISODES_FAIL });

export const getEpisode = (id: string): EpisodeAction =>
    ({ type: EpisodeActions.GET_EPISODE, payload: id });

export const getEpisodeSuccess = (episode: Episode): EpisodeAction =>
    ({ type: EpisodeActions.GET_EPISODE_SUCCESS, payload: episode });

export const getEpisodeFail = (): EpisodeAction =>
    ({ type: EpisodeActions.GET_EPISODE_FAIL });
