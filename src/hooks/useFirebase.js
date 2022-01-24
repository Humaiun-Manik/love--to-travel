import { useEffect, useState } from "react";
import {
    getAuth,
    onAuthStateChanged,
    signInWithPopup,
    GoogleAuthProvider,
    signOut
} from "firebase/auth";
import initializeAuthentication from "../firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {

    const auth = getAuth();

    const [user, setUser] = useState({});
    const [error, setError] = useState('');

    // clear error
    useEffect(() => {
        setTimeout(() => {
            setError('');
        }, 5000);
    }, [error]);

    // observe user state change
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({});
            }
        });
        return () => unsubscribe;
    }, [])

    // google sign in
    const signInWithGoogle = () => {
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                setUser(user);
            }).catch((error) => {
                setError(error.message);
            });
    }

    // signOut 
    const logOut = () => {
        signOut(auth).then(() => {
            setUser({});
        }).catch((error) => {
            setError(error.message);
        });
    }

    return {
        signInWithGoogle,
        user,
        error,
        logOut
    };
};

export default useFirebase;