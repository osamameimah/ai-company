 import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";  
import { getStorage } from "firebase/storage";   

 const firebaseConfig = {
  apiKey: "AIzaSyAYBFuf-rFGqubL6oEtj1An2VPZPsyse4c",
  authDomain: "ai-web-2916e.firebaseapp.com",
  projectId: "ai-web-2916e",
  storageBucket: "ai-web-2916e.firebasestorage.app",
  messagingSenderId: "583827591637",
  appId: "1:583827591637:web:2f65a172740dfc30e52d5c"
};

 const app = initializeApp(firebaseConfig);

 export const db = getFirestore(app);      
export const storage = getStorage(app);    
export default app;

  