import * as firebase from 'firebase';

export const loginRequest = (email, password) => {
  return firebase.auth().signInWithEmailAndPassword(email, password);
};

export const registerRequest = (email, password) => {
  return firebase.auth().createUserWithEmailAndPassword(email, password);
};

export const logoutRequest = () => {
  return firebase.auth().signOut();
};

export const sessionRequest = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = firebase.auth().onAuthStateChanged((usr) => {
      unsubscribe();
      resolve(usr);
    }, reject);
  });
};
