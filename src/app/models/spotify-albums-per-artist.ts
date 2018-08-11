export interface SpotifyAlbumsPerArtist {
  items: [
    {
      id: string;
      name: string;
      link: string;
      images:[
        {
          width: number;
          height: number;
          url: string;
        }
        ],
      release_date: string;
      total_tracks: string;
    }
    ];

}
