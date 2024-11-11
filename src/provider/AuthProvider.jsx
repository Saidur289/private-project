import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase";


const provider = new GoogleAuthProvider()
export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    
    // create reuseable function for create user
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)

    }
    // create sign in function from firebase
    const signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    // onAuthStateChanged(auth, currentUser => {
    //     if(currentUser){
    //         console.log('currently Logged user', currentUser);
    //         setUser(currentUser)

    //     }
    //     else{
    //         setUser(null)
    //     }
    // })
    useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, currentUser => {
        console.log('current user', currentUser);
        setUser(currentUser)
        setLoading(false)
       
    })
    return () => {
        unSubscribe()
    }
    }, [])
    // function for sign out from firebase
    const signOutUser = () => {
        setLoading(true)
      return  signOut(auth)
    }
    // function for sign with google from bring function firebase
    const signInWithGoogle = () => {
        return signInWithPopup(auth, provider)
    }
    const authInfo = {
        user,
        loading,
        createUser,
        signInUser,
        signInWithGoogle,
        signOutUser
    }
    return (
       <AuthContext.Provider value={authInfo}>
        {/* main part is here children */}
          {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;