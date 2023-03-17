import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { func } from "prop-types";
import { 
    getDatabase, 
    ref, 
    runTransaction, 
    get } from "firebase/database";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DB_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt:'select_account',
});
const database = getDatabase(app);

export async function login() {
    return signInWithPopup(auth, provider)
    .then((result) => {
        const user = result.user;
        console.log(user);
        return user;
    })
    .catch(console.error);
}

export async function logout() {
  return signOut(auth).then(()=>null);
}

export function onUserStateChange(callback) {
    onAuthStateChanged(auth, async (user) => {
      const updateUser = user ? await adminUser(user) : null;
      callback(updateUser);
    });
}

async function adminUser(user) {
    return get(ref(database, 'admins'))
    .then((snapshot) => {
        if(snapshot.exists()) {
            const admins = snapshot.val();
            const isAdmin = admins.includes(user.uid);
            return {...user, isAdmin}
        }
        return user;
    })
} 