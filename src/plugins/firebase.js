import firebase from 'firebase/app';
import 'firebase/firestore';

export default () => {
  if (!firebase.apps.length) {
    firebase.initializeApp(process.env.firebaseConfig);
  }

  firebase.firestore();
}
