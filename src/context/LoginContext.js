import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from "firebase/auth"
import { createContext, useEffect, useState } from "react"
import { auth, provider } from "../firebase/config"

export const LoginContext = createContext ()

export const LoginProvider = ({children}) => {

    const [user, setUser] = useState({
        email: null,
        logged: false,
        uis: null
    })

    const googleLogin = () => {
        signInWithPopup(auth, provider)
            .then((result) => {

            })
    }

    const login = (values) => {
        signInWithEmailAndPassword(auth, values.email, values.password)
            .catch((error) => {
                alert("El usuario o password no son correctos, volver a intentarlo")
            })
    }
    const register = (values) => {
        createUserWithEmailAndPassword(auth, values.email, values.password)
            .catch((error) => {
                alert("Revisar los valores ingresados")
            })
    }

    const logout = () => {
        signOut (auth)
            .then(() => {
                setUser({
                    email: null,
                    logged: false,
                    uid: null
                })
            })
    }

    useEffect (() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser({
                    email: user.email,
                    logged: true,
                    uid: user.uid
                })
            } else {
                logout()
            }
        })
    }, [])

    return (
        <LoginContext.Provider value={{
            user,
            register,
            login,
            logout,
            googleLogin
        }}>
            {children}
        </LoginContext.Provider>
    )
}