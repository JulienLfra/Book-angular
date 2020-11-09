import { Component } from '@angular/core';
import firebase from 'firebase';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() {

  // Your web app's Firebase configuration
  const  firebaseConfig = {
  produciton: true,
    apiKey: "AIzaSyDjXx0_GwnVvEjRpRgeKm4oyYfMo_2g8HE",
    authDomain: "projetangularlivre.firebaseapp.com",
    databaseURL: "https://projetangularlivre.firebaseio.com",
    projectId: "projetangularlivre",
    storageBucket: "projetangularlivre.appspot.com",
    messagingSenderId: "589797008703",
    appId: "1:589797008703:web:49f4baa72e999095635f8a"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  }
}
