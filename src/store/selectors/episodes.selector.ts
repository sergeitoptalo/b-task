import { State } from '../../models/state.model';
import { Episode, EpisodeDetails } from '../../models/episode.model';

export const selectAllEpisodes = (state: State): Array<Episode> => state.episodes;

export const selectCurrentEpisode = (state: State): EpisodeDetails | null => state.currentEpisode;
