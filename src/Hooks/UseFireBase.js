import { useEffect, useState } from "react"
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth"
import app from "../firebase.init";
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const useFireBase = () => {
    const [user, setUser] = useState({})

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            setUser(user)
        })
    }, [])

    const handleSignOut = () => {
        signOut(auth)
            .then(() => { })
    }
    const signInWithGoogle = () => {
        signInWithPopup(auth, provider)
            .then(result => {
                const user = result.user
                // setUser(user)
                console.log(user);
            })
            .catch(error => {
                console.error(error);
            })

    }
    return { user, signInWithGoogle, handleSignOut }
}
export default useFireBase;