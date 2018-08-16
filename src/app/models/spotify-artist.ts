export interface SpotifyArtist {
  artists: {
    items: [{
      followers: {
        href: string,
        total: number
      }
      genres: string [];
      id: string;
      name: string;
      popularity: number;
      images: [{
        height: number,
        width: number,
        url: string
      }]

    }]
  };
}
