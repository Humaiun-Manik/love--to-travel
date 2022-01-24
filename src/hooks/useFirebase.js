import { useEffect, useState } from "react";
import {
    getAuth,
    onAuthStateChanged,
    signInWithPopup,
    GoogleAuthProvider,
    signOut
} from "firebase/auth";
import initializeAuthentication from "../firebase/firebase.init";
import { useNavigate } from "react-router-dom";

initializeAuthentication();

const useFirebase = () => {

    const navigate = useNavigate();
    const auth = getAuth();

    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);

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
            setLoading(false);
        });
        return () => unsubscribe;
    }, [])

    // google sign in
    const signInWithGoogle = (pathname) => {
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                setUser(user);
                navigate(pathname);
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
        logOut,
        loading
    };
};

export default useFirebase;