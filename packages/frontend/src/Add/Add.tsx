/* eslint-disable */
import './Add.css';

import React, { useEffect, useState } from 'react';

export const Add = (): JSX.Element => {
	// const [state, setState] = useState<State>({});

	useEffect(() => {
		// // Access token is stored in localstorage
		// const ls = window.localStorage.getItem(LS_KEY);
		// const auth = ls && JSON.parse(ls);
		// setState({ auth });
	}, []);

	// const handleLoggedIn = (auth: Auth) => {
	// 	localStorage.setItem(LS_KEY, JSON.stringify(auth));
	// 	setState({ auth });
	// };

	// const handleLoggedOut = () => {
	// 	localStorage.removeItem(LS_KEY);
	// 	setState({ auth: undefined });
	// };

	// const { auth } = state;

	return (
		<div className="App">
			<header className="App-header">
				<h1 className="App-title">
					Agregar token
				</h1>
			</header>
			<div className="App-intro">
				
			</div>
		</div>
	);
};
