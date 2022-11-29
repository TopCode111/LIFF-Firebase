// Import stylesheets
import './style.css';
// Firebase App (the core Firebase SDK) is always required
import { initializeApp } from 'firebase/app';

// Add the Firebase products and methods that you want to use
import {} from 'firebase/auth';
import {} from 'firebase/firestore';

import * as firebaseui from 'firebaseui';

// Document elements
const startRsvpButton = document.getElementById('startRsvp');
const guestbookContainer = document.getElementById('guestbook-container');

const form = document.getElementById('leave-message');
const input = document.getElementById('message');
const guestbook = document.getElementById('guestbook');
const numberAttending = document.getElementById('number-attending');
const rsvpYes = document.getElementById('rsvp-yes');
const rsvpNo = document.getElementById('rsvp-no');

let rsvpListener = null;
let guestbookListener = null;

let db, auth;

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDS8Xijtr0CfRImylIlTXj1dmM_XUaySLE',
  authDomain: 'liff-firebase-734d5.firebaseapp.com',
  projectId: 'liff-firebase-734d5',
  storageBucket: 'liff-firebase-734d5.appspot.com',
  messagingSenderId: '796565586620',
  appId: '1:796565586620:web:8bbc3aa062646951f906b9',
  measurementId: 'G-E71X0WPQKD',
};

// Initialize Firebase
initializeApp(firebaseConfig);

async function main() {
  // Add Firebase project configuration object here
  const firebaseConfig = {};

  // initializeApp(firebaseConfig);

  // FirebaseUI config
  const uiConfig = {
    credentialHelper: firebaseui.auth.CredentialHelper.NONE,
    signInOptions: [
      // Email / Password Provider.
      EmailAuthProvider.PROVIDER_ID,
    ],
    callbacks: {
      signInSuccessWithAuthResult: function (authResult, redirectUrl) {
        // Handle sign-in.
        // Return false to avoid redirect.
        return false;
      },
    },
  };

  // const ui = new firebaseui.auth.AuthUI(auth);
}
main();
