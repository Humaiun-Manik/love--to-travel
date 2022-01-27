import { initializeApp } from "firebase/app";
import firebaseConfig from './firebase.confige';

const initializeAuthentication = () => {
    initializeApp(firebaseConfig);
}
export default initializeAuthentication;