// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  serviceBaseUrl: 'https://jsonplaceholder.typicode.com',
  firebase: {
    apiKey: 'AIzaSyBWrQsYuIaHD0o4zgyHd3ixo5b1NMt-jas',
    authDomain: 'auth-app-6102b.firebaseapp.com',
    databaseURL: 'https://auth-app-6102b.firebaseio.com',
    projectId: 'auth-app-6102b',
    storageBucket: 'auth-app-6102b.appspot.com',
    messagingSenderId: '331616098898'
  },

// lastFmURL: `http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=cher&api_key='${lastFMAPI.APIkey}'&format=json`

};

