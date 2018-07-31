export interface AlbumByArtist {
  topalbums: {
    moid: string;
    name: string;
    playcount: number;
    url: string;
    album: [{
      artist: {
        name: string;
        mbid: string;
        url: string;
      };
      image: [{
        url: string;
        size: string;
      }],

    }]
  };

}
