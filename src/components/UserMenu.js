import { useState, useContext, useEffect } from "react";
import { UserContext } from "../contexts/UserContext";

import styles from './css/UserMenu.module.css'

const UserMenu = () => {
    const { users, currentUser, addUser, verifyUser, logoutUser} = useContext(UserContext);

    const [feedbackMessage, setFeedbackMessage] = useState(null)
    // const [registerMessage, setRegisterMessage] = useState(null);
    // const [logoutMessage, setLogoutMessage] = useState(null);
    // const [loginFeedback, setLoginFeedback] = useState(null);
    const [displayRegister, setDisplayRegister] = useState(false);
    const [displayLogin, setDisplayLogin] = useState(true)
    //is used both for login and register
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    function toggleRegister () {
        if(!displayRegister){
            setDisplayRegister(true)
            setDisplayLogin(false)
        } else {
            setDisplayRegister(false) 
            setDisplayLogin(true)
        }
    }

    function handleUsernameChange (e) {
        setUsername(e.target.value)
    }

    function handlePasswordChange (e) {
        setPassword(e.target.value)
    }

    function handleLogin (e) {
        e.preventDefault();
        verifyUser(username, password)
        if(!currentUser){
            setFeedbackMessage("Your password or username is incorrect!")
        }
    }

    useEffect(() => {
        if(currentUser){
            setDisplayLogin(false)
            setDisplayRegister(false)
            setFeedbackMessage(null)
        }    
    }, [currentUser])

    function handleRegister (e) {
        e.preventDefault();
        addUser(username, password)
        setDisplayLogin(true)
        setDisplayRegister(false)
        setFeedbackMessage("Your registration was successful!")
    }

    function handleLogout () {
        logoutUser();
        setDisplayLogin(true)

        setFeedbackMessage('You have been logged out!')
        setTimeout(() => {
            setFeedbackMessage(null)
        }, 3000)
    }

    return(
        <div className={styles.userMenuContainer}>
            {currentUser && 
                <div>
                {/* Purchase info*/}
                <button onClick={() => handleLogout()}>Log out</button>
                </div>
            }

            {displayLogin && 
                <div>
                <h2 className={styles.h2}>Login</h2>
                <form onSubmit={handleLogin}>
                    <label>
                        <input 
                        type="text" 
                        placeholder="Username" 
                        onChange={handleUsernameChange}
                        required/>
                    </label>
                    <label>
                        <input 
                        type="text" //can be changed to password to make text hidden
                        placeholder="Password" 
                        onChange={handlePasswordChange}
                        required/>
                    </label>
                    <button className={styles.userBtn}>Log in</button>
                </form>
                {feedbackMessage && <span className={styles.loginMsg}>{feedbackMessage}</span>}
                {/* {registerMessage && <span className={styles.loginMsg}>{registerMessage}</span>}
                {loginFeedback && <span className={styles.loginMsg}>{loginFeedback}</span>}
                {logoutMessage && <span className={styles.logoutMsg}>{logoutMessage}</span>} */}
                <p className={styles.p} onClick={toggleRegister}>Not a user? Click here to register</p>
            </div>
            }

            {displayRegister &&
            <div>
            <form onSubmit={handleRegister}>
            <h2 className={styles.h2}>Register</h2>
            <label>
                <input 
                type="text" 
                placeholder="Username"
                onChange={handleUsernameChange} 
                required />
            </label>
            <label>
                <input 
                type="text" 
                placeholder="Password"
                onChange={handlePasswordChange} 
                required />
            </label>
            <button className={styles.userBtn}>Register</button>
            </form>
            <p className={styles.p} onClick={toggleRegister}>Already a user? Click here to login</p>
            </div>
            }

        </div>
    )
}

export default UserMenu;