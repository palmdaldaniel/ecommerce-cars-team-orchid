import { useState, useContext, useEffect } from "react";
import { UserContext } from "../contexts/UserContext";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

import styles from './css/UserMenu.module.css'

const UserMenu = () => {
    const { users, currentUser, addUser, verifyUser, logoutUser} = useContext(UserContext);

    const [registerMessage, setRegisterMessage] = useState(null);
    const [feedbackMessage, setFeedbackMessage] = useState(null);
    const [displayRegister, setDisplayRegister] = useState(false);
    const [displayLogin, setDisplayLogin] = useState(true);
    const [showPassword, setShowPassword] = useState(false);
    
    //is used for both login and register
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    function handleUsernameChange (e) {
        setUsername(e.target.value)
    }

    function handlePasswordChange (e) {
        setPassword(e.target.value)
    }

    function togglePassword (){
        if(!showPassword) setShowPassword(true)
        if(showPassword) setShowPassword(false)
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
        const regex = new RegExp("^(?=.{6,})(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#\$%\^&\*])");
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
            setFeedbackMessage("Your password must be at least 6 characters long, contain upper- and lowercase and a special character.")
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
                    <Link to="/history" className={styles.navLink}>Purchase history</Link>
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
                        <div className={styles.inputPasswordWrapper}>
                            <input 
                            type={showPassword ? "text" : "password"} 
                            placeholder="Password" 
                            onChange={handlePasswordChange}
                            required/>
                            <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} className={styles.eyeIcon} onClick={togglePassword}/>
                        </div>
                    </label>
                    <button className={styles.userBtn}>Log in</button>
                </form>
                {feedbackMessage && <p className={styles.loginMsg}>{feedbackMessage}</p>}
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
            <div className={styles.inputPasswordWrapper}>
                <input 
                    type={showPassword ? "text" : "password"} 
                    placeholder="Password" 
                    onChange={handlePasswordChange}
                    required/>
                    <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} className={styles.eyeIcon} onClick={togglePassword}/>
            </div>
            </label>
            <button className={styles.userBtn}>Register</button>
            </form>
            {feedbackMessage && <p className={styles.loginMsg}>{feedbackMessage}</p>}
            <p className={styles.p} onClick={toggleRegister}>Already a user? Click here to login</p>
            </div>
            }
        </div>
    )
}

export default UserMenu;