export interface SpotifyTracksPerAlbum {
  items: [{
    name: string;
    track_number: number;
    duration_ms: number;
    preview_url: string;
  }];
}
