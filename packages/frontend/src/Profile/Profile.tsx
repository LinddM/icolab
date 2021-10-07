/* eslint-disable */
import './Profile.css';
import detectEthereumProvider from '@metamask/detect-provider'
import jwtDecode from 'jwt-decode';
import React, { useState, useEffect } from 'react';
import Blockies from 'react-blockies';
import axios from 'axios';

import { Auth } from '../types';
// import { Add } from '../Add/Add';

interface Props {
	auth: Auth;
	onLoggedOut: () => void;
}

interface State {
	loading: boolean;
	user?: {
		id: number;
		username: string;
	};
	// username: string;
	tokenName: string;
	tokenAddress: string;
}

interface JwtDecoded {
	payload: {
		id: string;
		publicAddress: string;
	};
}

export const Profile = ({ auth, onLoggedOut }: Props): JSX.Element => {
	const [state, setState] = useState<State>({
		loading: false,
		user: undefined,
		// username: '',
		tokenName: '',
		tokenAddress: ''
	});

	const [loader, showLoader] = useState(false);

	useEffect(() => {
		const { accessToken } = auth;
		const {
			payload: { id },
		} = jwtDecode<JwtDecoded>(accessToken);

		fetch(`${process.env.REACT_APP_BACKEND_URL}/users/${id}`, {
			headers: {
				Authorization: `Bearer ${accessToken}`,
			},
		})
			.then((response) => response.json())
			.then((user) => setState({ ...state, user }))
			.catch(window.alert);
	}, []);

	const handleChange = ({
		target: { value },
	}: React.ChangeEvent<HTMLInputElement>) => {
		setState({ ...state, tokenName: value });
	};

	const { accessToken } = auth;

	const {
		payload: { publicAddress },
	} = jwtDecode<JwtDecoded>(accessToken);

	const { loading, user } = state;

	const username = user && user.username;

	const addToken = () => {
		showLoader(true);
		axios.get("http://localhost:3001")
		.then((response) => {
			console.log(response.data)
			alert(response.data);
			showLoader(false)
		})
		.catch((err) => alert(err))
	}

	return (
		<div className="Profile">
			<div>
				Mi dirección es <pre>{publicAddress}</pre>
			</div>
			<br />
			{
				loader ? 
				<div>Cargando...</div>
				: <button onClick={addToken}>Agregar token</button>
			}
			<p>
				<button onClick={onLoggedOut}>Cerrar sesión</button>
			</p>
		</div>
	);
};
