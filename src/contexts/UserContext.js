import { createContext, useState, useEffect } from "react";


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

	// Gets information from localStorage on render of page
	useEffect(() =>{
		const data = localStorage.getItem("users")
		if (data !== null) {
			setUsers(JSON.parse(data));
		}
	}, [])


	// Save user info on localStorage and check for current user
	useEffect(() => {
		localStorage.setItem("users", JSON.stringify(users))
		const data = localStorage.getItem("currentUser")
		if (data !== null) {
			const name = JSON.parse(data);
			if (name !== "") {
				setCurrentUser(users.find((u) => u.username === name))
			}
			else{
				setCurrentUser(undefined)
			}
		}
	}, [users])

	// Set current user (logged in) 
	useEffect(() => {
		if (currentUser){
			localStorage.setItem("currentUser", JSON.stringify(currentUser.username))
		}
	}, [currentUser])

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
		localStorage.setItem("currentUser", JSON.stringify(""))
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
