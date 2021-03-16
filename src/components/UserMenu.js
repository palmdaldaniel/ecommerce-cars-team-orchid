import { useState } from "react";

import styles from './css/UserMenu.module.css'

const UserMenu = () => {
    // placeholder variabels, to be deleted once userContext is connected
    const [userLoggedIn, setUserLoggedin] = useState(false)
    const [userRegister, setUserRegister] = useState(false)

    function handleLogin(e) {
        e.preventDefault();
    }

    return(
        <div>
            {!userLoggedIn &&
            <div>
                <h2 className={styles.h2}>Login</h2>
                <form onSubmit={handleLogin}>
                    <label>
                        <input type="text" placeholder="Username" required/>
                    </label>
                    <label>
                        <input type="password" placeholder="Password" required/>
                    </label>
                    <button>Log in</button>
                </form>
                <p>Not a user? Register here</p>
            </div>
            }

            <form>
                <h2 className={styles.h2}>Register</h2>
                <label>
                    <input type="text" placeholder="Username" required />
                </label>
                <label>
                    <input type="password" placeholder="Password" required />
                </label>
                <button>Register</button>
            </form>

            {userLoggedIn &&
            <div>
                {/* Purchase info*/}
                <button>Log out</button>
            </div>
            }
        </div>
    )
}

export default UserMenu;