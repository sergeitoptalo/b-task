export interface Episode {
    country: string;
    end_date: string | null;
    id: number;
    image_thumbnail_path: string;
    name: string;
    network: string;
    permalink: string;
    start_date: string;
    status: string;
}

export interface EpisodeAction {
    type: string;
    payload?: Episode | Array<Episode> | string | number;
}

export interface EpisodesResponse {
    page: number;
    pages: number;
    total: string;
    tv_shows: Array<Episode>;
}

interface Season {
    air_date: string;
    episode: number;
    name: string;
    season: number;
}

export interface EpisodeDetails {
    countdown: number | null;
    country: string;
    description: string;
    description_source: string;
    end_date: string | null;
    episodes: Array<Season>;
    genres: Array<string>;
    id: number;
    image_path: string;
    image_thumbnail_path: string;
    name: string;
    network: string;
    permalink: string;
    pictures: Array<string>;
    rating: string;
    rating_count: string;
    runtime: number;
    start_date: string;
    status: string;
    url: string;
    youtube_link: string | null;
}

export interface EpisodesDetailsResponse {
    tvShow: EpisodeDetails;
}
