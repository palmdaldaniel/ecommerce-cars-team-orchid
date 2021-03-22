import { useState, useContext, useEffect } from "react";
import { UserContext } from "../contexts/UserContext";

import styles from './css/UserMenu.module.css'

const UserMenu = () => {
    const { users, currentUser, addUser, verifyUser, logoutUser} = useContext(UserContext);

    const [registerMessage, setRegisterMessage] = useState(null);
    const [feedbackMessage, setFeedbackMessage] = useState(null);
    const [displayRegister, setDisplayRegister] = useState(false);
    const [displayLogin, setDisplayLogin] = useState(true)
    
    //is used for both login and register
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    function handleUsernameChange (e) {
        setUsername(e.target.value)
    }

    function handlePasswordChange (e) {
        setPassword(e.target.value)
    }

    function toggleRegister () {
        if(!displayRegister){
            setDisplayRegister(true)
            setDisplayLogin(false)
            setFeedbackMessage(null)
        } else {
            setDisplayRegister(false) 
            setDisplayLogin(true)
            setFeedbackMessage(null)
        }
    }

    function handleLogin (e) {
        e.preventDefault();
        verifyUser(username, password)
        if(!currentUser){
            setFeedbackMessage("Your password or username is incorrect!")
        }
        else {
            setDisplayLogin(false)
            setDisplayRegister(false)
        }
    }

    // handles rendering of user page, triggers when currentUsers value is changed to an object
    useEffect(() => {
        if(typeof currentUser === "object"){
            setDisplayLogin(false)
            setDisplayRegister(false)
            setFeedbackMessage(null)
        }    
    }, [currentUser])

    function handleRegister (e) {
        e.preventDefault();
        const regex = new RegExp("^(?=.{8,})(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])");
         //checks if username already exists
		const userExists = users.find(e => e.username === username)
		if(userExists){
            setFeedbackMessage("A user with this username already exists.")
        } else if(regex.test(password)) { 
            addUser(username, password)
            setRegisterMessage("Registration complete!")
            setTimeout(() => {
                setRegisterMessage(null)
            }, 3000)
        } else {
            setFeedbackMessage("Your password must be at least 8 characters long, contain both upper- and lowercase and a number or a special character.")
        }
    }

    function handleLogout () {
        logoutUser();
        setDisplayLogin(true)
        setFeedbackMessage('You have been logged out!')
        setTimeout(() => {
            setFeedbackMessage(null)
        }, 4000)
    }

    return(
        <div className={styles.userMenuContainer}>
            {currentUser && 
                <div>
                    <h2 className={styles.h2}>Logged in as: <span className={styles.username}> {currentUser.username}</span></h2>
                    {registerMessage && <p className={styles.loginMsg}>{registerMessage}</p>}
                    {/* Purchase info*/}
                    <button className={styles.userBtn} onClick={() => handleLogout()}>Log out</button>
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
                type="text" //can be changed to password to make text hidden
                placeholder="Password"
                onChange={handlePasswordChange} 
                required />
            </label>
            <button className={styles.userBtn}>Register</button>
            </form>
            {feedbackMessage && <span className={styles.loginMsg}>{feedbackMessage}</span>}
            <p className={styles.p} onClick={toggleRegister}>Already a user? Click here to login</p>
            </div>
            }
        </div>
    )
}

export default UserMenu;