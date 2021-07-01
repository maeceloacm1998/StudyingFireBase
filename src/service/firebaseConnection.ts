import firebase from "firebase";

import "firebase/database";
import "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyDQqm_PIc_g0kduSUeMC49Kl-HO70p0eoQ",
  authDomain: "meuap-272ec.firebaseapp.com",
  databaseURL: "https://meuap-272ec-default-rtdb.firebaseio.com",
  projectId: "meuap-272ec",
  storageBucket: "meuap-272ec.appspot.com",
  messagingSenderId: "999629152134",
  appId: "1:999629152134:web:d915fccc39f6cf8833d607",
  measurementId: "G-GGDNH60ZVV",
};

if (!firebase.apps.length) {
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
