import { initializeApp } from 'firebase';

const app = initializeApp({
    apiKey: "AIzaSyDI1ZBoSy6hm4frR8h12EpW41VkFAxE9IQ",
  authDomain: "agenda-a1593.firebaseapp.com",
  databaseURL: "https://agenda-a1593-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "agenda-a1593",
  storageBucket: "agenda-a1593.appspot.com",
  messagingSenderId: "163135916641",
  appId: "1:163135916641:web:ed6268b4c5afe0220b3820",
  measurementId: "G-YQ5KDM4LYC"
});

export const db = app.database();
export const namesref = dm.ref('names');
