/** @module db */

import firebase from 'firebase';

/**
 * Конфиг для подключения к firebase
 * @constant
 */
const firebaseConfig = {
    apiKey: "AIzaSyBWF1MeJo9tfyYyaO-GrtSWWEsIY9WJMOw",
    authDomain: "chat-firebase-76ad4.firebaseapp.com",
    databaseURL: "https://chat-firebase-76ad4-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "chat-firebase-76ad4",
    storageBucket: "chat-firebase-76ad4.appspot.com",
    messagingSenderId: "90427389282",
    appId: "1:90427389282:web:6938c4c1db6843f606a83b"
};

firebase.initializeApp(firebaseConfig);

/**
 * Объект - ссылка на БД
 * @constant
 */
export const db = firebase.database();