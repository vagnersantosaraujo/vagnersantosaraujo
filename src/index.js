import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged} from 'firebase/auth';
const firebaseApp = initializeApp({
    apiKey: "AIzaSyBGj6Kjxc9K820Za66ldRcQ1UiB9qfBO34",
    authDomain: "vagnersantosaraujo-dev.firebaseapp.com",
    projectId: "vagnersantosaraujo-dev",
    storageBucket: "vagnersantosaraujo-dev.appspot.com",
    messagingSenderId: "37905385053",
    appId: "1:37905385053:web:9b2d555cfdb2af970f6fb4",
    measurementId: "G-1W34B5BDTQ"
});
const auth = getAuth(firebaseApp);

onAuthStateChanged(auth, user => {
    if(user != null) {
        console.log('Usuário logado: ', user);
    } else {
        console.log('Usuário não logado');
    }
});