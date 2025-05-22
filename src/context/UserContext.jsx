import { createContext, useContext, useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase.config"
import { toast, Bounce } from 'react-toastify';

const UserContex = createContext()



const UserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(false);

    const PASSWORD_Regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{6,}$/;
    const EMAIL_Regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    // const notify = () => toast.success('Successfult create the account');
    function notify(type, m) {
        if (type === "success") {
            toast.success(m);
        }
        if (type === "error") {
            toast.error(m);
        }
    }

    const addUser = (email, password) => {
        if (email === "" && password === "") {
            notify("error", "Do not allow empty value")
            return
        }
        if (EMAIL_Regex.test(email)) {

            if (PASSWORD_Regex.test(password)) {
                createUserWithEmailAndPassword(auth, email, password)
                    .then((userCredential) => {
                        // Signed up 
                        const user = userCredential.user;
                        notify("success", "Create account")

                    })
                    .catch((error) => {
                        const errorCode = error.code;
                        // const errorMessage = error.message;
                        // console.log(errorMessage);
                        notify("error", errorCode)

                    });
            }else {
                notify("error", "At least 6 chars incl. uppercase, lowercase, number & special.")
            }
            

        }

        else {
            notify("error", "Email don't match")
        }

    }

    const logIn = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            setCurrentUser(user)
            notify("success", "Successfuly login")
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            notify("error", errorCode)
        });
    }


    return (
        <UserContex.Provider value={{ currentUser, setCurrentUser, addUser, logIn }}>
            {children}
        </UserContex.Provider>
    )
}


export default UserProvider
export const useUser = () => { return useContext(UserContex) }

