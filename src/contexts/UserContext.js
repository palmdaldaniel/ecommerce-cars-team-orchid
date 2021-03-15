import { createContext, useState } from "react";

export const UserContext = createContext();

function UserContextProvider(props) {

	const [users, setUsers] = useState([]);
	const [currentUser, setCurrentUser] = useState(undefined);

	function addUser(username, password) {
		const user = {
			username,
			password,
			history: []
		}

		setUsers(...users, user);
	}

	/*	Attempts to to log in user with provided credentials.
	 *	Returns '0' if no user exists with the supplied username,
	 *	'1' if username exists but password is wrong.
	 *	Signs user in and returns '2' if credentials match.
	 */
	function verifyUser(username, password) {
		const user = users.find(u => u.username === username);
		if (!user) return 0; // No such user
		if (user.password !== password) return 1; // Wrong password

		setCurrentUser(user);
		return 2; // User logged in
	}
	
	const values = { users, addUser, verifyUser };

	return (
		<UserContext.Provider value={values}>{props.children}</UserContext.Provider>
	);
}

export default UserContextProvider;
