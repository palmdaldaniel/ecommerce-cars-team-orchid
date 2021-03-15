import { useState } from "react";

const UserMenu = () => {
    // placeholder variabels, to be deleted once userContext is connected
    const [userLoggedIn, setUserLoggedin] = useState(false)

    function handleLogin(e) {
        e.preventDefault();
    }

    return(
        <div>
            {!userLoggedIn &&
            <div>
                <form onSubmit={handleLogin}>
                    <label>
                        <input type="text" placeholder="Username" />
                    </label>
                    <label>
                        <input type="text" placeholder="Password" />
                    </label>
                    <button>Log in</button>
                </form>
                <p>Not a user? Register here</p>
            </div>
            }

            {/* register user */}

            {userLoggedIn &&
            <div>
            {/* Logged in info*/}
            <p>hej</p>
            </div>
            }
        </div>
    )
}

export default UserMenu;