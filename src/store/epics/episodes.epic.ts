import { Observable, of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { combineEpics, Epic, ofType } from 'redux-observable';

import { apiPath } from '../../constants/api.constants';
import { EpisodeAction, EpisodesDetailsResponse, EpisodesResponse } from '../../models/episode.model';
import {
  EpisodeActions,
  getAllEpisodesSuccess,
  getEpisodeFail,
  getAllEpisodesFail,
  getEpisodeSuccess,
} from '../actions/episodes.action';

const episodesEpic: Epic<EpisodeAction, EpisodeAction> = (action$): Observable<EpisodeAction> =>
  action$.pipe(
    ofType(EpisodeActions.GET_ALL_EPISODES),
    mergeMap((action: EpisodeAction) =>
      ajax.getJSON<EpisodesResponse>(`${apiPath.episodes}?page=${action.payload}`)
        .pipe(
          map((response: EpisodesResponse) => {
            return getAllEpisodesSuccess(response.tv_shows);
          }),
          catchError(() => {
            return of(getAllEpisodesFail());
          }),
        )));

const episodeEpic: Epic<EpisodeAction, EpisodeAction> = (action$): Observable<EpisodeAction> =>
  action$.pipe(
    ofType(EpisodeActions.GET_EPISODE),
    mergeMap((action: EpisodeAction) =>
      ajax.getJSON<EpisodesDetailsResponse>(`${apiPath.episodeDetails}?q=${action.payload}`)
        .pipe(
          map((response: EpisodesDetailsResponse) => {
            return getEpisodeSuccess(response.tvShow);
          }),
          catchError(() => {
            return of(getEpisodeFail());
          }),
        )));

export default combineEpics(episodesEpic, episodeEpic);
