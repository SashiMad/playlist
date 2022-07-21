type Artist = {
  id: string;
  name: string;
  artist_name: string;
  muted: boolean;
  place: string | null;
  country: string | null;
  followers: number;
  follows: number;
  liked: number;
  releases: number;
  favorites: number;
  description: string | null;
  profile_image_path: string;
  cover_image_path: string;
  favorite_genres: Array<string>;
  created: string;
  location: string | null;
  social_accounts: Array<string>;
  video_shout_out_count: number;
  external_songs_count: number | null;
  external_videos_count: number;
  crews: Array<any>;
};

type Genre = {
  id: number;
  name: string;
};

type TrendingSong = {
  id: string;
  name: string;
  name_seo: string;
  artist: Artist;
  artist_name: string;
  duration: number;
  bpm: number;
  likes: number;
  faves: number;
  plays: number;
  reposts: number;
  comments: number;
  description: string;
  tags: string | null;
  source_info: string;
  cover_image_path: string;
  cover_image_aspect_ratio: string;
  music_file_path: string;
  music_file_mimetype: string;
  song_genres: Array<Genre>;
  song_release: string;
  mix_packs: Array<any>;
  linked_crews: Array<any>;
};

type TrendingSongsResponse = Array<TrendingSong>;

export type { TrendingSongsResponse };
