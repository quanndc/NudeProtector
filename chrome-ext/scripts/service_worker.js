// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  collection,
  addDoc,
  getFirestore,
  doc,
  setDoc,
  serverTimestamp 
} from "firebase/firestore";

var id = "";

// const document = window.document;
// const window = window.window;
// Initialize an agent at application startup.

// Analyze the visitor when necessary.

// import FingerprintJS from '@fingerprintjs/fingerprintjs'

// // Initialize an agent at application startup.
// const fpPromise = FingerprintJS.load()

// ;(async () => {
//   // Get the visitor identifier when you need it.
//   const fp = await fpPromise
//   const result = await fp.get()
//   console.log(result.visitorId)
// })()
// import  FingerprintJS  from '@fingerprintjs/fingerprintjs'

// const fpPromise = FingerprintJS.load();

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// function addLib() {
//   const fpPromise = import("https://openfpcdn.io/fingerprintjs/v4").then(
//     (FingerprintJS) => FingerprintJS.load()
//   );

//   // Get the visitor identifier when you need it.
//   fpPromise
//     .then((fp) => fp.get())
//     .then((result) => {
//       // This is the visitor identifier:
//       const visitorId = result.visitorId;
//       console.log(visitorId);
//     });
// }

const firebaseConfig = {
  apiKey: "AIzaSyCyxz9NSjsXFwWGgjiCY0tmzmHwQECWjFY",
  authDomain: "express-af77b.firebaseapp.com",
  projectId: "express-af77b",
  storageBucket: "express-af77b.appspot.com",
  messagingSenderId: "137452661635",
  appId: "1:137452661635:web:fd76101eddb7cd2ba964b6",
};

//get tabId

// console.log(tab);

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
console.log(db);



chrome.runtime.onMessage.addListener(async function (
  request,
  sender,
  sendResponse
) {
  const response = await fetch("http://localhost:8080/");
  const movies = await response.json();
  id = movies["id"];
  // console.log(id);
  // chrome.tabs.query(
  //   {
  //     active: true,
  //     currentWindow: true,
  //   },
  //   function (tabs) {
  //     console.log(tabs);
  //     chrome.scripting.executeScript({
  //       target: { tabId: tabs[0].id, allFrames: true },
  //       function: addBiri,
  //     });
  //   }
  // );

  //   const fp = await fpPromise;
  //   const result = await fp.get();
  //   console.log(result.visitorId);
  // const imagesRef = doc(db, "images", id);
  console.log(id);
  console.log(request.images);
  // addDoc(imagesRef, {
  //   urls: request.images,
  //   time: new Date().getTime().toString(),
  // });
  const docRef = await addDoc(collection(db, "images"), {
    visitorId: id,
    urls: request.images,
    time: serverTimestamp(),
    countCensored: request.countCensored,
    countUncensored: request.countUncensored,
  });
  sendResponse("done");
});
