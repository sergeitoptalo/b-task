import { Episode, EpisodeDetails } from './episode.model';

export interface State {
    episodes: Array<Episode>;
    currentEpisode: EpisodeDetails | null;
    isLoading: boolean;
    hasError: boolean;
}
