import * as firebase from 'firebase';

const firebaseConfig = {
	apiKey: 'AIzaSyA6Fnrz0y0dC-xkOgPN-tc8LUYu2VljB5Y',
	authDomain: 'minacasa-b5391.firebaseapp.com',
	databaseURL: 'https://minacasa-b5391.firebaseio.com',
	projectId: 'minacasa-b5391',
	storageBucket: 'minacasa-b5391.appspot.com',
	messagingSenderId: '1072087462812',
	appId: '1:1072087462812:web:61ced4ce5969cb77b64e59'
};

export const fireApp = firebase.initializeApp(firebaseConfig);
