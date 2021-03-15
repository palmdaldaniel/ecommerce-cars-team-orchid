import { createContext, useState } from "react";

export const UserContext = createContext();

function UserContextProvider(props) {

	const [users, setUsers] = useState([]);
	const [currentUser, setCurrentUser] = useState([]);

	function addUser(username, password) {
		const user = {
			username,
			password,
			history: []
		}

		setUsers(...users, user);
	}
	
	const values = { users, addUser };

	return (
		<UserContext.Provider value={values}>{props.children}</UserContext.Provider>
	);
}

export default UserContextProvider;
