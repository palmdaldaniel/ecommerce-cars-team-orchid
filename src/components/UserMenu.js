import { useState, useContext, useEffect } from "react";
import { UserContext } from "../contexts/UserContext";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash, faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";
import styles from "./css/UserMenu.module.css";

const UserMenu = (props) => {
  const { users, currentUser, addUser, verifyUser, logoutUser } = useContext(UserContext);
  const [registerMessage, setRegisterMessage] = useState(null);
  const [feedbackMessage, setFeedbackMessage] = useState(null);
  const [displayLogin, setDisplayLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleUsernameChange(e) {
    setUsername(e.target.value);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  function togglePassword() {
    if (!showPassword) setShowPassword(true);
    if (showPassword) setShowPassword(false);
  }

  function toggleRegister() {
    if (displayLogin) {
      setDisplayLogin(false);
      setFeedbackMessage(null);
      loadLogin();
    } else {
      setDisplayLogin(true);
      setFeedbackMessage(null);
      loadLogin();
    }
  }

  function handleLogin(e) {
    e.preventDefault();
    verifyUser(username, password);
    if (!currentUser) {
      setFeedbackMessage("Your password or username is incorrect!");
    } else {
      setDisplayLogin(false);
    }
  }

  // handles rendering of user page, triggers when currentUsers value is changed to an object
  useEffect(() => {
    if (typeof currentUser === "object") {
      setDisplayLogin(false);
      setFeedbackMessage(null);
    }
  }, [currentUser]);

  function handleRegister(e) {
    e.preventDefault();
    const regex = new RegExp(
      "^(?=.{6,})(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])"
    );
    //checks if username already exists
    const userExists = users.find((user) => user.username === username);
    if (userExists) {
      setFeedbackMessage("A user with this username already exists.");
    } else if (regex.test(password)) {
      addUser(username, password);
      setRegisterMessage("Registration complete!");
      setTimeout(() => {
        setRegisterMessage(null);
      }, 3000);
    } else {
      setFeedbackMessage(
        "Your password must be at least 6 characters long, contain upper- and lowercase and a special character."
      );
    }
  }

  function handleLogout() {
    logoutUser();
    setDisplayLogin(true);
    setFeedbackMessage("You have been logged out!");
    setTimeout(() => {
      setFeedbackMessage(null);
    }, 4000);
  }

  //if user is not logged in:
  // checks if it should toggle register or login page
  function loadLogin () {
    if(displayLogin){
      return (
        <div>
          <h2 className={styles.h2}>Login</h2>
          <form onSubmit={handleLogin}>
            <label>
              <input
                type="text"
                placeholder="Username"
                onChange={handleUsernameChange}
                required
              />
            </label>

            <label>
              <div className={styles.inputPasswordWrapper}>
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  onChange={handlePasswordChange}
                  required
                />
                <FontAwesomeIcon
                  icon={showPassword ? faEyeSlash : faEye}
                  className={styles.eyeIcon}
                  onClick={togglePassword}
                />
              </div>
            </label>
            
            <button className={styles.userBtn}>Log in</button>
          </form>
          {feedbackMessage && (
            <p className={styles.loginMsg}>{feedbackMessage}</p>
          )}
          <p className={styles.p} onClick={toggleRegister}>
            Not a user? Click here to register
          </p>
        </div>
      )
    } else {
      return(
        <div>
          <form onSubmit={handleRegister}>
            <h2 className={styles.h2}>Register</h2>
            <label>
              <input
                type="text"
                placeholder="Username"
                onChange={handleUsernameChange}
                required
              />
            </label>

            <label>
              <div className={styles.inputPasswordWrapper}>
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  onChange={handlePasswordChange}
                  required
                />
                <FontAwesomeIcon
                  icon={showPassword ? faEyeSlash : faEye}
                  className={styles.eyeIcon}
                  onClick={togglePassword}
                />
              </div>
            </label>

            <button className={styles.userBtn}>Register</button>
          </form>
          {feedbackMessage && (
            <p className={styles.loginMsg}>{feedbackMessage}</p>
          )}
          <p className={styles.p} onClick={toggleRegister}>
            Already a user? Click here to login
          </p>
        </div>
      )
    }
  }
  
  return (
    <div className={styles.userMenuContainer}>
      {currentUser ? (
        <div>
          <h2 className={styles.h2}>
            Logged in as:{" "}
            <span className={styles.username}> {currentUser.username}</span>
          </h2>
          {registerMessage && (
            <p className={styles.loginMsg}>{registerMessage}</p>
          )}
          <Link
            to="/history"
            className={styles.navLink}
            onClick={() => props.purchase()}
          >
            Purchase history <FontAwesomeIcon icon={faAngleDoubleRight} className={styles.purchaseArrow} />
          </Link>
          <hr/>
          <button className={styles.userBtn} onClick={() => handleLogout()}>Log out</button>
        </div>
      ) : (
        loadLogin()
      )}
    
    </div>
  );
};

export default UserMenu;