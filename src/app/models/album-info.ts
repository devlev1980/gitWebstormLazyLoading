export interface AlbumInfo {
  album?: {
    artist: string;
    name: string;
    image: Image[];
    tracks: {
      track: [
        { name: string; duration: string }
        ]
    }
    url: string;
    wiki: {
      content: string;
      published: string;
      summary: string;
    }



  };
}

//
// export interface Track {
//   track: {
//     name: string;
//     url: string;
//     duration: string;
//   };
//
// }

export interface Image {
  image:
    {
      '#text': string;
      size: string
    };
}
