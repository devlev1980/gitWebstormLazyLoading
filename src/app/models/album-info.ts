export interface AlbumInfo {
  album: {
    artist: string;
    name: string;
    image: Image[];
    tracks: Track[];
  };
}

export interface Track {
  track: {
    name: string;
    url: string;
    duration: string;
  };
}

export interface Image {
  image:
    {
      '#text': string;
      size: string
    };
}
