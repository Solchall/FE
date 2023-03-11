import { firebaseConfig } from './firebaseConfig';
import { FirebaseApp, initializeApp } from "firebase/app";
import { Analytics, getAnalytics } from "firebase/analytics";
import {
  Auth,
  getAuth,
  GoogleAuthProvider,
  NextOrObserver,
  onAuthStateChanged,
  signInWithRedirect,
  signInWithCredential,
  signInWithPopup,
  signOut,
  Unsubscribe,
  User,
} from "firebase/auth";
export default class FirebaseApi {
  app: FirebaseApp;
  analytics: Analytics;
  auth :  Auth;
  googleAuthProvider : GoogleAuthProvider;

  constructor() {
    this.app = initializeApp(firebaseConfig);
    this.analytics = getAnalytics(this.app);
    this.auth = getAuth(this.app);
    this.googleAuthProvider = new GoogleAuthProvider();
  }

  onAuthStateChanged = (nextOrObserver : NextOrObserver<User>) :  Unsubscribe =>{
    return onAuthStateChanged(this.auth, nextOrObserver);
  }

  // 이슈 발생 코드
  signInWithGoogleRedirect = () => {
    return signInWithPopup(this.auth, this.googleAuthProvider);
  };

  signOut = () => {
    return signOut(this.auth);
  }
};
