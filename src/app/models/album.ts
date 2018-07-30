export interface AlbumByArtist {
  name: string;
  playcount: number;
  artist: {
    name: string;
    url: string;
  };
  url: string;
  image: {
    url: string;
    size: string;

  };
}
