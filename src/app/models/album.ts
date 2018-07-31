export interface AlbumByArtist {
  topalbums: {
    album: [{
      name: string;
      playcount: string;
      artist: {
        name: string;
        mbid: string;
        url: string;
      },
      image: [{
        url: string;
        size: string
      }]
    }];
    mbid: string;
    name: string;
    playcount: string;
    url: string;
  };

}
