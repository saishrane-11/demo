import { initializeApp } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";
  import { getFirestore } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-firestore.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries
      
  // Your web app's Firebase configuration
  const firebaseConfig = {
      apiKey: "AIzaSyBe_qFxXpc047l_1-6SQzqwBkgfHbU6KAc",
    authDomain: "myfireprowithcrud-a5e0b.firebaseapp.com",
    databaseURL: "https://myfireprowithcrud-a5e0b-default-rtdb.firebaseio.com",
    projectId: "myfireprowithcrud-a5e0b",
    storageBucket: "myfireprowithcrud-a5e0b.appspot.com",
    messagingSenderId: "764933330659",
    appId: "1:764933330659:web:4663b99f936b85c10a97d6"
  };
      
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
