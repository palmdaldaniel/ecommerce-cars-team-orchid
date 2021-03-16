import { createContext, useState } from "react";

export const UserContext = createContext();

function UserContextProvider(props) {

	/*	Array of all registered users
	 */
	const [users, setUsers] = useState([]);

	/*	Holds currently logged in user.
	 *	If 'undefined', no user is logged in
	 */
	const [currentUser, setCurrentUser] = useState(undefined);

	/*	Creates a new user with the specified name and password,
	 *	and adds it to 'database' of users.
	 */
	function addUser(username, password) {
		const user = {
			username,
			password,
			history: [],
		}

		setUsers(...users, user);
	}

	/*	Attempts to to log in user with provided credentials.
	 *	Returns 'undefined' if user with that name does not exist,
	 *	'false' if user exists but password is wrong,
	 *	logs in and returns 'true' if credentials match.
	 */
	function verifyUser(username, password) {
		const user = users.find(u => u.username === username);
		if (!user) return undefined; // No such user
		if (user.password !== password) return false; // Wrong password

		setCurrentUser(user);
		return true; // User logged in
	}

	/*	Logs out current user
	 */
	function logoutUser() {
		setCurrentUser(undefined);
	}

	const values = {
		users,
		currentUser,
		addUser,
		verifyUser,
		logoutUser,
	};

	return (
		<UserContext.Provider value={values}>{props.children}</UserContext.Provider>
	);
}

export default UserContextProvider;
