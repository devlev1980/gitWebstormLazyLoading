export interface Charts {
  artists: {
    artist: [
      {
        name: string;
        playcounts: string;
        listeners: string;
        mbid: string;
        url: string;
        image: [
          {
            '#text': string,
            size: string
          }
          ]
      }
      ]
  };

}
