// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDHbRkdqdGsiTjWRWUV7SFtCFlz57-TRr0",
    authDomain: "selva-ai-project.firebaseapp.com",
    projectId: "selva-ai-project",
    storageBucket: "selva-ai-project.appspot.com",
    messagingSenderId: "112263829250",
    appId: "1:112263829250:web:e99993e0c0bcbd5366141b",
    measurementId: "G-NXS2Y42M21"
  };

// const firebaseConfig = {
//   apiKey: "AIzaSyCkleV_zoOHL1TmIicApbI5hLzY-HZY6QI",
//   authDomain: "selva-ai-journey.firebaseapp.com",
//   projectId: "selva-ai-journey",
//   storageBucket: "selva-ai-journey.appspot.com",
//   messagingSenderId: "408879445648",
//   appId: "1:408879445648:web:7306d76bdcc78814100a15",
//   measurementId: "G-W937RBMF98"
// };

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
