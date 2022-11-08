import React, { createContext, useEffect, useReducer, useState } from 'react';
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
    GoogleAuthProvider,
    signInWithPopup,
    GithubAuthProvider
} from "firebase/auth";
import app from '../../firebase/firebase.config';


export const AuthContext = createContext();
const auth = getAuth(app)


const initialState = { darkMode: true };
const themeReducer = (state, action) => {
    switch (action.type) {
        case 'toggle':
            return { darkMode: !state.darkMode }
        default:
            return state;
    }
};


const UseContext = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();
    const gitProvider = new GithubAuthProvider();
    const [state, dispatch] = useReducer(themeReducer, initialState);

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const singIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)

    }
    const signInWithGoogle = () => {
        return signInWithPopup(auth, googleProvider);
    }
    const signInWithGithub = () => {
        return signInWithPopup(auth, gitProvider);
    }
    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            console.log('Current user Info:', currentUser)
            setLoading(false)
        })
        return () => {
            unsubscribe()
        }
    }, [])


    const authInfo = { state, dispatch, user, createUser, singIn, logOut, signInWithGoogle, signInWithGithub, loading };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UseContext;