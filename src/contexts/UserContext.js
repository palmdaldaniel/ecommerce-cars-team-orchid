import { createContext, useState } from "react";

export const UserContext = createContext();

function UserContextProvider(props) {

	const [users, setUsers] = useState([]);
	const [currentUser, setCurrentUser] = useState([]);

	const values = {};
	
	return (
		<UserContext.Provider value={values}>{props.children}</UserContext.Provider>
	);
}

export default UserContextProvider;
