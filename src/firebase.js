import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyBcnJg3YHTSz74eMN6-6Fb8KE8U-0OKpFU",
    authDomain: "reactcheck-e2422.firebaseapp.com",
    projectId: "reactcheck-e2422",
    storageBucket: "reactcheck-e2422.appspot.com",
    messagingSenderId: "564287698998",
    appId: "1:564287698998:web:1b93d88751bf0a167ec097",
    measurementId: "G-CF4VEMNK9X",
    databaseURL: "https://reactcheck-e2422-default-rtdb.firebaseio.com"
  };

  export const app = initializeApp(firebaseConfig)