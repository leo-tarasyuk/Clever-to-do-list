import firebase from "firebase/app";
import "firebase/firestore";

export default {
  actions: {
    INIT_FIREBASE: (context, payload) => {
      const firebaseApp = firebase.initializeApp(payload);
      const firestore = firebaseApp.firestore();

      firestore.settings({ timestampsInSnapshots: true });

      return firestore;
    }
  }
};
